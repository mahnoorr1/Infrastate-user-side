import React from 'react';
import theme from '../../configs/theme';
import Button from '@mui/material/Button';

const AppButton = ({ text, variant, onClick }) => {
  const buttonStyleHovered = {
    backgroundColor: theme.palette.buttons.contain, 
    color: 'white',
  };
  return (
    <Button
      variant={variant || 'contained'}  // Default to 'contained' if variant prop is not provided
      onClick={onClick}
      sx={{
        width: variant != 'text' ? '200px' : 'auto',
        height: '50px',
        borderColor: variant == 'outlined' ? theme.palette.buttons.outline : null,
        backgroundColor: variant != 'outlined' && variant != 'text' ? theme.palette.buttons.contain : null,
        color: variant == 'outlined' || variant == 'text' ? theme.palette.buttons.outline : 'white',
        fontWeight: '700',
        borderWidth: '2px',
        margin: '5px',
        marginBottom: '15px',
        '&:hover': buttonStyleHovered, 
        transition: 'background-color 0.3s',
      }}
    >
      {text}
    </Button>
  );
};

export default AppButton;