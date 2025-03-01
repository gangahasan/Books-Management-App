// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKHGscbXXD_7rieUEhT7dtfBI-vmpD5Yo",
  authDomain: "module4-main-evaluation.firebaseapp.com",
  projectId: "module4-main-evaluation",
  storageBucket: "module4-main-evaluation.firebasestorage.app",
  messagingSenderId: "959422786329",
  appId: "1:959422786329:web:e429db158d91756f747388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);