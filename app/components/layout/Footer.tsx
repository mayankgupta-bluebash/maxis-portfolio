import { Box, Container, Divider, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to top, #8F75DD, #4C3D77, #080411)',
        px: { xs: 4, md: 10 },
        py: 8,
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
                href='#'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>About Us</Typography>
              </Link>
              <Link
                href='#'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>Pricing</Typography>
              </Link>
              <Link
                href='#'
                sx={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant='body2'>Enterprise</Typography>
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
            <Typography
              variant='body2'
              sx={{ color: '#F9FAFC' }}>
              © 2025 Maxis. All rights reserved.
            </Typography>
            {/* <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton sx={{ color: "#F9FAFC" }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: "#F9FAFC" }}>
                  <LinkedInIcon />
                </IconButton>
              </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
