/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';
import { signupApi, transformApiPlans, validateTenant } from './api';
import { SignupFormData, Plan, CreateSubscriptionParams, ContactUsRequest, ContactUsResponse } from './types';
import { changeToSubdomain } from '@/app/utils/domainutils';
import { ApiError } from 'next/dist/server/api-utils';

// Hook to register user
export const useSignupMutation = () => {
  return useMutation({
    mutationFn: async (formData: SignupFormData) => {
      return await signupApi.register(formData);
    },
    onSuccess: (data) => {
      console.log('Signup successful:', data);
      // You can add success handling here (redirect, show toast, etc.)
    },
    onError: (error) => {
      console.error('Signup failed:', error);
      // You can add error handling here (show error toast, etc.)
    },
  });
};

// Hook to verify OTP
export const useContactUsMutation = (options?: UseMutationOptions<ContactUsResponse, unknown, ContactUsRequest>) => {
  return useMutation<ContactUsResponse, unknown, ContactUsRequest>({
    mutationFn: ({ email, first_name, last_name, message, phone }: ContactUsRequest) => signupApi.contactUs(email, first_name, last_name, message, phone),
    onSuccess: (data) => {
      console.log('Contact Us submission successful:', data);
    },
    onError: (error) => {
      console.error('Contact Us submission failed:', error);
    },
    ...options,
  });
};

export const useContactUs = () => {
  return useMutation({
    mutationFn: async ({ email, organizationId, otp }: { email: string; organizationId: string; otp: string }) => {
      return await signupApi.verifyOtp(email, organizationId, otp);
    },
    onSuccess: (data) => {
      console.log('OTP verification successful:', data);
      // You can add success handling here (redirect, show toast, etc.)
    },
    onError: (error) => {
      console.error('OTP verification failed:', error);
      // You can add error handling here (show error toast, etc.)
    },
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: async ({ email, organizationId, otp }: { email: string; organizationId: string; otp: string }) => {
      return await signupApi.verifyOtp(email, organizationId, otp);
    },
    onSuccess: (data) => {
      console.log('OTP verification successful:', data);
      // You can add success handling here (redirect, show toast, etc.)
    },
    onError: (error) => {
      console.error('OTP verification failed:', error);
      // You can add error handling here (show error toast, etc.)
    },
  });
};
export const useCreateSubscriptionMutation = () => {
  return useMutation({
    mutationFn: async ({ organizationId, planId, role, subdomain }: CreateSubscriptionParams) => {
      return await signupApi.createSubscription(organizationId, planId, role, subdomain);
    },

    onSuccess: (data, variables) => {
      console.log('Subscription created successfully:', data);

      if (data?.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/validate-tenant?tenant=${variables.subdomain}`;
      }
    },

    onError: (error: unknown) => {
      console.error('Subscription creation failed:', error);
    },
  });
};

// Hook to resend OTP code
export const useResendCodeMutation = () => {
  return useMutation({
    mutationFn: async (organizationId: string) => {
      return await signupApi.resendCode(organizationId);
    },
    onSuccess: (data) => {
      console.log('Resend code successful:', data);
      // Toast message will be shown via axios interceptor
    },
    onError: (error) => {
      console.error('Resend code failed:', error);
      // You can add error handling here (show error toast, etc.)
    },
  });
};

// Hook to validate field
export const useValidateFieldMutation = () => {
  return useMutation({
    mutationFn: async ({ type, value }: { type: 'email' | 'username' | 'subdomain'; value: string }) => {
      return await signupApi.validateField(type, value);
    },
    onSuccess: (data) => {
      console.log('Field validation successful:', data);
    },
    onError: (error) => {
      console.error('Field validation failed:', error);
    },
  });
};

// Hook to fetch plans
export const usePlansQuery = (role: string, interval: 'month' | 'year' = 'year', enabled: boolean = false) => {
  return useQuery({
    queryKey: ['plans', role, interval],
    queryFn: async (): Promise<Plan[]> => {
      const response = await signupApi.getPlans(role, interval);

      // Only return plans if we have data
      if (response.data && response.data.length > 0) {
        return transformApiPlans(response.data, interval);
      } else {
        // Return empty array if no plans from API
        console.warn('API returned empty plans data');
        return [];
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: enabled && !!role, // Only fetch when enabled and role is available
  });
};

export function useValidateTenant() {
  return useMutation({
    mutationFn: (subdomain: string) => validateTenant(subdomain),
    onSuccess: (data: any, subdomain: string) => {
      if (data?.data?.success) {
        changeToSubdomain(subdomain);
      }
    },
    onError: (error: any) => {
      console.error('Tenant validation failed:', error);
      const errorMessage = error?.response?.data?.error || 'Organization not found';
      window.dispatchEvent(
        new CustomEvent('show-snackbar', {
          detail: {
            message: errorMessage,
            severity: 'error',
          },
        })
      );
    },
  });
}
