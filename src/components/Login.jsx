
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import "../styles/login.css";

function Login(props) {
    
    const checkLogin = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target); 
        props.setUsername(formData.get('name'));
        props.setPassword(formData.get('password'))
        props.setLoggedIn(true);
    }

    return (
        <>
            <form className="login-container" onSubmit={checkLogin}>
                <h1>Login</h1>
                <input type="text" placeholder="Username" name="name"/>
                <input type="password" placeholder="Password" name="password"/>
                <button className={`login-button ${props.darkMode ? "dark-mode" : ""}`} type="submit">Log in</button>
            </form>
            <button className="dark-mode-button-login" onClick={() => props.setDarkMode(!props.darkMode)}>{props.darkMode ? <img src={sun} alt="sun" className="dark-mode-icon"/> : <img src={moon} alt="moon" className="dark-mode-icon"/>}</button>
        </>
    )
}

export default Login;