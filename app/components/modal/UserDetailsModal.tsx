'use client';

import { Box, Modal, TextField, Typography, Button } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface UserDetailsModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isSubmitting?: boolean;
}

export default function UserDetailsModal({ isOpen, handleClose, onPrevious, onNext, isSubmitting = false }: UserDetailsModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext();
  const watchedValues = watch();

  const renderCheckIcon = () => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.0962 17.323L4.79254 12.0193L5.86169 10.9655L10.1117 15.2155L10.4577 14.8693L11.5117 15.923L10.0962 17.323ZM15.7462 17.323L10.4425 12.0193L11.4962 10.95L15.7462 15.2L24.9462 6L26 7.06925L15.7462 17.323ZM15.4 12.0193L14.3307 10.9655L19.2807 6.01549L20.35 7.06925L15.4 12.0193Z'
        fill='#02A367'
      />
    </svg>
  );

  const renderTextField = (label: string, field: string, required = false, helperText = '', type = 'text', validation?: 'valid' | 'invalid') => (
    <Box sx={{ position: 'relative', width: { xs: '100%', md: '526px' } }}>
      <TextField
        {...register(field, {
          required: required ? `${label} is required` : false,
          minLength: type === 'password' ? { value: 6, message: 'Password must be at least 6 characters' } : undefined,
          pattern:
            type === 'email'
              ? {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                }
              : undefined,
        })}
        type={type}
        fullWidth
        variant='outlined'
        error={!!errors[field]}
        InputProps={{
          endAdornment: validation === 'valid' ? <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>{renderCheckIcon()}</Box> : null,
          sx: {
            color: '#FFF',
            backgroundColor: 'radial-gradient(487.94% 102.17% at -4950% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 90%)',
            border: errors[field] ? '1px solid #FF6451' : '1px solid rgba(255, 255, 255, 0.10)',
            borderRadius: '4px',
            height: '56px',
            '& fieldset': { border: 'none' },
            '& input': {
              color: '#FFF',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0.5px',
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: '#FFF',
            fontSize: '12px',
            fontFamily: 'Inter',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.4px',
            backgroundColor: 'rgba(37, 26, 73, 0.50)',
            padding: '0 4px',
            '&.Mui-focused': {
              color: '#FFF',
            },
          },
        }}
        label={
          <span>
            {label} {required && <span style={{ color: '#FF6451' }}>*</span>}
          </span>
        }
        helperText={(errors[field]?.message as string) || helperText}
        FormHelperTextProps={{
          sx: {
            color: errors[field] ? '#FF6451' : '#999',
            fontSize: '12px',
            fontFamily: 'Inter',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.4px',
            margin: '4px 0 0 0',
          },
        }}
      />
    </Box>
  );

  const onSubmit = (data: Record<string, string>) => {
    console.log('User details form data:', data);
    onNext();
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'username', 'password'];
    return requiredFields.every((field) => watchedValues[field] && watchedValues[field].trim() !== '');
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='user-details-title'
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
            id='user-details-title'
            sx={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '36px',
            }}>
            User Details
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
          component='form'
          onSubmit={handleSubmit(onSubmit)}
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
              gap: { xs: '20px', md: '40px' },
              width: '100%',
            }}>
            {/* Form */}
            <Box
              sx={{
                display: 'flex',
                width: { xs: '100%' },
                padding: { xs: '24px', md: '33px 48px' },
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                gap: { xs: '12px', md: '18px' },
                borderRadius: '8px',
                border: '1px solid #A18BE3',
                background: 'rgba(37, 26, 73, 0.50)',
              }}
              mt={2}>
              {/* First Row: First Name, Middle Name */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: { xs: '12px', md: '24px' },
                  width: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                }}>
                {renderTextField('First Name', 'firstName', true, 'Max 20 char.')}
                {renderTextField('Middle Name', 'middleName', false, 'Max 20 char.')}
              </Box>

              {/* Second Row: Last Name, Email */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: { xs: '12px', md: '24px' },
                  width: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                }}>
                {renderTextField('Last Name', 'lastName', true, 'Max 20 char.')}
                {renderTextField('Email Address', 'email', true, '', 'email')}
              </Box>

              {/* Third Row: Username, Password */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: { xs: '12px', md: '24px' },
                  width: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                }}>
                {renderTextField('User Name', 'username', true)}
                {renderTextField('Password', 'password', true, 'Minimum 6 characters', 'password')}
              </Box>
            </Box>

            {/* Bottom Navigation */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%',
                mb: 4,
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '12px', md: 0 },
              }}>
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
                type='submit'
                disabled={!isFormValid() || isSubmitting}
                variant='contained'
                sx={{
                  backgroundColor: isFormValid() ? '#8F75DD' : '#4A4A4A',
                  color: '#FFF',
                  px: 4,
                  py: 1.5,
                  fontSize: '16px',
                  fontWeight: 500,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: isFormValid() ? '#7A5FD9' : '#4A4A4A',
                  },
                  '&:disabled': {
                    backgroundColor: '#4A4A4A',
                    color: '#999',
                  },
                }}>
                {isSubmitting ? 'Submitting...' : 'Next'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
