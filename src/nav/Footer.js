// nav/Footer.js - Updated footer with logo image instead of text
import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, Container, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled('footer')({
  position: 'relative',
  marginTop: '4rem',
  padding: '3rem 0 2rem 0',
  background: '#0a1f12',
  color: 'white',
});

const FooterLink = styled(Typography)({
  cursor: 'pointer',
  '&:hover': { color: '#74c69d' },
  transition: 'color 0.2s',
});

export default function Footer() {
  const phoneNumber = "254722796099";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:+${phoneNumber}`;
  const email = "support@capwelsmartvet.co.ke";

  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <FooterContainer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info with Logo */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <img 
                src="/logo.png" 
                alt="CK Smart Vet & Farming Logo" 
                style={{ 
                  height: '50px',
                  margin:'auto', 
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)' // Makes logo white for dark footer background
                }} 
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Professional veterinary services and smart farming solutions for modern agriculture in Nakuru County and beyond.
            </Typography>
            <Box>
              <IconButton href={whatsappLink} target="_blank" sx={{ color: '#25D366' }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton href={callLink} sx={{ color: 'white' }}>
                <PhoneIcon />
              </IconButton>
              <IconButton href={`mailto:${email}`} sx={{ color: 'white' }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#74c69d' }}>
              Quick Links
            </Typography>
            <FooterLink variant="body2" sx={{ mb: 1 }} onClick={() => scrollToSection('services-section')}>
              Veterinary Services
            </FooterLink>
            <FooterLink variant="body2" sx={{ mb: 1 }} onClick={() => scrollToSection('smart-farming-section')}>
              Smart Farming
            </FooterLink>
            <FooterLink variant="body2" sx={{ mb: 1 }} onClick={() => scrollToSection('pricing-section')}>
              Pricing Plans
            </FooterLink>
            <FooterLink variant="body2" sx={{ mb: 1 }} onClick={() => scrollToSection('location-section')}>
              Our Location
            </FooterLink>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#74c69d' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <WhatsAppIcon sx={{ fontSize: 18, color: '#25D366' }} />
              <Typography variant="body2">
                <a href={whatsappLink} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                  {phoneNumber}
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <PhoneIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">
                <a href={callLink} style={{ color: 'white', textDecoration: 'none' }}>
                  +{phoneNumber}
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <EmailIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">{email}</Typography>
            </Box>
          </Grid>

          {/* Location */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#74c69d' }}>
              Location
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <LocationOnIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">Nakuru, Kenya</Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.7, fontSize: '0.75rem' }}>
              Serving Nakuru County<br />and surrounding areas
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} CK Smart Vet & Farming. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}