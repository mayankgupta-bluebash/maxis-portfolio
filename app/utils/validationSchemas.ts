import { z } from 'zod';

// User Details Form Schema
export const userDetailsSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(20, 'First name must be 20 characters or less')
    .regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters and spaces'),

  middleName: z
    .string()
    .max(20, 'Middle name must be 20 characters or less')
    .regex(/^[a-zA-Z\s]*$/, 'Middle name can only contain letters and spaces')
    .optional(),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(20, 'Last name must be 20 characters or less')
    .regex(/^[a-zA-Z\s]+$/, 'Last name can only contain letters and spaces'),

  email: z.string().min(1, 'Email is required').email('Please enter a valid email address').max(100, 'Email must be 100 characters or less'),

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
