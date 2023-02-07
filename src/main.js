import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Import the functions you need from the SDKs you need
//import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGNaiDce1UgTqxbub_qPNIhoz-_R1QAM",
  authDomain: "fir-vue-33fde.firebaseapp.com",
  projectId: "fir-vue-33fde",
  storageBucket: "fir-vue-33fde.appspot.com",
  messagingSenderId: "277905025585",
  appId: "1:277905025585:web:5ab887938d928da663c310",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



createApp(App).use(router).mount("#app");
