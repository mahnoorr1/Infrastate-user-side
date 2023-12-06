import React, { useState } from 'react';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide
  } from '@mui/material';
import theme from '../configs/theme';
const Transition = React.forwardRef(function Transition(props, ref) {
return <Slide direction="up" ref={ref} {...props} />;
});
const DecisionModal = ({ isOpen, onClose, onYes }) => {
  const handleClose = () => {
    onClose();
  };

  const handleYes = () => {
    onYes();
    handleClose();
  };

  return (
    <Dialog open={isOpen} 
    onClose={handleClose}
    TransitionComponent={Transition}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>Do you really want to proceed?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleYes} sx={{
            color: theme.palette.shades.greenMedium
        }}>
          Yes
        </Button>
        <Button onClick={handleClose} sx={{
            color: theme.palette.shades.greenMedium
        }}  autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DecisionModal;