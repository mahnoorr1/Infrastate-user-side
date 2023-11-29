import theme from '../../configs/theme';
import React, { useState, useEffect } from 'react';
import { Typography, Card, Grid } from '@mui/material';
import landingPage_cover from '../../assets/landingPage_cover.jpg';
import zone3_4 from '../../assets/zone3_4.jpg';
import zone3_5 from '../../assets/zone3_5.jpg';
import AppButton from '../../components/Buttons/defaultButton';
import TrackedResultCard from '../Tracking/components/trackedResultsCard';
import HoverZoom from '../../components/onhoverZoom';
import zone35OutputData from '../../assets/zone3_5_output.json';

const LandingPage = () => {
    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
        const newData = {
        ...zone35OutputData, 
        };
        setLoadedData(newData);
    }, []);
    return(
        <div style={{
            height: '100%',
            width: '99vw',
        }}>
            <Card
            style={{
                top: 0,
                left: 0,
                height: '50%',
                width: '100%',
                zIndex: 1,
                boxShadow: 'none',
            }}
        >
            <img
            src={landingPage_cover}
            alt="Your Image"
            style={{
                width: '100%',
                height: '450px',
                objectFit: 'cover',
            }}
            />
            <div
            style={{
                position: 'absolute',
                top: '320px',
                height: '200px',
                width: '100%',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 100%)',
            }}
            ></div>
        </Card>
        <div
            style={{
            position: 'absolute',
            top: '250px',
            width: '100%',
            transform: 'translate(0, -50%)', 
            background: 'rgba(0, 0, 0, 0.55)', 
            padding: '85px',
            }}
        >
            <div style={{
            display: 'flex',
            gap: '10px',
            display: 'flex',
            justifyContent: 'center',
            }}>
            <Typography
                variant="h3"
                fontWeight={600}
                style={{
                color: 'white',
                margin: 0, 
                }}
            >
                The Path to
            </Typography>
            <Typography
                variant="h3"
                fontWeight={600}
                style={{
                color: theme.palette.shades.greenLite,
                margin: 0,
                }}
            >
                Sustainable
            </Typography>
            <Typography
                variant="h3"
                fontWeight={600}
                style={{
                color: 'white',
                margin: 0,
                }}
            >
                Future
            </Typography>
            </div>
            <Typography
            variant='h6'
            fontWeight={400}
            color={'white'}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
            }}
            >
            Construction and Development Under
            <div>Capital Development Authority</div>
            </Typography>
        </div>
        {/* <ScrollToTopButton/> */}
        {/* other data section */}
        <Card style={{
            height: '550px',
            width: '100%',
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            boxShadow: 'none',
            paddingLeft: '30px',
        }}>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            {/* Bottom Image */}
            <img
                src={landingPage_cover}
                alt="Bottom Image"
                style={{ 
                    width: '90%', 
                    height: '100%', 
                    objectFit: 'cover',
                 }}
            />
            {/* Top Image */}
            <Card
                style={{
                    position: 'absolute',
                    marginTop: '100px',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-30%)',
                    width: '80%',
                    height: '100%',
                    zIndex: 2, 
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', 
                }}
            >
                <img
                    src={landingPage_cover}
                    alt="Top Image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Card>
            </div>
            <Card style={{
                height: '500px',
                boxShadow: 'none',
                paddingLeft: '5rem',
                paddingRight: '5rem'
            }}>
                <Typography 
                variant='h4'
                fontWeight={600}>Track Construction Activities</Typography>
                <Typography sx={{
                    marginTop: '20px',
                    marginBottom: '50px',
                }}>
                    Embark on a transformative journey with 
                    InfraState within  Islamabad zone, optimizing 
                    efficiency and saving valuable human resources and time.
                </Typography>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginRight: '2rem',
                }}>
                    <HoverZoom>
                        <AppButton text={'View Details'}
                        onClick={()=>{}}></AppButton>
                    </HoverZoom>
                </div>
            </Card>
            
        </Card>

        {/* section 2 */}
        <Card style={{
            height: '550px',
            width: '100%',
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            boxShadow: 'none',
            paddingLeft: '30px',
        }}>
            <Card style={{
                height: '500px',
                boxShadow: 'none',
                paddingLeft: '5rem',
                paddingRight: '10rem'
            }}>
                <Typography 
                variant='h4'
                fontWeight={600}>View Construction Rules and Apply for Construction Request</Typography>
                <Typography sx={{
                    marginTop: '20px',
                    marginBottom: '50px',
                }}>
                    View all the rules for construction of different types under different zones of islamabad implied by
                    Capital Development Authority in an appealing and understandable way. If construction is to be undergone
                    under certain zone and area, a request can be sent to admin to indicate willingness of construction
                    at that location.
                </Typography>
                <div style={{
                    display: 'flex'
                }}>
                    <HoverZoom>
                        <AppButton text={'View Details'}
                        onClick={()=>{}}></AppButton>
                    </HoverZoom>
                </div>
            </Card>
            <div 
            style={{ 
                position: 'relative', 
                width: '100%', 
                height: '400px', }}>
            {/* Bottom Image */}
            <img
                src={landingPage_cover}
                alt="Bottom Image"
                style={{ 
                    width: '90%', 
                    height: '100%', 
                    objectFit: 'cover',
                 }}
            />
            {/* Top Image */}
            <Card
                style={{
                    position: 'absolute',
                    marginTop: '100px',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-85%)',
                    width: '80%',
                    height: '100%',
                    zIndex: 2, 
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', 
                }}
            >
                <img
                    src={landingPage_cover}
                    alt="Top Image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Card>
            </div>
        </Card>
        <Card sx={{
            height: 'auto',
            width: '100%',
            marginTop: '30px',
            marginBottom: '30px',
            boxShadow: 'none',
        }}>
            <Typography 
            variant='h3'
            fontWeight={600}
            textAlign={'center'}
            > Featured Tracked Activities</Typography>
            <Grid sx={{
                justifyContent: 'center',
                marginTop: '30px',
            }} container spacing={1}>
                <Grid item md = {5} lg ={3.6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <TrackedResultCard 
                    image={zone3_4}
                    title={'Zone 3 sector'}
                    data = {loadedData}></TrackedResultCard>
                </Grid>
                <Grid item md = {5} lg ={3.6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <TrackedResultCard 
                    image={zone3_4}
                    title={'Zone 3 sector'}
                    data = {loadedData}></TrackedResultCard>
                </Grid>
                <Grid item md = {5} lg ={3.6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <TrackedResultCard 
                    image={zone3_5}
                    title={'Zone 3 section 5'}
                    data = {loadedData}></TrackedResultCard>
                </Grid>
            </Grid>
        </Card>
        {/* <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
        }}>
            <HoverZoom>
                <AppButton 
                text={'View All'}
                onClick={()=>{}}
                ></AppButton>
            </HoverZoom>
        </div> */}
        
    </div>
    );
}

export default LandingPage;