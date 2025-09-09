import api from '@/app/utils/api';
import {
  SignupRequest,
  SignupResponse,
  SignupFormData,
  VerifyOtpRequest,
  VerifyOtpResponse,
  PlansResponse,
  ApiPlan,
  Plan,
  SubscriptionRequest,
  SubscriptionResponse,
  ResendCodeRequest,
  ResendCodeResponse,
  ValidationResponse,
} from './types';
import axios from 'axios';

// API Functions
export const signupApi = {
  // Register user
  register: async (formData: SignupFormData): Promise<SignupResponse> => {
    // Transform form data to API request format
    const requestData: SignupRequest = {
      organization: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.username,
        email: formData.email,
        subdomain: formData.subdomain,
        role: formData.role,
        password: formData.password,
      },
    };

    const response = await api.post<SignupResponse>('/public/sign-up', requestData);
    return response.data;
  },

  // Verify OTP
  verifyOtp: async (email: string, organizationId: string, otp: string): Promise<VerifyOtpResponse> => {
    const requestData: VerifyOtpRequest = {
      email,
      organization_id: organizationId,
      otp,
    };

    const response = await api.post<VerifyOtpResponse>('/public/verify', requestData);
    return response.data;
  },

  // Get plans
  getPlans: async (role: string, interval: 'month' | 'year' = 'year'): Promise<PlansResponse> => {
    const response = await api.get<PlansResponse>(`/public/plans?role=${role}&interval=${interval}`);
    return response.data;
  },

  // Create subscription
  createSubscription: async (organizationId: string, planId: string, role: string, subdomain: string): Promise<SubscriptionResponse> => {
    // Create URLs with query parameters to restore modal state
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_BASE_URL;
    const cancelUrl = `${baseUrl}/?modal=planSelection&role=${role}&orgId=${organizationId}`;
    const successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/validate-tenant?tenant=${subdomain}`;

    const requestData: SubscriptionRequest = {
      organization_id: organizationId,
      plan_id: planId,
      cancel_url: cancelUrl,
      success_url: successUrl,
    };

    console.log('Subscription API request:', requestData);

    const response = await api.post<SubscriptionResponse>('/subscriptions', requestData);
    return response.data;
  },

  // Resend OTP code
  resendCode: async (organizationId: string): Promise<ResendCodeResponse> => {
    const requestData: ResendCodeRequest = {
      organization_id: organizationId,
    };

    console.log('Resend code API request:', requestData);

    const response = await api.post<ResendCodeResponse>('/public/resend-code', requestData);
    return response.data;
  },

  // Validate field
  validateField: async (type: 'email' | 'username' | 'subdomain', value: string): Promise<ValidationResponse> => {
    const requestData = {
      type,
      value,
    };

    const response = await api.post<ValidationResponse>('/public/validate', requestData);
    return response.data;
  },
};

// Utility function to transform API plans to UI format
export const transformApiPlans = (apiPlans: ApiPlan[], interval: 'month' | 'year' = 'year'): Plan[] => {
  return apiPlans.map((apiPlan) => ({
    id: apiPlan.id,
    name: apiPlan.plan_type,
    price: apiPlan.is_free ? '$0' : apiPlan.plan_type === 'Enterprise' ? 'Custom' : `$${apiPlan.plan_pricing}`,
    period: interval === 'month' ? '/month' : '/year',
    description: getPlanDescription(apiPlan.plan_type),
    acuCredits: apiPlan.plan_type === 'Enterprise' ? 'Unlimited' : apiPlan.acu_credits_limit.toString(),
    users: apiPlan.plan_type === 'Enterprise' ? 'Unlimited' : apiPlan.users_limit.toString(),
    buttonText: apiPlan.plan_type === 'Enterprise' ? 'Contact Sales' : 'Choose Plan',
    buttonVariant: apiPlan.plan_type === 'Starter' ? 'contained' : 'outlined',
    featured: apiPlan.plan_type === 'Starter',
    gradient: apiPlan.plan_type === 'Starter',
  }));
};

// Helper function to get plan description
export const getPlanDescription = (planType: string): string => {
  switch (planType) {
    case 'Free':
      return 'Beginners';
    case 'Individual':
      return 'Personal Use';
    case 'Starter':
      return 'Small Business';
    case 'Pro':
      return 'Growing Business';
    case 'Enterprise':
      return 'Large Organizations';
    default:
      return 'Professional';
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function validateTenant(subdomain: string): Promise<any> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1';

  const client = axios.create({
    baseURL: baseUrl,
  });

  return await client.post(`/public/validate`, { subdomain });
}
