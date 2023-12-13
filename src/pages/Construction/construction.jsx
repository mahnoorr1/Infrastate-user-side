import { RingLoader } from 'react-spinners';
import React, { useState, useEffect } from 'react';
import { Typography, Card, Grid } from "@mui/material";
import TopNavBar from "../../components/Navbar/simpleNavBar";
import { downloadTiffFile, fetchZoneFilesFromFolder, getSingleImage, getOutputFiles } from '../../Firebase/firebaseStorage';
import AppButton from '../../components/Buttons/defaultButton';
import TrackedCard from './components/trackerCard';
import { useNavigate } from 'react-router-dom';

const categories = ['Zone1', 'Zone2', 'Zone3', 'Zone4'];
const Construction = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [filesData, setFilesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [zonesData, setZonesData] = useState([]);
    const [zone, setZone] = useState('1');

    useEffect(() => {
        const fetchFiles = async () => {
        try {
            const folderPath = 'output/';
            const filesData = await getOutputFiles(folderPath);
            setFilesData(filesData);
            console.log(filesData);
        } catch (error) {
            console.error('Error fetching files:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchFiles();
    }, []);

    useEffect(() => {
        const fetchZoneData = async () => {
          try {
            const filesData = await fetchZoneFilesFromFolder(zone);
            setZonesData(filesData);
          } catch (error) {
            console.error('Error fetching files:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchZoneData();
      }, [zone]);

    // const handleDownload = async () => {
    //     try {
    //         setLoading(true);
    //         const img1 = await downloadTiffFile(zone, fileName);
    //         console.log(`Download URL for ${fileName}.tiff in ${zone}:`, img1);
    //         setImgOld(img1);
    //         const img2 = await downloadTiffFile(zone, `${fileName}_2023`);
    //         console.log(`Download URL for ${fileName}_2023.tiff in ${zone}:`, img2);
    //         setImgNew(img2);
            
    //         const formData = new FormData();
    //         formData.append('img1', img1);
    //         formData.append('img2', img2);
    
    //         const response = await axios.post('http://127.0.0.1:8099/get_predictions' ,
    //         formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //         })
    
    //         console.log(response)
    //         console.log(response.data)
    
    //     } catch (error) {
    //         console.error('Error downloading .tiff file:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    //     };
    
    //     const handleImageLoad = () => {
    //     setLoading(false); 
    //     };
    
    //     const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         console.log(file);
    //     }
    // }

    const handleCategoryChange = (newCategory) => {
        if(newCategory == 'Zone1'){
            setZone(1);
            setLoading(true);
        }
        else if(newCategory == 'Zone2'){
            setZone(2);
            setLoading(true);
        }
        else if(newCategory == 'Zone3'){
            setZone(3);
            setLoading(true);
        }
        else if(newCategory == 'Zone4'){
            setZone(4);
            setLoading(true);
        }
    };

    const handleManualTrackingButton = () => {
        navigate('/construction/manualTracking');
    }
    return(
        <div style={{
            paddingTop: '30px'
        }}>
            <Typography variant="h4"
            fontWeight={600}
            sx={{
                display:'flex',
                justifyContent: 'center'
            }}>Track Activities Zone wise</Typography>
            <Typography sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>Track Changes Occured in Buildings development during the course of time</Typography>

            <Card sx={{
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px',
            }}>
                <div>
                    <TopNavBar categories={categories} onCategoryChange={handleCategoryChange}></TopNavBar>
                </div>
                {/* <div>
                <AppButton text={'Manual Tracking'}
                variant={'outlined'}
                onClick={handleManualTrackingButton}/>
                </div> */}
            </Card>
            {
             loading ? 
             <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
             }}>
                <RingLoader color="#36D7B7" loading={loading} size={150}/>
             </div>
              :
              <Grid container sx={{
                marginLeft: '2rem',
                marginBottom: '3rem',
              }}> {
                zonesData.map((data) => {
                    return(
                        <Grid item md = {4} lg = {3}>
                            <TrackedCard jpgURL={data.fileUrl}
                            fileName={data.fileName}
                            zone={zone}
                            tifURL={data.tifUrl}
                            tif2023URL={data.tif2023URL}
                            jsonContent={data && data.jsonContent}/>
                        </Grid>
                    )
                })
              }
              </Grid>
                
            }
            
        </div>
    )
}
export default Construction;