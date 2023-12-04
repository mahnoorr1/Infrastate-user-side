import theme from '../../configs/theme';
import { Grid, Card, Typography, Avatar } from "@mui/material";
import ProfileInputField from "./components/textField";
import { useState } from "react";
import discussion from '../../assets/discussion.jpg';
import TextComponent from "./components/textComponent";
import HoverZoom from "../../components/onhoverZoom";
import AppButton from "../../components/Buttons/defaultButton";
import { IoIosPerson } from "react-icons/io";

const ProfileScreen = () => {
    const [fname, setFName] = useState('first name');
    const [lname, setLName] = useState('last name');
    const [email, setEmail] = useState('email@gmail.com');
    const [phone, setPhone] = useState('+92 xxx xxxxxxx');

    const updateFName = (e) => {
        setFName(e.target.value);
    }
    const updateLName = (e) => {
        setLName(e.target.value);
    }
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updatePhone = (e) => {
        setPhone(e.target.value);
    }

    const updateProfile = () => {
        //update profile db function here 
    }
    return(
        <div style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Grid container sx={{
                width: '95vw',
            }}>
                <Grid item sm = {12} md={8}>
                    <Card sx={{
                        padding: '10px',
                        borderRadius: '5px',
                        margin:'10px',
                    }}>
                        <Typography 
                        variant="h5"
                        marginBottom={'10px'}
                        fontWeight={600}>General Information</Typography>
                        <Grid container>
                            <Grid item sm={6} sx={{
                                marginBottom: '15px',
                            }}>
                                <TextComponent text={'First Name'}/>
                                <ProfileInputField 
                                width={'250px'}
                                label={'First Name'}
                                inputType={'text'}
                                isrequired={true}
                                initialValue={fname}
                                updateValue={updateFName}></ProfileInputField>

                                <TextComponent text={'Last Name'}/>
                                <ProfileInputField 
                                width={'250px'}
                                label={'Last Name'}
                                inputType={'text'}
                                isrequired={true}
                                initialValue={lname}
                                updateValue={updateLName}></ProfileInputField>
                            </Grid>
                            <Grid item sm={6}>
                                <TextComponent text={'Email'}/>
                                <ProfileInputField 
                                width={'250px'}
                                label={'Email'}
                                inputType={'email'}
                                isrequired={true}
                                initialValue={email}
                                updateValue={updateEmail}></ProfileInputField>

                                <TextComponent text={'Phone Number'}/>
                                <ProfileInputField 
                                width={'250px'}
                                label={'+92 xxx xxxxxxx'}
                                inputType={'number'}
                                isrequired={true}
                                initialValue={phone}
                                updateValue={updatePhone}></ProfileInputField>
                            </Grid>
                        </Grid>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginRight: '30px'
                        }}>
                            <HoverZoom>
                                <AppButton 
                                text={'Update'}
                                onClick={updateProfile}/>
                            </HoverZoom>
                        </div>
                    </Card>
                </Grid>
                <Grid item sm = {12} md={4}>
                    <Card sx={{
                        margin:'10px',
                        padding: '10px',
                    }}>
                        <Card style={{
                            marginBottom: '20px',
                            height: '180px',
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'black'
                            
                        }}>
                            <img src={discussion}
                            width={'100%'}
                            height={'100%'}
                            style={{
                                objectFit: 'cover',
                            }}/>
                            <Avatar style={{
                            backgroundColor: theme.palette.shades.greenMedium,
                            width: '150px',
                            height: '150px',
                            position: 'absolute',
                            marginTop: '90px',
                            }}>
                            <IoIosPerson fontSize={'50px'} />
                            </Avatar>
                        </Card>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: '60px',
                        }}>
                            <Typography variant="h5" component="div">
                            {fname}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                            {email}
                            </Typography>
                        </div>
                        
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileScreen;