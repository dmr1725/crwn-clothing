import { 
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
 } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
  
const SignIn = () => {
    
    const log_google_user = async ()=>{
        const {user} = await signInWithGooglePopup();
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
        <h1>Sign In Page</h1>
        <button onClick={log_google_user}>Sign in with Google Popup</button>
        <SignUpForm/>
        </div>
    );
};
  
export default SignIn;