import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyByv09vDhDGJORynZvWYnOyR8ST_3mf_Qs",
    authDomain: "book-santa-405ef.firebaseapp.com",
    projectId: "book-santa-405ef",
    storageBucket: "book-santa-405ef.appspot.com",
    messagingSenderId: "236510283162",
    appId: "1:236510283162:web:2bca5c8b55750c8024e623"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();