import {useState, useEffect} from "react";
import "./styles/App.css"
import SongReviewer from "./components/SongReviewer";
import Login from "./components/Login";


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const [username, setUsername] = useState("Unnamed");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
      
    return (  
        <>
            {loggedIn ? <SongReviewer setDarkMode={setDarkMode} darkMode={darkMode} username={username}/> :
             <Login setLoggedIn={setLoggedIn} setDarkMode={setDarkMode} darkMode={darkMode} 
             username = {username} setUsername={setUsername} password={password} setPassword={setPassword}/>}
        </>
    );
}

export default App;