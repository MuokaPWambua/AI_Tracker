// services/Services.js - Capwel SmartVet - Updated services including Emergency & Goat/Sheep care
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const PHONE_NUMBER = "254722796099";
const BRAND = "Capwel SmartVet";

const handleWhatsAppRequest = (serviceName, serviceDetails) => {
  const message = `Hello ${BRAND},%0A%0A*Service Request*%0A%0A📋 *Service:* ${serviceName}%0A📝 *Details:* ${serviceDetails}%0A%0A📍 *My Location:* %0A🐄 *Animal Type:* %0A%0A🙋 *Request:* I would like to request this service. Please contact me with more information.%0A%0AThank you!`;
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
};

const StyledCard = styled(Card)(() => ({
  borderRadius: '20px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
  },
}));

const StyledCardMedia = styled(CardMedia)({ height: '200px', objectFit: 'cover' });

const StyledButton = styled(Button)(() => ({
  borderRadius: '50px',
  padding: '10px 20px',
  fontWeight: 600,
  textTransform: 'none',
  backgroundColor: '#1a472a',
  '&:hover': { backgroundColor: '#2d6a4f', transform: 'translateY(-2px)' },
}));

const ServiceCard = ({ image, title, description, serviceName, serviceDetails, tag }) => (
  <StyledCard>
    <Box sx={{ position: 'relative' }}>
      <StyledCardMedia component="img" alt={title} image={image} />
      {tag && (
        <Box sx={{
          position: 'absolute', top: 12, left: 12,
          background: '#1a472a', color: 'white',
          px: 1.5, py: 0.5, borderRadius: '50px',
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em'
        }}>
          {tag}
        </Box>
      )}
    </Box>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a472a' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{ p: 2, pt: 0 }}>
      <StyledButton fullWidth variant="contained" onClick={() => handleWhatsAppRequest(serviceName, serviceDetails)}>
        Request Service
      </StyledButton>
    </CardActions>
  </StyledCard>
);

// ─── Individual service definitions ────────────────────────────────────────────

export function DairyCowService() {
  return (
    <ServiceCard
      image="/dairy_cow.jpg"
      title="Dairy Cow Treatment"
      tag="Most Requested"
      description="Comprehensive health management for your dairy herd including diagnosis, treatment, disease prevention, and productivity optimization for maximum milk output."
      serviceName="Dairy Cow Treatment"
      serviceDetails="Dairy cow health management including diagnosis, treatment, disease prevention and productivity optimization."
    />
  );
}

export function VaccinationService() {
  return (
    <ServiceCard
      image="/vaccination.jpg"
      title="Vaccination Programs"
      description="Structured vaccination schedules to protect your livestock against common diseases. We handle cattle, goats, sheep, and poultry across Nakuru County."
      serviceName="Vaccination Program"
      serviceDetails="Vaccination scheduling and administration for cattle, goats, sheep, and poultry."
    />
  );
}

export function ArtificialInseminationService() {
  return (
    <ServiceCard
      image="/ai.jpg"
      title="Breeding & AI Services"
      tag="High Success Rate"
      description="Access local and imported genetics for your cattle farm. Our expert AI technicians deliver high success rates with full follow-up care included."
      serviceName="Artificial Insemination Service"
      serviceDetails="AI breeding with local and imported genetics. Expert technicians with high success rates and follow-up care."
    />
  );
}

export function EmergencyService() {
  return (
    <ServiceCard
      image="/emergency_vet.jpg"
      title="Emergency Care"
      tag="24/7"
      description="Round-the-clock emergency veterinary response for critical animal conditions. Fast response times across Nakuru, Dundori, Olkalou and surrounding areas."
      serviceName="Emergency Veterinary Care"
      serviceDetails="24/7 emergency response for critical animal conditions. On-call farm visits available."
    />
  );
}

export function GoatSheepService() {
  return (
    <ServiceCard
      image="/goat_sheep.jpg"
      title="Goat & Sheep Care"
      description="Specialized small ruminant health services including treatment, deworming, vaccination, breeding support, and nutritional guidance for goat and sheep farmers."
      serviceName="Goat & Sheep Care"
      serviceDetails="Small ruminant health including treatment, deworming, vaccination, breeding support, and nutrition."
    />
  );
}

export function ConsultancyService() {
  return (
    <ServiceCard
      image="/consulting.avif"
      title="Consultancy Service"
      description="Expert guidance on animal behavior, welfare, management, feeding, breeding, and disease prevention strategies to improve the health and productivity of your livestock."
      serviceName="Veterinary Consultancy"
      serviceDetails="Expert guidance on animal behavior, welfare, management, feeding, breeding, and disease prevention."
    />
  );
}

export function NutritionService() {
  return (
    <ServiceCard
      image="/animal_nutrition.jpg"
      title="Nutrition Service"
      description="Professional dietary guidance tailored to your animals' life stages and health conditions, ensuring optimal growth, milk production, and overall wellbeing."
      serviceName="Animal Nutrition Service"
      serviceDetails="Dietary guidance for different life stages including feeds, supplements and ration balancing."
    />
  );
}

export function AnimalHealthService() {
  return (
    <ServiceCard
      image="/animal_health.webp"
      title="General Health Service"
      description="Routine checkups, vaccinations, diagnostic testing, surgical procedures, and treatment of illnesses or injuries. Chronic condition management also available."
      serviceName="Animal Health Service"
      serviceDetails="Routine checkups, diagnostics, surgical procedures, treatment of illnesses/injuries, and chronic condition management."
    />
  );
}

// ─── Default export: full services grid ────────────────────────────────────────
export default function Services() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
        {[
          <DairyCowService />,
          <VaccinationService />,
          <ArtificialInseminationService />,
          <EmergencyService />,
          <GoatSheepService />,
          <ConsultancyService />,
          <NutritionService />,
          <AnimalHealthService />,
        ].map((service, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            {service}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}