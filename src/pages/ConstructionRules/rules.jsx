import { SlDoc } from 'react-icons/sl';
import theme from '../../configs/theme';
import meet from '../../assets/meet.jpg';
import { MdOutlineRule } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card } from "@mui/material";
import RulesTable from './components/rulesTable';
import ResourceCard from './components/resourceCard';
const RulesScreen = () => {
    const [fontSize, setFontSize] = useState(50); 

    useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setFontSize(25);
      } else if (screenWidth <= 1200) {
        setFontSize(35);
      } else {
        setFontSize(50);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);
    return(
        <div>
            {/* <Typography variant="h4"
            fontWeight={600}>
                Construction Rules
            </Typography>
            <hr/> */}
            <Grid container>
                <Grid item md={4} padding={6} 
                sx={{
                    backgroundColor: theme.palette.shades.greenMedium,
                }}>
                    <Typography fontSize={fontSize}
                    fontWeight={600}
                    color={'white'}>
                        Construction Rules
                    </Typography>
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                    }}>
                        <SlDoc style={{
                        marginTop: '20px'
                        }}
                        fontSize={'60px'}
                        color='white'/>
                        <MdOutlineRule style={{
                        marginTop: '20px'
                        }}
                        fontSize={'60px'}
                        color='white'/>
                    </div>
                    
                </Grid>
                <Grid item md={8}>
                    <Card sx={{
                    height: '50vh',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 0,
                    boxShadow: 'none',
                    }}>
                        <img
                            src={meet}
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
                </Grid>
            </Grid>
            <RulesTable/>
            <Typography
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
            margin={3}
            variant='h3' 
            color={theme.palette.shades.greenDark}
            fontWeight={600} >Other Resources</Typography>
            <Grid container sx={{
                margin: '20px',
                display:'flex',
                justifyContent: 'center',
            }}>
                <Grid item sm={6} md = {4} lg={3}>
                    <ResourceCard text={'All bylaws'} 
                    link={'https://www.cda.gov.pk/resource_center/bylaws.asp'}/>
                </Grid>
                <Grid item sm={6} md = {4} lg={3}>
                    <ResourceCard text={'Building Control Regulations-2020'} 
                    link={'https://www.cda.gov.pk/documents/docs/buildingRegulations2023.pdf'}/>
                </Grid>
                <Grid item sm={6} md = {4} lg={3}>
                    <ResourceCard text={'Development of Private Housing'} 
                    link={'https://www.cda.gov.pk/documents/docs/PrivateHousingRegulations-Zone-2-4-5.pdf'}/>
                </Grid>
                <Grid item sm={6} md = {4} lg={3}>
                    <ResourceCard text={'Planning parameters for construction'} 
                    link={'https://www.cda.gov.pk/documents/docs/Appartment-Parameters-CDA.pdf'}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default RulesScreen;