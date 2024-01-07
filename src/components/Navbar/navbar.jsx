import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Link, useLocation, useNavigate } from "react-router-dom";
import theme from '../../configs/theme';
import appLogo from '../../assets/appLogo.png';
import { IoIosPerson } from 'react-icons/io';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: '25%',
    display: "flex",
  },
  logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(10),
    position: "relative",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  activeLink: {
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      borderBottom: "2px solid white",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = async () => {
    setAnchorEl(null);
    await localStorage.removeItem('LoggedIn');
    await localStorage.removeItem('token');
    window.location.href = "/Auth/login";
  };

  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };

  const navigateTo = (path) => {
    navigate(path);
    handleMenuClose(); 
  };

  return (
    <AppBar style={{ 
      height: "55px",
      backgroundColor: theme.palette.shades.greenDark,
    }}>
      <CssBaseline />
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={appLogo} 
          alt="Logo"
          style={{
            height: '35px'
          }}
        ></img>
        <div className={classes.navlinks}>
          <Link to="/" onClick={navigateToTop}
            className={`${classes.link} ${location.pathname === '/' ? classes.activeLink : ''}`}>
            Home
          </Link>
          <Link
            to="/construction" onClick={navigateToTop}
            className={`${classes.link} ${location.pathname === '/construction' ? classes.activeLink : ''}`}
          >
            Construction
          </Link>
          <Link to="/rules" onClick={navigateToTop}
            className={`${classes.link} ${location.pathname === '/rules' ? classes.activeLink : ''}`}>
            Rules
          </Link>
          <Link
            to="/about" onClick={navigateToTop}
            className={`${classes.link} ${location.pathname === '/about' ? classes.activeLink : ''}`}
          >
            About Us
          </Link>
          <Link
            to="/contact" onClick={navigateToTop}
            className={`${classes.link} ${location.pathname === '/contact' ? classes.activeLink : ''}`}
          >
            Contact Us
          </Link>
        </div>
        <div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <Avatar style={{
              backgroundColor: theme.palette.shades.greenMedium,
            }}>
              <IoIosPerson />
            </Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => navigateTo('/profile')}>My Account</MenuItem>
            <MenuItem onClick={() => navigateTo('/subscription')}>Subscription</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
