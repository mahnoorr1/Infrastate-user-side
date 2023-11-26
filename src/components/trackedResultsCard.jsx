import theme from '../configs/theme';
import { Card, Typography } from "@mui/material";
import HoverZoom from './onhoverZoom';

const TrackedResultCard = ({image, title, change}) => {
    return(
        <HoverZoom>
            <Card sx={{
                height: '340px',
                width: '380px',
                borderRadius: '10px',
                padding: '10px',
                marginBottom: '30px',
            }}>
                <Card sx={{
                    width: '100%',
                    borderTopRadius: '15px',
                    height: '250px',
                    boxShadow: 'none',
                    marginBottom: '2%',
                }}>
                    <img src= {image}
                    height={'100%'}
                    width={'100%'}
                    style={{
                        objectFit: 'cover',
                    }}></img>
                </Card>
                <Typography 
                fontWeight={600}
                sx={{
                    marginBottom: '5px',
                }}>
                    {title}
                </Typography>
                <Typography 
                fontWeight={600}
                color={theme.palette.shades.greenMedium}>
                    Change Occured: {change}
                </Typography>
            </Card>
        </HoverZoom>
    );
}

export default TrackedResultCard;