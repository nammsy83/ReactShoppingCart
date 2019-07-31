import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3tS4Ql96-NY2SmhEt8iaeUOaMpxsee9g",
    authDomain: "crown-db-82ed6.firebaseapp.com",
    databaseURL: "https://crown-db-82ed6.firebaseio.com",
    projectId: "crown-db-82ed6",
    storageBucket: "",
    messagingSenderId: "37398923898",
    appId: "1:37398923898:web:66173ac2ffd35de6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
