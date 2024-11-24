import firebase from 'firebase/compat/app';
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
const app=firebase.initializeApp(firebaseConfig);
export const db=getDatabase(app)