import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import "./Login.css"

interface Props {
    setLoginData: Function
}

const Login = ({ setLoginData } : Props) => {
    const navigate = useNavigate();
    const handleLogin = (googleData : any) => {
        setLoginData(googleData.profileObj);
        localStorage.setItem('loginData', JSON.stringify(googleData.profileObj));
        navigate("/");
    }
    const handleFailure = (result : any) => {
        alert(result)
    }
    return (
        <div className="section login">
            <h1 className="section-title">Login With Google</h1>
            <GoogleLogin 
                className="google-login"
                clientId="348842152385-kdg8vkd6rnhvv07burv4pmune9ejalte.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;
