import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from 'firebase/auth'

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