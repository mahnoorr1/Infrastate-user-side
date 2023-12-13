import { ref, getDownloadURL, listAll, list } from 'firebase/storage';
import storage from './firebaseConfig';

export const downloadJpgFile = async (fileName) => {
  try {
    const outputFolder = 'output/';
    const jpgFilePath = `${outputFolder}${fileName}.jpg`;

    const jpgFileRef = ref(storage, jpgFilePath);
    const downloadUrl = await getDownloadURL(jpgFileRef);
    return downloadUrl;

  } catch (error) {
    console.error(`Error downloading ${fileName}.jpg:`, error);
    throw error;
  }
};

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
  console.log('Entered Tif download method')
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


export const fetchZoneFilesFromFolder = async (zone) => {
  try {
    const zoneFolderPath = `Zone${zone}/`;
    const outputFolderPath = `output/`;

    // Fetch TIF files from the specified Zone folder
    const tifFilesRef = ref(storage, zoneFolderPath);
    const tifListResult = await list(tifFilesRef);

    const tifFiles = await Promise.all(
      tifListResult.items
        .filter((item) => item.name.endsWith('.tif') && !item.name.includes('2023'))
        .map(async (item) => {
          const tifUrl = await getDownloadURL(item);
          return { tifUrl, fileName: item.name.replace('.tif', '') };
        })
    );

    // Fetch TIF files from the specified Zone folder that contain '2023' in their names
    const tif2023Files = await Promise.all(
      tifListResult.items
        .filter((item) => item.name.endsWith('.tif') && item.name.includes('2023'))
        .map(async (item) => {
          const tif2023Url = await getDownloadURL(item);
          const fileName = item.name.replace('.tif', '').replace('_2023', '');
    
          return { tif2023Url, fileName };
        })
    );
    


  // Fetch JPG and JSON files from the output folder
  const outputFilesRef = ref(storage, outputFolderPath);
  const outputListResult = await list(outputFilesRef);

  const outputFiles = await Promise.all(
    outputListResult.items
      .filter((item) => {
        const fileNameWithoutExtension = item.name.split('.')[0];
        return fileNameWithoutExtension.includes(`Z${zone}`);
      })
      .map(async (item) => {
        const fileNameWithoutExtension = item.name.split('.')[0];
        const fileUrl = await getDownloadURL(item);

        // Fetch JSON content if the JSON file exists
        const jsonFileName = `${fileNameWithoutExtension}.json`;
        const jsonItem = outputListResult.items.find((json) => json.name === jsonFileName);
        const jsonContent = jsonItem ? await getJsonContent(jsonItem) : null;

        return {
          fileUrl,
          jsonContent,
          fileName: fileNameWithoutExtension,
        };
      })
  );

  // Organize the files into an array of objects with TIF, JPG, and JSON grouped together
  const result = tifFiles.map((tifFile) => {
    const matchingOutputFile = outputFiles.find(
      (outputFile) => outputFile.fileName === tifFile.fileName
    );
    const tif2023 = tif2023Files.find(
      (tif) => tif.fileName === tifFile.fileName
    );

    return {
      tifUrl: tifFile.tifUrl,
      tif2023Url: tif2023.tif2023Url,
      fileUrl: matchingOutputFile?.fileUrl || null,
      jsonContent: matchingOutputFile?.jsonContent || null,
      fileName: tifFile.fileName,
    };
  });

  console.log(result);
  return result;

  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};
