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
  const filePath = `Zone${zone}/Z${zone}_${fileName}.tif`;

  console.log(filePath)
  try {
    const fileRef = ref(storage, filePath);
    const downloadUrl = await getDownloadURL(fileRef);
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch tif file: ${response.statusText}`);
    }

    const fileBlob = await response.blob();
    const tifFile = new File([fileBlob], `Z${zone}_${fileName}.tif`, {
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
//below one is for fetching from subfolder 
// export const getOutputImages = async (folderPath) => {
//     const folderRef = ref(storage, folderPath);
  
//     try {
//       const listResult = await list(folderRef, { prefixes: true });
  
//       const subfolderPromises = listResult.prefixes.map(async (subfolder) => {
//         const subfolderListResult = await list(subfolder);
  
//         return Promise.all(
//           subfolderListResult.items
//             .filter((item) => item.name.endsWith('.jpg'))
//             .map(async (item) => {
//               const imageUrl = await getDownloadURL(item);
//               console.log(imageUrl)
//               return { imageUrl, fileName: item.name };
//             })
//         );
//       });
  
//       const imagesData = await Promise.all(subfolderPromises);
//       return imagesData.flat(); // Flatten the array of arrays into a single array
//     } catch (error) {
//       console.error('Error fetching images:', error);
//       throw error;
//     }
// };

export const getOutputImages = async (folderPath) => {
  const folderRef = ref(storage, folderPath);

  try {
    const listResult = await list(folderRef);

    const imagesData = await Promise.all(
      listResult.items
        .filter((item) => item.name.endsWith('.jpg'))
        .map(async (item) => {
          const imageUrl = await getDownloadURL(item);
          console.log(imageUrl);
          return { imageUrl, fileName: item.name };
        })
    );

    return imagesData;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const getOutputJSON = async (folderPath) => {
  const folderRef = ref(storage, folderPath);

  try {
    const listResult = await list(folderRef);

    const jsonData = await Promise.all(
      listResult.items
        .filter((item) => item.name.endsWith('.json'))
        .map(async (item) => {
          const jsonUrl = await getDownloadURL(item);
          console.log(jsonUrl);
          return { jsonUrl, fileName: item.name };
        })
    );

    return jsonData;
  } catch (error) {
    console.error('Error fetching JSON files:', error);
    throw error;
  }
};


// Assuming getOutputFiles returns an array of objects with 'image' and 'fileName' properties
export const getOutputFiles = async (folderPath) => {
  const folderRef = ref(storage, folderPath);

  try {
    const listResult = await list(folderRef);

    const filesData = await Promise.all(
      listResult.items.map(async (item) => {
        const fileUrl = await getDownloadURL(item);
        const isImage = item.name.endsWith('.jpg');
        const isJson = item.name.endsWith('.json');

        if (isImage || isJson) {
          const fileContent = isJson ? await getJsonContent(item) : null;

          return {
            image: isImage ? fileUrl : null,
            jsonContent: isJson ? fileContent : null,
            fileName: item.name,
          };
        } else {
          return null; // Exclude other file types
        }
      })
    );

    // Filter out null values (non-image and non-JSON files)
    const filteredFilesData = filesData.filter(Boolean);

    return filteredFilesData;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};

// Helper function to get JSON content from a Storage Reference
const getJsonContent = async (item) => {
  try {
    const response = await getDownloadURL(item);
    const jsonResponse = await fetch(response);
    const jsonContent = await jsonResponse.json();
    return jsonContent;
  } catch (error) {
    console.error(`Error fetching JSON content for ${item.name}:`, error);
    throw error;
  }
};
