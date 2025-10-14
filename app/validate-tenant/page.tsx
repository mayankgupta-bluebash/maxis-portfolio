'use client';

import React, { useEffect, useState } from 'react';
import { Grid, Box, InputAdornment, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@mui/material/Button';
import LoginImage from '../assets/images/login.png';
import Logo from '../assets/images/maxis.svg';
import { useValidateTenant } from '../api/signup/hooks';
import BaseSnackbar, { SnackbarState } from '../components/ui/BaseSnackbar';

type TenantFormValues = {
  tenant: string;
};

const ValidateTenantPage = () => {
  const { control, handleSubmit, setValue } = useForm<TenantFormValues>({
    defaultValues: {
      tenant: '',
    },
  });

  const { mutateAsync: handleValidateTenant } = useValidateTenant();
  const router = useRouter();

  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const onSubmit = async (data: TenantFormValues) => {
    try {
      const response = await handleValidateTenant(data.tenant);

      // if (!response?.success) {
      //   setSnackbar({
      //     open: true,
      //     message: response?.message,
      //     severity: 'error',
      //   });
      //   return;
      // }

      setSnackbar({
        open: true,
        message: response?.message || 'Tenant validated successfully!',
        severity: 'success',
      });

      // router.push(`/login?tenant=${data.tenant}`);
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const err = error as { response: { data?: { message?: string } } };

        setSnackbar({
          open: true,
          message: err.response.data?.message || 'Something went wrong!',
          severity: 'error',
        });
      } else {
        setSnackbar({
          open: true,
          message: 'Something went wrong!',
          severity: 'error',
        });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tenantParam = params.get('tenant');
      if (tenantParam) {
        setValue('tenant', tenantParam);
      }
    }
  }, [setValue]);

  return (
    <>
      {/* ✅ Reusable Snackbar */}
      <BaseSnackbar
        snackbar={snackbar}
        onClose={handleCloseSnackbar}
      />

      <Grid
        container
        sx={{ height: '100vh' }}>
        {/* Left Image Section */}
        <Grid
          size={6}
          sx={{
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <Image
            src={LoginImage}
            alt='Login Background'
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Grid>

        {/* Right Form Section */}
        <Grid
          size={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#ffffff',
          }}>
          <Box sx={{ width: 488 }}>
            <Image
              src={Logo}
              alt='Maxis'
              height={52}
              width={192}
              priority
            />
            <Typography
              mt={2}
              mb={4}
              color='#000000'>
              Welcome! Please enter your subdomain to proceed ahead
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name='tenant'
                control={control}
                rules={{ required: 'Sub-domain is required' }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    sx={{
                      '& label.Mui-focused': {
                        color: '#7352d5',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#7352d5',
                        },
                      },
                    }}
                    label={
                      <span>
                        Sub-Domain<span style={{ color: 'red' }}>*</span>
                      </span>
                    }
                    InputProps={{
                      sx: { padding: 0 },
                      endAdornment: (
                        <InputAdornment
                          position='end'
                          sx={{
                            padding: '27px 20px',
                            borderRadius: '0 4px 4px 0',
                            bgcolor: '#F4F4F4',
                          }}>
                          .maxisai.com
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  fontSize: '16px',
                  bgcolor: '#7352d5',
                  color: '#ffffff',
                  borderRadius: '30px',
                }}>
                Next
              </Button>
            </form>

            <Typography
              variant='body2'
              textAlign='center'
              color='#000000'>
              Don&apos;t have an account?
              <Typography
                fontSize='14px'
                mx={0.5}
                color='#7352d5'
                component='span'
                sx={{ cursor: 'pointer' }}
                onClick={() => router.push('/')}>
                Sign Up
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ValidateTenantPage;
