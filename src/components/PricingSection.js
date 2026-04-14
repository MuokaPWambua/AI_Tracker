// components/PricingSection.js - Professional pricing grid with all service plans
import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Zoom, Fade } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VideocamIcon from '@mui/icons-material/Videocam';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const pricingData = {
  cctv: {
    title: "CCTV Installation (Farm Monitoring)",
    icon: <VideocamIcon />,
    plans: [
      { name: "Basic Setup", price: "KSh 20,000", features: ["2 Cameras", "Installation included", "Setup & Training", "24/7 Recording"], popular: false },
      { name: "Standard Setup", price: "KSh 35,000", features: ["4 Cameras", "Installation included", "Setup & Training", "Night Vision", "Remote Access"], popular: true },
      { name: "Advanced Setup", price: "KSh 50,000+", features: ["6–8 Cameras", "Installation included", "Setup & Training", "AI Motion Detection", "Cloud Backup"], popular: false }
    ]
  },
  monitoring: {
    title: "SmartFarm Monthly Monitoring",
    icon: <AnalyticsIcon />,
    plans: [
      { name: "Basic Plan", price: "KSh 2,000 / month", features: ["Heat Detection Guidance", "Basic Behaviour Monitoring", "Email Reports", "Remote Support"], popular: false },
      { name: "Premium Plan", price: "KSh 5,000 / month", features: ["Advanced Heat Detection", "Full Behaviour Monitoring", "Real-time Alerts", "Priority Support", "Health Analytics"], popular: true }
    ]
  },
  layout: {
    title: "Farm Layout Optimization",
    icon: <AgricultureIcon />,
    plans: [
      { name: "Small Farms", price: "KSh 3,000", features: ["Zero Grazing Design", "Feeding Efficiency", "Movement Optimization", "Basic Consultation"], popular: false },
      { name: "Medium Farms", price: "KSh 5,000", features: ["Zero Grazing Design", "Feeding & Movement Efficiency", "Space Utilization", "Detailed Report"], popular: true },
      { name: "Large Farms", price: "KSh 10,000", features: ["Complete Layout Design", "Advanced Efficiency Analysis", "Full Space Utilization", "Follow-up Support"], popular: false }
    ]
  },
  veterinary: {
    title: "Veterinary & Breeding Services",
    icon: <PetsIcon />,
    plans: [
      { name: "Artificial Insemination (AI)", price: "KSh 1,500 – 3,000", features: ["Local & Imported Genetics", "Expert Technicians", "High Success Rate", "Follow-up Care"], popular: true },
      { name: "Farm Visit & Consultation", price: "KSh 2,000", features: ["On-site Assessment", "Expert Consultation", "Health Recommendations", "Farm Report"], popular: false },
      { name: "Disease Management", price: "Varies", features: ["Vaccination Programs", "Disease Diagnosis", "Treatment Plans", "Prevention Strategies"], popular: false }
    ]
  }
};

function PricingCard({ plan, category, onRequest }) {
  return (
    <Fade in timeout={600}>
      <Card className={`pricing-card ${plan.popular ? 'popular-card' : ''}`}>
        {plan.popular && (
          <Box className="popular-badge">
            <Typography variant="caption">Most Popular</Typography>
          </Box>
        )}
        <CardContent>
          <Typography variant="h5" className="pricing-plan-name">
            {plan.name}
          </Typography>
          <Typography variant="h3" className="pricing-price">
            {plan.price}
          </Typography>
          <Box className="pricing-features">
            {plan.features.map((feature, idx) => (
              <Box key={idx} className="feature-item">
                <CheckCircleIcon className="feature-icon" />
                <Typography variant="body2">{feature}</Typography>
              </Box>
            ))}
          </Box>
          <Button 
            variant={plan.popular ? "contained" : "outlined"} 
            className="pricing-btn"
            onClick={onRequest}
            fullWidth
          >
            Request Service
          </Button>
        </CardContent>
      </Card>
    </Fade>
  );
}

export default function PricingSection({ handleClickOpen }) {
  const [activeTab, setActiveTab] = useState('cctv');

  const tabs = [
    { id: 'cctv', label: 'CCTV Installation', icon: <VideocamIcon /> },
    { id: 'monitoring', label: 'Smart Monitoring', icon: <AnalyticsIcon /> },
    { id: 'layout', label: 'Farm Layout', icon: <AgricultureIcon /> },
    { id: 'veterinary', label: 'Vet Services', icon: <LocalHospitalIcon /> }
  ];

  return (
    <Box className="pricing-section">
      <Container maxWidth="lg">
        <Zoom in timeout={800}>
          <Typography variant="h2" component="h2" className="section-title">
            Pricing Plans
          </Typography>
        </Zoom>
        <Typography variant="body1" className="section-subtitle">
          Transparent, affordable pricing for all your farming and veterinary needs
        </Typography>

        {/* Tab Navigation */}
        <Box className="pricing-tabs">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              className={`pricing-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              startIcon={tab.icon}
            >
              {tab.label}
            </Button>
          ))}
        </Box>

        {/* Pricing Cards Grid */}
        <Grid container spacing={4} className="pricing-grid">
          {pricingData[activeTab].plans.map((plan, index) => (
            <Grid item xs={12} md={activeTab === 'veterinary' ? 4 : activeTab === 'monitoring' ? 6 : 4} key={index}>
              <PricingCard plan={plan} category={activeTab} onRequest={handleClickOpen} />
            </Grid>
          ))}
        </Grid>

        {/* Note for variable pricing */}
        <Box className="pricing-note">
          <Typography variant="body2">
            * Disease Management & Vaccination prices vary based on specific requirements. Contact us for a custom quote.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}