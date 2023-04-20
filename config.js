import firebase from "firebase";
require("@firebase/firestore");

 const firebaseConfig = {
  apiKey: "AIzaSyCrs9ebSCQ35J8oz4KbV0XdkGQfWLGQMH8",
  authDomain: "projeto-71-35401.firebaseapp.com",
  projectId: "projeto-71-35401",
  storageBucket: "projeto-71-35401.appspot.com",
  messagingSenderId: "506515494868",
  appId: "1:506515494868:web:5736ff2f89276a59202841"
};
 

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
