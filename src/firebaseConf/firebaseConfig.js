// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyBu75xO9vhvMQ2AIb5Td2VCHr_2srAILf8",
    authDomain: "bislerium-f5734.firebaseapp.com",
    projectId: "bislerium-f5734",
    storageBucket: "bislerium-f5734.appspot.com",
    messagingSenderId: "940942309747",
    appId: "1:940942309747:web:d07646960c1c8dcb4f6d06",
    // measurementId: "G-P4SX9HESNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const messaging = getMessaging(app);
