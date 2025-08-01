'use client';
import { Box, Modal, Typography, TextField, Button } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface EmailVerificationModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  email?: string;
  organizationId?: string | null;
  verifyOtpMutation?: {
    mutateAsync: (params: { email: string; organizationId: string; otp: string }) => Promise<unknown>;
  };
}

export default function EmailVerificationModal({
  isOpen,
  handleClose,
  onPrevious,
  onNext,
  email = 'michael23@gmail.com',
  organizationId,
  verifyOtpMutation,
}: EmailVerificationModalProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6 digits
  const [timeLeft, setTimeLeft] = useState(54);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { setValue, watch } = useFormContext();
  const formEmail = watch('email');

  // Countdown timer
  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen, timeLeft]);

  // Reset timer when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeLeft(54);
      setOtp(['', '', '', '', '', '']); // 6 digits
    }
  }, [isOpen]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Update form with OTP
    const otpString = newOtp.join('');
    setValue('otp', otpString);

    // Auto-focus next input
    if (value && index < 5) {
      // 6 digits (0-5)
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    setTimeLeft(54);
    setOtp(['', '', '', '', '', '']); // 6 digits
    setValue('otp', '');
    // Add resend logic here
  };

  const handleVerify = async () => {
    const otpString = otp.join('');
    if (otpString.length === 6 && organizationId && verifyOtpMutation) {
      try {
        setValue('otp', otpString);

        // Call the verify OTP API
        await verifyOtpMutation.mutateAsync({
          email: displayEmail,
          organizationId,
          otp: otpString,
        });

        onNext();
      } catch (error) {
        console.error('OTP verification failed:', error);
      }
    } else if (otpString.length === 6) {
      // Fallback if no API integration
      setValue('otp', otpString);
      onNext();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}s`;
  };

  const displayEmail = formEmail || email;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='email-verification-title'
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          width: { xs: '90vw', md: '1120px' },
          maxHeight: '90vh',
          bgcolor: '#080411',
          border: '1px solid #8F75DD',
          borderRadius: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
          overflow: 'hidden',
        }}>
        {/* Background Gradient Effects */}
        <Box
          sx={{
            position: 'absolute',
            width: '678px',
            height: '390px',
            borderRadius: '592px',
            opacity: 0.75,
            background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
            filter: 'blur(100px)',
            left: '271px',
            top: '-139px',
            zIndex: 0,
          }}
        />

        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            padding: '20px 24px',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(16.5px)',
            position: 'relative',
            zIndex: 1,
          }}>
          <Typography
            id='email-verification-title'
            sx={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '36px',
            }}>
            Email Verification
          </Typography>
          <Box
            onClick={handleClose}
            sx={{
              width: '24px',
              height: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18 6L6 18M6 6L18 18'
                stroke='#FFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Box>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            padding: '40px',
            overflow: 'auto',
            position: 'relative',
            zIndex: 1,
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              maxWidth: '500px',
              margin: '0 auto',
            }}>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '32px',
                fontWeight: 500,
                textAlign: 'center',
                mb: 2,
              }}>
              Verify your email
            </Typography>
            <Typography
              sx={{
                color: '#999',
                fontSize: '16px',
                textAlign: 'center',
                mb: 4,
              }}>
              We&apos;ve sent a verification code to <strong>{displayEmail}</strong>
            </Typography>

            {/* OTP Input */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  inputRef={(el) => (otpRefs.current[index] = el)}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: 'center', fontSize: '24px', fontWeight: 'bold' },
                  }}
                  sx={{
                    width: '60px',
                    '& .MuiInputBase-root': {
                      height: '60px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.10)',
                      borderRadius: '8px',
                      '& fieldset': { border: 'none' },
                      '& input': {
                        color: '#FFF',
                        textAlign: 'center',
                      },
                    },
                  }}
                />
              ))}
            </Box>

            {/* Timer and Resend */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 4 }}>
              <Typography sx={{ color: '#999', fontSize: '14px' }}>{timeLeft > 0 ? `Resend code in ${formatTime(timeLeft)}` : 'Code expired'}</Typography>
              <Button
                onClick={handleResendCode}
                disabled={timeLeft > 0}
                sx={{
                  color: '#8F75DD',
                  textTransform: 'none',
                  '&:disabled': {
                    color: '#666',
                  },
                }}>
                Resend Code
              </Button>
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', width: '100%' }}>
              <Button
                onClick={onPrevious}
                variant='outlined'
                sx={{
                  borderColor: '#8F75DD',
                  color: '#8F75DD',
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  fontWeight: 500,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#7A5FD9',
                    backgroundColor: 'rgba(143, 117, 221, 0.1)',
                  },
                }}>
                Previous
              </Button>
              <Button
                onClick={handleVerify}
                disabled={otp.join('').length !== 6}
                variant='contained'
                sx={{
                  backgroundColor: '#8F75DD',
                  color: '#FFF',
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  fontWeight: 500,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#7A5FD9',
                  },
                  '&:disabled': {
                    backgroundColor: '#4A4A4A',
                    color: '#999',
                  },
                }}>
                Verify
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
