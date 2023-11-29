import theme from '../../configs/theme';
import meet from '../../assets/meet.jpg';
import { PiBuildingsLight } from "react-icons/pi";
import discussion from '../../assets/discussion.jpg';
import { Grid, Typography, Card, Container } from "@mui/material";
import { MdOutlineLocationSearching, MdOutlineRule } from "react-icons/md";
import constructor_illustrator from '../../assets/constructor_illustrator.png';

const About = () => {
    return (
        <div style={{
            backgroundColor: '#FAFAF8',
        }}>
            {/* Top image with overlay */}
            <Card sx={{
                height: '50vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 0,
                boxShadow: 'none',
            }}>
                <img
                    src={discussion}
                    alt="Image"
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
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%)',
                    }}
                ></div>
            </Card>

            {/* Top image text */}
            <div style={{ 
                position: 'absolute', 
                top: '20%', 
                left: '5%',  
                textAlign: 'start', 
                width: '40%',
                zIndex: 2 }}>
                    <Typography
                        variant="h3"
                        fontWeight={600}
                        color={theme.palette.common.white} // Set text color to white
                    >
                        Navigating Construction Excellence and Development Rules for a Sustainable Future.
                    </Typography>
            </div>
            {/* other sections */}
            <Grid container>
                <Grid item md={6} lg={7}>
                {/* horizontal bar */}
                    <Container sx={{
                        height: '120px',
                        backgroundColor: theme.palette.shades.greenDark,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Grid item md={4}>
                            <Typography 
                            variant='h5'
                            fontWeight={600}
                            color={'white'}>
                                Construction
                            </Typography>
                            <PiBuildingsLight
                            style={{
                                marginTop: '10px',
                            }}
                            fontSize={'35px'} 
                            color='white'/>
                        </Grid>

                        <Grid item md={4}>
                            <Typography 
                            variant='h5'
                            fontWeight={600}
                            color={'white'}>
                                Rules
                            </Typography>
                            <MdOutlineRule
                            style={{
                                marginTop: '10px',
                            }}
                            fontSize={'30px'} 
                            color='white'/>
                        </Grid>

                        <Grid item md={4}>
                            <Typography 
                            variant='h5'
                            fontWeight={600}
                            color={'white'}>
                                Tracking
                            </Typography>
                            <MdOutlineLocationSearching 
                            style={{
                                marginTop: '10px',
                            }}
                            fontSize={'30px'} 
                            color='white'/>
                        </Grid>
                    </Container>
                    {/* who we are section */}
                    <Typography
                        marginTop={'30px'}
                        variant="h4"
                        fontWeight={600}
                        color={theme.palette.shades.greenDark} 
                        style={{ 
                            zIndex: 2,
                            textAlign: 'center',
                         }} 
                    >
                        Who we are?
                    </Typography>
                    <hr/>
                    <Container sx={{
                        width: '70%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: '20px',
                    }}>
                        <Typography >
                        We are providing services beyond limits in a user friendly and appealing way.
                        Providing services which help users check construction rules in a certain area 
                        and request for construction. 
                        Covering all the zones of islamabad, providing a concept to undergo the development 
                        activities in a modernized way using technology.
                        </Typography>
                        <Typography>
                            
                        </Typography>
                    </Container>
                    
                </Grid>
                <Grid item md={6} lg={5}>
                    <img
                        src={constructor_illustrator}
                        alt='image'
                        width={'100%'}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
            </Grid>
            {/* privacy policy section */}
            <Card sx={{
                height: '50vh',
                width: '100%',
                position: 'relative',
                overflow: 'visible',
                boxShadow: 'none',
                height: '500px',
                backgroundColor: theme.palette.shades.greenMedium,
                borderRadius: 0,
                padding: '20px',
                marginBottom: '100px'
            }}>
                <Grid item sm={12} md={4}>
                    <Typography
                        margin={'30px'}
                        marginTop={'60px'}
                        variant="h1"
                        fontWeight={600}
                        color={'white'}
                        width={'270px'}
                        textAlign={'center'}
                    >Terms and Policy</Typography>
                </Grid>
                <Grid item sm={12} md={8}>
                    <div
                    style={{
                        position: 'absolute',
                        top: 70,
                        left: '30%',
                        width: '65%',
                        height: '100%',
                        background: '#FAFAF8',
                        border: `5px solid ${theme.palette.shades.greenMedium}`,
                    }}
                    ></div>
                </Grid>
            </Card>
           
            {/* <Grid container>
                <Grid item md = {6} lg={6} p={4}>
                    <Typography 
                    marginTop={'30px'}
                    variant="h4"
                    fontWeight={600}
                    color={theme.palette.shades.greenDark} 
                    >Privacy Policy</Typography>
                </Grid>
                <Grid item md = {6} lg={6} p={4}>
                    <Typography 
                    marginTop={'30px'}
                    variant="h4"
                    fontWeight={600}
                    color={theme.palette.shades.greenDark}
                    >Privacy Policy</Typography>
                    <hr/>
                </Grid>
            </Grid> */}
        </div>
    );
};

export default About;
