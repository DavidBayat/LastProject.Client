import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import {ILoginData} from "../../Interfaces";

// interface IUser {
//     user: boolean
// }
// { user } : IUser
interface Props {
    loginData: any;
    setLoginData: Function
}
const NavBar = ({loginData, setLoginData} : Props) => {
    // const [login, setLogin] = useState(
    //     localStorage.getItem('loginData')   
    // );
    
    const handleLogout = () => {
      localStorage.removeItem('loginData')
    }

    useEffect(() => {
       // if (localStorage.getItem('loginData')){
       //     setLogin(localStorage.getItem('loginData'))
       // }else{
       //     setLogin(null);
       // }
    }, [loginData]);
    
    return (
        <nav className="nav-container">
            <div className="nav-center">
                <Link to="/">
                    <h3>Project Name</h3>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    {
                        loginData !== null ? (
                            <>
                                <li>
                                    <Link to="/profile">profile</Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={ handleLogout }>logout</Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login">login</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
