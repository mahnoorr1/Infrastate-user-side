import theme from '../../configs/theme';
import { Card, TextField, Typography } from "@mui/material";
import InputField from "../../components/inputField";
import { useState } from "react";
import AppButton from "../../components/Buttons/defaultButton";
import HoverZoom from "../../components/onhoverZoom";
import AerialMap from "../../components/Maps/aerialViewMap";

const ContactUs = () => {
    const [ name, setName] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ description, setDescription ] = useState('');
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updateSubject = (e) => {
        setSubject(e.target.value);
    }
    const updateDescription = (e) => {
        setDescription(e.target.value);
    }
    return(
        <div style={{
            margin: '20px',
        }}>
            <Typography
            variant="h4"
            fontWeight={600}>Contact Us</Typography>
            <hr/>
            <Card sx={{
                display: 'grid',
                gridTemplateColumns: {
                    sm: '1fr',
                    md: '1fr 1fr',
                },
                gap: '30px',
                boxShadow: 'none',
            }}>
                <div>
                    <Typography variant="body1"
                    fontWeight={600}
                    marginTop={'10px'}
                    color={theme.palette.shades.greenMedium}>Head office:</Typography>
                    <Typography>Khayaban-e-Suharwardi, Sector G-7/4, Islamabad</Typography>
                    <Typography>Secretary CDA Board, CDA</Typography>

                    <Typography variant="body1"
                    fontWeight={600}
                    marginTop={'10px'}
                    color={theme.palette.shades.greenMedium}>Telephone:</Typography>
                    <Typography>+92-51-9252972</Typography>

                    <Typography variant="body1"
                    fontWeight={600}
                    marginTop={'10px'}
                    color={theme.palette.shades.greenMedium}>On Map:</Typography>
                    <AerialMap 
                    width={'40vw'} 
                    height={'40vh'} 
                    lat={33.702509}
                    lng={73.077708}></AerialMap>
                </div>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    padding: '10px',
                    margin: '5px',
                    width: '550px',
                    alignItems: 'center',
                }}>
                    <Typography variant="h6"
                    fontWeight={600}>Write us a Message</Typography>
                    <InputField 
                    inputType={'text'}
                    initialValue={name}
                    updateValue={updateName}
                    label={'Full Name'}
                    isrequired={true}></InputField>

                    <InputField 
                    inputType={'text'}
                    initialValue={email}
                    updateValue={updateEmail}
                    label={'Email'}
                    isrequired={true}></InputField>

                    <InputField 
                    inputType={'text'}
                    initialValue={description}
                    updateValue={updateDescription}
                    multiline={true}
                    label={'Description'}
                    isrequired={true}></InputField>

                    <HoverZoom>
                        <AppButton
                        text={'Send message'}
                        width={'500px'}
                        onClick={()=> {}}/>
                    </HoverZoom>
                    
                </Card>
            </Card>
            

        </div>
    )
}

export default ContactUs;