import {useState} from "react";

import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import "../styles/login.css";

function Login(props) {

    const checkLogin = (formData) => {
        props.setLoggedIn(true);
        console.log(formData.get("name"))
    }

    return (
        <form className="login-container" action={checkLogin} method="POST">
            <h1>Login</h1>
            <input type="text" placeholder="Username" name="name"/>
            <input type="password" placeholder="Password" name="password"/>
            <button onClick={checkLogin} className={`login-button ${props.darkMode ? "dark-mode" : ""}`}>Log in</button>

            <button className="dark-mode-button-login" onClick={() => props.setDarkMode(!props.darkMode)}>{props.darkMode ? <img src={sun} alt="sun" className="dark-mode-icon"/> : <img src={moon} alt="moon" className="dark-mode-icon"/>}</button>
        </form>
    )
}

export default Login;