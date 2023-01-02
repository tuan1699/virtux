// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKgT_WGKCS2iGFa690tlDQomHDb7nk-F8",
  authDomain: "virtua-f943e.firebaseapp.com",
  projectId: "virtua-f943e",
  storageBucket: "virtua-f943e.appspot.com",
  messagingSenderId: "51719864929",
  appId: "1:51719864929:web:05678bea013d83d3246020",
  measurementId: "G-RJWP0TLC7T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const init = () => {
  initializeApp(firebaseConfig);
};
