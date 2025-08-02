import { useMutation, useQuery } from '@tanstack/react-query';
import { signupApi, transformApiPlans } from './api';
import { SignupFormData, Plan } from './types';

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

// Hook to create subscription
export const useCreateSubscriptionMutation = () => {
  return useMutation({
    mutationFn: async ({ organizationId, planId, role }: { organizationId: string; planId: string; role: string }) => {
      return await signupApi.createSubscription(organizationId, planId, role);
    },
    onSuccess: (data) => {
      console.log('Subscription created successfully:', data);
      // Open checkout URL on same page
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      }
    },
    onError: (error) => {
      console.error('Subscription creation failed:', error);
      // You can add error handling here (show error toast, etc.)
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

// Hook to fetch plans
export const usePlansQuery = (role: string, enabled: boolean = false) => {
  return useQuery({
    queryKey: ['plans', role],
    queryFn: async (): Promise<Plan[]> => {
      const response = await signupApi.getPlans(role);

      // Only return plans if we have data
      if (response.data && response.data.length > 0) {
        return transformApiPlans(response.data);
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
