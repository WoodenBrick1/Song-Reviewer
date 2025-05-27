import {useState} from "react";

import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import "../styles/login.css";

function Login(props) {

    const checkLogin = () => {
        props.setLoggedIn(true);
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={checkLogin} className={`login-button ${props.darkMode ? "dark-mode" : ""}`}>Log in</button>

            <button className="dark-mode-button-login" onClick={() => props.setDarkTheme(!props.darkMode)}>{props.darkMode ? <img src={sun} alt="sun" className="dark-mode-icon"/> : <img src={moon} alt="moon" className="dark-mode-icon"/>}</button>
        </div>
    )
}

export default Login;