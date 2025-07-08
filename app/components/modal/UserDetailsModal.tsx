'use client';

import { Box, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

interface UserDetailsModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function UserDetailsModal({ isOpen, handleClose, onPrevious, onNext }: UserDetailsModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    // organizationName: '',
  });

  // const [validationState, setValidationState] = useState({
  //   email: 'valid',
  //   username: 'valid',
  // });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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

  const renderTextField = (label: string, value: string, field: string, required = false, helperText = '', validation?: 'valid' | 'invalid', type = 'text') => (
    <Box sx={{ position: 'relative', width: { xs: '100%', md: '526px' } }}>
      <TextField
        value={value}
        onChange={(e) => handleInputChange(field, e.target.value)}
        type={type}
        fullWidth
        variant='outlined'
        InputProps={{
          endAdornment: validation === 'valid' ? <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>{renderCheckIcon()}</Box> : null,
          sx: {
            color: '#FFF',
            backgroundColor: 'radial-gradient(487.94% 102.17% at -4950% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 90%)',
            // border: validation === 'valid' ? '1px solid #02A367' : '1px solid rgba(255, 255, 255, 0.10)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
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
        helperText={helperText}
        FormHelperTextProps={{
          sx: {
            color: validation === 'valid' ? '#02A367' : '#878787',
            fontSize: '12px',
            fontFamily: validation === 'valid' ? 'Roboto' : 'Inter',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.4px',
            marginTop: '4px',
            marginLeft: '16px',
          },
        }}
      />
    </Box>
  );

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
            id='user-details-title'
            sx={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '36px',
            }}>
            Tell us about yourself
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
                {renderTextField('First Name', formData.firstName, 'firstName', true, 'Max 20 char.')}
                {renderTextField('Middle Name', formData.middleName, 'middleName', false, 'Max 20 char.')}
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
                {renderTextField('Last Name', formData.lastName, 'lastName', true, 'Max 20 char.')}
                {renderTextField('Email Address', formData.email, 'email', false)}
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
                {renderTextField('User Name', formData.username, 'username', true)}
                {renderTextField('Password', formData.password, 'password', false)}
              </Box>

              {/* Fourth Row: Organization */}
              {/* <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: { xs: '12px', md: '24px' },
                  width: '100%',
                  flexDirection: { xs: 'column', md: 'row' },
                }}>
                <Box sx={{ width: { xs: '100%', md: '526px' }, position: 'relative' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      height: '56px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.10)',
                      background: 'radial-gradient(487.94% 102.17% at -4950% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 90%)',
                      position: 'relative',
                    }}>
                    <Box
                      sx={{
                        width: '98px',
                        height: '56px',
                        borderRadius: '4px 0px 0px 4px',
                        border: '1px solid rgba(255, 255, 255, 0.10)',
                        background: 'rgba(37, 26, 73, 0.50)',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '16px',
                      }}>
                      <Typography
                        sx={{
                          color: '#F9FAFC',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontWeight: 400,
                        }}>
                        https://
                      </Typography>
                    </Box>

                    <TextField
                      value={formData.organizationName}
                      onChange={(e) => handleInputChange('organizationName', e.target.value)}
                      variant='standard'
                      sx={{
                        flex: 1,
                        '& .MuiInput-root': {
                          color: '#F9FAFC',
                          fontSize: '16px',
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          height: '56px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          alignItems: 'center',
                          '&:before': { display: 'none' },
                          '&:after': { display: 'none' },
                        },
                        '& input': {
                          padding: 0,
                        },
                      }}
                    />

                    <Box
                      sx={{
                        width: '128px',
                        height: '56px',
                        borderRadius: '0px 4px 4px 0px',
                        border: '1px solid rgba(255, 255, 255, 0.10)',
                        background: 'rgba(37, 26, 73, 0.50)',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '12px',
                      }}>
                      <Typography
                        sx={{
                          color: '#F9FAFC',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontWeight: 400,
                        }}>
                        .maxisai.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-8px',
                      left: '13px',
                      padding: '0 4px',
                      background: 'rgba(37, 26, 73, 0.50)',
                    }}>
                    <Typography
                      sx={{
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        letterSpacing: '0.4px',
                      }}>
                      Organisation Name
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '526px' } }}></Box>
              </Box> */}
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
    </Modal>
  );
}
