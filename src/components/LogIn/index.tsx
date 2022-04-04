import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
const getLocalStorage = () => {
  let list = localStorage.getItem('loginData');
  if(list)
  {
      return JSON.parse(localStorage.getItem('loginData') || '{}')
  }else
  {
      return [];
  }
}

interface Props {
    setLoginData: Function
}

const Login = ({ setLoginData } : Props) => {
    // const [logiData, setLogiData] = useState(getLocalStorage);
    const handleLogin = (googleData : any) => {
        setLoginData(googleData.profileObj);
        localStorage.setItem('loginData', JSON.stringify(googleData.profileObj))
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
