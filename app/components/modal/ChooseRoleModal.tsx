'use client';
import { Box, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

interface ChooseRoleModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onNext: () => void;
  onRoleSelect: (role: 'builder' | 'consumer') => void;
}

export default function ChooseRoleModal({ isOpen, handleClose, onNext, onRoleSelect }: ChooseRoleModalProps) {
  const [selectedRole, setSelectedRole] = useState<'builder' | 'consumer'>('builder');

  const handleRoleSelect = (role: 'builder' | 'consumer') => {
    setSelectedRole(role);
    onRoleSelect(role);
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
                  gap: '24px',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                  <Typography
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Inter',
                      fontSize: { xs: '20px', md: '24px' },
                      fontWeight: 600,
                      lineHeight: { xs: '28px', md: '41.6px' },
                      textAlign: 'center',
                    }}>
                    Builder
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Inter',
                      fontSize: { xs: '16px', md: '20px' },
                      fontWeight: 500,
                      lineHeight: { xs: '24px', md: '36px' },
                      textAlign: 'center',
                    }}>
                    Create and monetize your own intelligent agents
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    mb: 4,
                    textAlign: 'left',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                  }}>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Design agentic assets visually using an intuitive drag-and-drop interface
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Use available nodes and set up integrations to leverage
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Publish your agentic assets on the marketplace for others to discover
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Track performance with built-in analytics and observability
                  </Typography>
                </Box>
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
                  width='83'
                  height='80'
                  viewBox='0 0 83 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M48.1729 31.068L32.4114 15.3076L35.8093 11.9503L48.1729 24.3774L72.3479 0.307617L75.6406 3.53678L48.1729 31.068ZM19.3666 64.9462L51.7864 74.5618L77.4197 66.5566C77.4732 65.0343 77.0086 63.8444 76.026 62.9868C75.0427 62.1298 73.902 61.7014 72.6041 61.7014H51.675C50.4298 61.7014 49.1823 61.6212 47.9323 61.4607C46.6823 61.3003 45.443 61.0066 44.2145 60.5795L34.575 57.6389L36.1937 52.8076L45.625 56.1409C46.5493 56.4986 47.551 56.7333 48.6302 56.8451C49.7086 56.9576 50.9104 57.0007 52.2354 56.9743H56.5062C56.5062 55.4354 56.0736 54.1545 55.2083 53.1316C54.343 52.1087 53.2694 51.3462 51.9875 50.8441L29.0385 42.1982C28.9316 42.1712 28.8513 42.151 28.7979 42.1378C28.7444 42.1246 28.6777 42.118 28.5979 42.118H19.3666V64.9462ZM0.416626 75.6035V37.391H28.4531C28.8003 37.391 29.1517 37.4257 29.5072 37.4951C29.8621 37.5646 30.2132 37.6552 30.5604 37.767L53.55 46.3493C55.7076 47.134 57.5597 48.4427 59.1062 50.2753C60.6527 52.1073 61.426 54.3403 61.426 56.9743H72.6041C75.6652 56.9743 78.1479 58.0451 80.052 60.1868C81.9562 62.3291 82.9083 64.8639 82.9083 67.791V70.0982L52.227 79.4972L19.3666 69.9462V75.6035H0.416626ZM5.14475 70.8753H14.5354V42.118H5.14475V70.8753Z'
                    fill='url(#paint0_linear_20586_48266)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_20586_48266'
                      x1='10.8917'
                      y1='0.307618'
                      x2='69.2418'
                      y2='81.7828'
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
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '24px',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                  <Typography
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Inter',
                      fontSize: { xs: '20px', md: '24px' },
                      fontWeight: 600,
                      lineHeight: { xs: '28px', md: '41.6px' },
                      textAlign: 'center',
                    }}>
                    Consumer
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Inter',
                      fontSize: { xs: '16px', md: '20px' },
                      fontWeight: 500,
                      lineHeight: { xs: '24px', md: '36px' },
                      textAlign: 'center',
                    }}>
                    Run agents to automate business workflows
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    mb: 4,
                    textAlign: 'left',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                  }}>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Discover apps, agents, and orchestrations in the marketplace
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Hire and run published agentic assets
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Upload and ingest relevant data and documents
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Execute hired agents using your ingested content and workflows
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
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
            <Box
              onClick={handleClose}
              sx={{
                display: 'flex',
                maxWidth: '620px',
                width: { xs: '100%', sm: 'auto' },
                padding: '17px 33px',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '4px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                background: 'rgba(37, 26, 73, 0.50)',
                cursor: 'pointer',
                mb: { xs: 1, sm: 0 },
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M3.373 8.33997L9.06925 14.0362L8 15.09L0.5 7.58997L8 0.0899658L9.06925 1.14372L3.373 6.83997H15.5V8.33997H3.373Z'
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
                  Back to Homepage
                </Typography>
              </Box>
            </Box>
            <Box
              onClick={onNext}
              sx={{
                display: 'flex',
                maxWidth: '620px',
                width: { xs: '100%', sm: 'auto' },
                padding: '17px 33px',
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
                    d='M12.627 8.33997L6.93075 14.0362L8 15.09L15.5 7.58997L8 0.0899658L6.93075 1.14372L12.627 6.83997H0.5V8.33997H12.627Z'
                    fill='white'
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
