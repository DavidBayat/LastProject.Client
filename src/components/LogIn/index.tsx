import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h1 className="section-title">This is login page</h1>
            <GoogleLogin 
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
