import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCbSBcW9HhONMW7-5Sf1lrTGjhYmGaz7cU",
  authDomain: "social-media-cfde0.firebaseapp.com",
  projectId: "social-media-cfde0",
  storageBucket: "social-media-cfde0.appspot.com",
  messagingSenderId: "886888652664",
  appId: "1:886888652664:web:390b8586bfd925337c328d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);