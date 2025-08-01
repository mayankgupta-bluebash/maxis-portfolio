'use client';
import { Box, Modal, Typography, Button } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface ChooseRoleModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onNext: () => void;
  onRoleSelect: (role: 'builder' | 'consumer') => void;
}

export default function ChooseRoleModal({ isOpen, handleClose, onNext, onRoleSelect }: ChooseRoleModalProps) {
  const { watch, setValue } = useFormContext();
  const selectedRole = watch('role');

  const handleRoleSelect = (role: 'builder' | 'consumer') => {
    setValue('role', role);
    onRoleSelect(role);
  };

  const handleNext = () => {
    if (selectedRole) {
      onNext();
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='choose-role-title'
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
            Choose Role
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

        <Box
          sx={{
            display: 'flex',
            padding: '0px 24px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: '20px', md: '40px' },
            flex: 1,
            position: 'relative',
            zIndex: 1,
            overflow: 'auto',
            minHeight: 0,
          }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: '12px', md: '24px' },
              width: '100%',
              flexDirection: { xs: 'column', md: 'row' },
            }}
            mt={2}>
            <Box
              onClick={() => handleRoleSelect('builder')}
              sx={{
                display: 'flex',
                maxWidth: '1280px',
                padding: { xs: '16px' },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: '16px', md: '24px' },
                borderRadius: '24px',
                border: selectedRole === 'builder' ? '1px solid #7352D5' : '1px solid rgba(141, 49, 245, 0.20)',
                background: selectedRole === 'builder' ? 'rgba(141, 49, 245, 0.20)' : 'rgba(37, 26, 73, 0.50)',
                cursor: 'pointer',
                flex: 1,
                transition: 'all 0.3s ease',
              }}>
              <Box
                sx={{
                  display: 'flex',
                  width: { xs: '100px', md: '150px' },
                  height: { xs: '100px', md: '150px' },
                  padding: '10px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px',
                  borderRadius: '24px',
                  border: '2px solid rgba(141, 49, 245, 0.20)',
                }}>
                <svg
                  width={40}
                  height={40}
                  viewBox='0 0 75 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: '100%', height: '100%' }}>
                  <path
                    d='M12.5834 79.5833V62.7885C8.62504 59.1774 5.55212 55.0389 3.36462 50.3729C1.17712 45.7063 0.083374 40.85 0.083374 35.8042C0.083374 25.9743 3.52678 17.6191 10.4136 10.7386C17.2997 3.8573 25.6618 0.416672 35.5 0.416672C43.5931 0.416672 50.8299 2.83542 57.2105 7.67292C63.5917 12.5097 67.7358 18.7851 69.6427 26.499L74.7427 46.7198C74.9858 47.667 74.815 48.5201 74.2302 49.2792C73.6448 50.0375 72.8448 50.4167 71.8303 50.4167H62.5834V65.2406C62.5834 66.8726 61.9896 68.2819 60.8021 69.4688C59.6153 70.6562 58.2059 71.25 56.574 71.25H45.9167V79.5833H41.1886V66.5219H56.574C56.9476 66.5219 57.2546 66.4017 57.4948 66.1615C57.7351 65.9212 57.8552 65.6142 57.8552 65.2406V45.6885H69.5709L65.0834 27.6198C63.4431 20.9642 59.8507 15.5545 54.3063 11.3906C48.7611 7.22674 42.4924 5.1448 35.5 5.1448C26.9743 5.1448 19.7282 8.09757 13.7615 14.0031C7.79483 19.9087 4.8115 27.1132 4.8115 35.6167C4.8115 40.0299 5.71185 44.2066 7.51254 48.1469C9.31393 52.0865 11.8535 55.5795 15.1313 58.626L17.3115 60.6969V79.5833H12.5834ZM32.9521 50.5604H37.9198L38.1521 46.4979C39.1723 46.3326 40.141 45.9861 41.0584 45.4583C41.9757 44.9306 42.7646 44.2917 43.425 43.5417L47.199 45L49.5542 41.0021L46.7094 38.7417C47.1372 37.6007 47.3511 36.4247 47.3511 35.2135C47.3511 34.0031 47.1372 32.8316 46.7094 31.699L49.5542 29.4396L47.199 25.4406L43.425 26.899C42.7396 26.1781 41.9337 25.5639 41.0073 25.0563C40.0816 24.5486 39.1299 24.1906 38.1521 23.9823L37.9198 19.8802H32.9521L32.7198 23.9823C31.7157 24.1906 30.7504 24.5486 29.824 25.0563C28.8983 25.5639 28.0927 26.1781 27.4073 26.899L23.6334 25.4406L21.3177 29.4396L24.1615 31.699C23.708 32.8399 23.4813 34.016 23.4813 35.2271C23.4813 36.4382 23.708 37.6097 24.1615 38.7417L21.3177 41.0021L23.6334 45L27.4073 43.5417C28.0677 44.2917 28.8563 44.9306 29.773 45.4583C30.6903 45.9861 31.6726 46.3326 32.7198 46.4979L32.9521 50.5604ZM35.4459 43.0125C33.2653 43.0125 31.423 42.258 29.9188 40.749C28.4153 39.2392 27.6636 37.4063 27.6636 35.25C27.6636 33.0695 28.4122 31.2274 29.9094 29.724C31.4066 28.2198 33.2389 27.4677 35.4063 27.4677C37.5737 27.4677 39.4157 28.2163 40.9323 29.7135C42.4497 31.2108 43.2084 33.0431 43.2084 35.2104C43.2084 37.3778 42.4539 39.2201 40.9448 40.7375C39.4351 42.2542 37.6021 43.0125 35.4459 43.0125Z'
                    fill='url(#paint0_linear_builder)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_builder'
                      x1='9.57745'
                      y1='0.416673'
                      x2='69.5174'
                      y2='76.2958'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#8E76FF' />
                      <stop
                        offset='1'
                        stopColor='#C1B0F1'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  maxWidth: '512px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}>
                <Typography
                  sx={{
                    color: '#F9FAFC',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: '150%',
                  }}>
                  Builder
                </Typography>
                <Typography
                  sx={{
                    color: '#DEDEDE',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '150%',
                  }}>
                  Create and deploy AI agents for your business needs
                </Typography>
              </Box>
            </Box>

            <Box
              onClick={() => handleRoleSelect('consumer')}
              sx={{
                display: 'flex',
                maxWidth: '1280px',
                padding: { xs: '16px' },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: '16px', md: '24px' },
                borderRadius: '24px',
                border: selectedRole === 'consumer' ? '1px solid #7352D5' : '1px solid rgba(141, 49, 245, 0.20)',
                background: selectedRole === 'consumer' ? 'rgba(141, 49, 245, 0.20)' : 'rgba(37, 26, 73, 0.50)',
                cursor: 'pointer',
                flex: 1,
                transition: 'all 0.3s ease',
              }}>
              <Box
                sx={{
                  display: 'flex',
                  width: { xs: '100px', md: '150px' },
                  height: { xs: '100px', md: '150px' },
                  padding: '10px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px',
                  borderRadius: '24px',
                  border: '2px solid rgba(141, 49, 245, 0.20)',
                }}>
                <svg
                  width={40}
                  height={40}
                  viewBox='0 0 75 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: '100%', height: '100%' }}>
                  <path
                    d='M12.5834 79.5833V62.7885C8.62504 59.1774 5.55212 55.0389 3.36462 50.3729C1.17712 45.7063 0.083374 40.85 0.083374 35.8042C0.083374 25.9743 3.52678 17.6191 10.4136 10.7386C17.2997 3.8573 25.6618 0.416672 35.5 0.416672C43.5931 0.416672 50.8299 2.83542 57.2105 7.67292C63.5917 12.5097 67.7358 18.7851 69.6427 26.499L74.7427 46.7198C74.9858 47.667 74.815 48.5201 74.2302 49.2792C73.6448 50.0375 72.8448 50.4167 71.8303 50.4167H62.5834V65.2406C62.5834 66.8726 61.9896 68.2819 60.8021 69.4688C59.6153 70.6562 58.2059 71.25 56.574 71.25H45.9167V79.5833H41.1886V66.5219H56.574C56.9476 66.5219 57.2546 66.4017 57.4948 66.1615C57.7351 65.9212 57.8552 65.6142 57.8552 65.2406V45.6885H69.5709L65.0834 27.6198C63.4431 20.9642 59.8507 15.5545 54.3063 11.3906C48.7611 7.22674 42.4924 5.1448 35.5 5.1448C26.9743 5.1448 19.7282 8.09757 13.7615 14.0031C7.79483 19.9087 4.8115 27.1132 4.8115 35.6167C4.8115 40.0299 5.71185 44.2066 7.51254 48.1469C9.31393 52.0865 11.8535 55.5795 15.1313 58.626L17.3115 60.6969V79.5833H12.5834ZM32.9521 50.5604H37.9198L38.1521 46.4979C39.1723 46.3326 40.141 45.9861 41.0584 45.4583C41.9757 44.9306 42.7646 44.2917 43.425 43.5417L47.199 45L49.5542 41.0021L46.7094 38.7417C47.1372 37.6007 47.3511 36.4247 47.3511 35.2135C47.3511 34.0031 47.1372 32.8316 46.7094 31.699L49.5542 29.4396L47.199 25.4406L43.425 26.899C42.7396 26.1781 41.9337 25.5639 41.0073 25.0563C40.0816 24.5486 39.1299 24.1906 38.1521 23.9823L37.9198 19.8802H32.9521L32.7198 23.9823C31.7157 24.1906 30.7504 24.5486 29.824 25.0563C28.8983 25.5639 28.0927 26.1781 27.4073 26.899L23.6334 25.4406L21.3177 29.4396L24.1615 31.699C23.708 32.8399 23.4813 34.016 23.4813 35.2271C23.4813 36.4382 23.708 37.6097 24.1615 38.7417L21.3177 41.0021L23.6334 45L27.4073 43.5417C28.0677 44.2917 28.8563 44.9306 29.773 45.4583C30.6903 45.9861 31.6726 46.3326 32.7198 46.4979L32.9521 50.5604ZM35.4459 43.0125C33.2653 43.0125 31.423 42.258 29.9188 40.749C28.4153 39.2392 27.6636 37.4063 27.6636 35.25C27.6636 33.0695 28.4122 31.2274 29.9094 29.724C31.4066 28.2198 33.2389 27.4677 35.4063 27.4677C37.5737 27.4677 39.4157 28.2163 40.9323 29.7135C42.4497 31.2108 43.2084 33.0431 43.2084 35.2104C43.2084 37.3778 42.4539 39.2201 40.9448 40.7375C39.4351 42.2542 37.6021 43.0125 35.4459 43.0125Z'
                    fill='url(#paint0_linear_consumer)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_consumer'
                      x1='9.57745'
                      y1='0.416673'
                      x2='69.5174'
                      y2='76.2958'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#8E76FF' />
                      <stop
                        offset='1'
                        stopColor='#C1B0F1'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  maxWidth: '512px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}>
                <Typography
                  sx={{
                    color: '#F9FAFC',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: '150%',
                  }}>
                  Consumer
                </Typography>
                <Typography
                  sx={{
                    color: '#DEDEDE',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '150%',
                  }}>
                  Use pre-built AI agents and solutions
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { xs: 'center', sm: 'space-between' },
              alignItems: 'center',
              alignSelf: 'stretch',
              gap: { xs: 2, sm: 0 },
              mb: { xs: 0, sm: 4 },
              px: { xs: 2, sm: 0 },
              py: { xs: 2, sm: 0 },
              position: { xs: 'sticky', sm: 'static' },
              bottom: { xs: 0, sm: 'auto' },
              background: { xs: 'rgba(8,4,17,0.95)', sm: 'none' },
              zIndex: 2,
              borderTop: { xs: '1px solid rgba(255,255,255,0.08)', sm: 'none' },
              boxShadow: { xs: '0 -2px 16px 0 rgba(0,0,0,0.12)', sm: 'none' },
            }}>
            <Button
              onClick={handleClose}
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
              Back to Homepage
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedRole}
              variant='contained'
              sx={{
                backgroundColor: selectedRole ? '#8F75DD' : '#4A4A4A',
                color: '#FFF',
                px: 4,
                py: 1.5,
                fontSize: '16px',
                fontWeight: 500,
                borderRadius: '8px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: selectedRole ? '#7A5FD9' : '#4A4A4A',
                },
                '&:disabled': {
                  backgroundColor: '#4A4A4A',
                  color: '#999',
                },
              }}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
