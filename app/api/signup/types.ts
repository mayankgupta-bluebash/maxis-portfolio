// API Request Types
export interface SignupRequest {
  organization: {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    subdomain: string;
    role: 'builder' | 'consumer';
    password: string;
  };
}

// API Response Types
export interface SignupResponse {
  data: {
    id: string;
    name: string;
    subdomain: string;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    verified: boolean;
    username: string;
  };
  meta: {
    message: string;
  };
}

export interface ApiPlan {
  id: string;
  plan_type: string;
  plan_pricing: string;
  is_free: boolean;
  is_paid: boolean;
  users_limit: number;
  acu_credits_limit: number;
}

export interface PlansResponse {
  data: ApiPlan[];
  meta: {
    message: string | null;
    pagination: {
      count: number;
      items: number;
      from: number;
      to: number;
      first: number;
      prev: number | null;
      next: number | null;
      last: number;
      pages: number;
    };
  };
}

export interface VerifyOtpRequest {
  email: string;
  organization_id: string;
  otp: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
    verified: boolean;
  };
  error?: string;
}

// UI Plan interface
export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  acuCredits: string;
  users: string;
  buttonText: string;
  buttonVariant: 'outlined' | 'contained';
  featured?: boolean;
  gradient?: boolean;
}

// Form Data Types (for internal use)
export interface SignupFormData {
  role: 'builder' | 'consumer';
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  otp: string;
  selectedPlan: string;
  subdomain: string;
}

// Subscription Types
export interface SubscriptionRequest {
  organization_id: string;
  plan_id: string;
  cancel_url: string;
  success_url: string;
}

export interface SubscriptionResponse {
  checkout_url: string;
}

// Resend Code Types
export interface ResendCodeRequest {
  organization_id: string;
}

export interface ResendCodeResponse {
  success: boolean;
  message: string;
  data?: {
    organization_id: string;
  };
  error?: string;
}
