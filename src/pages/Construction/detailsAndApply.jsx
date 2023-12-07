import { useState } from 'react';
import theme from '../../configs/theme';
import { useNavigate } from 'react-router-dom';
import { Typography, Card } from "@mui/material";
import { json, useLocation } from "react-router-dom";
import no_content from '../../assets/no_content.jpg';
import ImageGrid from "../../components/imageSegments";
import AppButton from '../../components/Buttons/defaultButton';
import DecisionModal from '../../components/decisionModal';

const TrackerDetailsAndApply = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const {zone, fileName, jpgURL, tifURL, tif2023URL, jsonContent} = state || {};
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleYes = () => {
        console.log('User clicked Yes');
        const parts = fileName.split('_');
        const fileNum = parts.length > 1 ? parts[1] : '';
        navigate("/construction/trackerDetails/addTracker", {state: {tifURL, tif2023URL, fileNum, fileName, zone}});
    };

    return(
        <div style={{
            padding: '30px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography
                variant="h4"
                fontWeight={600}>{fileName} Tracker of Zone {zone} details</Typography>
                <AppButton text={'Track Changes'} variant={'outlined'} onClick={handleOpenModal}/>
            </div>
            
            <hr/>
            <div style={{
                display: 'flex',
                gap: '10px',
            }}>
                {/* Stats Card 1 */}
                <Card sx={{
                height: '120px',
                width: '250px',
                borderRadius: '5px',
                padding: '10px',
                margin: '10px',
                border: '2px solid',
                borderColor: theme.palette.shades.greenMedium,
                }}>
                    {
                        jsonContent == null ? 
                        <div>
                            <Typography
                            variant='h3'
                            fontWeight={600}
                            color={theme.palette.shades.greenMedium}>
                            N/A</Typography>
                            <Typography 
                            variant='body1'
                            marginTop={'5px'}
                            color={'grey'}>Number of Changes Found</Typography>
                        </div> : 
                        <div>
                            <Typography
                            variant='h3'
                            fontWeight={600}
                            color={theme.palette.shades.greenMedium}>
                            {jsonContent && jsonContent?.geo_data && jsonContent?.geo_data.features.length}</Typography>
                            <Typography 
                            variant='body1'
                            marginTop={'5px'}
                            color={'grey'}>Number of Changes Found</Typography>
                        </div>
                        
                    }
                
                </Card>

                {/* Stats Card 2 */}
                <Card sx={{
                    height: '120px',
                    width: '250px',
                    borderRadius: '5px',
                    padding: '10px',
                    margin: '10px',
                    border: '2px solid',
                    borderColor: theme.palette.shades.greenMedium,
                    }}>
                        {
                        jsonContent == null ? 
                        <div>
                            <Typography
                            variant='h3'
                            fontWeight={600}
                            color={theme.palette.shades.greenMedium}>
                            N/A %</Typography>
                            <Typography 
                            variant='body1'
                            marginTop={'5px'}
                            color={'grey'}>Percentage of Change</Typography>
                        </div> : 
                        <div>
                            <Typography
                            variant='h3'
                            fontWeight={600}
                            color={theme.palette.shades.greenMedium}>
                            {jsonContent && jsonContent?.change_results_ai.toFixed(2)}%</Typography>
                            <Typography 
                            variant='body1'
                            marginTop={'5px'}
                            color={'grey'}>Percentage of Change</Typography>
                        </div>
                        
                    }
                </Card>
            </div>
            <Typography 
            variant="h6"
            fontWeight={600}>Previously Tracked Change</Typography>
            {
                jpgURL ? (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px',
                    }}>
                        <ImageGrid imagePath={jpgURL}></ImageGrid>
                    </div>
                ) : (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <img src={no_content}
                        width={'300px'}
                        style={{
                            opacity: 0.5
                        }}></img>
                        <Typography variant='h6'
                        fontWeight={600}
                        color={'grey'}>No previous Record</Typography>
                    </div>
                )
            }
            <DecisionModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onYes={handleYes}/>
            
           
        </div>
    )
}

export default TrackerDetailsAndApply;