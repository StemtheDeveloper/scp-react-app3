// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAqFqxvok8DF5bx_bHMt5jqZCNdNUMiFI",
  authDomain: "scp-crud-app-2.firebaseapp.com",
  projectId: "scp-crud-app-2",
  storageBucket: "scp-crud-app-2.appspot.com",
  messagingSenderId: "533549569915",
  appId: "1:533549569915:web:4988cd57869355d9c9cfde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getfirestore(app);
