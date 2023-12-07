import axios from "axios";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { RingLoader } from 'react-spinners';
import { useLocation } from "react-router-dom";
import { downloadJpgFile, downloadTiffFile } from "../../Firebase/firebaseStorage";
import ImageGrid from "../../components/imageSegments";

const AddTrackerOnZoneSegment = () => {
    const { state } = useLocation();
    const {tifURL, tif2023URL, fileNum, fileName, zone} = state || {};
    const [file, setFile ] = useState(fileName);
    const [loading, setLoading] = useState(true);
    const [ predictionDone, setPrediction ] = useState(false);
    const [jpgResult, setJpgResult] = useState('');
    const [error, setError] = useState(false);
    const [downloadInitiated, setDownloadInitiated] = useState(false);
    const [imgOld , setImgOld] = useState(null)
    const [imgNew , setImgNew] = useState(null)

    useEffect(()=>{
        if(!downloadInitiated) {
            const handleDownload = async () => {
                try {
                    const img1 = await downloadTiffFile(zone, fileNum);
                    console.log(`Download URL for ${fileNum}.tif in ${zone}:`, img1);
                    setImgOld(img1);
                    const img2 = await downloadTiffFile(zone, `${fileNum}_2023`);
                    console.log(`Download URL for ${fileNum}_2023.tif in ${zone}:`, img2);
                    setImgNew(img2);
    
                    const formData = new FormData();
                    formData.append('img1', img1);
                    formData.append('img2', img2);
    
                    const response = await axios.post('http://127.0.0.1:8099/get_predictions', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
    
                    console.log(response);
                    console.log(response.data);
                    setPrediction(true);
                } catch (error) {
                    // Handle error
                    console.error('Error downloading .tif file:', error);
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };
            handleDownload()
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
        }
        
    }, [fileNum, zone, predictionDone, downloadInitiated]);
    
    
    // useEffect(()=>{
    //     const handleGetJPG = async () => {
    //         try{
    //             setLoading(true);
    //             const imgResponse = await downloadJpgFile('Z2_3');
    //             setJpgResult(imgResponse);
    //             setLoading(false);
    //         } catch(error) {
    //             console.log("Error Fetching JPG Result File");
    //             setError(true);
    //         }
    //     }
    //     predictionDone ? handleGetJPG() : null;
    //     jpgResult !== '' ? setPrediction(false): null;
    // }, [predictionDone]);


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