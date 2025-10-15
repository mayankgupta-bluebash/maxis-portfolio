'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Drawer, Switch, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential_cookies: true,
    analytics_cookies: false,
    marketing_cookies: false,
    functional_cookies: false,
    healthcare_data_cookies: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    const savedPreferences = localStorage.getItem('cookiePreferences');

    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }

    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = async () => {
    const allAcceptedPrefs = {
      essential_cookies: true,
      analytics_cookies: true,
      marketing_cookies: true,
      functional_cookies: true,
      healthcare_data_cookies: true,
    };
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAcceptedPrefs));
    setIsVisible(false);
    setDrawerOpen(false);
  };

  const handleEssentialCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({
        essential_cookies: true,
        analytics_cookies: false,
        marketing_cookies: false,
        functional_cookies: false,
        healthcare_data_cookies: false,
      })
    );
    setIsVisible(false);
    setDrawerOpen(false);
  };

  const handleManagePreferences = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleSavePreferences = async () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    setDrawerOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay Backdrop */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Cookie Consent Modal */}
      <Box
        sx={{
          width: '1129px',
          mx: 'auto',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: '8px',
          backgroundColor: '#321D5E',
          backdropFilter: 'blur(10px)',
          border: '1px solid #A18BE3',
          padding: { xs: 2, sm: 3, md: 4 },
          zIndex: 9999,
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5)',
          animation: 'slideUp 0.4s ease-out',
          '@keyframes slideUp': {
            from: {
              transform: 'translateY(100%)',
              opacity: 0,
            },
            to: {
              transform: 'translateY(0)',
              opacity: 1,
            },
          },
        }}>
        <Box>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'>
            <Typography
              fontSize='20px'
              fontWeight={500}>
              🍪 Your Cookie Preferences
            </Typography>
          </Box>
          <Typography mt={3}>
            Maxis AI uses cookies to personalize your experience, analyze performance, and ensure secure handling of healthcare data. Some cookies are essential; others help us
            improve our services. You can accept all, reject all, or manage your preferences below
          </Typography>

          <Box
            mt={4}
            display='flex'
            gap={1}
            alignItems='center'
            justifyContent='end'>
            <Button
              variant='outlined'
              onClick={handleManagePreferences}
              sx={{
                borderRadius: '12px',
                backgroundColor: '#251A49',
                color: 'white',
                px: 4,
                py: 1,
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
                textTransform: 'none',
                fontWeight: 'medium',
                display: { xs: 'none', sm: 'inline-flex' },
                border: 'none',
              }}>
              Manage Preferences
            </Button>

            <Button
              variant='outlined'
              onClick={handleEssentialCookies}
              sx={{
                borderRadius: '12px',
                backgroundColor: '#251A49',
                color: 'white',
                px: 4,
                py: 1,
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
                textTransform: 'none',
                fontWeight: 'medium',
                display: { xs: 'none', sm: 'inline-flex' },
                border: 'none',
              }}>
              Accept Essential Cookies
            </Button>

            <Button
              onClick={handleAccept}
              variant='outlined'
              sx={{
                borderRadius: '12px',
                backgroundColor: '#6F41D2',
                color: 'white',
                px: 4,
                py: 1,
                textTransform: 'none',
                fontWeight: 'medium',
                display: { xs: 'none', sm: 'inline-flex' },
                border: 'none',
              }}>
              Accept All
            </Button>
          </Box>
        </Box>

        {/* Preferences Drawer */}
        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{
            zIndex: 10000,
            '& .MuiDrawer-paper': {
              width: { xs: '100%', sm: '1220px' },
              backgroundColor: '#1a0f2e',
              color: 'white',
              backgroundImage: 'linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 100%)',
            },
          }}>
          <Box
            sx={{
              position: 'absolute',
              top: '-56px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '800px',
              height: '384px',
              borderRadius: '592px',
              opacity: 0.75,
              background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
              filter: 'blur(100px)',
              zIndex: 0,
            }}
          />
          <Box bgcolor='#080411'>
            {/* Header */}
            <Box
              position='sticky'
              top={0}
              zIndex={1}
              sx={{
                background: 'linear-gradient(180deg,rgb(75, 12, 221) 0%, rgba(96, 30, 249, 0) 100%)',
                backdropFilter: 'blur(6px)',
              }}
              p={3}
              borderBottom='1px solid rgba(255, 255, 255, 0.14)'
              display='flex'
              justifyContent='space-between'
              alignItems='center'>
              <Box
                display='flex'
                gap={1}
                alignItems='center'>
                <Box
                  onClick={handleDrawerClose}
                  sx={{ cursor: 'pointer' }}>
                  <ArrowBackIcon />
                </Box>
                <Typography
                  fontSize='20px'
                  fontWeight={500}>
                  Cookie Preferences
                </Typography>
              </Box>
            </Box>

            <Box
              p={3}
              height={'calc(100vh - 89px)'}>
              <Typography
                variant='body2'
                mb={3}>
                Customize your cookie preferences below. Changes to non-essential cookies may affect agent publishing features or healthcare data workflows.
              </Typography>

              <Box
                display='flex'
                justifyContent='space-between'
                border='1px solid #A18BE3'
                p={3}
                bgcolor='#251A4980'
                borderRadius='8px'
                mb={2}>
                <Box>
                  <Box
                    display='flex'
                    gap={2}
                    alignItems='center'>
                    <Typography
                      fontSize='20px'
                      fontWeight={500}>
                      Essential Cookies
                    </Typography>
                    <Chip
                      sx={{ bgcolor: '#6F41D2', color: 'white' }}
                      label='Required'
                    />
                  </Box>
                  <Typography mt={1}>Required for platform operations (e.g., login, session management, agent publishing).</Typography>
                </Box>
                <Switch
                  checked={preferences.essential_cookies}
                  disabled
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#6F41D2',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#6F41D2',
                    },
                  }}
                />
              </Box>

              <Box
                display='flex'
                justifyContent='space-between'
                border='1px solid #A18BE3'
                p={3}
                bgcolor='#251A4980'
                borderRadius='8px'
                mb={2}>
                <Box>
                  <Typography
                    fontSize='20px'
                    fontWeight={500}>
                    Analytics Cookies
                  </Typography>
                  <Typography mt={1}>Collect statistics to improve platform usage and healthcare workflows (e.g., monitoring agent performance, usage analytics).</Typography>
                </Box>
                <Switch
                  checked={preferences.analytics_cookies}
                  onChange={(e) => setPreferences({ ...preferences, analytics_cookies: e.target.checked })}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#6F41D2',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#6F41D2',
                    },
                  }}
                />
              </Box>

              <Box
                display='flex'
                justifyContent='space-between'
                border='1px solid #A18BE3'
                p={3}
                bgcolor='#251A4980'
                borderRadius='8px'
                mb={2}>
                <Box>
                  <Typography
                    fontSize='20px'
                    fontWeight={500}>
                    Functional Cookies
                  </Typography>
                  <Typography mt={1}>Remember user selections like preferred agent settings, dashboard layout, and interface preferences.</Typography>
                </Box>
                <Switch
                  checked={preferences.functional_cookies}
                  onChange={(e) => setPreferences({ ...preferences, functional_cookies: e.target.checked })}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#6F41D2',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#6F41D2',
                    },
                  }}
                />
              </Box>

              <Box
                display='flex'
                justifyContent='space-between'
                border='1px solid #A18BE3'
                p={3}
                bgcolor='#251A4980'
                borderRadius='8px'
                mb={2}>
                <Box>
                  <Typography
                    fontSize='20px'
                    fontWeight={500}>
                    Marketing/Advertising Cookies
                  </Typography>
                  <Typography mt={1}>Personalize communications for businesses using Maxis AI, such as targeted product updates or offers.</Typography>
                </Box>
                <Switch
                  checked={preferences.marketing_cookies}
                  onChange={(e) => setPreferences({ ...preferences, marketing_cookies: e.target.checked })}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#6F41D2',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#6F41D2',
                    },
                  }}
                />
              </Box>

              <Box
                display='flex'
                justifyContent='space-between'
                border='1px solid #A18BE3'
                p={3}
                bgcolor='#251A4980'
                borderRadius='8px'>
                <Box>
                  <Typography
                    fontSize='20px'
                    fontWeight={500}>
                    Healthcare Data Cookies
                  </Typography>
                  <Typography mt={1}>Enable secure handling of clinical trial and sensitive healthcare information with encryption and anonymization.</Typography>
                </Box>
                <Switch
                  checked={preferences.healthcare_data_cookies}
                  onChange={(e) => setPreferences({ ...preferences, healthcare_data_cookies: e.target.checked })}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#6F41D2',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#6F41D2',
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box
              bgcolor='#080411'
              position='sticky'
              bottom={0}
              p={3}
              borderTop='1px solid rgba(255, 255, 255, 0.14)'
              display='flex'
              justifyContent='end'
              gap={2}
              mt='auto'>
              <Button
                variant='outlined'
                onClick={handleDrawerClose}
                sx={{
                  borderRadius: '12px',
                  backgroundColor: '#251A49',
                  color: 'white',
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 'medium',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: 'none',
                  },
                }}>
                Cancel
              </Button>
              <Button
                variant='contained'
                onClick={handleSavePreferences}
                sx={{
                  borderRadius: '12px',
                  backgroundColor: '#6F41D2',
                  color: 'white',
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 'medium',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: '#5a35b0',
                  },
                }}>
                Save Preferences
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default CookieConsent;
