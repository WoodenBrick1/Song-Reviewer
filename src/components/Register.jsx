
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import warning from "../assets/warning.png"
import "../styles/login.css";

import {useState} from "react";

function Register(props) {
    
    const [errorMessage, setErrorMessage] = useState("");
    const checkRegister = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target); 
        const name = formData.get('name');
        const email = formData.get("email");
        const password = formData.get('password');

        const emailRegex = /.+@.+\..+/;
        if (name == "") {
            setErrorMessage("Input a Name");
            return;
        }

        if (!emailRegex.test(email)) {
            setErrorMessage("Invalid Email");
            return;
        }

        if (password.length < 8) {
            setErrorMessage ("Password must be at least 8 characters");
            return;
        }
            props.setUsername(name);
            props.setPassword(password)
            props.setLoggedIn(true);
    }

    return (
        <>
            <form className="login-container" onSubmit={checkRegister}>
                <h1>Register</h1>
                <input type="text" placeholder="Username" name="name"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button className={`login-button ${props.darkMode ? "dark-mode" : ""}`} type="submit">Register</button>
            </form>
            {errorMessage && <div className="error">
                        <img className="warning-icon left" src={warning} alt="error"></img>
                        {errorMessage}
                        <img className="warning-icon right" src={warning} alt="error"></img>
                    </div>}
            <button className="dark-mode-button-login" onClick={() => props.setDarkMode(!props.darkMode)}>{props.darkMode ? <img src={sun} alt="sun" className="dark-mode-icon"/> : <img src={moon} alt="moon" className="dark-mode-icon"/>}</button>
        </>
    )
}

export default Register;