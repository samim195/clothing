import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAUXgzqITINr73f_bzaxBRLydei2wfPk1k",
    authDomain: "clothing-c9be9.firebaseapp.com",
    databaseURL: "https://clothing-c9be9.firebaseio.com",
    projectId: "clothing-c9be9",
    storageBucket: "clothing-c9be9.appspot.com",
    messagingSenderId: "952673003871",
    appId: "1:952673003871:web:29b13c71ba183e79e36eea",
    measurementId: "G-T1CN1FW38N"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
