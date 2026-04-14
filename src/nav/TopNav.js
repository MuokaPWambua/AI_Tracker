// nav/TopNav.js - Updated navigation with logo image instead of text
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = ['Home', 'Services', 'Pricing', 'Smart Farming', 'Location', 'Contact'];

function TopAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const phoneNumber = "254722796099";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:+${phoneNumber}`;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    handleCloseNavMenu();
    const sectionMap = {
      'Home': 'hero-section',
      'Services': 'services-section',
      'Pricing': 'pricing-section',
      'Smart Farming': 'smart-farming-section',
      'Location': 'location-section',
      'Contact': 'footer'
    };
    const elementId = sectionMap[sectionId] || sectionId.toLowerCase().replace(' ', '-');
    const element = document.querySelector(`.${elementId}`) || document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo Image - Desktop */}
          <Box
            component="a"
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <img 
              src="/logo.png" 
              alt="CK Smart Vet & Farming Logo" 
              style={{ 
                height: '50px', 
                width: 'auto',
                margin:'auto',
                objectFit: 'contain'
              }} 
            />
          </Box>

          {/* Logo Image - Mobile */}
          <Box
            component="a"
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <img 
              src="/logo.png" 
              alt="CK Smart Vet & Farming Logo" 
              style={{ 
                height: '40px', 
                width: 'auto',
                objectFit: 'contain'
              }} 
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color: '#2d6a4f',
                    fontWeight: 500,
                    '&:hover': { color: '#1a472a', background: 'transparent' }
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                href={whatsappLink}
                target="_blank"
                sx={{
                  bgcolor: '#25D366',
                  borderRadius: '50px',
                  '&:hover': { bgcolor: '#128C7E' }
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="outlined"
                startIcon={<PhoneIcon />}
                href={callLink}
                sx={{
                  borderColor: '#2d6a4f',
                  color: '#2d6a4f',
                  borderRadius: '50px',
                  '&:hover': { borderColor: '#1a472a', bgcolor: '#1a472a', color: 'white' }
                }}
              >
                Call
              </Button>
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Box>
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color: '#1a472a' }} />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ mt: '45px' }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item} onClick={() => scrollToSection(item)}>
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                ))}
                <MenuItem divider />
                <MenuItem component="a" href={whatsappLink} target="_blank">
                  <WhatsAppIcon sx={{ mr: 1, color: '#25D366' }} />
                  <Typography>WhatsApp</Typography>
                </MenuItem>
                <MenuItem component="a" href={callLink}>
                  <PhoneIcon sx={{ mr: 1, color: '#2d6a4f' }} />
                  <Typography>Call</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopAppBar;