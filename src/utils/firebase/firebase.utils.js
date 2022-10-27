import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
 } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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
const google_provider = new GoogleAuthProvider();
google_provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, google_provider);
}
export const signInWithGoogleRedirect = () => {
    return signInWithRedirect(auth, google_provider);
}

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done')

} 

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items;
        return acc
    }, {});
    return categoryMap;
}


export const createUserDocumentFromAuth = async (user_auth, additionalInformation) =>{
    if (!user_auth) return;

    const user_doc_ref = doc(db, 'users', user_auth.uid);

    const user_snapshot = await getDoc(user_doc_ref);

    if(!user_snapshot.exists()){
        const { displayName, email } = user_auth;
        const created_at = new Date();

        try {
            await setDoc(user_doc_ref, {
                displayName,
                email,
                created_at,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return user_doc_ref;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
};