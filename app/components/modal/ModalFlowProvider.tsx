'use client';
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import ChooseRoleModal from './ChooseRoleModal';
import UserDetailsModal from './UserDetailsModal';
import EmailVerificationModal from './EmailVerificationModal';
import PlanSelectionModal from './PlanSelectionModal';

// Modal flow steps
type ModalStep = 'chooseRole' | 'userDetails' | 'emailVerification' | 'planSelection' | null;
type UserRole = 'builder' | 'consumer'; // Add type for user role

interface ModalFlowContextType {
  open: (startStep?: ModalStep) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  isOpen: boolean;
  step: ModalStep;
  selectedRole: UserRole; // Add selectedRole to context
  setSelectedRole: (role: UserRole) => void; // Add setter for role
}

const ModalFlowContext = createContext<ModalFlowContextType | undefined>(undefined);

export const ModalFlowProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<ModalStep>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>('builder'); // Track selected role
  const isOpen = step !== null;

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

  const handleSetSelectedRole = useCallback((role: UserRole) => {
    setSelectedRole(role);
  }, []);

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
      }}>
      {children}
      <ChooseRoleModal
        isOpen={step === 'chooseRole'}
        handleClose={close}
        onNext={() => setStep('userDetails')}
        onRoleSelect={handleSetSelectedRole} // Pass role selection handler
      />
      <UserDetailsModal
        isOpen={step === 'userDetails'}
        handleClose={close}
        onPrevious={() => setStep('chooseRole')}
        onNext={() => setStep('emailVerification')}
      />
      <EmailVerificationModal
        isOpen={step === 'emailVerification'}
        handleClose={close}
        onPrevious={() => setStep('userDetails')}
        onNext={() => setStep('planSelection')}
      />
      <PlanSelectionModal
        open={step === 'planSelection'}
        onClose={close}
        onBack={() => setStep('emailVerification')}
        role={selectedRole} // Pass selected role to PlanSelectionModal
      />
    </ModalFlowContext.Provider>
  );
};

export function useModalFlow() {
  const ctx = useContext(ModalFlowContext);
  if (!ctx) throw new Error('useModalFlow must be used within a ModalFlowProvider');
  return ctx;
}
