import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../../src/firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {
  // It give us the state and the dispatch //

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //signin  
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // What is does is, it push the user inside the data layer //
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user)
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
