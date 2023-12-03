import { useState } from "react";
import theme from "../../../configs/theme";
import { Card, Typography } from "@mui/material";
import HoverZoom from '../../../components/onhoverZoom';
import AppButton from '../../../components/Buttons/defaultButton';
import { BiCheckCircle, BiSolidCheckCircle } from 'react-icons/bi';

const SubscriptionCard = ({plan}) => {
    console.log(plan);
    const [openDialogue, setOpenDialogue] = useState(false);
    const handleEditClick = () => {
        setOpenDialogue(true);
      };
    const SolidCheckIcon = () => {
        return(
            <BiSolidCheckCircle style={{
                color: theme.palette.shades.greenLite,
                fontSize: '20px',
            }}></BiSolidCheckCircle>
        );
    }

    const CheckIcon = () => {
        return (
            <BiCheckCircle style={{
                color: theme.palette.shades.greenLite,
                fontSize: '20px',
            }}></BiCheckCircle>
        )
    }

    const BenefitItem = ({text, icon}) => {
        return(
            <div style={{
                display: 'flex',
                gap: '15px',
            }}>
                {icon}
                <Typography 
                variant="body2"
                color={theme.palette.shades.greyText}>
                    {text}
                </Typography>   
            </div>
        )
    }
    return(
        <Card sx={{
            backgroundColor: 'transparent',
            border: '3px solid',
            borderColor: theme.palette.shades.greenLite,
            borderTopRightRadius: '100px',
            borderBottomLeftRadius: '100px',
            marginRight: '10px',
            marginLeft: '10px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Typography
            variant="h6"
            fontWeight={600}
            color={theme.palette.shades.greyText}>{plan.type}</Typography>
            <Card sx={{
                height: '100px',
                width: '100px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.palette.shades.greenMedium,
                borderBottomRightRadius: '100px',
                borderTopRightRadius:'100px',
                borderBottomLeftRadius: '100px',
                marginBottom: '20px',
            }}>
                <Typography
                variant="h4"
                fontWeight={600}
                color={'white'}>${plan.price}</Typography>
            </Card>
            <Card sx={{
                    width: '100px',
                    height: '30px',
                    border: '2px solid',
                    borderColor: theme.palette.shades.greenLite,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '15px',
                    marginBottom: '10px',
                }}>
                    <Typography 
                    variant="body1"
                    color={theme.palette.shades.greenLite}>benefits</Typography>
            </Card>
            <Card sx={{
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                padding: '10px',
                display: 'flex',
                alignSelf: 'flex-start',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '15px',
            }}>
                <BenefitItem 
                text={`Number of Projects: ${plan.projectsAllowed}`}
                icon={<SolidCheckIcon></SolidCheckIcon>}></BenefitItem>
                
                <BenefitItem
                text={'Access to Construction Plans'}
                icon={plan.constructionPlanAllowed ? <SolidCheckIcon></SolidCheckIcon> : <CheckIcon></CheckIcon>}></BenefitItem>

                <BenefitItem 
                text={'Access to Road Plans'}
                icon={plan.RoadPlanAllowed ? <SolidCheckIcon></SolidCheckIcon> : <CheckIcon></CheckIcon>}></BenefitItem>
                
                <BenefitItem 
                text={'Access to Routing features'}
                icon={plan.routesAccess ? <SolidCheckIcon></SolidCheckIcon> : <CheckIcon></CheckIcon>}></BenefitItem>

                <BenefitItem 
                text={'Access to CDA Rules'}
                icon={plan.rulesAccess ? <SolidCheckIcon></SolidCheckIcon> : <CheckIcon></CheckIcon>}></BenefitItem>
                {
                    plan.support_per_day > 5 ?
                    <BenefitItem text={'Unlimited Support'}
                    icon={<SolidCheckIcon></SolidCheckIcon>}></BenefitItem>:
                    <BenefitItem 
                    text={`${plan.support_per_day} times support per day`}
                    icon={<SolidCheckIcon></SolidCheckIcon>}></BenefitItem>
                }
                
            </Card>
            <HoverZoom>
                <AppButton 
                variant={'outlined'}
                text={'Subscribe'}
                onClick={handleEditClick}></AppButton>
            </HoverZoom>
            {/* <EditPlanDialog plan={plan} open={openDialogue} handleClose={() => setOpenDialogue(false)} /> */}
        </Card>
    );
}
export default SubscriptionCard;