import { ref, getDownloadURL, listAll, list } from 'firebase/storage';
import storage from './firebaseConfig';



// get single image
export const getSingleImage = async (imagePath) => {
  try {
    const storageRef = ref(storage, imagePath);

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error; 
  }
};


export const downloadTiffFile = async (zone, fileName) => {
  const filePath = `Zone${zone}/z${zone}_${fileName}.tif`;

  console.log(filePath)
  try {
    const fileRef = ref(storage, filePath);
    const downloadUrl = await getDownloadURL(fileRef);
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch tif file: ${response.statusText}`);
    }

    const fileBlob = await response.blob();
    const tifFile = new File([fileBlob], `z${zone}_${fileName}.tif`, {
      type: 'image/tiff',
      lastModified: new Date().getTime(), 
    });

    console.log("tif File from Firebase:", tifFile);
    return tifFile; 
    //return downloadUrl
  } catch (error) {
    console.error(`Error downloading ${fileName}.tif from Zone ${zone}:`, error);
    throw error;
  }
};


// all images 

export const getOuputImages = async (folderPath) => {
    const folderRef = ref(storage, folderPath);
  
    try {
      const listResult = await list(folderRef, { prefixes: true });
  
      const subfolderPromises = listResult.prefixes.map(async (subfolder) => {
        const subfolderListResult = await list(subfolder);
  
        return Promise.all(
          subfolderListResult.items
            .filter((item) => item.name.endsWith('.jpg'))
            .map(async (item) => {
              const imageUrl = await getDownloadURL(item);
              console.log(imageUrl)
              return { imageUrl, fileName: item.name };
            })
        );
      });
  
      const imagesData = await Promise.all(subfolderPromises);
      return imagesData.flat(); // Flatten the array of arrays into a single array
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
};


