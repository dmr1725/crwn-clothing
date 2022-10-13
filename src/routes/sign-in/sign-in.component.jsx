import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
  
const SignIn = () => {
    
    const log_google_user = async ()=>{
        const response = await signInWithGooglePopup()
        console.log(response.user)
    }

    return (
        <div>
        <h1>Sign In Page</h1>
        <button onClick={log_google_user}>Sign in with Google Popup</button>
        </div>
    );
};
  
export default SignIn;