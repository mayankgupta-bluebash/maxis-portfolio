'use client';

import { Box, Modal, TextField, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { useValidateFieldMutation } from '@/app/api/signup/hooks';
import { z } from 'zod';

// Custom hook for debouncing
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

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
    watch,
    formState: { errors },
  } = useFormContext();

  const validateFieldMutation = useValidateFieldMutation();
  const [validationMessages, setValidationMessages] = useState<{
    email?: string;
    subdomain?: string;
  }>({});

  const [validationStates, setValidationStates] = useState<{
    email?: 'success' | 'error' | 'neutral';
    subdomain?: 'success' | 'error' | 'neutral';
  }>({});

  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);

  // Refs to track previous values and prevent infinite loops
  const prevEmailRef = useRef<string>('');
  const prevSubdomainRef = useRef<string>('');

  // Watch the fields for onChange validation
  const emailValue = watch('email');
  const subdomainValue = watch('subdomain');

  // Debounce the values
  const debouncedEmail = useDebounce(emailValue, 500);
  const debouncedSubdomain = useDebounce(subdomainValue, 500);

  // Validation function
  // Updated validateField function to handle API error responses properly
  const validateField = useCallback(
    async (type: 'email' | 'username' | 'subdomain', value: string) => {
      if (!value.trim()) {
        // Clear validation state if field is empty
        setValidationMessages((prev) => ({
          ...prev,
          [type]: undefined,
        }));
        setValidationStates((prev) => ({
          ...prev,
          [type]: 'neutral',
        }));
        return;
      }

      try {
        const response = await validateFieldMutation.mutateAsync({ type, value });

        const isError = response.message.includes('already taken');
        const isSuccess = response.message.includes('Ready to go');

        // For email field, also check Zod validation when API returns success
        if (type === 'email' && isSuccess) {
          try {
            // Import and use the email validation from Zod schema
            const emailSchema = z.string().email('Please enter a valid email address');
            emailSchema.parse(value);
          } catch {
            // If Zod validation fails, treat as error even if API says ready
            setValidationMessages((prev) => ({
              ...prev,
              [type]: 'Please enter a valid email address',
            }));
            setValidationStates((prev) => ({
              ...prev,
              [type]: 'error',
            }));
            return;
          }
        }

        // For subdomain field, also check Zod validation when API returns success
        if (type === 'subdomain' && isSuccess) {
          try {
            // Import and use the subdomain validation from Zod schema
            const subdomainSchema = z
              .string()
              .min(3, 'Subdomain must be at least 3 characters')
              .regex(/^[a-z0-9-]+$/, 'Subdomain can only contain lowercase letters, numbers, and hyphens')
              .regex(/^(?!-)[a-z0-9-]+(?<!-)$/, 'Subdomain cannot start or end with a hyphen');
            subdomainSchema.parse(value);
          } catch (error) {
            // If Zod validation fails, treat as error even if API says ready
            if (error instanceof z.ZodError) {
              const errorMessage = error.issues[0]?.message || 'Subdomain validation failed';
              setValidationMessages((prev) => ({
                ...prev,
                [type]: errorMessage,
              }));
              setValidationStates((prev) => ({
                ...prev,
                [type]: 'error',
              }));
              return;
            }
          }
        }

        setValidationMessages((prev) => ({
          ...prev,
          [type]: response.message,
        }));

        setValidationStates((prev) => ({
          ...prev,
          [type]: isError ? 'error' : isSuccess ? 'success' : 'neutral',
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error('Validation failed:', error);

        // Handle different types of error responses
        let errorMessage = 'Validation failed. Please try again.';

        // Check if error has response data (API error response)
        if (error?.response?.data) {
          const errorData = error.response.data;
          if (errorData.error) {
            errorMessage = errorData.error;
          } else if (errorData.message) {
            errorMessage = errorData.message;
          }
        }
        // Check if error is directly the response object
        else if (error?.error) {
          errorMessage = error.error;
        }
        // Check if error has a message property
        else if (error?.message) {
          errorMessage = error.message;
        }
        // Handle string responses
        else if (typeof error === 'string') {
          try {
            const parsedError = JSON.parse(error);
            if (parsedError.error) {
              errorMessage = parsedError.error;
            }
          } catch {
            errorMessage = error;
          }
        }

        // Set error state with the extracted message
        setValidationMessages((prev) => ({
          ...prev,
          [type]: errorMessage,
        }));
        setValidationStates((prev) => ({
          ...prev,
          [type]: 'error',
        }));
      }
    },
    [validateFieldMutation]
  );

  useEffect(() => {
    if (debouncedEmail !== undefined && debouncedEmail.length >= 3 && debouncedEmail !== prevEmailRef.current) {
      prevEmailRef.current = debouncedEmail;
      validateField('email', debouncedEmail);
    }
  }, [debouncedEmail, validateField]);

  // Effect for subdomain validation
  useEffect(() => {
    if (debouncedSubdomain !== undefined && debouncedSubdomain !== prevSubdomainRef.current) {
      prevSubdomainRef.current = debouncedSubdomain;
      validateField('subdomain', debouncedSubdomain);
    }
  }, [debouncedSubdomain, validateField]);

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

  const renderTextField = (label: string, field: string, required = false, helperText = '', type = 'text', validation?: 'valid' | 'invalid') => {
    const validationMessage = validationMessages[field as keyof typeof validationMessages];
    const validationState = validationStates[field as keyof typeof validationStates];

    // Determine border color based on validation state
    let borderColor = 'rgba(255, 255, 255, 0.10)'; // default
    if (errors[field]) {
      borderColor = '#FF6451'; // red for zod errors
    } else if (validationState === 'error') {
      borderColor = '#FF6451'; // red for API errors
    } else if (validationState === 'success') {
      borderColor = '#4CAF50'; // green for success
    }

    return (
      <Box sx={{ position: 'relative', width: { xs: '100%', md: '526px' } }}>
        <TextField
          {...register(field)}
          type={type}
          fullWidth
          variant='outlined'
          error={!!errors[field] || validationState === 'error'}
          InputProps={{
            endAdornment: validation === 'valid' ? <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>{renderCheckIcon()}</Box> : null,
            sx: {
              color: '#FFF',
              backgroundColor: 'radial-gradient(487.94% 102.17% at -4950% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 90%)',
              border: `1px solid ${borderColor}`,
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
              '&.Mui-error': {
                border: validationState === 'success' ? '1px solid #4CAF50' : '1px solid #FF6451',
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: validationState === 'success' ? '#4CAF50' : '#FFF',
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '16px',
              letterSpacing: '0.4px',
              backgroundColor: 'rgba(37, 26, 73, 0.50)',
              padding: '0 4px',
              '&.Mui-focused': {
                color: validationState === 'success' ? '#4CAF50' : '#FFF',
              },
              '&.Mui-error': {
                color: validationState === 'success' ? '#4CAF50' : '#FF6451',
              },
            },
          }}
          label={
            <span>
              {label} {required && <span style={{ color: '#FF6451' }}>*</span>}
            </span>
          }
          helperText={validationMessage || (errors[field]?.message as string) || helperText}
          FormHelperTextProps={{
            sx: {
              color: validationMessage ? (validationMessage.includes('already taken') ? '#FF6451' : '#4CAF50') : errors[field] ? '#FF6451' : '#999',
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '16px',
              letterSpacing: '0.4px',
              margin: '4px 0 0 0',
              '&.Mui-error': {
                color: validationState === 'success' ? '#4CAF50' : '#FF6451',
              },
            },
          }}
        />
      </Box>
    );
  };

  const onSubmit = (data: Record<string, string>) => {
    console.log('User details form data:', data);
    onNext();
  };

  // Check if form is valid - prevent submission if there are API validation errors
  const isFormValid = () => {
    // Check for Zod validation errors
    const hasZodErrors = Object.keys(errors).length > 0;

    // Check for API validation errors
    const hasApiErrors = Object.values(validationStates).some((state) => state === 'error');

    // Check if required fields have validation success or are neutral (not error)
    const emailValid = validationStates.email !== 'error';
    const subdomainValid = validationStates.subdomain !== 'error';

    return !hasZodErrors && !hasApiErrors && emailValid && subdomainValid && acceptedPrivacyPolicy;
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
              fontSize: '16px',
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
                {renderTextField('Password', 'password', true, 'Minimum 8 characters', 'password')}
              </Box>

              {/* Fourth Row: Sub-Domain */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: { xs: '12px', md: '24px' },
                  width: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '49%' }}>
                  <TextField
                    {...register('subdomain')}
                    label={
                      <Box component='span'>
                        Sub-Domain{' '}
                        <Box
                          component='span'
                          sx={{ color: '#FF6451' }}>
                          *
                        </Box>
                      </Box>
                    }
                    fullWidth
                    variant='outlined'
                    error={!!errors['subdomain'] || validationStates.subdomain === 'error'}
                    InputLabelProps={{
                      shrink: true, // Ensure label is always visible
                      style: {
                        color: '#FFF',
                        fontSize: '12.5px',
                        fontFamily: 'Inter',
                        position: 'relative',
                        top: '16.5px',
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 2,
                            backgroundColor: '#251A49',
                            color: '#FFF',
                            fontSize: '16px',
                            fontWeight: 500,
                            height: '100%',
                          }}>
                          https://
                        </Box>
                      ),
                      endAdornment: (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 2,
                            backgroundColor: '#251A49',
                            color: '#FFF',
                            fontSize: '16px',
                            fontWeight: 500,
                            height: '100%',
                            width: '100%',
                          }}>
                          {(() => {
                            const rawUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
                            try {
                              const hostname = new URL(rawUrl.startsWith('http') ? rawUrl : `http://${rawUrl}`).hostname;
                              return hostname.replace(/^www\./, '');
                            } catch {
                              return rawUrl.replace(/^https?:\/\//, '').replace(/^www\./, '');
                            }
                          })()}
                        </Box>
                      ),
                      sx: {
                        color: '#FFF',
                        backgroundColor: 'radial-gradient(487.94% 102.17% at -4950% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 90%)',
                        border: (() => {
                          if (errors['subdomain']) return '1px solid #FF6451';
                          if (validationStates.subdomain === 'error') return '1px solid #FF6451';
                          if (validationStates.subdomain === 'success') return '1px solid #4CAF50';
                          return '1px solid rgba(255, 255, 255, 0.10)';
                        })(),
                        borderRadius: '4px',
                        height: '56px',
                        padding: 0,
                        '& fieldset': { border: 'none' },
                        '& input': {
                          color: '#FFF',
                          fontSize: '16px',
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          lineHeight: '24px',
                          letterSpacing: '0.5px',
                        },
                        '&.Mui-focused': {
                          border: (() => {
                            if (errors['subdomain'] || validationStates.subdomain === 'error') return '1px solid #FF6451';
                            if (validationStates.subdomain === 'success') return '1px solid #4CAF50';
                            return '1px solid #8F75DD';
                          })(),
                        },
                        '&.Mui-error': {
                          border: validationStates.subdomain === 'success' ? '1px solid #4CAF50' : '1px solid #FF6451',
                        },
                      },
                    }}
                  />

                  {/* Error message below the input field */}
                  {(errors['subdomain'] || validationMessages.subdomain) && (
                    <Typography
                      sx={{
                        color: (() => {
                          // If there's a Zod validation error, always show in red
                          if (errors['subdomain']) {
                            return '#FF6451';
                          }
                          // If there's an API validation message
                          if (validationMessages.subdomain) {
                            return validationMessages.subdomain.includes('already taken') ? '#FF6451' : '#4CAF50';
                          }
                          // Default color
                          return '#FF6451';
                        })(),
                        fontSize: '12px',
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.4px',
                        margin: '4px 0 0 0',
                        textAlign: 'left',
                      }}>
                      {validationMessages.subdomain || (errors['subdomain']?.message as string)}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Privacy Policy Checkbox */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  width: '100%',
                }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={acceptedPrivacyPolicy}
                      onChange={(e) => setAcceptedPrivacyPolicy(e.target.checked)}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        '&.Mui-checked': {
                          color: '#8F75DD',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        color: '#FFF',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        lineHeight: '20px',
                      }}>
                      I agree to the{' '}
                      <Box
                        component='span'
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('/terms-and-conditions');
                        }}
                        sx={{
                          color: '#8F75DD',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          '&:hover': {
                            color: '#7A5FD9',
                          },
                        }}>
                        Terms and Conditions
                      </Box>
                      {' and '}
                      <Box
                        component='span'
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('/privacy-policy');
                        }}
                        sx={{
                          color: '#8F75DD',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          '&:hover': {
                            color: '#7A5FD9',
                          },
                        }}>
                        Privacy Policy
                      </Box>
                      .
                    </Typography>
                  }
                  sx={{
                    margin: 0,
                    alignItems: 'center',
                  }}
                />
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
