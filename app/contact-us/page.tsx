'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Button, TextField, Card, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HeroBadge = styled(Box)({
  display: 'inline-flex',
  padding: '6px 20px',
  borderRadius: '99px',
  border: '1px solid rgba(248, 246, 254, 0.20)',
  background: 'rgba(37, 26, 73, 0.50)',
  marginBottom: '32px',
  width: 'fit-content',
});

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

const OfficeCard = styled(Card)({
  padding: '24px',
  borderRadius: '9px',
  border: '1px solid #523A97',
  background: 'rgba(37, 26, 73, 0.50)',
  filter: 'blur(0px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '0',
    top: '0',
    bottom: '0',
    width: '1.219px',
    background: '#523A97',
  },
  '&:last-child::after': {
    display: 'none',
  },
});

const USFlag = () => (
  <Image
    src='https://cdn.builder.io/api/v1/image/assets/TEMP/637e43c7f690702c284245ba18c3fd5fb5f28c4f?width=53'
    alt='USA Flag'
    width={27}
    height={14}
    style={{ aspectRatio: '26.59/14.00', objectFit: 'contain' }}
  />
);

const IndiaFlag = () => (
  <Image
    src='https://cdn.builder.io/api/v1/image/assets/TEMP/bc4f476efbabccdf401a8153cdd0f50f44798049?width=52'
    alt='India Flag'
    width={26}
    height={26}
    style={{ aspectRatio: '1/1', objectFit: 'contain' }}
  />
);

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Animation refs
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const formFieldsRef = useRef<(HTMLDivElement | null)[]>([]);
  const submitButtonRef = useRef<HTMLDivElement>(null);
  const globalSectionRef = useRef<HTMLDivElement>(null);
  const officeCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      heroBadgeRef.current,
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroBadgeRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      heroTitleRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      heroSubtitleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroSubtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Contact form animation
    gsap.fromTo(
      contactFormRef.current,
      { x: 100, opacity: 0, scale: 0.95, rotationY: 10 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Form fields staggered animation
    gsap.fromTo(
      formFieldsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Submit button animation
    gsap.fromTo(
      submitButtonRef.current,
      { y: 20, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Global section animations
    gsap.fromTo(
      globalSectionRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: globalSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Office cards staggered animation
    gsap.fromTo(
      officeCardsRef.current,
      { y: 80, opacity: 0, scale: 0.9, rotationY: 15 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: officeCardsRef.current[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Hover animations for office cards
    officeCardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            rotationY: 2,
            duration: 0.4,
            ease: 'power2.out',
            boxShadow: '0 20px 40px rgba(82, 58, 151, 0.3)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.5,
            ease: 'power3.out',
            boxShadow: '0 0 0 rgba(82, 58, 151, 0)',
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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

  const copyEmail = () => {
    navigator.clipboard.writeText('connect@maxisit.com');
  };

  return (
    <Box sx={{ background: '#080411', minHeight: '100vh' }}>
      {/* Contact Section */}
      <Container
        maxWidth='xl'
        sx={{ py: { xs: 4, md: 10 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, md: 4 },
            maxWidth: '1280px',
            mx: 'auto',
          }}>
          {/* Left Side - Contact Info */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
            <HeroBadge ref={heroBadgeRef}>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '13px', md: '15px' } }}>
                Contact Us
              </Typography>
            </HeroBadge>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography
                ref={heroTitleRef}
                variant='h1'
                sx={{
                  color: '#FFF',
                  fontSize: { xs: '28px', md: '56px' },
                  fontWeight: 500,
                  lineHeight: { xs: '36px', md: '76.8px' },
                  width: { xs: '100%', md: '595px' },
                }}>
                We&apos;d love to hear from you!
              </Typography>

              <Box
                ref={heroSubtitleRef}
                sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography
                  variant='h5'
                  sx={{
                    color: '#DEDEDE',
                    fontSize: { xs: '15px', md: '20px' },
                    fontWeight: 500,
                    lineHeight: { xs: '22px', md: '36px' },
                    width: { xs: '100%', md: '565px' },
                  }}>
                  For General Enquiries
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ContentCopyIcon
                    sx={{
                      color: '#FFF',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                    onClick={copyEmail}
                  />
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#DEDEDE',
                      fontSize: { xs: '13px', md: '16px' },
                      fontWeight: 400,
                      lineHeight: '24px',
                    }}>
                    connect@maxisit.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Contact Form */}
          <ContactForm
            ref={contactFormRef}
            onSubmit={handleSubmit}
            sx={{
              padding: { xs: 2, md: '20px' },
              transform: 'perspective(1000px)',
              width: { xs: '100%', md: '644px' },
              mt: { xs: 4, md: 0 },
            }}>
            <Typography
              variant='h6'
              sx={{
                color: '#B7B4BF',
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
                lineHeight: '20px',
                mb: 1,
              }}>
              BOOK A MEETING
            </Typography>

            {/* Name Fields */}
            <Box
              ref={(el: HTMLDivElement | null) => {
                formFieldsRef.current[0] = el;
              }}
              sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
              <StyledTextField
                placeholder='First Name*'
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
                fullWidth
                required
                sx={{ mb: { xs: 1, sm: 0 } }}
              />
              <StyledTextField
                placeholder='Last Name*'
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
                fullWidth
                required
                sx={{ mb: { xs: 1, sm: 0 } }}
              />
            </Box>

            {/* Email Field */}
            <StyledTextField
              ref={(el) => {
                formFieldsRef.current[1] = el;
              }}
              placeholder='Corporate email *'
              type='email'
              value={formData.email}
              onChange={handleInputChange('email')}
              fullWidth
              required
              sx={{ mb: 1 }}
            />

            {/* Phone Field */}
            <PhoneTextField
              ref={(el) => {
                formFieldsRef.current[2] = el;
              }}
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
              sx={{ mb: 1 }}
            />

            {/* Message Field */}
            <MessageTextField
              ref={(el) => {
                formFieldsRef.current[3] = el;
              }}
              placeholder='Type your message...'
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange('message')}
              fullWidth
              sx={{ mb: 1 }}
            />

            {/* Privacy Policy */}
            <Box
              ref={(el: HTMLDivElement | null) => {
                formFieldsRef.current[4] = el;
              }}>
              <Typography
                variant='caption'
                sx={{
                  color: '#96939F',
                  fontSize: { xs: '11px', md: '12px' },
                  fontWeight: 400,
                  lineHeight: '17.931px',
                }}>
                By submiting this form, I confirm that I have read and understood Maxis&apos;s Privacy Policy.
              </Typography>
            </Box>

            {/* Submit Button */}
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
          </ContactForm>
        </Box>
      </Container>

      {/* Global Footprint Section */}
      <Container
        maxWidth='xl'
        sx={{ py: { xs: 4, md: 8 } }}>
        <Box
          ref={globalSectionRef}
          sx={{
            maxWidth: '1280px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, md: 8 },
          }}>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center' }}>
            <HeroBadge sx={{ mb: 2 }}>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '13px', md: '15px' } }}>
                A Global Network
              </Typography>
            </HeroBadge>
            <Typography
              variant='h2'
              sx={{
                color: '#FFF',
                fontSize: { xs: '28px', md: '56px' },
                fontWeight: 500,
                textAlign: 'center',
              }}>
              Our Global Footprint
            </Typography>
          </Box>

          {/* Office Cards */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 3 },
              justifyContent: 'center',
            }}>
            {/* USA Office */}
            <OfficeCard
              ref={(el: HTMLDivElement | null) => {
                officeCardsRef.current[0] = el;
              }}
              sx={{
                transform: 'perspective(1000px)',
                cursor: 'pointer',
                minWidth: 0,
                width: { xs: '100%', md: '392px' },
                mb: { xs: 3, md: 0 },
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <USFlag />
                <Typography
                  variant='h5'
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '18px', md: '23px' },
                    fontWeight: 500,
                    lineHeight: '33.6px',
                  }}>
                  USA
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 0.5,
                  width: { xs: '100%', md: '392px' },
                }}>
                <LocationOnIcon sx={{ color: '#E6E6E7', fontSize: '24px', mt: 0.5 }} />
                <Typography
                  variant='body1'
                  sx={{
                    color: '#E6E6E7',
                    fontSize: { xs: '13px', md: '16px' },
                    lineHeight: '24px',
                    width: '330px',
                  }}>
                  510 Thornall Street, Suite 180, Edison, NJ 08837
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                <PhoneIcon sx={{ color: '#E6E6E7', fontSize: '24px', mt: 0.5 }} />
                <Typography
                  variant='body1'
                  sx={{
                    color: '#E6E6E7',
                    fontSize: { xs: '13px', md: '16px' },
                    lineHeight: '24px',
                    flex: 1,
                  }}>
                  877-MAXISIT (629-4748) Toll Free
                  <br />
                  732-494-2005 Main Office
                </Typography>
              </Box>
            </OfficeCard>

            {/* India Office */}
            <OfficeCard
              ref={(el: HTMLDivElement | null) => {
                officeCardsRef.current[1] = el;
              }}
              sx={{
                transform: 'perspective(1000px)',
                cursor: 'pointer',
                minWidth: 0,
                width: { xs: '100%', md: '392px' },
                mb: { xs: 0, md: 0 },
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IndiaFlag />
                <Typography
                  variant='h5'
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '18px', md: '23px' },
                    fontWeight: 500,
                    lineHeight: '33.6px',
                  }}>
                  India
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 0.5,
                  width: { xs: '100%', md: '392px' },
                }}>
                <LocationOnIcon sx={{ color: '#E6E6E7', fontSize: '24px', mt: 0.5 }} />
                <Typography
                  variant='body1'
                  sx={{
                    color: '#E6E6E7',
                    fontSize: { xs: '13px', md: '16px' },
                    lineHeight: '24px',
                    width: { xs: '100%', md: '330px' },
                    flexShrink: 0,
                  }}>
                  3rd Floor, BOSS Towers, Plot no. 102/11, 103/10 & 104/9, Patrika Nagar, Madhapur, Hyderabad 500081, Telangana, India
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                <PhoneIcon sx={{ color: '#E6E6E7', fontSize: '24px', mt: 0.5 }} />
                <Typography
                  variant='body1'
                  sx={{
                    color: '#E6E6E7',
                    fontSize: { xs: '13px', md: '16px' },
                    lineHeight: '24px',
                    flex: 1,
                  }}>
                  91- 040- 67234678
                </Typography>
              </Box>
            </OfficeCard>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
