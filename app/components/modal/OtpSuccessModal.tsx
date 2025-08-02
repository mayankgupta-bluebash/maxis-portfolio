'use client';
import React, { useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import EmailVerify from '../../assets/images/email_verification1.gif';
import Image from 'next/image';

interface OtpSuccessModalProps {
  isOpen: boolean;
  onComplete: () => void;
  handleClose: () => void;
}

export default function OtpSuccessModal({ isOpen, onComplete, handleClose }: OtpSuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onComplete]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='choose-role-title'
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          width: { xs: '90vw', md: '1120px' },
          height: '80vh',
          bgcolor: '#080411',
          border: '1px solid #8F75DD',
          borderRadius: 2,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
          overflow: 'hidden',
        }}>
        <Box
          sx={{
            position: 'absolute',
            width: '678px',
            height: '370px',
            borderRadius: '592px',
            opacity: 0.75,
            background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
            filter: 'blur(100px)',
            left: '201px',
            top: '-89px',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '678px',
            height: '91px',
            borderRadius: '592px',
            opacity: 0.75,
            background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
            filter: 'blur(100px)',
            left: '296px',
            top: '1px',
            zIndex: 0,
          }}
        />

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
            id='choose-role-title'
            sx={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '36px',
            }}>
            Email verification
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
                d='M1.39994 13.6538L0.346191 12.6L5.94619 7L0.346191 1.4L1.39994 0.346252L6.99994 5.94625L12.5999 0.346252L13.6537 1.4L8.05369 7L13.6537 12.6L12.5999 13.6538L6.99994 8.05375L1.39994 13.6538Z'
                fill='white'
              />
            </svg>
          </Box>
        </Box>

        {/* Content */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            height: '100%',
            position: 'relative',
            zIndex: 1,
          }}>
          <Box
            display='flex'
            alignItems='center'
            gap={3}>
            <Image
              src={EmailVerify}
              alt='email'
              style={{
                height: '70px',
                width: '70px',
                objectFit: 'contain',
              }}
            />

            <Typography
              sx={{
                color: '#FFF',
                fontSize: '28px',
                fontWeight: 600,
                textAlign: 'center',
              }}>
              Verification Done
            </Typography>
          </Box>

          {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <CircularProgress
              size={20}
              sx={{ color: '#8F75DD' }}
            />
            <Typography sx={{ color: '#8F75DD', fontSize: '14px' }}>Loading plans...</Typography>
          </Box> */}
        </Box>
      </Box>
    </Modal>
  );
}
