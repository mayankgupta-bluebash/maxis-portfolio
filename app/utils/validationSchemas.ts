import { z } from 'zod';

const restrictedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com', 'aol.com', 'icloud.com', 'protonmail.com'];

export const userDetailsSchema = z.object({
  first_name: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'First Name cannot exceed 20 characters')
    .regex(/^[a-zA-Z0-9-]+$/, 'First Name can only contain letters, numbers, and hyphens'),

  middle_name: z
    .string()
    .max(20, 'Middle Name cannot exceed 20 characters')
    .regex(/^[a-zA-Z0-9-]*$/, 'Middle Name can only contain letters, numbers, and hyphens')
    .optional()
    .or(z.literal('')),

  last_name: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Last Name cannot exceed 20 characters')
    .regex(/^[a-zA-Z0-9-]+$/, 'Last Name can only contain letters, numbers, and hyphens'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be 100 characters or less')
    .refine(
      (value) => {
        const domain = value.split('@')[1]?.toLowerCase();
        if (!domain) return false;

        // disallow any domain that *ends with* restricted domains
        return !restrictedDomains.some((restricted) => domain.endsWith(restricted));
      },
      {
        message: 'Please use your business or organization email (no Gmail, Yahoo, etc.)',
      }
    ),

  username: z
    .string()
    .min(1, 'Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be 30 characters or less')
    .regex(/^[a-zA-Z0-9_.-]+$/, 'Username can only contain letters, numbers, hyphens, underscores, and periods')
    .regex(/^(?!\.)[a-zA-Z0-9_.-]+$/, 'Username cannot start with a period'),

  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be 100 characters or less')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    ),

  subdomain: z
    .string()
    .min(1, 'Subdomain is required')
    .min(3, 'Subdomain must be at least 3 characters')
    .max(63, 'Subdomain must be 63 characters or less')
    .regex(/^[a-z0-9-]+$/, 'Subdomain can only contain lowercase letters, numbers, and hyphens')
    .regex(/^(?!-)[a-z0-9-]+(?<!-)$/, 'Subdomain cannot start or end with a hyphen'),

  role: z.enum(['builder', 'consumer']),

  otp: z.string().optional(),
  selectedPlan: z.string().optional(),
});
// OTP Verification Schema
export const otpVerificationSchema = z.object({
  otp: z
    .string()
    .min(6, 'OTP must be 6 digits')
    .max(6, 'OTP must be 6 digits')
    .regex(/^\d{6}$/, 'OTP must contain exactly 6 digits'),
});

// Complete Signup Form Schema
export const signupFormSchema = userDetailsSchema.extend({
  otp: z.string().optional(),
  selectedPlan: z.string().optional(),
});

// TypeScript types derived from schemas
export type UserDetailsFormData = z.infer<typeof userDetailsSchema>;
export type OtpVerificationData = z.infer<typeof otpVerificationSchema>;
export type SignupFormData = z.infer<typeof signupFormSchema>;
