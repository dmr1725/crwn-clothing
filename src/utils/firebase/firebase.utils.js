import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoh6w7IT3DZK5rEKHjlsjBthA5umuAVG8",
    authDomain: "crwn-clothing-db-9af8a.firebaseapp.com",
    projectId: "crwn-clothing-db-9af8a",
    storageBucket: "crwn-clothing-db-9af8a.appspot.com",
    messagingSenderId: "842642173768",
    appId: "1:842642173768:web:0e8db9377fcebbded14d7d"
  };
  
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user_auth) =>{
    const user_doc_ref = doc(db, 'users', user_auth.uid);

    const user_snapshot = await getDoc(user_doc_ref);

    if(!user_snapshot.exists()){
        const { displayName, email } = user_auth;
        const created_at = new Date();

        try {
            await setDoc(user_doc_ref, {
                displayName,
                email,
                created_at
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return user_doc_ref;
}