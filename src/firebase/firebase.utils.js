import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase configuration
const config = {
    apiKey: "AIzaSyA3tS4Ql96-NY2SmhEt8iaeUOaMpxsee9g",
    authDomain: "crown-db-82ed6.firebaseapp.com",
    databaseURL: "https://crown-db-82ed6.firebaseio.com",
    projectId: "crown-db-82ed6",
    storageBucket: "",
    messagingSenderId: "37398923898",
    appId: "1:37398923898:web:66173ac2ffd35de6"
}
// initialize app
firebase.initializeApp(config);


// get user details from database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // store user id in a variable
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get details of that user using get method
    const snapShot = await userRef.get();

    // check if the user exists and then set new details 
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};
// export firebase auth library
export const auth = firebase.auth();
// export firestore database 
export const firestore = firebase.firestore();

// set google login
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;