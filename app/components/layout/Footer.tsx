import { Box, Container, Divider, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/images/logo.png';
import FooterBlur from '../../assets/images/footer-blur.png';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        position: 'relative',
        width: '100%',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#FFFFFF14',
        px: { xs: 4, md: 10 },
        py: 6,
        boxShadow: '0px 10px 15px -3px rgba(0,41,41,0.32), 0px 4px 6px -4px rgba(0,41,41,0.32)',
      }}>
      <Container
        maxWidth='xl'
        sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: '100%',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4,
            }}>
            <Box>
              <Image
                src={Logo}
                alt='Logo'
                width={116}
                height={40}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 4 },
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
              <Link
                href='/about-us'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>About Us</Typography>
              </Link>
              <Box
                component='span'
                sx={{ borderRight: '1px solid #ffffff' }}></Box>
              <Link
                href='/pricing'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>Pricing</Typography>
              </Link>
              <Box
                component='span'
                sx={{ borderRight: '1px solid #ffffff' }}></Box>
              <Link
                href='/enterprise'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>Enterprise</Typography>
              </Link>
              <Box
                component='span'
                sx={{ borderRight: '1px solid #ffffff' }}></Box>
              <Link
                href='/resources'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>Resources</Typography>
              </Link>
              <Box
                component='span'
                sx={{ borderRight: '1px solid #ffffff' }}></Box>
              <Link
                href='/contact-us'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>Contact Us</Typography>
              </Link>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: '#3E3E3E' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                href='https://x.com/MaxisITInc'
                target='_blank'
                sx={{ color: '#F9FAFC' }}>
                <XIcon />
              </IconButton>
              <IconButton
                href='https://www.linkedin.com/company/maxisit-inc-?trk=website_link'
                target='_blank'
                sx={{ color: '#F9FAFC' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href='https://www.youtube.com/@MaxisIT'
                target='_blank'
                sx={{ color: '#F9FAFC' }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
            <Typography
              variant='body2'
              sx={{ color: '#F9FAFC' }}>
              © {new Date().getFullYear()} Maxis. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        position='absolute'
        sx={{
          transform: 'translateX(-50%)',
          left: '50%',
          bottom: 0,
          zIndex: -1,
        }}>
        <Image
          src={FooterBlur}
          alt='footer-blur-design'
          height={220}
          style={{ objectFit: 'cover', width: '87vw' }}
        />
      </Box>
    </Box>
  );
}
