import firebase from 'firebase';
require('@firebase/firestore')
 
var firebaseConfig = {
  apiKey: "AIzaSyDbWbhuGXSQn7qyg_SnT2pWiISdSZ9rkGA",
  authDomain: "barter-app-3c82c.firebaseapp.com",
  projectId: "barter-app-3c82c",
  storageBucket: "barter-app-3c82c.appspot.com",
  messagingSenderId: "133197803374",
  appId: "1:133197803374:web:4e17d84db0d82ef8b81b7f"
  };

  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();