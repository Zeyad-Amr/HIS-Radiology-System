import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBdm14VuOugipFLLwTMoKGbCPla1NPdx0Y",
  authDomain: "akwa-his.firebaseapp.com",
  projectId: "akwa-his",
  storageBucket: "akwa-his.appspot.com",
  messagingSenderId: "673612635095",
  appId: "1:673612635095:web:9bbf003251f30633fe8992",
  measurementId: "G-9PTBKEP1R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
