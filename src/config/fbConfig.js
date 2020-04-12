import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'


var firebaseConfig = {
    apiKey: "AIzaSyA5GS9SyDlVbV1TKDHT_O-IobEP9Tt5ExI",
    authDomain: "venilia-games.firebaseapp.com",
    databaseURL: "https://venilia-games.firebaseio.com",
    projectId: "venilia-games",
    storageBucket: "venilia-games.appspot.com",
    messagingSenderId: "914229561342",
    appId: "1:914229561342:web:1db96f953a1b9305fee2af",
    measurementId: "G-J72TK1CP6K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase