import theme from '../../../configs/theme';
import { TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme, multiline }) => ({
  '& label.Mui-focused': {
    color: theme.palette.shades.greenMedium,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.shades.greenMedium,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.shades.greenLite,
    },
  },
  width: '400px',
  ...(multiline && {
    '& textarea': {
      height: 'auto',
      overflowY: 'auto',
    },
  }),
  marginBottom: '15px',
  marginTop: '5px',
}));

const ProfileInputField = ({ isrequired, label, initialValue, inputType, multiline, updateValue }) => {
  return (
    <StyledTextField
      value={initialValue}
      onChange={updateValue}
      inputMode={inputType}
      placeholder={label}
      required={isrequired}
      multiline={multiline}
      variant="outlined"
      InputProps={{
        style: {
          height: multiline ? '150px' : 'auto',
          overflowY: 'auto',
          alignItems: 'flex-start'
        },
      }}
    />
  );
};

export default ProfileInputField;
