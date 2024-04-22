// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBihRH7BtsOQWh67n029ndi2wsrbseYLsU",
  authDomain: "s0104-react-dragon-news-mod-52.firebaseapp.com",
  projectId: "s0104-react-dragon-news-mod-52",
  storageBucket: "s0104-react-dragon-news-mod-52.appspot.com",
  messagingSenderId: "795465050360",
  appId: "1:795465050360:web:5847f8ae0ef57d015b330d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
