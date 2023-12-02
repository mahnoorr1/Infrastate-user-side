import { Card, Typography } from "@mui/material"
import theme from '../../../configs/theme';
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ResourceCard = ({text, link}) => {
    return(
        <Link to={link}>
            <Card 
            sx={{
                height: '80px',
                width: {
                    sm: '320px',
                    md: '290px',
                    lg: '300px',
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: '10px',
                borderRadius: '10px',
                marginBottom: '10px',
                padding: '10px',
            }}
            >
                <FaRegFilePdf fontSize={'30px'}
                color={theme.palette.shades.greenMedium}/>
                <Typography 
                overflow={'hidden'}
                whiteSpace="nowrap" 
                textOverflow="ellipsis">
                    {text}
                </Typography>
            </Card>
        </Link>
    )
}

export default ResourceCard;