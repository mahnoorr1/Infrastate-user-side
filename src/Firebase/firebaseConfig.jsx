import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQU_pC4CncZVBVNTllbMt8tuMG35PLCZs",
    authDomain: "infrastate-c9605.firebaseapp.com",
    projectId: "infrastate-c9605",
    storageBucket: "infrastate-c9605.appspot.com",
    messagingSenderId: "214469370155",
    appId: "1:214469370155:web:16d30e9b20d8ba29fc256e",
    measurementId: "G-EFT80S4S9P"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;