import React from 'react';
import './signIn-and-signUp.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="signIn-and-signUp">
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSignUpPage;