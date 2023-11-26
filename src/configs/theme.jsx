import { createTheme } from '@mui/material/styles';
const appTheme = createTheme({
    palette: {
        primary: {
          main: '#E4FCFD',
        },
        secondary: {
          main: '#0A323D',
        },
        cards: {
            main: 'white',
            back: '#F8F8F8'
        },
        buttons: {
          outline: '#0F969C',
          contain: '#0C7076',
        },
        shades: {
          greenLite: '#0F969C',
          greenMedium: '#0C7076',
          greenDark: '#072E33',
          blueLite: '#6DA5C0',
          blueMedium: '#294D61',
          blueDark: '#05161A',
          red: '#D70040',
          greyLine: '#E8E8E8',
          greyColor: '#F8F8F8',
          greyText: '#686868',
          gold: '#fcc200',
        }
      },
      typography: {
        fontFamily: 'Arial, sans-serif',
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1280,
          xl: 1920,
        },
      },
      customStyles: {
        gaps: {
          major: '10px',
          minor: '5px',
        },
        responsiveText: {
        //   [theme.breakpoints.down('sm')]: {
        //     fontSize: '12px',
        //     padding: '6px 12px',
        //   },
        //   [theme.breakpoints.up('md')]: {
        //     fontSize: '16px',
        //     padding: '10px 20px',
        //   },
        // },
        // responsiveHeading: {
        //     [theme.breakpoints.down('sm')]: {
        //         fontSize: '16px',
        //     },
        //     [theme.breakpoints.up('md')]: {
        //         fontSize: '24px',
        //     },
        }
      },
      
});
export default appTheme;