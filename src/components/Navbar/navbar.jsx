import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import appLogo from '../../assets/appLogo.png';
import { Link, useLocation } from "react-router-dom";
import appTheme from "../../configs/theme";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
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
      color: appTheme.palette.primary.main,
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
  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AppBar style={{ 
      height: "50px",
      backgroundColor: appTheme.palette.shades.greenDark,
      }}>
      <CssBaseline />
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <img
         src={appLogo} 
         alt="Logo"
         style={{
          height: '35px'
         }}></img>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
