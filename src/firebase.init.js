// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGdVi_UPkq2hifjCPtbuZNvD1Evsin3jM",
    authDomain: "giles-clement-photography.firebaseapp.com",
    projectId: "giles-clement-photography",
    storageBucket: "giles-clement-photography.appspot.com",
    messagingSenderId: "573604711440",
    appId: "1:573604711440:web:c7791680ed1ce31c24ce95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;