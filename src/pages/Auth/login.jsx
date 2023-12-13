import theme from '../../configs/theme';
import React, {useState} from 'react';
import { Card, Typography, Button, TextField } from '@mui/material';
import signIn_image from '../../assets/signIn_image.jpg';
import appLogo from '../../assets/appLogo.png';
import HoverZoom from '../../components/onhoverZoom';
// import { loginAdmin } from '../../api/Admin';
import { useNavigate } from 'react-router';

const LoginScreen = () => {
  const inputStyles = {
    '& label': {
      color: 'white', 
    },
    '& input': {
      color: 'white', 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.shades.greyText, 
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.shades.greenLite, 
      },
      '& .MuiOutlinedInput-input': {
        '&::placeholder': {
          color: 'white', 
        },
      },
    },
  };

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 3) {
      newErrors.password = 'Password must be at least 3 characters';
    }

    // if (Object.keys(newErrors).length === 0) {
    //   const res = await loginAdmin(formData.email,formData.password)
    //   if(res){
    //     navigate('/')
    //   }
    // } else {
    //   setErrors(newErrors);
    // }
    navigate('/');
  };
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        marginTop: 0,
        display: 'flex',
        backgroundColor: '#121F27',
      }}
    >
      <Card
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '50%',
        }}
      >
        <img
          src={signIn_image}
          alt="Your Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            height: '100%',
            width: '50%',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 100%)',
          }}
        ></div>
      </Card>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          zIndex: 1,
          width: '45.3%',
          transform: 'translate(0, -50%)', 
          background: 'rgba(0, 0, 0, 0.5)', 
          padding: '35px',
        }}
      >
        <div style={{
          display: 'flex',
          gap: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{
              color: 'white',
              margin: 0, 
            }}
          >
            TRACKING
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{
              color: theme.palette.shades.greenLite,
              margin: 0,
            }}
          >
            AND
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{
              color: 'white',
              margin: 0,
            }}
          >
            DEVELOPMENT
          </Typography>
        </div>
        
      </div>
      <div style={{
        display: 'flex',
        position: 'absolute',
        right: 0,
        top: 0,
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: '50%',
        padding: '5%',
      }}>
        <img 
        src={appLogo}
        height={'50px'}
        width={'200px'}
        style={{
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          marginLeft: '80px',
        }}></img>
        <Typography 
        variant='body2'
        style={{
          display: 'flex',
          alignSelf: 'center',
          marginLeft: '80px',
        }}
        color={theme.palette.primary.main}
        >Please Sign In to get access</Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            width: '80%',
            marginTop: '16px',
            marginLeft: '100px',
            gap: '20px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            InputLabelProps={{
              style: {
                color: theme.palette.shades.greyText,
              },
            }}
            sx={{
                ...inputStyles,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
            InputLabelProps={{
              style: {
                color: theme.palette.shades.greyText, 
              },
            }}
            sx={{
              ...inputStyles,
          }}
          />
          <HoverZoom>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: '16px' }}
              sx={{
                height: '50px',
                backgroundColor: theme.palette.shades.greenLite,
                '&:hover': {
                  backgroundColor: theme.palette.shades.greenMedium,
                }
              }}
            >
              Sign In
            </Button>
          </HoverZoom>
        </form>
      </div>
      
    </div>
  );
};

export default LoginScreen;
