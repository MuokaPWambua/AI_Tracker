import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, TextField, Button, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterContainer = styled('footer')({
  position: 'relative',
  zIndex: 1,
  // height:'50%',
  marginTop:'2rem',
  padding: '0 0 2rem 0',
  backgroundImage: `url('/animal_health_1.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: -1,
  },
});


export default function Footer() {
  return (
    <FooterContainer>
      <Container>
      <Grid container spacing={2} justifyContent="space-between" color="white" >
      <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6" gutterBottom color="white">
              Message Us
            </Typography>
            <form noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                autoComplete="off"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </form>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6" gutterBottom color="white">
              Contact Us
            </Typography>
            <Typography variant="subtitle1" component="span" color="white">
              Email: karogacapwel@gmail.com <br />
              Phone: +2540701279195 <br />
              Phone: +2540722796099 <br />
              Hours: Mon-Fri, 9am-5pm
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
            <Box>
            <Typography variant="h6" gutterBottom color="white">
              Locations 
            </Typography>
            <Typography variant="subtitle1" component="span" color="white">
              Kenya. <br/>
              Kanjuiri Ridge Ward. <br />
              Mirangine ward. <br />
              <LocationOnIcon/>

            </Typography>
          </Box>
          <Box style={{ height: '220px', width: '100%' }}>
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=123+Main+St,+Anytown,+USA+12345&z=15&output=embed`}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </FooterContainer>
  );
}
