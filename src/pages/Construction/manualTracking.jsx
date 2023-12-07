import { Typography } from "@mui/material";
import React, { useState , useEffect } from 'react';
import { downloadTiffFile } from "../../Firebase/firebaseStorage";
import { RingLoader } from 'react-spinners';
import axios from 'axios';
import FileUpload from "../../components/fileUpload";
const ManualTracking = () => {
    const [zone, setZone] = useState('');
    const [fileName, setFileName] = useState('');
    const [tiffUrl, setTiffUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [imgOld , setImgOld] = useState(null)
    const [imgNew , setImgNew] = useState(null)

    const handleDownload = async () => {
        try {
        setLoading(true);
        const img1 = await downloadTiffFile(zone, fileName);
        console.log(`Download URL for ${fileName}.tiff in ${zone}:`, img1);
        setImgOld(img1);
        const img2 = await downloadTiffFile(zone, `${fileName}_2023`);
        console.log(`Download URL for ${fileName}_2023.tiff in ${zone}:`, img2);
        setImgNew(img2);
        
        const formData = new FormData();
        formData.append('img1', img1);
        formData.append('img2', img2);

        const response = await axios.post('http://127.0.0.1:8099/get_predictions' ,
        formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })

        console.log(response)
        console.log(response.data)

        } catch (error) {
        // Handle error
        console.error('Error downloading .tiff file:', error);
        } finally {
        setLoading(false);
        }
    };



    const handleImageLoad = () => {
        setLoading(false); // Hide spinner when the image has loaded
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(file);
        }
    }

//   return (
//     <>
//         {/* <div>
//             <input type="file" onChange={handleFileChange} />
//         </div> */}
    
//    </>
//   );
    return(
        <div style={{
            padding: '30px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Typography variant="h4"
            fontWeight={600}>Manually Track Changes</Typography>
            <Typography color={'grey'}>Manually add 2 .tif files of any area that have possible changes and get changed areas results</Typography>
            <div style={{
            margin: '100px'
            }}>
                <label>
                    Zone:
                    <input type="text" value={zone} onChange={(e) => setZone(e.target.value)} />
                </label>
                <br />
                <label>
                    File Name:
                    <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} />
                </label>
                <br />
                <FileUpload/>
                <button onClick={handleDownload}>Track Activity</button>
                <br />
                {loading ? (
                    // Display a loading spinner while the image is being fetched
                    <div className="loading-container">
                    <RingLoader color="#36D7B7" loading={loading} size={150} />
                    </div>
                ) : tiffUrl ? (
                    // Display the image once it's downloaded
                    <div>
                    {/* <p>Preview of {fileName}.tif in {zone}:</p>
                    <img
                        style={{
                        width: '400px',
                        height: '400px',
                        }}
                        src={tiffUrl}
                        alt={`${fileName}.tiff`}
                        onLoad={handleImageLoad}
                    /> */}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default ManualTracking;