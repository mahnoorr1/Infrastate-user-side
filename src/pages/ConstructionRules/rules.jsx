import { SlDoc } from 'react-icons/sl';
import theme from '../../configs/theme';
import meet from '../../assets/meet.jpg';
import { MdOutlineRule } from 'react-icons/md';
import { Grid, Typography, Card } from "@mui/material";
import RulesTable from './components/rulesTable';
const RulesScreen = () => {
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
                    <Typography variant="h2"
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
            
            <Grid container>
                <Grid item sm={12} md = {9}>
                    <RulesTable/>
                </Grid>
                <Grid item sm = {12} md = {3}>
                    {/* links list to cda pages */}
                </Grid>
            </Grid>
            
        </div>
    )
}

export default RulesScreen;