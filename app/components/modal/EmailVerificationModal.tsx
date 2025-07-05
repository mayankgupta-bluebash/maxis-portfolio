import { Box, Modal, Typography } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

interface EmailVerificationModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  email?: string;
}

export default function EmailVerificationModal({ isOpen, handleClose, onPrevious, onNext, email = 'michael23@gmail.com' }: EmailVerificationModalProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(54);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

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
      setOtp(['', '', '', '']);
    }
  }, [isOpen]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
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
    setOtp(['', '', '', '']);
    // Add resend logic here
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}s`;
  };

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
        <Box
          sx={{
            position: 'absolute',
            width: '678px',
            height: '96px',
            borderRadius: '592px',
            opacity: 0.75,
            background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
            filter: 'blur(100px)',
            left: '322px',
            top: '-14px',
            zIndex: 0,
          }}
        />

        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
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
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1.39994 13.6537L0.346191 12.5999L5.94619 6.99994L0.346191 1.39994L1.39994 0.346191L6.99994 5.94619L12.5999 0.346191L13.6537 1.39994L8.05369 6.99994L13.6537 12.5999L12.5999 13.6537L6.99994 8.05369L1.39994 13.6537Z'
                fill='white'
              />
            </svg>
          </Box>
        </Box>

        {/* Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '-2px',
            flex: 1,
            position: 'relative',
            zIndex: 1,
            overflow: 'auto',
            minHeight: 0,
          }}>
          <Box
            sx={{
              display: 'flex',
              padding: '0px 24px',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: '40px', md: '110px' },
              width: '100%',
            }}>
            {/* Main Content */}
            <Box
              sx={{
                display: 'flex',
                width: { xs: '100%', md: '1148px' },
                padding: { xs: '24px', md: '48px' },
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: '32px', md: '64px' },
                borderRadius: '8px',
                border: '1px solid #A18BE3',
                background: 'rgba(37, 26, 73, 0.50)',
                boxShadow: '0px 10px 15px -3px rgba(0, 41, 41, 0.08), 0px 4px 6px -4px rgba(0, 41, 41, 0.08)',
              }}>
              {/* Text Content */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}>
                  <Typography
                    sx={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: '36px',
                    }}>
                    Please enter the One-Time Password to verify your account
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '20px',
                    }}>
                    A One-Time Password has been sent to{' '}
                    <Box
                      component='span'
                      sx={{ color: '#8F75DD' }}>
                      {email}
                    </Box>
                  </Typography>
                </Box>

                {/* OTP Input Fields */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: { xs: '16px', md: '64px' },
                    justifyContent: 'center',
                  }}>
                  {otp.map((digit, index) => (
                    <Box
                      key={index}
                      component='input'
                      ref={(el: HTMLInputElement | null) => {
                        otpRefs.current[index] = el;
                      }}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      maxLength={1}
                      sx={{
                        width: { xs: '40px', md: '50px' },
                        height: { xs: '40px', md: '50px' },
                        borderRadius: '8px',
                        border: '0.5px solid #F1EEFB',
                        background: 'rgba(37, 26, 73, 0.50)',
                        color: '#FFF',
                        fontSize: { xs: '18px', md: '24px' },
                        fontWeight: 500,
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        outline: 'none',
                        '&:focus': {
                          border: '1px solid #8F75DD',
                          boxShadow: '0 0 0 1px #8F75DD',
                        },
                        '&::placeholder': {
                          color: 'rgba(255, 255, 255, 0.5)',
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Timer and Resend */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                  <Typography
                    sx={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px',
                    }}>
                    Remaining Time: {formatTime(timeLeft)}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '20px',
                    }}>
                    Didn&apos;t got the code ?{' '}
                    <Box
                      component='span'
                      onClick={handleResendCode}
                      sx={{
                        color: '#8F75DD',
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}>
                      Resend Code
                    </Box>
                  </Typography>
                </Box>
              </Box>

              {/* Bottom Navigation */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: { xs: '12px', md: 0 },
                }}>
                <Box
                  onClick={onPrevious}
                  sx={{
                    display: 'flex',
                    maxWidth: '620px',
                    padding: { xs: '12px 24px', md: '17px 33px' },
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '4px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    background: 'rgba(37, 26, 73, 0.50)',
                    cursor: 'pointer',
                  }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M3.373 8.75L9.06925 14.4462L8 15.5L0.5 8L8 0.5L9.06925 1.55375L3.373 7.25H15.5V8.75H3.373Z'
                        fill='white'
                      />
                    </svg>
                    <Typography
                      sx={{
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: 500,
                        lineHeight: '16px',
                      }}>
                      Previous
                    </Typography>
                  </Box>
                </Box>
                <Box
                  onClick={onNext}
                  sx={{
                    display: 'flex',
                    maxWidth: '620px',
                    padding: { xs: '12px 24px', md: '17px 33px' },
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    borderRadius: '12px',
                    border: '1px solid #6F41D2',
                    background: '#080411',
                    cursor: 'pointer',
                    opacity: otp.every((digit) => digit !== '') ? 1 : 0.5,
                    pointerEvents: otp.every((digit) => digit !== '') ? 'auto' : 'none',
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '4px',
                    }}>
                    <Typography
                      sx={{
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: 500,
                        lineHeight: '16px',
                      }}>
                      Next
                    </Typography>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.627 8.75L6.93075 14.4462L8 15.5L15.5 8L8 0.5L6.93075 1.55375L12.627 7.25H0.5V8.75H12.627Z'
                        fill='white'
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
