'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import logoPng from '../../../public/logo.png';
import gradientPng from '../../../public/circleGradient.png';
import { useModalFlow } from '../modal/ModalFlowProvider';

const navLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Header: React.FC = () => {
  const { open } = useModalFlow();

  return (
    <>
      <Box
        width='100%'
        sx={{ position: 'fixed', top: 0, zIndex: 1100 }}>
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 4, md: 10 },
            py: 1.4,
            borderBottom: '1px solid rgba(255,255,255,0.14)',
            backgroundColor: 'rgba(255,255,255,0.02)',
            color: '#fff',
            backdropFilter: 'blur(16.5px)',
          }}>
          <Link
            href='/'
            passHref>
            <Image
              src={logoPng}
              alt='Logo'
              width={116}
              height={25}
              style={{ width: '100%', height: '25px' }}
            />
          </Link>
          <Box
            component='nav'
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 3,
              py: 1.4,
            }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                passHref>
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>{link.label}</Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant='contained'
              sx={{
                borderRadius: '12px',
                backgroundColor: 'white',
                color: '#6F41D2',
                px: 4,
                py: 1,
                textTransform: 'none',
                fontWeight: 'medium',
                display: { xs: 'none', sm: 'inline-flex' },
                border: 'none'
              }}
              onClick={() => open('chooseRole')}>
              Sign Up
            </Button>
            <Button
              variant='outlined'
              onClick={() => window?.open('https://www.maxis-ai.com/', '_blank')}
              sx={{
                borderRadius: '12px',
                backgroundColor: '#6F41D2',
                color: 'white',
                px: 4,
                py: 1,
                textTransform: 'none',
                fontWeight: 'medium',
                border: 'none'
              }}>
              Log In
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            pointerEvents: 'none',
          }}>
          <Image
            src={gradientPng}
            alt='gradient'
            width={800}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
