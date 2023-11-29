import * as React from "react";
import theme from '../../../configs/theme';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import appLogo from '../../../assets/appLogo.png';
// import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.shades.greenDark,
        p: 6,
        width: '99.02vw',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
            <Grid item xs={12} sm={3}>
                <img
                src={appLogo}
                style={{
                    height: '40px'
                }}
                ></img>
                <Typography variant="body2" color="white">
                    Embark on a transformative journey with 
                    InfraState within  Islamabad zone, optimizing 
                    efficiency and saving valuable human resources and time.
                </Typography>
            </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color='white' gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              We are Infrastate team working under Capital Development Authority, 
              dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
                Khayaban-e-Suharwardi, Sector G-7/4, Islamabad
            </Typography>
            <Typography variant="body2" color="white">
                Secretary CDA Board, CDA
            </Typography>
            <Typography variant="body2" color="white">
                Tel: +92-51-9252972
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              {/* <Facebook /> */}
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              {/* <Instagram /> */}
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              {/* <Twitter /> */}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;