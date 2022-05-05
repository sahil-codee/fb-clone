import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

function Login() {
    const signIn = () => {
        //signin
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => alert(error.message));
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
        </div>
        <Button type="submit" onClick={signIn}>
            Sign in
        </Button>
    </div>
  )
}

export default Login