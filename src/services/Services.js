// services/Services.js - Updated with consistent card styling and clear background
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

// WhatsApp phone number
const PHONE_NUMBER = "254722796099";

// Function to handle WhatsApp redirect with service details
const handleWhatsAppRequest = (serviceName, serviceDetails) => {
  const message = `Hello CK Smart Vet & Farming,%0A%0A*Service Request*%0A%0A📋 *Service:* ${serviceName}%0A📝 *Details:* ${serviceDetails}%0A%0A📍 *Location:* Nakuru, Kenya%0A%0A🙋 *Customer Request:* I would like to request this service. Please get back to me with more information.%0A%0AThank you!`;
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

// Styled Card component for consistency
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: '200px',
  objectFit: 'cover',
});

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 20px',
  fontWeight: 600,
  textTransform: 'none',
  backgroundColor: '#1a472a',
  '&:hover': {
    backgroundColor: '#2d6a4f',
    transform: 'translateY(-2px)',
  },
}));

export function AnimalHealthService() {
  const serviceName = "Animal Health Service";
  const serviceDetails = "Medical care including routine checkups, vaccinations, diagnostic testing, surgical procedures, treatment of illnesses/injuries, and chronic condition management.";
  
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt="Animal Health Service"
        image="/animal_health.webp"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a472a' }}>
          Health Service
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          We provide medical care and treatment to animals. This includes routine checkups, vaccinations, 
          diagnostic testing, surgical procedures, and treatment of illnesses or injuries. We also help manage chronic conditions.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <StyledButton 
          fullWidth 
          onClick={() => handleWhatsAppRequest(serviceName, serviceDetails)}
        >
          Request Service
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
}

export function NutritionService() {
  const serviceName = "Animal Nutrition Service";
  const serviceDetails = "Guidance on proper feeding and dietary requirements for animals, including type of food, portion sizes for different life stages, and specific medical condition diets.";
  
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt="Animal Nutrition Service"
        image="/animal_nutrition.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a472a' }}>
          Nutrition Service
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          With expertise in animal nutrition we provide guidance on proper feeding and dietary requirements
          for animals, from type of food and portion sizes that are appropriate for different
          stages of an animal's life and for specific medical conditions. 
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <StyledButton 
          fullWidth 
          onClick={() => handleWhatsAppRequest(serviceName, serviceDetails)}
        >
          Request Service
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
}

export function ArtificialInserminationService() {
  const serviceName = "Artificial Insemination Service";
  const serviceDetails = "Local and imported genetics for cattle farming. Expert technicians with high success rates. Follow-up care included.";
  
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt="Artificial Insemination"
        image="/ai.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a472a' }}>
          Artificial Insemination
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          We are well equipped and offer both local and imported genetics to our customers. If you are a cattle farmer,
          make a date with our best bull today for the best heifer calves.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <StyledButton 
          fullWidth 
          onClick={() => handleWhatsAppRequest(serviceName, serviceDetails)}
        >
          Request Service
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
}

export function ConsultanceService() {
  const serviceName = "Consultancy Service";
  const serviceDetails = "Expert guidance on animal behavior, animal welfare, animal management, feeding, breeding, and disease prevention strategies to ensure health and productivity.";
  
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt="Consultancy Service"
        image="/consulting.avif"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: '#1a472a' }}>
          Consultancy Service
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          We provide our clients with everything they need to know from animal behavior, animal welfare, animal management,
          feeding, breeding, and disease prevention strategies to ensure the health and productivity of the animals.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <StyledButton 
          fullWidth 
          onClick={() => handleWhatsAppRequest(serviceName, serviceDetails)}
        >
          Request Service
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
}

export default function Services() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ArtificialInserminationService />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ConsultanceService />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnimalHealthService />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NutritionService />
        </Grid>
      </Grid>
    </Container>
  );
}