'use client';
import React, { useRef } from 'react';
import { Box, Typography, Button, TextField, Card, styled } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContactUsMutation } from '@/app/api/signup/hooks';
import BaseSnackbar, { SnackbarState } from '../ui/BaseSnackbar';

type ContactFormValues = z.infer<typeof contactUsSchema>;

const contactUsSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z
    .string()
    .min(7, { message: 'Phone is required' })
    .refine((val) => /\d/.test(val), { message: 'Phone must contain digits' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

gsap.registerPlugin(ScrollTrigger);

const ContactForm = styled(Card)({
  padding: '53px 30px',
  borderRadius: '18px',
  border: '1px solid rgba(141, 49, 245, 0.20)',
  background: 'rgba(37, 26, 73, 0.50)',
  width: '100%',
  maxWidth: '644px',
  minWidth: 0,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(37, 26, 73, 0.50)',
    border: '1px solid #3E3E3E',
    borderRadius: '4px',
    color: '#8B8698',
    fontSize: '14px',
    height: '60px',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#8B8698',
    fontSize: '14px',
    '&.Mui-focused': {
      color: '#8B8698',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '20px 16px',
    color: '#8B8698',
    fontSize: '14px',
  },
});

const MessageTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(37, 26, 73, 0.50)',
    border: '1px solid #3E3E3E',
    borderRadius: '4px',
    zIndex: 0,
    color: '#8B8698',
    fontSize: '14px',
    minHeight: '132px',
    alignItems: 'flex-start',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#8C8698',
    fontSize: '14px',
    '&.Mui-focused': {
      color: '#8C8698',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '16px',
    color: '#8C8698',
    fontSize: '14px',
  },
});

const StyledPhoneInput = styled(Box)({
  '& .react-tel-input': {
    fontFamily: 'inherit',

    '& .form-control': {
      width: '100%',
      backgroundColor: 'rgba(37, 26, 73, 0.50)',
      border: '1px solid #3E3E3E',
      borderRadius: '4px',
      color: '#8C8799',
      fontSize: '14px',
      height: '60px',
      paddingLeft: '48px',

      '&:focus': {
        borderColor: '#3E3E3E',
        boxShadow: 'none',
      },

      '&:hover': {
        borderColor: '#3E3E3E',
      },
    },

    '& .flag-dropdown': {
      backgroundColor: 'rgba(37, 26, 73, 0.50)',
      border: '1px solid #3E3E3E',
      borderRight: 'none',
      borderRadius: '4px 0 0 4px',

      '&.open': {
        backgroundColor: 'rgba(37, 26, 73, 0.70)',
      },

      '& .selected-flag': {
        backgroundColor: 'transparent',
        borderRadius: '4px 0 0 4px',

        '&:hover, &:focus': {
          backgroundColor: 'rgba(82, 58, 151, 0.3)',
        },
      },
    },

    '& .country-list': {
      backgroundColor: 'rgba(37, 26, 73, 0.95)',
      border: '1px solid #523A97',
      borderRadius: '4px',
      marginTop: '4px',

      '& .country': {
        color: '#8C8799',

        '&:hover': {
          backgroundColor: 'rgba(82, 58, 151, 0.3)',
        },

        '&.highlight': {
          backgroundColor: 'rgba(82, 58, 151, 0.5)',
        },
      },

      '& .divider': {
        borderBottomColor: '#523A97',
      },

      '& .search': {
        backgroundColor: 'rgba(37, 26, 73, 0.50)',
        borderBottom: '1px solid #523A97',
        padding: '8px',

        '& .search-box': {
          backgroundColor: 'rgba(37, 26, 73, 0.50)',
          border: '1px solid #3E3E3E',
          borderRadius: '4px',
          color: '#8C8799',
          fontSize: '14px',

          '&:focus': {
            borderColor: '#523A97',
          },
        },
      },
    },
  },
});

const ContactUs: React.FC = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);
  //   const formFieldsRef = useRef<(HTMLDivElement | null)[]>([]);
  const submitButtonRef = useRef<HTMLDivElement>(null);

  const [snackbar, setSnackbar] = React.useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success',
  });

  //   useEffect(() => {
  //     // Contact form animation
  //     gsap.fromTo(
  //       contactFormRef.current,
  //       { x: 100, opacity: 0, scale: 0.95, rotationY: 10 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         scale: 1,
  //         rotationY: 0,
  //         duration: 1.2,
  //         delay: 0.3,
  //         ease: 'power4.out',
  //         scrollTrigger: {
  //           trigger: contactFormRef.current,
  //           start: 'top 85%',
  //           toggleActions: 'play none none reverse',
  //         },
  //       }
  //     );

  //     // Form fields staggered animation
  //     gsap.fromTo(
  //       formFieldsRef.current,
  //       { y: 30, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.6,
  //         stagger: 0.1,
  //         delay: 0.8,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: contactFormRef.current,
  //           start: 'top 85%',
  //           toggleActions: 'play none none reverse',
  //         },
  //       }
  //     );

  //     // Submit button animation
  //     gsap.fromTo(
  //       submitButtonRef.current,
  //       { y: 20, opacity: 0, scale: 0.9 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.8,
  //         delay: 1.2,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: contactFormRef.current,
  //           start: 'top 85%',
  //           toggleActions: 'play none none reverse',
  //         },
  //       }
  //     );

  //     return () => {
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     };
  //   }, []);

  const handleCloseSnackbar = () => setSnackbar((prev) => ({ ...prev, open: false }));

  const { handleSubmit, control, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const { mutate: submitContactUs } = useContactUsMutation({
    onSuccess: (data) => {
      setSnackbar({
        open: true,
        message: data.message || 'Message sent successfully!',
        severity: 'success',
      });
      reset();
    },
    onError: (err: unknown) => {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const digitsOnly = data.phone.replace(/\D/g, '');
    const phoneNumber = digitsOnly ? Number(digitsOnly) : 0;

    submitContactUs({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: phoneNumber,
      message: data.message,
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BaseSnackbar
        snackbar={snackbar}
        onClose={handleCloseSnackbar}
      />

      <ContactForm
        ref={contactFormRef}
        sx={{ p: 4 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Controller
              name='firstName'
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  placeholder='First Name*'
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message ?? ''}
                />
              )}
            />
            <Controller
              name='lastName'
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  placeholder='Last Name*'
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message ?? ''}
                />
              )}
            />
          </Box>

          <Controller
            name='email'
            control={control}
            render={({ field, fieldState }) => (
              <StyledTextField
                {...field}
                placeholder='Corporate email*'
                type='email'
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message ?? ''}
              />
            )}
          />

          <Controller
            name='phone'
            control={control}
            render={({ field, fieldState }) => (
              <StyledPhoneInput>
                <PhoneInput
                  country='in'
                  value={field.value}
                  onChange={field.onChange}
                  inputProps={{ required: true }}
                  containerClass='react-tel-input'
                  buttonClass='flag-dropdown'
                  inputClass='form-control'
                  dropdownClass='country-list'
                  searchClass='search'
                />
                {fieldState.error ? (
                  <Typography
                    variant='caption'
                    sx={{ color: 'error.main', mt: 0.5, ml: 1.6 }}>
                    {fieldState.error.message}
                  </Typography>
                ) : null}
              </StyledPhoneInput>
            )}
          />

          <Controller
            name='message'
            control={control}
            render={({ field, fieldState }) => (
              <MessageTextField
                {...field}
                placeholder='Type your message...'
                multiline
                rows={4}
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message ?? ''}
              />
            )}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Box
              ref={submitButtonRef}
              sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                type='submit'
                variant='contained'
                sx={{
                  background: '#6F41D2',
                  border: '1px solid #6F41D2',
                  borderRadius: '12px',
                  py: 2,
                  px: 4,
                  color: 'white',
                  fontSize: { xs: '13px', md: '15px' },
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    background: '#5A2FA8',
                  },
                }}>
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </ContactForm>
    </Box>
  );
};

export default ContactUs;
