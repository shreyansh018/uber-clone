import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaE333zlzlBBf_-Oc2LKVC1FPEBHm4UJ8",
  authDomain: "uber-clone-25998.firebaseapp.com",
  projectId: "uber-clone-25998",
  storageBucket: "uber-clone-25998.appspot.com",
  messagingSenderId: "697906557812",
  appId: "1:697906557812:web:7f6d1d3422a2a02fe5b221",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
