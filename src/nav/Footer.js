// nav/Footer.js - Capwel SmartVet footer with social media
import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, Container, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import VerifiedIcon from '@mui/icons-material/Verified';

// Social media SVG icons as inline components
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const FooterContainer = styled('footer')({
  position: 'relative',
  marginTop: '4rem',
  padding: '4rem 0 2rem 0',
  background: 'linear-gradient(135deg, #0a1f12 0%, #071509 100%)',
  color: 'white',
});

const FooterLink = styled(Typography)({
  cursor: 'pointer',
  marginBottom: '0.5rem',
  display: 'block',
  opacity: 0.75,
  transition: 'all 0.2s',
  '&:hover': { color: '#74c69d', opacity: 1 },
});

const SocialButton = styled(IconButton)({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.15)',
  color: 'rgba(255,255,255,0.7)',
  transition: 'all 0.3s',
  '&:hover': {
    background: '#2d6a4f',
    color: 'white',
    border: '1px solid #2d6a4f',
    transform: 'translateY(-3px)',
  },
});

export default function Footer() {
  const primaryPhone = "254722796099";
  const secondaryPhone = "254701379195";
  const whatsappLink = `https://wa.me/${primaryPhone}`;
  const callLink = `tel:+${primaryPhone}`;
  const callLink2 = `tel:+${secondaryPhone}`;
  const email = "info@capwelsmartvet.co.ke";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <FooterContainer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <img
                src="/logo.png"
                alt="Capwel SmartVet Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </Box>
            <Box sx={{ mb: 1 }}>
              
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}>
                Capwel SmartVet
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <VerifiedIcon sx={{ fontSize: 16, color: '#74c69d' }} />
                <Typography variant="caption" sx={{ color: '#74c69d' }}>
                  KVB Registered
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.7, lineHeight: 1.7 }}>
              Reliable, modern veterinary services for farmers and livestock owners across Nakuru County and beyond.
            </Typography>

            {/* Social Media */}
            <Typography variant="caption" sx={{ display: 'block', mb: 1.5, color: '#74c69d', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SocialButton
                href="https://www.facebook.com/capwelsmartvet"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook: Capwel Smart Vet"
              >
                <FacebookIcon />
              </SocialButton>
              <SocialButton
                href="https://www.tiktok.com/@capwelsmartvet"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                title="TikTok: @capwel smart vet"
              >
                <TikTokIcon />
              </SocialButton>
              <SocialButton
                href="https://www.instagram.com/capwelsmartvet"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram: @capwel smart vet"
              >
                <InstagramIcon />
              </SocialButton>
              <SocialButton
                href="https://www.youtube.com/@capwelsmartvet"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                title="YouTube: Capwel Smart Vet"
              >
                <YouTubeIcon />
              </SocialButton>
              <SocialButton
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                sx={{ '&:hover': { background: '#25D366 !important', border: '1px solid #25D366 !important' } }}
              >
                <WhatsAppIcon sx={{ fontSize: 20 }} />
              </SocialButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#74c69d', fontSize: '0.95rem' }}>
              Quick Links
            </Typography>
            {[
              { label: 'Home', id: 'home' },
              { label: 'Services', id: 'services' },
              { label: 'About Us', id: 'about' },
              { label: 'Farmer Tips', id: 'tips' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <FooterLink key={link.id} variant="body2" onClick={() => scrollToSection(link.id)}>
                {link.label}
              </FooterLink>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#74c69d', fontSize: '0.95rem' }}>
              Services
            </Typography>
            {['Health Service', 'Vaccination', 'Artificial Insemination', 'Consultancy', 'Emergency Care', 'Nutrition'].map((s) => (
              <FooterLink key={s} variant="body2" onClick={() => scrollToSection('services')}>
                {s}
              </FooterLink>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#74c69d', fontSize: '0.95rem' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <WhatsAppIcon sx={{ fontSize: 18, color: '#25D366', flexShrink: 0 }} />
              <Typography variant="body2">
                <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                  +254 722 796 099
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <PhoneIcon sx={{ fontSize: 18, flexShrink: 0, opacity: 0.7 }} />
              <Typography variant="body2">
                <a href={callLink} style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                  +254 722 796 099
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <PhoneIcon sx={{ fontSize: 18, flexShrink: 0, opacity: 0.7 }} />
              <Typography variant="body2">
                <a href={callLink2} style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                  +254 701 379 195
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <EmailIcon sx={{ fontSize: 18, flexShrink: 0, opacity: 0.7 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>{email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <LocationOnIcon sx={{ fontSize: 18, flexShrink: 0, opacity: 0.7, mt: 0.2 }} />
              <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.7 }}>
                Nakuru, Kenya<br />
                Dundori · Olkalou · Gwa Kiongo<br />
                Lanet · Njoro · Molo
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box sx={{ textAlign: 'center', mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Typography variant="body2" sx={{ opacity: 0.5, fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Capwel SmartVet. All rights reserved. &nbsp;|&nbsp; KVB Registration No. VTC 7667
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}