import {useState, useEffect} from "react";
import "./styles/App.css"
import SongReviewer from "./components/SongReviewer";
import Register from "./components/Register";


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const [username, setUsername] = useState("Unnamed");
    const [email, setEmail] = useState("");
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
      
    return (  
        <>
            {loggedIn ? <SongReviewer setDarkMode={setDarkMode} darkMode={darkMode} username={username} setLoggedIn={setLoggedIn}/> :
             <Register setLoggedIn={setLoggedIn} setDarkMode={setDarkMode} darkMode={darkMode} 
             username = {username} setUsername={setUsername} setEmail={setEmail}/>}
        </>
    );
}

export default App;