'use client';
import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import ChooseRoleModal from './ChooseRoleModal';
import UserDetailsModal from './UserDetailsModal';
import EmailVerificationModal from './EmailVerificationModal';
import OtpSuccessModal from './OtpSuccessModal';
import PlanSelectionModal from './PlanSelectionModal';
import { useSignupMutation, useVerifyOtpMutation, usePlansQuery, useCreateSubscriptionMutation, useResendCodeMutation } from '@/app/api/signup/hooks';
import { SignupResponse } from '@/app/api/signup/types';
import { getModalStateFromUrl, clearModalStateFromUrl } from '@/app/utils/urlParams';
import { signupFormSchema, SignupFormData as ZodSignupFormData } from '@/app/utils/validationSchemas';

// Modal flow steps
type ModalStep = 'chooseRole' | 'userDetails' | 'emailVerification' | 'otpSuccess' | 'planSelection' | null;
type UserRole = 'builder' | 'consumer';

// Use Zod schema type
type FormData = ZodSignupFormData;

interface ModalFlowContextType {
  open: (startStep?: ModalStep) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  isOpen: boolean;
  step: ModalStep;
  selectedRole: UserRole;
  setSelectedRole: (role: UserRole) => void;
  submitForm: () => Promise<SignupResponse>;
  isSubmitting: boolean;
  organizationId: string | null;
  setOrganizationId: (id: string) => void;
}

const ModalFlowContext = createContext<ModalFlowContextType | undefined>(undefined);

const ModalFlowProviderInner = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<ModalStep | null>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>('builder');
  const [organizationId, setOrganizationId] = useState<string | null>(null);
  const isOpen = step !== null;

  // Use the signup mutation
  const signupMutation = useSignupMutation();
  const verifyOtpMutation = useVerifyOtpMutation();
  const createSubscriptionMutation = useCreateSubscriptionMutation();
  const resendCodeMutation = useResendCodeMutation();
  const { data: plans, isLoading: plansLoading, error: plansError } = usePlansQuery(selectedRole, step === 'planSelection');

  // Initialize react-hook-form with Zod validation
  const methods = useForm<FormData>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange', // Enable real-time validation
    defaultValues: {
      role: 'builder',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      otp: '',
      selectedPlan: '',
      subdomain: '',
    },
  });

  // Handle URL parameters to restore modal state
  useEffect(() => {
    const urlParams = getModalStateFromUrl();

    if (urlParams.modal && urlParams.role && urlParams.orgId) {
      // Restore modal state from URL parameters
      setSelectedRole(urlParams.role);
      setOrganizationId(urlParams.orgId);
      setStep(urlParams.modal as ModalStep);

      // Clear URL parameters after restoring state
      clearModalStateFromUrl();
    }
  }, [setSelectedRole, setOrganizationId]);

  const open = useCallback((startStep: ModalStep = 'chooseRole') => setStep(startStep), []);
  const close = useCallback(() => setStep(null), []);

  const next = useCallback(() => {
    setStep((prev) => {
      if (prev === 'chooseRole') return 'userDetails';
      if (prev === 'userDetails') return 'emailVerification';
      if (prev === 'emailVerification') return 'otpSuccess';
      if (prev === 'otpSuccess') return 'planSelection';
      return null;
    });
  }, []);

  const prev = useCallback(() => {
    setStep((prev) => {
      if (prev === 'planSelection') return 'otpSuccess';
      if (prev === 'otpSuccess') return 'emailVerification';
      if (prev === 'emailVerification') return 'userDetails';
      if (prev === 'userDetails') return 'chooseRole';
      return null;
    });
  }, []);

  const handleSetSelectedRole = useCallback(
    (role: UserRole) => {
      setSelectedRole(role);
      methods.setValue('role', role);
    },
    [methods]
  );

  const submitForm = useCallback(async () => {
    const formData = methods.getValues();
    debugger;
    if (!formData.subdomain) {
      formData.subdomain = formData.username.toLowerCase();
    }

    // Ensure middleName is a string (not undefined)
    const submitData = {
      ...formData,
      middleName: formData.middleName || '',
    };

    console.log('Submitting form data:', submitData);

    const response = await signupMutation.mutateAsync(submitData);

    // Store the organization ID for OTP verification
    if (response.data?.id) {
      setOrganizationId(response.data.id);
    }

    // Return the response so calling function can handle success/failure
    return response;
  }, [methods, signupMutation, setOrganizationId]);

  return (
    <ModalFlowContext.Provider
      value={{
        open,
        close,
        next,
        prev,
        isOpen,
        step,
        selectedRole,
        setSelectedRole: handleSetSelectedRole,
        submitForm,
        isSubmitting: signupMutation.isPending,
        organizationId,
        setOrganizationId,
      }}>
      <FormProvider {...methods}>
        {children}
        <ChooseRoleModal
          isOpen={step === 'chooseRole'}
          handleClose={close}
          onNext={() => setStep('userDetails')}
          onRoleSelect={handleSetSelectedRole}
        />
        <UserDetailsModal
          isOpen={step === 'userDetails'}
          handleClose={close}
          onPrevious={() => setStep('chooseRole')}
          onNext={async () => {
            try {
              // First submit the form to get organization ID
              await submitForm();
              // Only proceed to next step if signup was successful
              setStep('emailVerification');
            } catch (error) {
              // Don't proceed if signup failed
              console.error('Signup failed, staying on current step:', error);
            }
          }}
          isSubmitting={signupMutation.isPending}
        />
        <EmailVerificationModal
          isOpen={step === 'emailVerification'}
          handleClose={close}
          onPrevious={() => setStep('userDetails')}
          onNext={() => setStep('otpSuccess')}
          organizationId={organizationId}
          verifyOtpMutation={verifyOtpMutation}
          resendCodeMutation={resendCodeMutation}
          email={methods.watch('email')}
        />
        <OtpSuccessModal
          isOpen={step === 'otpSuccess'}
          handleClose={close}
          onComplete={() => setStep('planSelection')}
        />
        <PlanSelectionModal
          open={step === 'planSelection'}
          onClose={close}
          onBack={() => setStep('userDetails')}
          role={selectedRole}
          onSubmit={submitForm}
          isSubmitting={signupMutation.isPending}
          plans={plans}
          plansLoading={plansLoading}
          plansError={plansError}
          organizationId={organizationId}
          subdomain={methods.watch('subdomain')}
          createSubscriptionMutation={createSubscriptionMutation}
        />
      </FormProvider>
      <Toaster position='top-right' />
    </ModalFlowContext.Provider>
  );
};

export const ModalFlowProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ModalFlowProviderInner>{children}</ModalFlowProviderInner>
    </QueryClientProvider>
  );
};

export function useModalFlow() {
  const ctx = useContext(ModalFlowContext);
  if (!ctx) throw new Error('useModalFlow must be used within a ModalFlowProvider');
  return ctx;
}
