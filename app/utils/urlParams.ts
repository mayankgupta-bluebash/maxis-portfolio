// Utility functions to handle URL parameters for modal state restoration

export interface ModalStateParams {
  modal?: string;
  role?: 'builder' | 'consumer';
  orgId?: string;
}

export const getModalStateFromUrl = (): ModalStateParams => {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  return {
    modal: urlParams.get('modal') || undefined,
    role: (urlParams.get('role') as 'builder' | 'consumer') || undefined,
    orgId: urlParams.get('orgId') || undefined,
  };
};

export const clearModalStateFromUrl = () => {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  url.searchParams.delete('modal');
  url.searchParams.delete('role');
  url.searchParams.delete('orgId');

  // Update URL without page reload
  window.history.replaceState({}, '', url.toString());
};

export const setModalStateInUrl = (params: ModalStateParams) => {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  if (params.modal) url.searchParams.set('modal', params.modal);
  if (params.role) url.searchParams.set('role', params.role);
  if (params.orgId) url.searchParams.set('orgId', params.orgId);

  // Update URL without page reload
  window.history.replaceState({}, '', url.toString());
};
