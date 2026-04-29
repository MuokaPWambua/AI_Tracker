// components/PricingSection.js - Capwel SmartVet branding update
import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Zoom, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VideocamIcon from '@mui/icons-material/Videocam';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const PHONE_NUMBER = "254722796099";
const BRAND = "Capwel SmartVet";

const handleWhatsAppRequest = (planName, planPrice, category, features) => {
  const featuresList = features.join(', ');
  const message =
    `Hello ${BRAND},%0A%0A*Pricing Plan Request*%0A%0A` +
    `📋 *Category:* ${category}%0A` +
    `💳 *Plan:* ${planName}%0A` +
    `💰 *Price:* ${planPrice}%0A` +
    `✨ *Features:* ${featuresList}%0A%0A` +
    `📍 *Location:* %0A%0A` +
    `🙋 *Request:* I am interested in this plan. Please provide more details and availability.%0A%0AThank you!`;
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
};

const pricingData = {
  cctv: {
    title: "CCTV Installation (Farm Monitoring)",
    icon: <VideocamIcon />,
    category: "CCTV Installation",
    plans: [
      { name: "Basic Setup", price: "KSh 20,000", features: ["2 Cameras", "Installation included", "Setup & Training", "24/7 Recording"], popular: false },
      { name: "Standard Setup", price: "KSh 35,000", features: ["4 Cameras", "Installation included", "Setup & Training", "Night Vision", "Remote Access"], popular: true },
      { name: "Advanced Setup", price: "KSh 50,000+", features: ["6–8 Cameras", "Installation included", "Setup & Training", "AI Motion Detection", "Cloud Backup"], popular: false }
    ]
  },
  monitoring: {
    title: "SmartFarm Monthly Monitoring",
    icon: <AnalyticsIcon />,
    category: "SmartFarm Monitoring",
    plans: [
      { name: "Basic Plan", price: "KSh 2,000 / month", features: ["Heat Detection Guidance", "Basic Behaviour Monitoring", "Email Reports", "Remote Support"], popular: false },
      { name: "Premium Plan", price: "KSh 5,000 / month", features: ["Advanced Heat Detection", "Full Behaviour Monitoring", "Real-time Alerts", "Priority Support", "Health Analytics"], popular: true }
    ]
  },
  layout: {
    title: "Farm Layout Optimization",
    icon: <AgricultureIcon />,
    category: "Farm Layout Optimization",
    plans: [
      { name: "Small Farms", price: "KSh 3,000", features: ["Zero Grazing Design", "Feeding Efficiency", "Movement Optimization", "Basic Consultation"], popular: false },
      { name: "Medium Farms", price: "KSh 5,000", features: ["Zero Grazing Design", "Feeding & Movement Efficiency", "Space Utilization", "Detailed Report"], popular: true },
      { name: "Large Farms", price: "KSh 10,000", features: ["Complete Layout Design", "Advanced Efficiency Analysis", "Full Space Utilization", "Follow-up Support"], popular: false }
    ]
  },
  veterinary: {
    title: "Veterinary & Breeding Services",
    icon: <PetsIcon />,
    category: "Veterinary Services",
    plans: [
      { name: "Artificial Insemination (AI)", price: "KSh 1,500 – 3,000", features: ["Local & Imported Genetics", "Expert Technicians", "High Success Rate", "Follow-up Care"], popular: true },
      { name: "Farm Visit & Consultation", price: "KSh 2,000", features: ["On-site Assessment", "Expert Consultation", "Health Recommendations", "Farm Report"], popular: false },
      { name: "Disease Management", price: "Varies", features: ["Vaccination Programs", "Disease Diagnosis", "Treatment Plans", "Prevention Strategies"], popular: false }
    ]
  }
};

const StyledPricingCard = styled(Card)(() => ({
  borderRadius: '24px',
  height: '100%',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
  },
}));

const StyledButton = styled(Button)(({ variant }) => ({
  borderRadius: '50px',
  padding: '12px',
  fontWeight: 600,
  textTransform: 'none',
  marginTop: '1rem',
  ...(variant === 'contained' && {
    backgroundColor: '#1a472a',
    '&:hover': { backgroundColor: '#2d6a4f', transform: 'translateY(-2px)' },
  }),
  ...(variant === 'outlined' && {
    borderColor: '#2d6a4f',
    color: '#2d6a4f',
    '&:hover': { backgroundColor: '#1a472a', borderColor: '#1a472a', color: 'white', transform: 'translateY(-2px)' },
  }),
}));

function PricingCard({ plan, category }) {
  return (
    <Fade in timeout={600}>
      <StyledPricingCard className={plan.popular ? 'popular-card' : ''}>
        {plan.popular && (
          <Box className="popular-badge">
            <Typography variant="caption" sx={{ fontWeight: 600 }}>Most Popular</Typography>
          </Box>
        )}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a472a', textAlign: 'center', mb: 1 }}>
            {plan.name}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#2d6a4f', textAlign: 'center', mb: 2, fontSize: '1.75rem !important' }}>
            {plan.price}
          </Typography>
          <Box sx={{ mt: 2 }}>
            {plan.features.map((feature, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <CheckCircleIcon sx={{ fontSize: '1.1rem', color: '#74c69d', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#444' }}>{feature}</Typography>
              </Box>
            ))}
          </Box>
          <StyledButton
            variant={plan.popular ? 'contained' : 'outlined'}
            fullWidth
            onClick={() => handleWhatsAppRequest(plan.name, plan.price, category, plan.features)}
          >
            Request Service
          </StyledButton>
        </CardContent>
      </StyledPricingCard>
    </Fade>
  );
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('veterinary');

  const tabs = [
    { id: 'veterinary', label: 'Vet Services', icon: <LocalHospitalIcon /> },
    { id: 'cctv', label: 'CCTV Installation', icon: <VideocamIcon /> },
    { id: 'monitoring', label: 'Smart Monitoring', icon: <AnalyticsIcon /> },
    { id: 'layout', label: 'Farm Layout', icon: <AgricultureIcon /> },
  ];

  return (
    <Box className="pricing-section" sx={{ py: 8, background: 'linear-gradient(135deg, #f0f5ec 0%, #e8f0e5 100%)' }}>
      <Container maxWidth="lg">
        <Zoom in timeout={800}>
          <Typography variant="h2" component="h2" className="section-title" sx={{ textAlign: 'center', fontWeight: 700, color: '#1a472a', mb: 1 }}>
            Pricing Plans
          </Typography>
        </Zoom>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#555', maxWidth: 600, mx: 'auto', mb: 5 }}>
          Transparent, affordable pricing for all your farming and veterinary needs
        </Typography>

        {/* Tab Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 5 }}>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              startIcon={tab.icon}
              sx={{
                borderRadius: '50px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: activeTab === tab.id ? '#1a472a' : 'white',
                color: activeTab === tab.id ? 'white' : '#2d6a4f',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                '&:hover': { backgroundColor: '#2d6a4f', color: 'white' },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>

        {/* Category Title */}
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 600, color: '#1a472a', mb: 4 }}>
          {pricingData[activeTab].title}
        </Typography>

        {/* Pricing Cards */}
        <Grid container spacing={4}>
          {pricingData[activeTab].plans.map((plan, index) => (
            <Grid
              item
              xs={12}
              md={activeTab === 'monitoring' ? 6 : 4}
              key={index}
            >
              <PricingCard plan={plan} category={pricingData[activeTab].category} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5, p: 2, backgroundColor: 'rgba(45,106,79,0.1)', borderRadius: 3 }}>
          <Typography variant="body2" sx={{ color: '#2d6a4f' }}>
            * Disease Management & Vaccination prices vary based on specific requirements.{' '}
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=Hello ${BRAND}, I need a custom quote for veterinary services.`}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#1a472a', fontWeight: 700 }}
            >
              Contact us for a custom quote →
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}