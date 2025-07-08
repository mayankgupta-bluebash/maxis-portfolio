'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Button, Card, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import Interprice from '../assets/images/ai_expertise.webp';
import ResearchWithAi from '../assets/images/enterprice-research-with-ai.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
  marginBottom: '24px',
  width: 'fit-content',
});

const FeatureCard = styled(Card)({
  padding: '24px',
  borderRadius: '24px',
  border: '1px solid rgba(141, 49, 245, 0.20)',
  background: 'rgba(37, 26, 73, 0.50)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const IconContainer = styled(Box)({
  display: 'flex',
  padding: '10px',
  borderRadius: '24px',
  border: '1px solid #43277E',
  width: 'fit-content',
});

const CapabilityCard = styled(Card)({
  padding: '33px 25px 33px 33px',
  borderRadius: '24px',
  border: '1px solid #A18BE3',
  background: 'rgba(37, 26, 73, 0.50)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

const CTASection = styled(Box)({
  display: 'flex',
  borderRadius: '24px',
  background: 'rgba(37, 26, 73, 0.50)',
  border: '1px solid rgba(141, 49, 245, 0.20)',
  overflow: 'hidden',
  position: 'relative',
});

const StyledAccordion = styled(Accordion)({
  borderRadius: '8px',
  border: '2px solid rgba(141, 49, 245, 0.20)',
  background: 'rgba(37, 26, 73, 0.50)',
  backdropFilter: 'blur(7.5px)',
  marginBottom: '16px',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    // padding: '0 0 0 40px',
    minHeight: '80px',
  },
  '& .MuiAccordionDetails-root': {
    padding: '16px 10px 32px 67px',
  },
});

const FAQSection = styled(Box)({
  display: 'flex',
  padding: '60px 80px',
  // background: '#6F41D2',
  gap: '20px',
});

const DatabaseIcon = () => (
  <svg
    width='36'
    height='37'
    viewBox='0 0 36 37'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.0049 36.6C12.9715 36.6 8.71322 35.825 5.22988 34.275C1.74655 32.725 0.00488281 30.8333 0.00488281 28.6V8.59998C0.00488281 6.39998 1.76322 4.51664 5.27988 2.94998C8.79655 1.38331 13.0382 0.599976 18.0049 0.599976C22.9715 0.599976 27.2132 1.38331 30.7299 2.94998C34.2466 4.51664 36.0049 6.39998 36.0049 8.59998V28.6C36.0049 30.8333 34.2632 32.725 30.7799 34.275C27.2965 35.825 23.0382 36.6 18.0049 36.6ZM18.0049 12.2C20.8715 12.2 23.8132 11.7583 26.8299 10.875C29.8465 9.99164 31.7882 8.99998 32.6549 7.89998C31.7549 6.83331 29.7965 5.84998 26.7799 4.94998C23.7632 4.04998 20.8382 3.59998 18.0049 3.59998C15.0715 3.59998 12.1215 4.03331 9.15488 4.89998C6.18822 5.76664 4.23822 6.76664 3.30488 7.89998C4.23822 9.06664 6.17155 10.075 9.10488 10.925C12.0382 11.775 15.0049 12.2 18.0049 12.2ZM17.9549 22.9C19.3549 22.9 20.7549 22.825 22.1549 22.675C23.5549 22.525 24.8966 22.3 26.1799 22C27.4632 21.7 28.6882 21.3333 29.8549 20.9C31.0215 20.4666 32.0715 19.9833 33.0049 19.45V11.7C32.0382 12.2333 30.9715 12.7166 29.8049 13.15C28.6382 13.5833 27.4049 13.95 26.1049 14.25C24.8049 14.55 23.4715 14.7833 22.1049 14.95C20.7382 15.1166 19.3549 15.2 17.9549 15.2C16.5549 15.2 15.1549 15.1166 13.7549 14.95C12.3549 14.7833 11.0132 14.55 9.72988 14.25C8.44655 13.95 7.22988 13.5833 6.07988 13.15C4.92988 12.7166 3.90488 12.2333 3.00488 11.7V19.45C3.90488 19.9833 4.92155 20.4666 6.05488 20.9C7.18822 21.3333 8.39655 21.7 9.67988 22C10.9632 22.3 12.3049 22.525 13.7049 22.675C15.1049 22.825 16.5216 22.9 17.9549 22.9ZM18.0049 33.6C19.6049 33.6 21.2549 33.4583 22.9549 33.175C24.6549 32.8916 26.2132 32.5166 27.6299 32.05C29.0465 31.5833 30.2465 31.0666 31.2299 30.5C32.2132 29.9333 32.8049 29.35 33.0049 28.75V22.5C32.0715 23.0333 31.0215 23.5083 29.8549 23.925C28.6882 24.3416 27.4632 24.7 26.1799 25C24.8966 25.3 23.5632 25.525 22.1799 25.675C20.7966 25.825 19.3882 25.9 17.9549 25.9C16.5216 25.9 15.1049 25.825 13.7049 25.675C12.3049 25.525 10.9632 25.3 9.67988 25C8.39655 24.7 7.18822 24.3416 6.05488 23.925C4.92155 23.5083 3.90488 23.0333 3.00488 22.5V28.8C3.17155 29.3666 3.73822 29.9416 4.70488 30.525C5.67155 31.1083 6.87155 31.625 8.30488 32.075C9.73822 32.525 11.3049 32.8916 13.0049 33.175C14.7049 33.4583 16.3715 33.6 18.0049 33.6Z'
      fill='url(#paint0_linear_database)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_database'
        x1='4.57628'
        y1='0.599976'
        x2='31.4335'
        y2='36.6'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#8E76FF' />
        <stop
          offset='1'
          stopColor='#C1B0F1'
        />
      </linearGradient>
    </defs>
  </svg>
);

const SecurityIcon = () => (
  <svg
    width='44'
    height='46'
    viewBox='0 0 44 46'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.60488 32.05V18.1C6.60488 17.675 6.74955 17.3187 7.03888 17.031C7.32788 16.7437 7.68622 16.6 8.11388 16.6C8.54122 16.6 8.89655 16.7437 9.17988 17.031C9.46322 17.3187 9.60488 17.675 9.60488 18.1V32.05C9.60488 32.475 9.46022 32.8312 9.17088 33.1185C8.88188 33.4062 8.52355 33.55 8.09588 33.55C7.66855 33.55 7.31322 33.4062 7.02988 33.1185C6.74655 32.8312 6.60488 32.475 6.60488 32.05ZM18.7049 32.05V18.1C18.7049 17.675 18.8496 17.3187 19.1389 17.031C19.4279 16.7437 19.7862 16.6 20.2139 16.6C20.6412 16.6 20.9965 16.7437 21.2799 17.031C21.5632 17.3187 21.7049 17.675 21.7049 18.1V32.05C21.7049 32.475 21.5602 32.8312 21.2709 33.1185C20.9819 33.4062 20.6236 33.55 20.1959 33.55C19.7685 33.55 19.4132 33.4062 19.1299 33.1185C18.8465 32.8312 18.7049 32.475 18.7049 32.05ZM38.7049 13.6H1.15488C0.835549 13.6 0.564049 13.4882 0.340383 13.2645C0.116716 13.0408 0.00488281 12.7693 0.00488281 12.45V11.6C0.00488281 11.4 0.0632161 11.2083 0.179883 11.025C0.296549 10.8417 0.438216 10.7 0.604883 10.6L18.5049 0.4C18.9772 0.133333 19.4772 0 20.0049 0C20.5325 0 21.0325 0.133333 21.5049 0.4L39.3549 10.55C39.5549 10.6833 39.7132 10.85 39.8299 11.05C39.9465 11.25 40.0049 11.475 40.0049 11.725V12.2365C40.0049 12.6228 39.8804 12.9467 39.6314 13.208C39.3821 13.4693 39.0732 13.6 38.7049 13.6ZM6.70488 10.6H33.3049L20.0049 3L6.70488 10.6ZM1.50488 39.55C1.07988 39.55 0.723716 39.4053 0.436383 39.116C0.148716 38.827 0.00488281 38.4687 0.00488281 38.041C0.00488281 37.6137 0.148716 37.2583 0.436383 36.975C0.723716 36.6917 1.07988 36.55 1.50488 36.55H23.5049C23.9299 36.55 24.2862 36.6947 24.5739 36.984C24.8612 37.273 25.0049 37.6313 25.0049 38.059C25.0049 38.4863 24.8612 38.8417 24.5739 39.125C24.2862 39.4083 23.9299 39.55 23.5049 39.55H1.50488ZM31.8959 24.25C31.4685 24.25 31.1132 24.1062 30.8299 23.8185C30.5466 23.5312 30.4049 23.175 30.4049 22.75V18.1C30.4049 17.675 30.5495 17.3187 30.8389 17.031C31.1279 16.7437 31.4862 16.6 31.9139 16.6C32.3412 16.6 32.6966 16.7437 32.9799 17.031C33.2632 17.3187 33.4049 17.675 33.4049 18.1V22.75C33.4049 23.175 33.2602 23.5312 32.9709 23.8185C32.6819 24.1062 32.3236 24.25 31.8959 24.25ZM28.0049 34.7V30.55C28.0049 30.278 28.0799 30.0183 28.2299 29.771C28.3799 29.5237 28.5882 29.3333 28.8549 29.2L35.3549 25.95C35.5452 25.85 35.7595 25.8 35.9979 25.8C36.2359 25.8 36.4549 25.85 36.6549 25.95L43.1549 29.2C43.4216 29.3333 43.6299 29.5237 43.7799 29.771C43.9299 30.0183 44.0049 30.278 44.0049 30.55V34.7C44.0049 37.3 43.3465 39.4833 42.0299 41.25C40.7132 43.0167 38.9049 44.3833 36.6049 45.35C36.4715 45.4167 36.2715 45.45 36.0049 45.45L35.4049 45.35C33.1049 44.3833 31.2966 43.0167 29.9799 41.25C28.6632 39.4833 28.0049 37.3 28.0049 34.7ZM34.9549 36.8L32.7049 34.55C32.5049 34.35 32.2715 34.25 32.0049 34.25C31.7382 34.25 31.5049 34.35 31.3049 34.55C31.1049 34.75 31.0049 34.9833 31.0049 35.25C31.0049 35.5167 31.1049 35.75 31.3049 35.95L33.9049 38.55C34.2049 38.85 34.5549 39 34.9549 39C35.3549 39 35.7049 38.85 36.0049 38.55L41.3549 33.2C41.5549 33 41.6549 32.7667 41.6549 32.5C41.6549 32.2333 41.5549 32 41.3549 31.8C41.1549 31.6 40.9216 31.5 40.6549 31.5C40.3882 31.5 40.1549 31.6 39.9549 31.8L34.9549 36.8Z'
      fill='url(#paint0_linear_security)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_security'
        x1='2.94163'
        y1='46.0362'
        x2='13.3524'
        y2='-6.11862'
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

const HandshakeIcon = () => (
  <svg
    width='43'
    height='39'
    viewBox='0 0 43 39'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20.582 35.8629C20.8126 35.8629 21.0588 35.8116 21.3205 35.7089C21.5818 35.6066 21.792 35.4694 21.951 35.2974L38.282 18.9359C38.7536 18.4643 39.1171 17.9534 39.3725 17.4034C39.6275 16.8534 39.755 16.2694 39.755 15.6514C39.755 15.0334 39.6275 14.4251 39.3725 13.8264C39.1171 13.2277 38.7536 12.6924 38.282 12.2204L29.9165 3.85542C29.4448 3.38342 28.9288 3.02958 28.3685 2.79392C27.8081 2.55792 27.219 2.43992 26.601 2.43992C25.983 2.43992 25.3958 2.55792 24.8395 2.79392C24.2831 3.02958 23.7754 3.38342 23.3165 3.85542L21.9165 5.25542L25.8705 9.23992C26.2651 9.65525 26.6068 10.1456 26.8955 10.7109C27.1838 11.2766 27.328 11.8811 27.328 12.5244C27.328 13.6501 26.9068 14.6257 26.0645 15.4514C25.2221 16.2771 24.2446 16.6899 23.132 16.6899C22.4139 16.6899 21.8025 16.5841 21.2975 16.3724C20.7921 16.1611 20.3255 15.8477 19.8975 15.4324L16.632 12.1474C16.5166 12.0321 16.3691 11.9744 16.1895 11.9744C16.0101 11.9744 15.8628 12.0321 15.7475 12.1474L7.27445 20.6204C7.08212 20.8127 6.93979 21.0296 6.84745 21.2709C6.75512 21.5119 6.70895 21.7516 6.70895 21.9899C6.70895 22.4873 6.86662 22.8904 7.18195 23.1994C7.49729 23.5084 7.89729 23.6629 8.38195 23.6629C8.63329 23.6629 8.87945 23.6033 9.12045 23.4839C9.36145 23.3649 9.56145 23.2259 9.72045 23.0669L15.5705 17.2169C15.7935 16.9939 16.057 16.8791 16.361 16.8724C16.6646 16.8661 16.9345 16.9809 17.1705 17.2169C17.4061 17.4529 17.524 17.7196 17.524 18.0169C17.524 18.3143 17.4061 18.5809 17.1705 18.8169L11.351 24.6169C11.1586 24.8219 11.0163 25.0469 10.924 25.2919C10.832 25.5366 10.786 25.7846 10.786 26.0359C10.786 26.4873 10.952 26.8789 11.284 27.2109C11.616 27.5429 12.0076 27.7089 12.459 27.7089C12.7103 27.7089 12.9565 27.6578 13.1975 27.5554C13.4385 27.4528 13.6385 27.3156 13.7975 27.1439L19.878 21.0629C20.101 20.8399 20.3645 20.7252 20.6685 20.7189C20.9725 20.7122 21.2423 20.8269 21.478 21.0629C21.714 21.2989 21.832 21.5656 21.832 21.8629C21.832 22.1602 21.714 22.4269 21.478 22.6629L15.428 28.6939C15.269 28.8656 15.135 29.0822 15.026 29.3439C14.917 29.6052 14.8625 29.8616 14.8625 30.1129C14.8625 30.5642 15.0286 30.9559 15.361 31.2879C15.693 31.6199 16.0846 31.7859 16.536 31.7859C16.787 31.7859 17.0246 31.7398 17.249 31.6474C17.4736 31.5551 17.6821 31.4128 17.8745 31.2204L23.955 25.1399C24.178 24.9169 24.4415 24.8021 24.7455 24.7954C25.0491 24.7891 25.319 24.9039 25.555 25.1399C25.791 25.3759 25.909 25.6426 25.909 25.9399C25.909 26.2372 25.791 26.5039 25.555 26.7399L19.474 32.8204C19.2816 33.0127 19.1395 33.2378 19.0475 33.4954C18.9551 33.7534 18.909 33.9913 18.909 34.2089C18.909 34.7143 19.0646 35.1162 19.376 35.4149C19.6876 35.7136 20.0896 35.8629 20.582 35.8629ZM20.582 38.1319C19.546 38.1319 18.6395 37.7429 17.8625 36.9649C17.0858 36.1866 16.6781 35.2168 16.6395 34.0554C15.5061 33.9911 14.5595 33.5949 13.7995 32.8669C13.0391 32.1386 12.6268 31.1758 12.5625 29.9784C11.3781 29.9014 10.4205 29.4904 9.68945 28.7454C8.95879 28.0007 8.56779 27.0527 8.51645 25.9014C7.36012 25.8374 6.39162 25.4464 5.61095 24.7284C4.82995 24.0104 4.43945 23.0873 4.43945 21.9589C4.43945 21.4309 4.54145 20.9028 4.74545 20.3744C4.94912 19.8464 5.24845 19.3849 5.64345 18.9899L14.186 10.4669C14.727 9.91292 15.3948 9.63592 16.1895 9.63592C16.9845 9.63592 17.6588 9.91292 18.2125 10.4669L21.2855 13.5399C21.5395 13.7939 21.8311 13.9991 22.1605 14.1554C22.4901 14.3118 22.8241 14.3899 23.1625 14.3899C23.6345 14.3899 24.0685 14.1951 24.4645 13.8054C24.8608 13.4158 25.059 12.9786 25.059 12.4939C25.059 12.2296 24.991 11.9598 24.855 11.6844C24.719 11.4088 24.5241 11.1376 24.2705 10.8709L17.255 3.85542C16.7833 3.38342 16.2641 3.02958 15.6975 2.79392C15.1308 2.55792 14.5385 2.43992 13.9205 2.43992C13.3025 2.43992 12.7216 2.55792 12.178 2.79392C11.6343 3.02958 11.1266 3.38342 10.655 3.85542L3.68945 10.8204C2.94612 11.5514 2.49612 12.4399 2.33945 13.4859C2.18312 14.5322 2.32029 15.5273 2.75095 16.4709C2.89195 16.7476 2.90479 17.0359 2.78945 17.3359C2.67412 17.6359 2.48445 17.8564 2.22045 17.9974C1.94345 18.1384 1.64662 18.1513 1.32995 18.0359C1.01329 17.9206 0.784452 17.7244 0.643452 17.4474C0.0641186 15.9988 -0.125048 14.5424 0.0759521 13.0784C0.277285 11.6144 0.948452 10.3119 2.08945 9.17092L9.00495 2.25542C9.69995 1.56042 10.4725 1.04442 11.3225 0.707416C12.1725 0.370082 13.0551 0.201416 13.9705 0.201416C14.8858 0.201416 15.7601 0.370082 16.5935 0.707416C17.4268 1.04442 18.1908 1.56042 18.8855 2.25542L20.286 3.65542L21.686 2.25542C22.3806 1.56042 23.1498 1.04442 23.9935 0.707416C24.8371 0.370082 25.7166 0.201416 26.632 0.201416C27.5473 0.201416 28.4248 0.370082 29.2645 0.707416C30.1041 1.04442 30.8715 1.56042 31.5665 2.25542L39.882 10.5709C40.5766 11.2656 41.1073 12.0573 41.474 12.9459C41.8406 13.8343 42.024 14.7361 42.024 15.6514C42.024 16.5667 41.8406 17.4411 41.474 18.2744C41.1073 19.1078 40.5766 19.8719 39.882 20.5669L23.551 36.8974C23.1433 37.3181 22.687 37.6291 22.182 37.8304C21.6766 38.0314 21.1433 38.1319 20.582 38.1319Z'
      fill='url(#paint0_linear_handshake)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_handshake'
        x1='2.80327'
        y1='38.6211'
        x2='10.4642'
        y2='-5.30303'
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

const BulbIcon = () => (
  <svg
    width='28'
    height='38'
    viewBox='0 0 28 38'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M13.665 37.0744C12.829 37.0744 12.111 36.8546 11.511 36.4149C10.911 35.9749 10.5624 35.3909 10.465 34.6629H9.38054C8.78854 34.6629 8.26237 34.4328 7.80204 33.9724C7.34137 33.5118 7.11104 32.9854 7.11104 32.3934V25.8014C4.91104 24.4708 3.20337 22.7433 1.98804 20.6189C0.772706 18.4946 0.165039 16.1849 0.165039 13.6899C0.165039 9.92594 1.47404 6.73494 4.09204 4.11694C6.71004 1.49894 9.90104 0.189941 13.665 0.189941C17.429 0.189941 20.62 1.49894 23.238 4.11694C25.856 6.73494 27.165 9.92594 27.165 13.6899C27.165 16.1849 26.5585 18.4949 25.3455 20.6199C24.1325 22.7453 22.4237 24.4724 20.219 25.8014V32.3934C20.219 32.9854 19.9887 33.5118 19.528 33.9724C19.0677 34.4328 18.5415 34.6629 17.9495 34.6629H16.865C16.7677 35.3909 16.419 35.9749 15.819 36.4149C15.219 36.8546 14.501 37.0744 13.665 37.0744ZM9.38054 32.3934H17.9495V30.2319H9.38054V32.3934ZM9.38054 28.4629H17.9495V26.4439H9.38054V28.4629ZM8.93054 24.1744H12.7265V17.2859L8.91504 13.4744C8.73304 13.2924 8.64721 13.0854 8.65754 12.8534C8.66754 12.6214 8.76687 12.4079 8.95554 12.2129C9.14387 12.0183 9.35404 11.9209 9.58604 11.9209C9.81804 11.9209 10.0315 12.0183 10.2265 12.2129L13.665 15.6824L17.134 12.2129C17.3164 12.0309 17.5267 11.9419 17.765 11.9459C18.0034 11.9496 18.22 12.0489 18.415 12.2439C18.61 12.4386 18.7075 12.6469 18.7075 12.8689C18.7075 13.0906 18.61 13.2924 18.415 13.4744L14.6035 17.2859V24.1744H18.3995C20.3482 23.2668 21.918 21.8681 23.109 19.9784C24.3 18.0888 24.8955 15.9926 24.8955 13.6899C24.8955 10.5463 23.8097 7.88861 21.638 5.71694C19.4664 3.54527 16.8087 2.45944 13.665 2.45944C10.5214 2.45944 7.86371 3.54527 5.69204 5.71694C3.52037 7.88861 2.43454 10.5463 2.43454 13.6899C2.43454 15.9926 3.03004 18.0888 4.22104 19.9784C5.41204 21.8681 6.98187 23.2668 8.93054 24.1744Z'
      fill='url(#paint0_linear_bulb)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_bulb'
        x1='3.59358'
        y1='0.189942'
        x2='32.295'
        y2='28.352'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#8E76FF' />
        <stop
          offset='1'
          stopColor='#C1B0F1'
        />
      </linearGradient>
    </defs>
  </svg>
);

const MonitoringIcon = () => (
  <svg
    width='37'
    height='37'
    viewBox='0 0 37 37'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0.334961 36.1899V32.3899L3.33496 29.3899V36.1899H0.334961ZM8.58496 36.1899V24.3899L11.585 21.3899V36.1899H8.58496ZM16.835 36.1899V21.3899L19.835 24.4399V36.1899H16.835ZM25.085 36.1899V24.4399L28.085 21.4399V36.1899H25.085ZM33.335 36.1899V16.3899L36.335 13.3899V36.1899H33.335ZM0.334961 24.3899V20.1399L14.335 6.23994L22.335 14.2399L36.335 0.189941V4.43994L22.335 18.4899L14.335 10.4899L0.334961 24.3899Z'
      fill='url(#paint0_linear_monitoring)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_monitoring'
        x1='4.90636'
        y1='0.189942'
        x2='31.7636'
        y2='36.1899'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#8E76FF' />
        <stop
          offset='1'
          stopColor='#C1B0F1'
        />
      </linearGradient>
    </defs>
  </svg>
);

const EnterprisePage: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  // GSAP refs for hero section
  const heroHeadingRef = useRef<HTMLDivElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroBtnRef = useRef<HTMLButtonElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  // Refs for other sections
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const featureCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
  const capabilityCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const faqAccordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero section animation (on mount)
    gsap.fromTo(heroHeadingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
    gsap.fromTo(heroDescRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' });
    gsap.fromTo(heroBtnRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, delay: 1, ease: 'back.out(1.7)' });
    gsap.fromTo(heroImgRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power3.out' });

    // Features section animation
    if (featuresSectionRef.current) {
      gsap.fromTo(
        featuresSectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: featuresSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    if (featureCardRefs.current.length) {
      gsap.fromTo(
        featureCardRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: featuresSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    // CTA section animation
    if (ctaSectionRef.current) {
      gsap.fromTo(
        ctaSectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    // Capabilities section animation
    if (capabilitiesSectionRef.current) {
      gsap.fromTo(
        capabilitiesSectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: capabilitiesSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    if (capabilityCardRefs.current.length) {
      gsap.fromTo(
        capabilityCardRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: capabilitiesSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    // FAQ section animation
    if (faqSectionRef.current) {
      gsap.fromTo(
        faqSectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: faqSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    if (faqAccordionRefs.current.length) {
      gsap.fromTo(
        faqAccordionRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: faqSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const handleFAQChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedFAQ(isExpanded ? panel : false);
  };

  const features = [
    {
      icon: <DatabaseIcon />,
      title: 'Clinical Trial Data Agents',
      description: 'Match patients, extract eligibility, and generate reports',
    },
    {
      icon: <SecurityIcon />,
      title: 'Enterprise Security',
      description: 'SOC2 Type 2 & GDPR compliant with SCIM/SAML integration and advanced role-based access—ensuring Fortune 500-level data protection.',
    },
    {
      icon: <HandshakeIcon />,
      title: 'Premium Partnership',
      description: 'Always-on support with account managers and exclusive founder-led guidance.',
    },
    {
      icon: <BulbIcon />,
      title: 'Advanced AI Capabilities',
      description: 'Fine-tuned LLMs, deep insights, and limitless agentic workflows, built for complexity at scale.',
    },
    {
      icon: <MonitoringIcon />,
      title: 'Unlimited Scalability',
      description: 'Dedicated cloud with unlimited integrations, agentic app scalability, and 99.9% uptime.',
    },
  ];

  const capabilities = [
    {
      title: 'Enterprise Security',
      description: 'SOC2 Type 2, GDPR compliance, SCIM/SAML support, and custom data retention',
    },
    {
      title: 'Unlimited Scale',
      description: 'Custom ACU credits, unlimited agents, unlimited users, and dedicated infrastructure',
    },
    {
      title: 'Advanced Features',
      description: 'Fine-tuned LLM support, advanced analytics, and custom integrations',
    },
    {
      title: 'Premium Support',
      description: '24/7 on-call support, dedicated expert, and private workshops with founders',
    },
  ];

  const faqs = [
    {
      id: 'faq1',
      question: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
      answer:
        'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilibus consequat aliquam.\n\nId placerat dui habitasse quisque nisl tincidunt facilisi mi id. Dictum elit velit.',
    },
    {
      id: 'faq2',
      question: 'Lorem ipsum dolor sit amet consectetur. Viverra.',
      answer: 'Lorem ipsum dolor sit amet consectetur. Answer content here.',
    },
    {
      id: 'faq3',
      question: 'Lorem ipsum dolor sit amet consectetur. Viverra.',
      answer: 'Lorem ipsum dolor sit amet consectetur. Answer content here.',
    },
    {
      id: 'faq4',
      question: 'Lorem ipsum dolor sit amet consectetur. Viverra.',
      answer: 'Lorem ipsum dolor sit amet consectetur. Answer content here.',
    },
  ];

  return (
    <Box sx={{ background: '#080411', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Container
        maxWidth='xl'
        sx={{ py: { xs: 8, md: 10 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            maxWidth: '1280px',
            mx: 'auto',
          }}>
          <Grid
            container
            spacing={5}>
            <Grid
              size={6}
              sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <HeroBadge>
                <GradientText
                  variant='body2'
                  sx={{ fontSize: '15px', fontWeight: 400 }}>
                  AI Driven Enterprise Results
                </GradientText>
              </HeroBadge>

              {/* Hero Heading with ref */}
              <div ref={heroHeadingRef}>
                <Typography
                  variant='h1'
                  sx={{
                    fontSize: { xs: '48px', md: '64px' },
                    fontWeight: 500,
                    lineHeight: 1.1,
                  }}>
                  Scale AI Automation Across
                  <br />
                  <GradientText
                    variant='h1'
                    sx={{
                      fontSize: { xs: '48px', md: '64px' },
                      fontWeight: 500,
                      lineHeight: 1.1,
                    }}>
                    Your Enterprise
                  </GradientText>
                </Typography>
              </div>

              {/* Description with ref */}
              <Typography
                ref={heroDescRef}
                variant='h5'
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  maxWidth: '602px',
                }}>
                Purpose-built for large organizations requiring enterprise-grade security, compliance, and scalability in their AI automation initiatives.
              </Typography>

              {/* Button with ref */}
              <Button
                ref={heroBtnRef}
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
            </Grid>
            <Grid
              size={6}
              display='flex'
              justifyContent='end'>
              {/* Image with ref */}
              <div ref={heroImgRef}>
                <Image
                  src={Interprice}
                  alt='ai-expert'
                  width={500}
                  height={500}
                  style={{ imageRendering: 'crisp-edges', objectFit: 'contain' }}
                />
              </div>
            </Grid>
          </Grid>

          <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
            {/* AI Expertise Visualization */}
            <Box sx={{ position: 'relative', height: '512px', opacity: 0.2 }}>
              <svg
                width='640'
                height='486'
                viewBox='0 0 640 486'
                fill='none'
                style={{ width: '100%', height: '100%' }}>
                <g opacity='0.2'>
                  <path
                    d='M138 0.199997V485.8'
                    stroke='url(#paint0_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M207.6 0.199997V485.8'
                    stroke='url(#paint1_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M277.2 0.199997V485.8'
                    stroke='url(#paint2_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M346.8 0.199997V485.8'
                    stroke='url(#paint3_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M416.4 0.199997V485.8'
                    stroke='url(#paint4_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M486 0.199997V485.8'
                    stroke='url(#paint5_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M640 104.6H0'
                    stroke='url(#paint7_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M640 174.2H0'
                    stroke='url(#paint8_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M640 243.8H0'
                    stroke='url(#paint9_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M640 313.4H0'
                    stroke='url(#paint10_linear)'
                    strokeWidth='0.8'
                  />
                  <path
                    d='M640 383H0'
                    stroke='url(#paint11_linear)'
                    strokeWidth='0.8'
                  />
                </g>
                <defs>
                  <linearGradient
                    id='paint0_linear'
                    x1='138.6'
                    y1='-463.608'
                    x2='137.18'
                    y2='-463.607'
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
                  <linearGradient
                    id='paint1_linear'
                    x1='208.2'
                    y1='-463.608'
                    x2='206.78'
                    y2='-463.607'
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
                  <linearGradient
                    id='paint2_linear'
                    x1='277.8'
                    y1='-463.608'
                    x2='276.381'
                    y2='-463.607'
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
                  <linearGradient
                    id='paint3_linear'
                    x1='347.399'
                    y1='-463.608'
                    x2='345.98'
                    y2='-463.607'
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
                  <linearGradient
                    id='paint4_linear'
                    x1='416.999'
                    y1='-463.608'
                    x2='415.58'
                    y2='-463.607'
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
                  <linearGradient
                    id='paint5_linear'
                    x1='486.6'
                    y1='-463.608'
                    x2='485.18'
                    y2='-463.607'
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
                  <linearGradient
                    id='paint7_linear'
                    x1='383.732'
                    y1='103.645'
                    x2='383.719'
                    y2='107.03'
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
                  <linearGradient
                    id='paint8_linear'
                    x1='383.732'
                    y1='173.245'
                    x2='383.719'
                    y2='176.63'
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
                  <linearGradient
                    id='paint9_linear'
                    x1='383.732'
                    y1='242.845'
                    x2='383.719'
                    y2='246.23'
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
                  <linearGradient
                    id='paint10_linear'
                    x1='383.732'
                    y1='312.445'
                    x2='383.719'
                    y2='315.83'
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
                  <linearGradient
                    id='paint11_linear'
                    x1='383.732'
                    y1='382.045'
                    x2='383.719'
                    y2='385.43'
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
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Features Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box
          sx={{ maxWidth: '1280px', mx: 'auto' }}
          ref={featuresSectionRef}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <HeroBadge sx={{ mb: 2 }}>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
                AI Agents that Drive Scientific Outcomes
              </Typography>
            </HeroBadge>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '40px', md: '56px' },
                fontWeight: 500,
                mb: 4,
              }}>
              AI Handles the Process
              <br />
              <GradientText
                variant='h2'
                sx={{
                  fontSize: { xs: '40px', md: '56px' },
                  fontWeight: 500,
                }}>
                You Create the Progress
              </GradientText>
            </Typography>
            <Typography
              variant='h5'
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '20px',
                maxWidth: '1252px',
                mx: 'auto',
              }}>
              Deploy agents across your research pipeline to reduce review time, extract deep scientific insights, and drive actionable outcomes in days—not months.
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}>
            {features.map((feature, index) => (
              <Grid
                size={index === 0 || index === 1 ? 6 : 4}
                key={index}>
                <div
                  ref={(el) => {
                    featureCardRefs.current[index] = el;
                  }}>
                  <FeatureCard>
                    <IconContainer>{feature.icon}</IconContainer>
                    <Box>
                      <Typography
                        variant='h5'
                        sx={{
                          color: 'white',
                          fontSize: '24px',
                          fontWeight: 500,
                          mb: 2,
                        }}>
                        {feature.title}
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          color: '#F9FAFC',
                          fontSize: '16px',
                          lineHeight: 1.5,
                        }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </FeatureCard>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* CTA Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <div ref={ctaSectionRef}>
          <CTASection sx={{ maxWidth: '1280px', mx: 'auto', px: 6 }}>
            <Box
              sx={{
                width: '548px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 3,
              }}>
              <Typography
                variant='h3'
                sx={{ fontSize: '40px', fontWeight: 500, lineHeight: 1.2 }}>
                Ready to Scale Your
              </Typography>

              <GradientText sx={{ fontSize: '40px', fontWeight: 500, lineHeight: 1.2 }}>Research with AI?</GradientText>

              <Typography
                variant='body1'
                sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px' }}>
                Let&apos;s bring intelligent automation to your team, without the complexity.
              </Typography>
              <Button
                variant='contained'
                sx={{
                  background: '#7352D5',
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
                Book Consultation
              </Button>
            </Box>
            <Box
              display='flex'
              justifyContent='end'>
              <Image
                src={ResearchWithAi}
                alt='ai-expert'
                width={800}
                height={300}
                style={{ imageRendering: 'crisp-edges', objectFit: 'contain' }}
              />
            </Box>
          </CTASection>
        </div>
      </Container>

      {/* Enterprise Capabilities */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box
          sx={{ maxWidth: '1280px', mx: 'auto' }}
          ref={capabilitiesSectionRef}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <HeroBadge sx={{ mb: 2 }}>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px' }}>
                Infrastructure That Grows With You
              </Typography>
            </HeroBadge>
            <GradientText
              variant='h2'
              sx={{
                fontSize: { xs: '40px', md: '56px' },
                fontWeight: 500,
                lineHeight: 1.1,
              }}>
              Enterprise-Grade
              <br />
              Capabilities
            </GradientText>
          </Box>

          <Grid
            container
            spacing={3}>
            {capabilities.map((capability, index) => (
              <Grid
                size={{ xs: 12, md: 6, lg: 3 }}
                key={index}>
                <div
                  ref={(el) => {
                    capabilityCardRefs.current[index] = el;
                  }}>
                  <CapabilityCard>
                    <Typography
                      variant='h6'
                      sx={{ color: 'white', fontSize: '23px', fontWeight: 500 }}>
                      {capability.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ color: 'white', fontSize: '16px', lineHeight: 1.5 }}>
                      {capability.description}
                    </Typography>
                  </CapabilityCard>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* FAQ Section */}
      <div ref={faqSectionRef}>
        <FAQSection>
          <Box
            sx={{
              width: '453px',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}>
            <GradientText
              variant='h2'
              sx={{ fontSize: '56px', fontWeight: 500 }}>
              Frequently
              <br />
              Asked Questions
            </GradientText>
            <Typography
              variant='h5'
              sx={{ color: 'white', fontSize: '24px', fontWeight: 500 }}>
              Having more questions?
            </Typography>
            <Typography
              variant='body1'
              sx={{ color: 'white', fontSize: '16px' }}>
              Contact our support team to get what you need.
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
              Contact Us
            </Button>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {faqs.map((faq, index) => (
              <div
                ref={(el) => {
                  faqAccordionRefs.current[index] = el;
                }}
                key={faq.id}>
                <StyledAccordion
                  expanded={expandedFAQ === faq.id}
                  onChange={handleFAQChange(faq.id)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        alignItems: 'center',
                        gap: 5,
                      },
                    }}>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: 500,
                        minWidth: '40px',
                      }}>
                      {String(index + 1).padStart(2, '0')}
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 500 }}>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '20px',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-line',
                      }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </StyledAccordion>
              </div>
            ))}
          </Box>
        </FAQSection>
      </div>
    </Box>
  );
};

export default EnterprisePage;
