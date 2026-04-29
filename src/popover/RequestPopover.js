// popover/RequestPopover.js - Updated contact form with all required fields
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { TextField, MenuItem, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PHONE_NUMBER = "254722796099";
const BRAND = "Capwel SmartVet";

const animalTypes = [
  'Dairy Cow', 'Beef Cattle', 'Goat', 'Sheep', 'Pig', 'Poultry', 'Dog', 'Cat', 'Other'
];

export default function RequestPopover({ open, handleClose }) {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    location: '',
    animal: '',
    problem: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (!form.name || !form.phone) return;
    const message =
      `Hello ${BRAND},%0A%0A*Service Request*%0A%0A` +
      `👤 *Name:* ${form.name}%0A` +
      `📞 *Phone:* ${form.phone}%0A` +
      `📍 *Location:* ${form.location || 'Not specified'}%0A` +
      `🐄 *Animal:* ${form.animal || 'Not specified'}%0A` +
      `🩺 *Problem:* ${form.problem || 'Not specified'}%0A%0A` +
      `Please contact me at your earliest convenience. Thank you!`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
    handleClose();
    setForm({ name: '', phone: '', location: '', animal: '', problem: '' });
  };

  const isValid = form.name.trim() && form.phone.trim();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{ sx: { borderRadius: '24px', overflow: 'hidden' } }}
    >
      {/* Header */}
      <Box sx={{ background: 'linear-gradient(135deg, #1a472a 0%, #2d6a4f 100%)', p: '1.5rem 1.5rem 1rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
              Request a Service
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.75)' }}>
              We'll respond via WhatsApp within minutes
            </Typography>
          </Box>
          <IconButton onClick={handleClose} sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white' } }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <DialogContent sx={{ pt: 2.5, pb: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Your Name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
        />
        <TextField
          margin="normal"
          fullWidth
          id="location"
          label="Your Location (e.g. Dundori, Nakuru)"
          name="location"
          type="text"
          value={form.location}
          onChange={handleChange}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
        />
        <TextField
          margin="normal"
          fullWidth
          id="animal"
          label="Type of Animal"
          name="animal"
          select
          value={form.animal}
          onChange={handleChange}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
        >
          {animalTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          fullWidth
          id="problem"
          label="Describe the Problem"
          name="problem"
          multiline
          rows={3}
          value={form.problem}
          onChange={handleChange}
          placeholder="e.g. My cow has not been eating for 2 days..."
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          onClick={handleSend}
          disabled={!isValid}
          sx={{
            borderRadius: '50px',
            background: '#25D366',
            fontWeight: 700,
            fontSize: '1rem',
            textTransform: 'none',
            py: 1.5,
            '&:hover': { background: '#128C7E' },
            '&.Mui-disabled': { background: '#ccc' },
          }}
        >
          Send via WhatsApp
        </Button>
      </DialogActions>
    </Dialog>
  );
}