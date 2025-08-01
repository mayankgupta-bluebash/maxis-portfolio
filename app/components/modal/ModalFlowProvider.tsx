'use client';
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import ChooseRoleModal from './ChooseRoleModal';
import UserDetailsModal from './UserDetailsModal';
import EmailVerificationModal from './EmailVerificationModal';
import PlanSelectionModal from './PlanSelectionModal';
import { useSignupMutation, useVerifyOtpMutation, usePlansQuery, useCreateSubscriptionMutation } from '@/app/api/signup/hooks';
import { SignupFormData, SignupResponse } from '@/app/api/signup/types';

// Modal flow steps
type ModalStep = 'chooseRole' | 'userDetails' | 'emailVerification' | 'planSelection' | null;
type UserRole = 'builder' | 'consumer';

// Use SignupFormData directly
type FormData = SignupFormData;

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
  const { data: plans, isLoading: plansLoading, error: plansError } = usePlansQuery();

  // Initialize react-hook-form
  const methods = useForm<FormData>({
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

  const open = useCallback((startStep: ModalStep = 'chooseRole') => setStep(startStep), []);
  const close = useCallback(() => setStep(null), []);

  const next = useCallback(() => {
    setStep((prev) => {
      if (prev === 'chooseRole') return 'userDetails';
      if (prev === 'userDetails') return 'emailVerification';
      if (prev === 'emailVerification') return 'planSelection';
      return null;
    });
  }, []);

  const prev = useCallback(() => {
    setStep((prev) => {
      if (prev === 'planSelection') return 'emailVerification';
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

    if (!formData.subdomain) {
      formData.subdomain = formData.username.toLowerCase();
    }

    console.log('Submitting form data:', formData);

    const response = await signupMutation.mutateAsync(formData);

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
          onNext={() => setStep('planSelection')}
          organizationId={organizationId}
          verifyOtpMutation={verifyOtpMutation}
          email={methods.watch('email')}
        />
        <PlanSelectionModal
          open={step === 'planSelection'}
          onClose={close}
          onBack={() => setStep('emailVerification')}
          role={selectedRole}
          onSubmit={submitForm}
          isSubmitting={signupMutation.isPending}
          plans={plans}
          plansLoading={plansLoading}
          plansError={plansError}
          organizationId={organizationId}
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
