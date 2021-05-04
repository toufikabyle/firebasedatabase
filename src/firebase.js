import firebase from "firebase";





var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAmv6-v4f8rSpzfq0KKKwQ0VWLqq8nsXuI",
    authDomain: "toufikfirebase.firebaseapp.com",
    projectId: "toufikfirebase",
    storageBucket: "toufikfirebase.appspot.com",
    messagingSenderId: "560593820466",
    appId: "1:560593820466:web:551661269bf559abfa152b",
    
  });
  // Initialize Firebase
  
  var db =firebaseApp.firestore();

  export { db };
  
