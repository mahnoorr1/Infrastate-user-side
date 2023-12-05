// import React, { useEffect, useState } from 'react';
// import { getOuputImages } from '../Firebase/firebaseStorage';
// import { RingLoader } from 'react-spinners';
// import { Typography } from '@mui/material';

// const ImageListComponent = () => {
//   const [imagesData, setImagesData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const folderPath = 'Output/';
//         const imagesData = await getOuputImages(folderPath);
//         setImagesData(imagesData);
//       } catch (error) {
//         console.log("Error fetching images:", error);
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or error
//       }
//     };

//     fetchImages();
//   }, []); 

//   return (
//     <div style={{
//             display: 'flex',
//             gap: '30px',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height:'50vh'
//           }}>
//       {loading ? (
//         // Display a loading spinner while images are being fetched
//         <div className="loading-container"
//         style={{
            
//             flexDirection: 'column',
//         }}>
//           <RingLoader color="#36D7B7" loading={loading} size={150} />
//           <Typography textAlign={'center'}>Loading...</Typography>
//         </div>
//       ) : (
//         // Display images once they are fetched
//         imagesData.map((image, index) => (
//           <div key={index} style={{
//             height: '200px',
//             width: '200px',
//             backgroundColor: 'grey'
//           }}>
//             <img
//               style={{
//                 width: '200px',
//                 height: '200px'
//               }}
//               src={image.imageUrl}
//               alt={`Firebase Image ${index}`}
//             />
//             <p>{image.fileName}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ImageListComponent;

import React, { useState , useEffect } from 'react';
import { downloadTiffFile } from '../Firebase/firebaseStorage';
import { RingLoader } from 'react-spinners';
import axios from 'axios';


const TiffDownloadComponent = () => {
  const [zone, setZone] = useState('');
  const [fileName, setFileName] = useState('');
  const [tiffUrl, setTiffUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgOld , setImgOld] = useState(null)
  const [imgNew , setImgNew] = useState(null)

  const handleDownload = async () => {
    try {
      setLoading(true);
      // const img1 = await downloadTiffFile(zone, fileName);
      // console.log(`Download URL for ${fileName}.tiff in ${zone}:`, img1);
      // setImgOld(img1);
      // const img2 = await downloadTiffFile(zone, `${fileName}_2023`);
      // console.log(`Download URL for ${fileName}_2023.tiff in ${zone}:`, img2);
      // setImgNew(img2);
      
      const formData = new FormData();
      formData.append('img1', imgOld);
      formData.append('img2', imgNew);

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
      console.error(error);
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
      setImgOld(file);
    }
}
  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImgNew(file);
    }
}

  return (
    <>
         <div>
            <input type="file" onChange={handleFileChange} />
        </div> 
        <div>
            <input type="file" onChange={handleFileChange1} />
        </div> 
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
          <p>Preview of {fileName}.tif in {zone}:</p>
          <img
            style={{
              width: '400px',
              height: '400px',
            }}
            src={tiffUrl}
            alt={`${fileName}.tiff`}
            onLoad={handleImageLoad}
          />
        </div>
      ) : null}
    </div>
   </>
  );
};

export default TiffDownloadComponent;