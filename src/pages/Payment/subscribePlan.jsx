import { Typography, Card } from "@mui/material";
import { subscriptions } from '../../configs/defaultData';
import SubscriptionCard from './components/subscriptionCard';
const SubscriptionPlanScreen = () => {
    return(
        <div style={{
            marginTop: '20px',
        }}>
            <Typography sx={{
            display: 'flex',
            justifyContent: 'center',
            }} variant="h5" fontWeight={600}>Subscription Plans</Typography>
            <Typography 
            sx={{
                display: 'flex',
                justifyContent:'center',
            }}
            variant="body1" 
            color={'grey'}>You currently can Subscribe to either of these 3 plans to access premium features</Typography>

            <Card sx={{
                display: 'grid',
                gridTemplateColumns: {
                    sx: '1fr',
                    md: '1fr 1fr',
                    lg: '1fr 1fr 1fr'
                },
                gap: '20px',
                height: '500px',
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
                boxShadow: 'none',
            }}>
                {
                    subscriptions.map((plan)=>{
                        return(
                            <SubscriptionCard plan={plan}></SubscriptionCard>
                        )
                    })
                }
            </Card>

        </div>
    )
}

export default SubscriptionPlanScreen;