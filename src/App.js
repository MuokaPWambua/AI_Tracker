// App.js - Capwel SmartVet - Full updated version
import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './nav/Footer';
import TopAppBar from './nav/TopNav';
import Services from './services/Services';
import PricingSection from './components/PricingSection';
import { Typography, Box, Container, Button, Fade, Zoom, Grid, Avatar } from '@mui/material';
import RequestPopover from './popover/RequestPopover';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PetsIcon from '@mui/icons-material/Pets';
import VerifiedIcon from '@mui/icons-material/Verified';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StarIcon from '@mui/icons-material/Star';

function App() {
  const [open, setOpen] = React.useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const primaryPhone = "254722796099";
  const secondaryPhone = "254701379195";
  const whatsappLink = `https://wa.me/${primaryPhone}`;
  const callLink = `tel:+${primaryPhone}`;
  const callLink2 = `tel:+${secondaryPhone}`;

  // Testimonials data
  const testimonials = [
    {
      name: "John Kamau",
      location: "Dundori",
      text: "Very reliable vet, responds fast. My dairy cows are healthier than ever since we started working with Capwel SmartVet.",
      rating: 5,
      animal: "Dairy Cattle"
    },
    {
      name: "Mary Wanjiku",
      location: "Nakuru",
      text: "Helped my cow recover quickly after a difficult delivery. Professional service and very knowledgeable.",
      rating: 5,
      animal: "Dairy Cow"
    },
    {
      name: "Peter Mwangi",
      location: "Olkalou",
      text: "The AI service was excellent. High success rate and great follow-up care. Highly recommend!",
      rating: 5,
      animal: "Friesian Cattle"
    },
    {
      name: "Grace Njeri",
      location: "Gwa Kiongo",
      text: "Best vet around. Always available, even for emergencies. My goat herd has never been healthier.",
      rating: 5,
      animal: "Goats"
    }
  ];

  // Farmer Tips data
  const farmerTips = [
    {
      title: "Signs Your Cow Is On Heat",
      excerpt: "Learn how to identify the 18–24 hour window when your cow is ready for breeding. Timing is everything for a successful pregnancy.",
      icon: "🐄",
      tag: "Breeding"
    },
    {
      title: "How to Increase Milk Production",
      excerpt: "Simple feeding, hydration and routine adjustments that can significantly boost your dairy cow's daily milk output.",
      icon: "🥛",
      tag: "Dairy Farming"
    },
    {
      title: "Why Cows Suck Themselves",
      excerpt: "This common frustrating behavior has solutions. Understand the causes—nutritional, behavioral or management-related—and how to stop it.",
      icon: "💡",
      tag: "Animal Behavior"
    },
    {
      title: "Essential Vaccination Schedule for Livestock",
      excerpt: "A practical calendar for vaccinating your cattle, goats, and sheep in Kenya. Prevention is always cheaper than treatment.",
      icon: "💉",
      tag: "Preventive Care"
    },
    {
      title: "Signs of Mastitis in Dairy Cows",
      excerpt: "Catch mastitis early to save your milk production and your cow's health. Know what to look for and when to call your vet.",
      icon: "🔍",
      tag: "Disease Management"
    },
    {
      title: "Feeding Your Goats for Maximum Growth",
      excerpt: "The right mineral supplements, fodder combinations, and grazing strategies to keep your goats thriving year-round.",
      icon: "🐐",
      tag: "Nutrition"
    }
  ];

  // Service areas
  const serviceAreas = ["Nakuru", "Dundori", "Olkalou", "Gwa Kiongo", "Lanet", "Njoro", "Molo"];

  return (
    <div className="App">
      <TopAppBar />

      {/* ─── HERO SECTION ─────────────────────────────────────── */}
      <Box className="hero-section" id="home">
        <Box className="hero-overlay">
          <Container maxWidth="lg">
            <Fade in={heroVisible} timeout={1000}>
              <Box className="hero-content">
                <Typography variant="h1" component="h1" className="hero-title">
                  Professional Veterinary Services in Nakuru &amp; Surrounding Areas
                </Typography>
                <Typography variant="h5" component="p" className="hero-subtitle">
                  Licensed Vet &nbsp;|&nbsp; On-Call &amp; Farm Visits Available
                </Typography>
                <Box className="hero-badges">
                  <Box className="hero-badge">
                    <VerifiedIcon fontSize="small" /> KVB Registered
                  </Box>
                  <Box className="hero-badge">
                    <AgricultureIcon fontSize="small" /> Farm Visits
                  </Box>
                  <Box className="hero-badge">
                    <PetsIcon fontSize="small" /> Emergency Care
                  </Box>
                </Box>
                <Box className="hero-buttons">
                  <Button
                    variant="contained"
                    size="large"
                    className="hero-btn primary-btn"
                    startIcon={<PhoneIcon />}
                    href={callLink}
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    className="hero-btn outline-btn"
                    startIcon={<WhatsAppIcon />}
                    href={whatsappLink}
                    target="_blank"
                  >
                    WhatsApp Us
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Container>
        </Box>
      </Box>

      {/* ─── STATS SECTION ────────────────────────────────────── */}
      <Container maxWidth="lg" className="stats-section">
        <Grid container spacing={4}>
          {[
            { icon: <PetsIcon className="stat-icon" />, number: "5000+", label: "Animals Treated" },
            { icon: <AgricultureIcon className="stat-icon" />, number: "2000+", label: "Farmers Served" },
            { icon: null, number: "98%", label: "Success Rate" },
            { icon: null, number: "24/7", label: "Emergency Support" },
          ].map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Box className="stat-card">
                {stat.icon}
                <Typography variant="h3" className="stat-number">{stat.number}</Typography>
                <Typography variant="body1" className="stat-label">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ─── SERVICES SECTION ─────────────────────────────────── */}
      <Box className="services-section" id="services">
        <Container maxWidth="lg">
          <Zoom in timeout={800}>
            <Typography variant="h2" component="h2" className="section-title">
              Our Services
            </Typography>
          </Zoom>
          <Typography variant="body1" className="section-subtitle">
            Comprehensive veterinary care tailored for livestock farmers across Nakuru County
          </Typography>
          <Services handleClickOpen={handleClickOpen} />
        </Container>
      </Box>

      {/* ─── ABOUT SECTION ────────────────────────────────────── */}
      <Box className="about-section" id="about">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box className="about-image-wrapper">
                <div className="about-vet-image"></div>
                <Box className="about-credential-badge">
                  <VerifiedIcon sx={{ color: '#2d6a4f', fontSize: 28 }} />
                  <Box>
                    <Typography variant="caption" sx={{ display: 'block', color: '#555', lineHeight: 1 }}>
                      KVB Registered
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1a472a' }}>
                      Reg. No. VTC 7667
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className="about-content">
                <Typography variant="overline" className="about-overline">
                  About Us
                </Typography>
                <Typography variant="h3" className="about-title">
                  Capwel SmartVet
                </Typography>
                <Typography variant="h6" className="about-vet-name">
                  Led by Capwel Karogo Mwangi — VTC Reg. No. 7667
                </Typography>
                <Typography variant="body1" className="about-text">
                  At Capwel SmartVet, we are dedicated to delivering reliable, modern, and accessible veterinary
                  services to farmers and pet owners across Kenya. With a strong focus on animal health, productivity,
                  and farmer success, we combine hands-on expertise with practical solutions tailored to local needs.
                </Typography>
                <Typography variant="body1" className="about-text">
                  I provide reliable, on-farm veterinary services to farmers across Nakuru, helping improve livestock
                  health, productivity, and profitability. Our practice is built on professionalism, integrity, and a
                  deep understanding of livestock and companion animal care.
                </Typography>
                <Box className="about-specialties">
                  {[
                    "Livestock Health Management",
                    "Breeding & Reproductive Services",
                    "Vaccination & Preventive Care",
                    "On-Farm Veterinary Consultancy",
                    "Disease Control & Management",
                    "Digital Farming Advisory",
                  ].map((item, i) => (
                    <Box key={i} className="specialty-item">
                      <VerifiedIcon sx={{ fontSize: 18, color: '#74c69d' }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  className="about-btn"
                  startIcon={<WhatsAppIcon />}
                  href={whatsappLink}
                  target="_blank"
                >
                  Book a Farm Visit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── PRICING SECTION ──────────────────────────────────── */}
      <PricingSection handleClickOpen={handleClickOpen} />

      {/* ─── SERVICE AREAS ────────────────────────────────────── */}
      <Box className="areas-section">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title">
            Areas We Serve
          </Typography>
          <Typography variant="body1" className="section-subtitle">
            We offer on-call and farm visits across Nakuru County and surrounding regions
          </Typography>
          <Box className="areas-grid">
            {serviceAreas.map((area, i) => (
              <Box key={i} className="area-chip">
                <LocationOnIcon sx={{ fontSize: 18, color: '#2d6a4f' }} />
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{area}</Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="body2" className="areas-note">
            Not on the list? Call us — we may still be able to reach you.
          </Typography>
        </Container>
      </Box>

      {/* ─── FARMER TIPS SECTION ──────────────────────────────── */}
      <Box className="tips-section" id="tips">
        <Container maxWidth="lg">
          <Box className="tips-header">
            <TipsAndUpdatesIcon className="tips-header-icon" />
            <Typography variant="overline" className="tips-overline">
              Farmer Tips
            </Typography>
          </Box>
          <Typography variant="h2" className="section-title">
            Free Farming Knowledge
          </Typography>
          <Typography variant="body1" className="section-subtitle">
            Expert advice to improve your livestock health and farm productivity — straight from the vet
          </Typography>
          <Grid container spacing={3} className="tips-grid">
            {farmerTips.map((tip, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box className="tip-card">
                  <Box className="tip-emoji">{tip.icon}</Box>
                  <Box className="tip-tag">{tip.tag}</Box>
                  <Typography variant="h6" className="tip-title">{tip.title}</Typography>
                  <Typography variant="body2" className="tip-excerpt">{tip.excerpt}</Typography>
                  <Button
                    className="tip-btn"
                    endIcon={<WhatsAppIcon />}
                    href={`https://wa.me/${primaryPhone}?text=Hello Capwel SmartVet, I'd like to know more about: ${encodeURIComponent(tip.title)}`}
                    target="_blank"
                  >
                    Ask the Vet
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <Box className="testimonials-section" id="testimonials">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title light-title">
            What Farmers Say
          </Typography>
          <Typography variant="body1" className="section-subtitle" sx={{ color: 'rgba(255,255,255,0.75)' }}>
            Real feedback from farmers we have served across Nakuru County
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((t, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box className="testimonial-card">
                  <FormatQuoteIcon className="quote-icon" />
                  <Typography variant="body2" className="testimonial-text">
                    "{t.text}"
                  </Typography>
                  <Box className="testimonial-stars">
                    {[...Array(t.rating)].map((_, s) => (
                      <StarIcon key={s} sx={{ fontSize: 16, color: '#f9c74f' }} />
                    ))}
                  </Box>
                  <Box className="testimonial-author">
                    <Avatar className="testimonial-avatar">
                      {t.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1a472a' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#777' }}>
                        {t.location} · {t.animal}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── LOCATION SECTION ─────────────────────────────────── */}
      <Box className="location-section" id="contact">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" className="section-title">
            Find &amp; Contact Us
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
                  Service Areas: Nakuru Town, Dundori, Olkalou, Gwa Kiongo, Lanet, Njoro, Molo
                  and surrounding sub-counties.<br />
                  Emergency response available across Nakuru County.
                </Typography>
                <Box className="contact-actions">
                  <Button
                    variant="contained"
                    className="contact-btn whatsapp-btn"
                    startIcon={<WhatsAppIcon />}
                    href={whatsappLink}
                    target="_blank"
                  >
                    WhatsApp: 0722 796 099
                  </Button>
                  <Button
                    variant="outlined"
                    className="contact-btn call-btn"
                    startIcon={<PhoneIcon />}
                    href={callLink}
                  >
                    Call: 0722 796 099
                  </Button>
                  <Button
                    variant="outlined"
                    className="contact-btn call-btn"
                    startIcon={<PhoneIcon />}
                    href={callLink2}
                  >
                    Call: 0701 379 195
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
      <RequestPopover open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
    </div>
  );
}

export default App;