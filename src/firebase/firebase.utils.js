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

// Store authenticated users into database  

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //  unique user id of the user
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get the user data using get method
    const snapShot = await userRef.get();



    // if user data doesn't exist then create data using userRef.set() method
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;

        // gets current date when this was envoked
        const createdAt = new Date();


        // make an async request to the database
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
