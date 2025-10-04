'use client';

import React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

export type SnackbarState = {
  open: boolean;
  message: string;
  severity: AlertColor;
};

type BaseSnackbarProps = {
  snackbar: SnackbarState;
  onClose: () => void;
  autoHideDuration?: number;
};

const BaseSnackbar: React.FC<BaseSnackbarProps> = ({ snackbar, onClose, autoHideDuration = 3000 }) => {
  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert
        onClose={onClose}
        severity={snackbar.severity}
        sx={{
          backgroundColor: '#F1EEFB',
          color: '#302259',

          fontWeight: 500,
          borderRadius: '8px',
          width: '80%',
        }}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default BaseSnackbar;
