'use client';
import React, { useEffect } from 'react';
import { Modal, Box, Typography, CircularProgress } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface OtpSuccessModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

export default function OtpSuccessModal({ isOpen, onComplete }: OtpSuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto-close after 3 seconds
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onComplete]);

  return (
    <Modal
      open={isOpen}
      aria-labelledby='otp-success-modal-title'
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          width: { xs: '90vw', md: '500px' },
          bgcolor: '#080411',
          border: '1px solid #8F75DD',
          borderRadius: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
          overflow: 'hidden',
          p: 4,
        }}>
        {/* Background Gradient Effects */}
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '200px',
            borderRadius: '300px',
            opacity: 0.75,
            background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
            filter: 'blur(100px)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            position: 'relative',
            zIndex: 1,
          }}>
          <CheckCircle
            sx={{
              fontSize: '64px',
              color: '#4CAF50',
            }}
          />

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '28px',
              fontWeight: 600,
              textAlign: 'center',
            }}>
            Email Verified Successfully!
          </Typography>

          <Typography
            sx={{
              color: '#999',
              fontSize: '16px',
              textAlign: 'center',
              lineHeight: 1.5,
            }}>
            Your email has been verified. Redirecting to plan selection...
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <CircularProgress
              size={20}
              sx={{ color: '#8F75DD' }}
            />
            <Typography sx={{ color: '#8F75DD', fontSize: '14px' }}>Loading plans...</Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
