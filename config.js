import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASm_BWNE4fkiW6w-wRJ5FIkIcKxd32qtA",
    authDomain: "school-attendance-app-bf8ed.firebaseapp.com",
    databaseURL: "https://school-attendance-app-bf8ed-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-bf8ed",
    storageBucket: "school-attendance-app-bf8ed.appspot.com",
    messagingSenderId: "138779291121",
    appId: "1:138779291121:web:c6a198b820c12edd01a850"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();