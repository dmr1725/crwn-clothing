import { useState } from 'react';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleChange = (event) => {

    }
    
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={()=> {}}>
                <label>Display Name</label>
                <input type="text" required/>

                <label type="email">Email</label>
                <input required/>

                <label type="password">Password</label>
                <input required/>

                <label type="password">Confirm Password</label>
                <input required/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;