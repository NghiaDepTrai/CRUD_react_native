import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
    apiKey: "AIzaSyDREg2w1gQO8QK8nVbyRn4fPaE4g7_r-nM",
    authDomain: "crudappreactnative.firebaseapp.com",
    databaseURL: "https://crudappreactnative.firebaseio.com",
    projectId: "crudappreactnative",
    storageBucket: "crudappreactnative.appspot.com",
    messagingSenderId: "498746745412",
    appId: "1:498746745412:web:4a710290d35f23717d1211",
    measurementId: "G-W1KQ6VZ5XC"
  };
firebase.initializeApp(firebaseConfig);


export default firebase;