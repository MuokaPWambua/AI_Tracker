// App.js - Main application with professional theme, animations, and pricing section
import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './nav/Footer';
import TopAppBar from './nav/TopNav';
import Services from './services/Services';
import PricingSection from './components/PricingSection';
import { Typography, Box, Container, Button, Fade, Zoom, Grid } from '@mui/material';
import RequestPopover from './popover/RequestPopover';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PetsIcon from '@mui/icons-material/Pets';

function App() {
  const [open, setOpen] = React.useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  // Contact phone number
  const phoneNumber = "254722796099";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:+${phoneNumber}`;

  return (
    <div className="App">
      <TopAppBar />
      
      {/* Hero Section with Animation */}
      <Box className="hero-section">
        <Box className="hero-overlay">
          <Container maxWidth="lg">
            <Fade in={heroVisible} timeout={1000}>
              <Box className="hero-content">
                <Typography variant="h1" component="h1" className="hero-title">
                  CK Smart Vet & Farming
                </Typography>
                <Typography variant="h5" component="p" className="hero-subtitle">
                  Professional Veterinary Services & Smart Farming Solutions
                </Typography>
                <Box className="hero-buttons">
                  <Button 
                    variant="contained" 
                    size="large" 
                    className="hero-btn primary-btn"
                    startIcon={<WhatsAppIcon />}
                    href={whatsappLink}
                    target="_blank"
                  >
                    WhatsApp Us
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large" 
                    className="hero-btn outline-btn"
                    startIcon={<PhoneIcon />}
                    href={callLink}
                  >
                    Call Now
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Container>
        </Box>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" className="stats-section">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box className="stat-card">
              <PetsIcon className="stat-icon" />
              <Typography variant="h3" className="stat-number">5000+</Typography>
              <Typography variant="body1" className="stat-label">Animals Treated</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="stat-card">
              <AgricultureIcon className="stat-icon" />
              <Typography variant="h3" className="stat-number">2000+</Typography>
              <Typography variant="body1" className="stat-label">Smart Farms</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="stat-card">
              <Typography variant="h3" className="stat-number">98%</Typography>
              <Typography variant="body1" className="stat-label">Success Rate</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="stat-card">
              <Typography variant="h3" className="stat-number">24/7</Typography>
              <Typography variant="body1" className="stat-label">Emergency Support</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box className="services-section">
        <Container maxWidth="lg">
          <Zoom in={true} timeout={800}>
            <Typography variant="h2" component="h2" className="section-title">
              Our Premium Services
            </Typography>
          </Zoom>
          <Typography variant="body1" className="section-subtitle">
            Comprehensive veterinary care and smart farming solutions tailored for modern agriculture
          </Typography>
          <Services handleClickOpen={handleClickOpen} />
        </Container>
      </Box>

      {/* Pricing Section */}
      <PricingSection handleClickOpen={handleClickOpen} />

      {/* Smart Farming Highlight */}
      <Box className="smart-farming-section">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="farming-content">
                <Typography variant="h3" component="h3" className="farming-title">
                  Smart Farming Integration
                </Typography>
                <Typography variant="body1" className="farming-text">
                  Leverage technology for optimal farm management. Our smart farming solutions include 
                  livestock monitoring, automated feeding systems, health tracking, and data-driven 
                  insights to maximize productivity and animal welfare.
                </Typography>
                <Box className="farming-features">
                  {['Real-time Monitoring', 'AI Health Analytics', 'Automated Records', 'Predictive Alerts'].map((feature, idx) => (
                    <Box key={idx} className="feature-chip">
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button 
                  variant="contained" 
                  className="farming-btn"
                  onClick={handleClickOpen}
                >
                  Request Consultation
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="farming-image">
                <div className="image-placeholder smart-farm-bg"></div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Location Section - Nakuru */}
      <Box className="location-section">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" className="section-title">
            Our Location
          </Typography>
          <Typography variant="body1" className="section-subtitle">
            Serving Nakuru County and surrounding regions
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className="location-info">
                <Box className="location-address">
                  <LocationOnIcon className="location-icon" />
                  <Typography variant="h6">Nakuru, Kenya</Typography>
                </Box>
                <Typography variant="body2" className="address-details">
                  Main Office: Nakuru CBD, Kenyatta Avenue<br />
                  Service Areas: Nakuru Town, Lanet, Njoro, Molo, and surrounding sub-counties<br />
                  Emergency response available across Nakuru County
                </Typography>
                <Box className="contact-actions">
                  <Button 
                    variant="contained" 
                    className="contact-btn whatsapp-btn"
                    startIcon={<WhatsAppIcon />}
                    href={whatsappLink}
                    target="_blank"
                  >
                    WhatsApp: {phoneNumber}
                  </Button>
                  <Button 
                    variant="outlined" 
                    className="contact-btn call-btn"
                    startIcon={<PhoneIcon />}
                    href={callLink}
                  >
                    Call: +{phoneNumber}
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021895.547452479!2d35.38601675434924!3d-0.3030991972480339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b5a4b8c9b1b1b%3A0x8b5a4b8c9b1b1b!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  title="Nakuru Location Map"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
      <RequestPopover
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;