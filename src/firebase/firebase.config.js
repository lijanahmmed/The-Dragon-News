// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMFOB8p7P88rewD7gf9iqgdRx0kJVV8yM",
  authDomain: "dragon-news-breaking.firebaseapp.com",
  projectId: "dragon-news-breaking",
  storageBucket: "dragon-news-breaking.firebasestorage.app",
  messagingSenderId: "598265501084",
  appId: "1:598265501084:web:d3a276b92ae529eeab6459",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
