// nav/TopNav.js - Capwel SmartVet branding + expanded navigation
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
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = ['Home', 'Services', 'About', 'Tips', 'Contact'];

function TopAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const primaryPhone = "254722796099";

  const whatsappLink = `https://wa.me/${primaryPhone}`;
  const callLink = `tel:+${primaryPhone}`;

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const scrollToSection = (sectionId) => {
    handleCloseNavMenu();
    const sectionMap = {
      'Home': 'home',
      'Services': 'services',
      'About': 'about',
      'Tips': 'tips',
      'Contact': 'contact',
    };
    const elementId = sectionMap[sectionId];
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'white',
        boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
        borderBottom: '1px solid rgba(26,71,42,0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '70px !important' }}>

          {/* Logo */}
          <Box
            component="a"
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 1.5, cursor: 'pointer' }}
          >
            <img
              src="/logo.png"
              alt="Capwel SmartVet Logo"
              style={{ height: isMobile ? '38px' : '48px', width: 'auto', objectFit: 'contain' }}
            />
            {/* Fallback text brand if logo missing */}
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 800, color: '#1a472a', lineHeight: 1.1, letterSpacing: '-0.01em' }}
              >
                Capwel SmartVet
              </Typography>
              <Typography variant="caption" sx={{ color: '#555', letterSpacing: '0.04em' }}>
                VTC Reg. No. 7667
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color: '#333',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    px: 1.5,
                    '&:hover': { color: '#1a472a', background: 'rgba(26,71,42,0.05)' },
                  }}
                >
                  {item}
                </Button>
              ))}
              <Box sx={{ width: '1px', height: '28px', bgcolor: '#ddd', mx: 1 }} />
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                href={whatsappLink}
                target="_blank"
                sx={{
                  bgcolor: '#25D366',
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#128C7E' },
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
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': { borderColor: '#1a472a', bgcolor: '#1a472a', color: 'white' },
                }}
              >
                Call Now
              </Button>
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                startIcon={<WhatsAppIcon />}
                href={whatsappLink}
                target="_blank"
                sx={{
                  bgcolor: '#25D366',
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  '&:hover': { bgcolor: '#128C7E' },
                }}
              >
                WhatsApp
              </Button>
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color: '#1a472a' }} />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ mt: '8px' }}
                PaperProps={{ sx: { borderRadius: '16px', minWidth: 200, boxShadow: '0 10px 40px rgba(0,0,0,0.15)' } }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => scrollToSection(item)}
                    sx={{ py: 1.5, fontWeight: 500, color: '#1a472a' }}
                  >
                    {item}
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem component="a" href={whatsappLink} target="_blank" sx={{ py: 1.5 }}>
                  <WhatsAppIcon sx={{ mr: 1.5, color: '#25D366', fontSize: 20 }} />
                  <Typography sx={{ fontWeight: 600 }}>WhatsApp</Typography>
                </MenuItem>
                <MenuItem component="a" href={callLink} sx={{ py: 1.5 }}>
                  <PhoneIcon sx={{ mr: 1.5, color: '#2d6a4f', fontSize: 20 }} />
                  <Typography>0722 796 099</Typography>
                </MenuItem>
                <MenuItem component="a" href={`tel:+254701379195`} sx={{ py: 1.5 }}>
                  <PhoneIcon sx={{ mr: 1.5, color: '#2d6a4f', fontSize: 20 }} />
                  <Typography>0701 379 195</Typography>
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