import { 
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
 } from "../../utils/firebase/firebase.utils";
  
const SignIn = () => {
    
    const log_google_user = async ()=>{
        const {user} = await signInWithGooglePopup();
    }

    return (
        <div>
        <h1>Sign In Page</h1>
        <button onClick={log_google_user}>Sign in with Google Popup</button>
        </div>
    );
};
  
export default SignIn;