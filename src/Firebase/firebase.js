import firebase from 'firebase/app'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAzy-i9abDcHuWbNA95NFFHwiu4HlbwPQ8",
    authDomain: "mekexpress-39a7f.firebaseapp.com",
    databaseURL: "https://mekexpress-39a7f.firebaseio.com",
    projectId: "mekexpress-39a7f",
    storageBucket: "mekexpress-39a7f.appspot.com",
    messagingSenderId: "150420790793",
    appId: "1:150420790793:web:7156f22850b76f7ef762d8",
    measurementId: "G-0YHXG4DGWG"
}; 

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
 
const storage = firebase.storage() 

export  {
  storage, firebase as default
}