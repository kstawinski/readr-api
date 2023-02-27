// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjUhsIJBeEklwX_QdvAXGxy7kiVgT4EBM',
  authDomain: 'readr-ea3d2.firebaseapp.com',
  projectId: 'readr-ea3d2',
  storageBucket: 'readr-ea3d2.appspot.com',
  messagingSenderId: '1050106639605',
  appId: '1:1050106639605:web:b99e538e93bb55ba0741bc'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app