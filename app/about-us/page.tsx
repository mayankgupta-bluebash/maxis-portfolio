'use client';
import React, { useState } from 'react';
import { Box, Typography, Container, Button, Grid, Card, TextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import AboutCircle from '../assets/images/about-us.png';

const GradientText = styled(Typography)({
  background: 'linear-gradient(249deg, #FFF 0%, #9573DE 53%, #FFF 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
});

const HeroBadge = styled(Box)({
  display: 'inline-flex',
  padding: '6px 20px',
  borderRadius: '99px',
  border: '1px solid #DAD9DB',
  background: 'rgba(37, 26, 73, 0.50)',
  marginBottom: '32px',
  width: 'fit-content',
});

const StatsCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  textAlign: 'center',
});

const StatNumber = styled(Typography)({
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: '68px',
  background: 'linear-gradient(11deg, #FFF 0%, #9573DE 53%, #FFF 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
});

const VisionMissionCard = styled(Card)({
  padding: '40px',
  borderRadius: '24px',
  border: '1px solid rgba(141, 49, 245, 0.20)',
  background: 'rgba(37, 26, 73, 0.50)',
  boxShadow: '0px 10px 15px -3px rgba(0, 41, 41, 0.04), 0px 4px 6px -4px rgba(0, 41, 41, 0.04)',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '1280px',
});

const IconContainer = styled(Box)({
  display: 'flex',
  width: '150px',
  height: '150px',
  padding: '10px',
  borderRadius: '24px',
  border: '2px solid rgba(141, 49, 245, 0.20)',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContactForm = styled(Card)({
  padding: '53px 30px',
  borderRadius: '18px',
  background: 'rgba(37, 26, 73, 0.50)',
  width: '644px',
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

const PhoneTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(37, 26, 73, 0.50)',
    border: '1px solid #3E3E3E',
    borderRadius: '4px',
    color: '#8C8799',
    fontSize: '14px',
    height: '65px',
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
    color: '#8C8799',
    fontSize: '14px',
    '&.Mui-focused': {
      color: '#8C8799',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '20px 16px',
    color: '#8C8799',
    fontSize: '14px',
  },
});

const USFlag = () => (
  <Image
    src='https://cdn.builder.io/api/v1/image/assets/TEMP/501da89ddb0399fc660c28d11911b3f204cadfd3?width=53'
    alt='USA Flag'
    width={27}
    height={14}
    style={{ objectFit: 'cover' }}
  />
);

const VisionIcon = () => (
  <svg
    width='85'
    height='59'
    viewBox='0 0 86 59'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M43.0221 45.828C47.511 45.828 51.3339 44.2422 54.4909 41.0707C57.6478 37.8992 59.2263 34.069 59.2263 29.5801C59.2263 25.0912 57.6405 21.2683 54.469 18.1113C51.2975 14.9544 47.4672 13.3759 42.9784 13.3759C38.4895 13.3759 34.6665 14.9617 31.5096 18.1332C28.3527 21.3048 26.7742 25.135 26.7742 29.6238C26.7742 34.1127 28.36 37.9356 31.5315 41.0926C34.703 44.2495 38.5332 45.828 43.0221 45.828ZM42.969 41.1488C39.7523 41.1488 37.029 40.0231 34.7992 37.7718C32.5686 35.5204 31.4534 32.7867 31.4534 29.5707C31.4534 26.3541 32.5791 23.6308 34.8304 21.4009C37.0818 19.1704 39.8155 18.0551 43.0315 18.0551C46.2481 18.0551 48.9714 19.1808 51.2013 21.4322C53.4318 23.6836 54.5471 26.4172 54.5471 29.6332C54.5471 32.8499 53.4214 35.5732 51.17 37.803C48.9186 40.0336 46.185 41.1488 42.969 41.1488ZM43.0002 58.7686C34.1863 58.7686 26.136 56.3301 18.8492 51.453C11.5631 46.5759 5.68703 40.3207 1.22106 32.6874C0.916894 32.1811 0.695367 31.6728 0.556478 31.1624C0.417589 30.652 0.348145 30.1284 0.348145 29.5916C0.348145 29.0541 0.417589 28.5329 0.556478 28.028C0.695367 27.5232 0.916894 27.0193 1.22106 26.5166C5.68703 18.8832 11.5631 12.628 18.8492 7.75093C26.136 2.87384 34.1863 0.435303 43.0002 0.435303C51.8141 0.435303 59.8645 2.87384 67.1513 7.75093C74.4374 12.628 80.3134 18.8832 84.7794 26.5166C85.0836 27.0228 85.3051 27.5311 85.444 28.0416C85.5829 28.552 85.6523 29.0756 85.6523 29.6124C85.6523 30.1499 85.5829 30.6711 85.444 31.1759C85.3051 31.6808 85.0836 32.1846 84.7794 32.6874C80.3134 40.3207 74.4374 46.5759 67.1513 51.453C59.8645 56.3301 51.8141 58.7686 43.0002 58.7686ZM42.9825 54.0405C51.2638 54.0405 58.8617 51.8266 65.7763 47.3988C72.6916 42.9704 77.9627 37.0381 81.5898 29.602C77.9627 22.1659 72.6975 16.2336 65.794 11.8051C58.8905 7.37732 51.2985 5.16343 43.0179 5.16343C34.7367 5.16343 27.1388 7.37732 20.2242 11.8051C13.3089 16.2336 8.0162 22.1659 4.34606 29.602C8.0162 37.0381 13.303 42.9704 20.2065 47.3988C27.11 51.8266 34.702 54.0405 42.9825 54.0405Z'
      fill='url(#paint0_linear_vision)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_vision'
        x1='6.04172'
        y1='59.521'
        x2='15.082'
        y2='-8.89026'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' />
        <stop
          offset='0.53'
          stopColor='#9573DE'
        />
        <stop
          offset='1'
          stopColor='white'
        />
      </linearGradient>
    </defs>
  </svg>
);

const MissionIcon = () => (
  <svg
    width='80'
    height='80'
    viewBox='0 0 80 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.42588 79.2687C4.79185 79.2687 3.38178 78.6757 2.19567 77.4895C1.00956 76.3034 0.416504 74.8934 0.416504 73.2593V59.3083C0.416504 58.6375 0.644629 58.076 1.10088 57.6239C1.55643 57.1711 2.12275 56.9448 2.79984 56.9448C3.47623 56.9448 4.03595 57.1711 4.479 57.6239C4.92275 58.076 5.14463 58.6375 5.14463 59.3083V73.2593C5.14463 73.5795 5.27796 73.8732 5.54463 74.1406C5.81199 74.4073 6.10574 74.5406 6.42588 74.5406H20.3769C21.0478 74.5406 21.6092 74.7687 22.0613 75.225C22.5141 75.6812 22.7405 76.2475 22.7405 76.9239C22.7405 77.6003 22.5141 78.16 22.0613 78.6031C21.6092 79.0468 21.0478 79.2687 20.3769 79.2687H6.42588ZM0.416504 20.0625V6.11143C0.416504 4.4774 1.00956 3.06733 2.19567 1.88122C3.38178 0.695108 4.79185 0.102051 6.42588 0.102051H20.3769C21.0478 0.102051 21.6092 0.330177 22.0613 0.786426C22.5141 1.24198 22.7405 1.8083 22.7405 2.48538C22.7405 3.16177 22.5141 3.7215 22.0613 4.16455C21.6092 4.6083 21.0478 4.83018 20.3769 4.83018H6.42588C6.10574 4.83018 5.81199 4.96351 5.54463 5.23017C5.27796 5.49753 5.14463 5.79129 5.14463 6.11143V20.0625C5.14463 20.7333 4.9165 21.2948 4.46025 21.7468C4.004 22.1996 3.43768 22.426 2.7613 22.426C2.08491 22.426 1.52518 22.1996 1.08213 21.7468C0.638379 21.2948 0.416504 20.7333 0.416504 20.0625ZM39.955 46.2156C38.1849 46.2156 36.6613 45.575 35.3842 44.2937C34.1078 43.0132 33.4696 41.4708 33.4696 39.6666C33.4696 37.8791 34.1103 36.3468 35.3915 35.0698C36.6721 33.7934 38.2144 33.1552 40.0186 33.1552C41.8061 33.1552 43.3384 33.7937 44.6155 35.0708C45.8918 36.3479 46.53 37.901 46.53 39.7302C46.53 41.5003 45.8915 43.0239 44.6144 44.301C43.3373 45.5774 41.7842 46.2156 39.955 46.2156ZM73.5738 79.2687H59.6228C58.9519 79.2687 58.3905 79.0406 57.9384 78.5843C57.4856 78.1288 57.2592 77.5625 57.2592 76.8854C57.2592 76.209 57.4856 75.6493 57.9384 75.2062C58.3905 74.7625 58.9519 74.5406 59.6228 74.5406H73.5738C73.8939 74.5406 74.1877 74.4073 74.455 74.1406C74.7217 73.8732 74.855 73.5795 74.855 73.2593V59.3083C74.855 58.6375 75.0832 58.076 75.5394 57.6239C75.9957 57.1711 76.562 56.9448 77.2384 56.9448C77.9148 56.9448 78.4745 57.1711 78.9175 57.6239C79.3613 58.076 79.5832 58.6375 79.5832 59.3083V73.2593C79.5832 74.8934 78.9901 76.3034 77.804 77.4895C76.6179 78.6757 75.2078 79.2687 73.5738 79.2687ZM74.855 20.0625V6.11143C74.855 5.79129 74.7217 5.49753 74.455 5.23017C74.1877 4.96351 73.8939 4.83018 73.5738 4.83018H59.6228C58.9519 4.83018 58.3905 4.60205 57.9384 4.1458C57.4856 3.68955 57.2592 3.12323 57.2592 2.44684C57.2592 1.77045 57.4856 1.21073 57.9384 0.767677C58.3905 0.323927 58.9519 0.102051 59.6228 0.102051H73.5738C75.2078 0.102051 76.6179 0.695108 77.804 1.88122C78.9901 3.06733 79.5832 4.4774 79.5832 6.11143V20.0625C79.5832 20.7333 79.355 21.2948 78.8988 21.7468C78.4432 22.1996 77.8769 22.426 77.1998 22.426C76.5234 22.426 75.9637 22.1996 75.5207 21.7468C75.0769 21.2948 74.855 20.7333 74.855 20.0625Z'
      fill='url(#paint0_linear_mission)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_mission'
        x1='5.70043'
        y1='80.2898'
        x2='23.2981'
        y2='-10.7747'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' />
        <stop
          offset='0.53'
          stopColor='#9573DE'
        />
        <stop
          offset='1'
          stopColor='white'
        />
      </linearGradient>
    </defs>
  </svg>
);

const AboutUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const stats = [
    {
      number: '1000',
      label: 'Clinical Trials in the Cloud',
    },
    {
      number: '01',
      label: 'Clinical Systems Integrated',
    },
    {
      number: '10%',
      label: 'Demonstrated cost savings',
    },
    {
      number: '10%',
      label: 'Demonstrated time savings',
    },
  ];

  return (
    <Box sx={{ background: '#080411', minHeight: '100vh', pt: '72px' }}>
      {/* Hero Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 10 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            maxWidth: '1280px',
            mx: 'auto',
          }}>
          {/* Left Side - Content */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <HeroBadge>
              <GradientText
                variant='body2'
                sx={{ fontSize: '15px', fontWeight: 400 }}>
                Bringing the AI Revolution
              </GradientText>
            </HeroBadge>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <GradientText
                variant='h1'
                sx={{
                  fontSize: '64px',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  width: '706px',
                }}>
                Revolutionizing
                <br />
                Clinical Data Analytics
                <br />
                since 2003
              </GradientText>
            </Box>

            <Typography
              variant='h5'
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '30px',
                maxWidth: '706px',
              }}>
              MaxisIT empowers life sciences to reduce risk, time, and cost with integrated data management and analytics solutions.
            </Typography>

            <Button
              variant='contained'
              sx={{
                background: '#6F41D2',
                border: '1px solid #7352D5',
                borderRadius: '12px',
                py: 2,
                px: 4,
                color: 'white',
                fontSize: '15px',
                fontWeight: 500,
                textTransform: 'none',
                maxWidth: 'fit-content',
                '&:hover': {
                  background: '#5A2FA8',
                },
              }}>
              Request Demo
            </Button>
          </Box>

          {/* Right Side - Stakeholder Diagram */}
          <Image
            src={AboutCircle}
            alt='About'
            width={550} // required unless layout='fill'
            height={550} // required unless layout='fill'
            priority // optional: preload on first load
          />
        </Box>
      </Container>

      {/* Stats Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <HeroBadge sx={{ mb: 2 }}>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
                A Global Network
              </Typography>
            </HeroBadge>
            <GradientText
              variant='h2'
              sx={{ fontSize: '56px', fontWeight: 500, mb: 4 }}>
              200+ Experts. 1 Mission:
              <br />
              Accelerate Global Health
            </GradientText>
            <Typography
              variant='h5'
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '20px',
                maxWidth: '1252px',
                mx: 'auto',
              }}>
              Powering pharma, startups, and CROs across the U.S. and India.
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'center' }}>
            {stats.map((stat, index) => (
              <Grid
                size='auto'
                key={index}>
                <StatsCard>
                  <StatNumber>{stat.number}</StatNumber>
                  <Typography
                    sx={{
                      color: '#F9FAFC',
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: '36px',
                      textAlign: 'center',
                      width: '250px',
                    }}>
                    {stat.label}
                  </Typography>
                </StatsCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Platform Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            maxWidth: '1280px',
            mx: 'auto',
          }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <HeroBadge>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
                Contact Us
              </Typography>
            </HeroBadge>

            <Typography
              variant='h2'
              sx={{
                color: '#FFF',
                fontSize: '56px',
                fontWeight: 500,
                lineHeight: '76.8px',
                width: '595px',
              }}>
              What Makes Maxis More Than Just a Platform
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: '#DEDEDE',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '28px',
                width: '565px',
              }}>
              We&apos;re not just building AI—we&apos;re transforming how medical research happens.
              <br />
              At Maxis, we combine deep domain expertise with agentic automation to accelerate discovery and bring innovations to life faster.
            </Typography>

            <Button
              variant='contained'
              sx={{
                background: '#6F41D2',
                border: '1px solid #6F41D2',
                borderRadius: '12px',
                py: 2,
                px: 4,
                color: 'white',
                fontSize: '15px',
                fontWeight: 500,
                textTransform: 'none',
                maxWidth: 'fit-content',
                '&:hover': {
                  background: '#5A2FA8',
                },
              }}>
              Learn Our Mission
            </Button>
          </Box>

          <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
            <Image
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/df23cacbfe6144d4fa23e3b658d0050f7554345c?width=1294'
              alt='Platform visualization'
              width={647}
              height={530}
              style={{
                width: '647px',
                height: '530px',
                aspectRatio: '647/530',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Vision & Mission Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <HeroBadge sx={{ mb: 6 }}>
              <Typography
                variant='body2'
                sx={{ color: '#FFF', fontSize: '15px' }}>
                Our Vision & Mission
              </Typography>
            </HeroBadge>

            <GradientText
              variant='h2'
              sx={{
                fontSize: '56px',
                fontWeight: 500,
                lineHeight: '76.8px',
                mb: 2,
              }}>
              Aligned by Vision, United in Mission
            </GradientText>

            <Typography
              sx={{
                color: '#DEDEDE',
                fontSize: '16px',
                lineHeight: '24px',
                mb: 4,
              }}>
              Whether you&apos;re here to build intelligent agents or to use AI tools without coding, our platform is built for both.
            </Typography>

            <Button
              variant='contained'
              sx={{
                background: '#694BC2',
                border: '1px solid #7352D5',
                borderRadius: '12px',
                py: 2,
                width: 'fit-content',
                px: 4,
                color: 'white',
                fontSize: '15px',
                fontWeight: 500,
                textTransform: 'none',
                maxWidth: '896px',
                mb: 9,
                '&:hover': {
                  background: '#5A2FA8',
                },
              }}>
              Learn more
            </Button>
          </Box>

          <Grid
            container
            spacing={9}>
            <Grid size={{ xs: 12, md: 6 }}>
              <VisionMissionCard>
                <IconContainer>
                  <VisionIcon />
                </IconContainer>
                <Box>
                  <Typography
                    variant='h4'
                    sx={{
                      fontSize: '32px',
                      fontWeight: 600,
                      lineHeight: '41.6px',
                      background: 'linear-gradient(143deg, #8E76FF 5.43%, #C1B0F1 94.57%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      mb: 3,
                    }}>
                    Vision
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#F9FAFC',
                      fontSize: '16px',
                      lineHeight: '24px',
                      width: '523px',
                    }}>
                    To deliver premier products that increase clinical trial success rates and reduce trial costs by automatically delivering proactive insights
                  </Typography>
                </Box>
              </VisionMissionCard>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <VisionMissionCard>
                <IconContainer>
                  <MissionIcon />
                </IconContainer>
                <Box>
                  <Typography
                    variant='h4'
                    sx={{
                      fontSize: '32px',
                      fontWeight: 600,
                      lineHeight: '41.6px',
                      background: 'linear-gradient(143deg, #8E76FF 5.43%, #C1B0F1 94.57%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      mb: 3,
                    }}>
                    Mission
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#F9FAFC',
                      fontSize: '16px',
                      lineHeight: '24px',
                    }}>
                    To help our customers deliver the right products to the right patients, on time
                  </Typography>
                </Box>
              </VisionMissionCard>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Contact Form Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            maxWidth: '1280px',
            mx: 'auto',
          }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <HeroBadge>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
                Contact Us
              </Typography>
            </HeroBadge>

            <GradientText
              variant='h2'
              sx={{
                fontSize: '56px',
                fontWeight: 500,
                lineHeight: '76.8px',
                width: '595px',
              }}>
              Curious About What Maxis Can Do for You?
            </GradientText>

            <Typography
              variant='body1'
              sx={{
                color: '#DEDEDE',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '28px',
                width: '565px',
                height: '124px',
                display: 'flex',
                alignItems: 'center',
              }}>
              Have questions? Looking to scale your R&D with AI agents? Our experts are just a message away.
            </Typography>
          </Box>

          {/* Contact Form */}
          <ContactForm onSubmit={handleSubmit}>
            <Typography
              variant='h6'
              sx={{
                color: '#B7B4BF',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '20px',
                mb: 1,
              }}>
              BOOK A MEETING
            </Typography>

            {/* Name Fields */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <StyledTextField
                placeholder='First Name*'
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
                fullWidth
                required
              />
              <StyledTextField
                placeholder='Last Name*'
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
                fullWidth
                required
              />
            </Box>

            {/* Email Field */}
            <StyledTextField
              placeholder='Corporate email *'
              type='email'
              value={formData.email}
              onChange={handleInputChange('email')}
              fullWidth
              required
            />

            {/* Phone Field */}
            <PhoneTextField
              placeholder='(123) 456 7890'
              value={formData.phone}
              onChange={handleInputChange('phone')}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <USFlag />
                  </InputAdornment>
                ),
              }}
            />

            {/* Message Field */}
            <MessageTextField
              placeholder='Type your message...'
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange('message')}
              fullWidth
            />

            {/* Privacy Policy */}
            <Typography
              variant='caption'
              sx={{
                color: '#96939F',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '17.931px',
              }}>
              By submiting this form, I confirm that I have read and understood Maxi&apos;s Privacy Policy.
            </Typography>

            {/* Submit Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                  fontSize: '15px',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    background: '#5A2FA8',
                  },
                }}>
                Submit
              </Button>
            </Box>
          </ContactForm>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
