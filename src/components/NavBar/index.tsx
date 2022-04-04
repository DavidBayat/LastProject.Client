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
    // setLoginData: Function
}
const NavBar = ({loginData} : Props) => {
    const [condition, setCondition] = useState(true);
    // const [login, setLogin] = useState(
    //     localStorage.getItem('loginData')   
    // );
    
    const handleLogout = () => {
      setCondition(!condition);
      localStorage.removeItem('loginData')
    }

    useEffect(() => {
       setCondition(!condition)
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
                        condition ? (
                            <>
                                <li>
                                    <Link to="/profile/123">profile</Link>
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
