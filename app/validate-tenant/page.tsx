'use client';

import React from 'react';
import { Grid, Box, InputAdornment, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@mui/material/Button';
import LoginImage from '../assets/images/login.png';
import Logo from '../assets/images/maxis.svg';

import { useValidateTenant } from '../api/signup/hooks';
// Define form data shape
type TenantFormValues = {
  tenant: string;
};

// Define custom navigation event

const ValidateTenantPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      tenant: '',
    },
  });

  const { mutateAsync: handleValidateTenant } = useValidateTenant();
  const router = useRouter();

  const onSubmit = async (data: TenantFormValues) => {
    console.log(data);
    await handleValidateTenant(data.tenant);
  };

  // Prefill tenant from URL param
  //   useEffect(() => {
  //     const tenantParam = searchParams.get('tenant');
  //     if (tenantParam) {
  //       setValue('tenant', tenantParam);
  //     }

  //     // Optional: if you still want to support custom navigation events
  //     const handleNavigation = (event: NavigationEvent) => {
  //       router.push(event.detail);
  //     };
  //     window.addEventListener('navigate', handleNavigation);
  //     return () => window.removeEventListener('navigate', handleNavigation);
  //   }, [router, searchParams, setValue]);

  return (
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
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#ffffff' }}>
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
              render={({ field }) => (
                <TextField
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
                  {...field}
                  fullWidth
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
              disabled={false}
              sx={{ mt: 3, mb: 2, fontSize: '16px', bgcolor: '#7352d5', color: '#ffffff', borderRadius: '30px' }}>
              {false ? 'Processing...' : 'Next'}
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
              onClick={() => router.push('/signup')}>
              Sign Up
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ValidateTenantPage;
