// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuSo8r4M_-Cbyp23N6lcSsZAMrFNVEycQ",
  authDomain: "econsurvey-5f3d3.firebaseapp.com",
  projectId: "econsurvey-5f3d3",
  storageBucket: "econsurvey-5f3d3.appspot.com",
  messagingSenderId: "989232858795",
  appId: "1:989232858795:web:5aa14db7f02c06030419ee",
  measurementId: "G-JHB7Q11WXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;