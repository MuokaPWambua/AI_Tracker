import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TextField} from '@mui/material';
import useCoords from '../utils/useCoords';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RequestPopover({open, handleClose}) {
  const [lat, lng] = useCoords()
  return (
    <div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Request Service</DialogTitle>
        <DialogContent>

            <form noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                type='text'
                autoComplete="on"
              />
              <TextField
                margin="normal"
                required
                name="contact"
                label="Contact"
                type="number"
                id="message"
                fullWidth
                autoComplete="on"
              />
              
              <iframe src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                        frameBorder="0" width='100%' title='map'/>
                <br/>
                
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                Send
              </Button>
            </form>
        </DialogContent>

      </Dialog>
    </div>
  );
}