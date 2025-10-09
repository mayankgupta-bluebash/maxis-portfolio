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
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Header: React.FC = () => {
  const { open } = useModalFlow();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };
  const pathname = usePathname();

  return (
    <div>
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
            px: { xs: 2, md: 10 },
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
          {/* Desktop Nav */}
          <Box
            component='nav'
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 3,
              py: 1.4,
            }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  passHref>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: 500,
                      // borderBottom: isActive ? '2px solid #6F41D2' : 'none',
                      color: isActive ? '#ffffffff' : '#ffffffa3',
                      pb: 0.5,
                    }}>
                    {link.label}
                  </Typography>
                </Link>
              );
            })}
          </Box>
          {/* Mobile Hamburger */}
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
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
                border: 'none',
              }}
              onClick={() => open('chooseRole')}>
              Sign Up
            </Button>
            <Button
              variant='outlined'
              onClick={() => window?.open('/validate-tenant', '_blank')}
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
              Log In
            </Button>
          </Box>
        </Box>
        {/* Mobile Drawer */}
        <Drawer
          anchor='left'
          open={drawerOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              width: 260,
              bgcolor: '#1A103D',
              color: 'white',
              pt: 2,
            },
          }}>
          <Box sx={{ px: 2, pb: 2 }}>
            <Link
              href='/'
              passHref>
              <Image
                src={logoPng}
                alt='Logo'
                width={100}
                height={22}
                style={{ width: '100%', height: '22px', marginBottom: 16, imageRendering: 'crisp-edges', objectFit: 'contain' }}
              />
            </Link>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.label}
                disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={handleDrawerToggle}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{ fontSize: 15, fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem
              disablePadding
              sx={{ mt: 1 }}>
              <ListItemButton
                onClick={() => {
                  open('chooseRole');
                  setDrawerOpen(false);
                }}>
                <ListItemText
                  primary='Sign Up'
                  primaryTypographyProps={{ fontSize: 15, fontWeight: 600, color: '#6F41D2' }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  window?.open('https://www.maxis-ai.com/', '_blank');
                  setDrawerOpen(false);
                }}>
                <ListItemText
                  primary='Log In'
                  primaryTypographyProps={{ fontSize: 15, fontWeight: 600, color: 'white' }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
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
            height={200}
            style={{ width: '70vw' }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
