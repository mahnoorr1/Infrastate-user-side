import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { RingLoader } from 'react-spinners';
import { useLocation } from "react-router-dom";
import { downloadJpgFile } from "../../Firebase/firebaseStorage";
import ImageGrid from "../../components/imageSegments";

const AddTrackerOnZoneSegment = () => {
    const { state } = useLocation();
    const {tifURL, tif2023URL, fileName} = state || {};
    const [loading, setLoading] = useState(false);
    const [ predictionDone, setPrediction ] = useState(false);
    const [jpgResult, setJpgResult] = useState('');
    const [error, setError] = useState(false);
    useEffect(()=>{
        const handleDownload = async () => {
            try {
            setLoading(true);
            
            const formData = new FormData();
            formData.append('img1', tifURL);
            formData.append('img2', tif2023URL);
    
            const response = await axios.post('http://127.0.0.1:8099/get_predictions' ,
            formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            })
    
            console.log(response)
            console.log(response.data)
            setPrediction(true);
            } catch (error) {
            // Handle error
            console.error('Error downloading .tiff file:', error);
            setError(true);

            } 
        };
        handleDownload();
    }, [tifURL, tif2023URL]);
    
    useEffect(()=>{
        const handleGetJPG = async () => {
            try{
                setLoading(true);
                const imgResponse = await downloadJpgFile(fileName);
                setJpgResult(imgResponse);
                setLoading(false);
            } catch(error) {
                console.log("Error Fetching JPG Result File");
                setError(true);
            }
        }
        predictionDone ? handleGetJPG() : null;
        jpgResult !== '' ? setPrediction(false): null;
    }, [predictionDone]);


    const handleImageLoad = () => {
        setLoading(false); 
    };

    return (
        <div style={{
            padding: '30px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography variant="h4"
            fontWeight={600}>Tracked Changes</Typography>
            <Typography color={'grey'}>Tracking has been initiated, Results will be displayed soon</Typography>

            {
                loading ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <RingLoader color="#36D7B7" loading={loading} size={150} />
                    </div>
                ) : 
                (
                    error || jpgResult == '' ? (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Typography>Error Proceeding the Request</Typography>
                        </div>
                        
                    ) : (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <ImageGrid imagePath={jpgResult}/>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default AddTrackerOnZoneSegment;