import React, { useState } from "react";
import './login.css';
import user_icon from '../Assets/person.png'; // Corrected path
import email_icon from '../Assets/email.png'; // Corrected path
import password_icon from '../Assets/password.png'; // Corrected path

const Login = () => {
    const [action, setAction] = useState("Login");
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> :
                    <div className="inputs">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder="Name"/>
                    </div>}
                <div className="inputs">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="inputs">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
};

export default Login;
