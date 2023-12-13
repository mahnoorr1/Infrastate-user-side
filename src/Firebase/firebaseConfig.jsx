import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcXb1YwSR_EzHwr2Guc5MCYdF4Zi7FkzI",
  authDomain: "infrastate-final.firebaseapp.com",
  projectId: "infrastate-final",
  storageBucket: "infrastate-final.appspot.com",
  messagingSenderId: "1053005391686",
  appId: "1:1053005391686:web:a45b7c95f1367a92bf2747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;