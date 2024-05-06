// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ZaumTyLOJD2CeRprKRoxJSmFcDCyAwM",
  authDomain: "fyafiles.firebaseapp.com",
  projectId: "fyafiles",
  storageBucket: "fyafiles.appspot.com",
  messagingSenderId: "335513165030",
  appId: "1:335513165030:web:45e3df51e01fc33281ef27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
