import theme from '../../../configs/theme';
import { Card, Typography } from "@mui/material";

const TeamMemberCard = ({imgUrl, name, tags, reg, description}) => {
    return(
        <Card sx={{
            height: '480px',
            width: '380px',
            padding: '10px',
        }}>
            <img src={imgUrl} 
            height={'70%'}
            width={'360px'}
            style={{
                borderRadius: '5px',
                objectFit: 'cover',
            }}></img>

            <Typography variant="h6"
            fontWeight={600}
            color={theme.palette.shades.greenDark}>{name}</Typography>

            <Typography color={theme.palette.shades.greenMedium}>{reg}</Typography>
            <div style={{
                display: 'flex',
                gap: '10px',
            }}>
                {
                    tags.map((tag)=> {
                        return(
                            <Card sx={{
                                height: '30px',
                                width: '100px',
                                border:'3px solid',
                                borderColor: theme.palette.shades.greenLite,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '20px',
                            }}>
                                {tag}
                            </Card>
                        )
                    })
                }
            </div>
            <Typography color={'grey'}>{description}</Typography>
        </Card>
    )
}

export default TeamMemberCard;