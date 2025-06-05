import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css"
import SongReviewer from "./components/SongReviewer";
import Register from "./components/Register";


function App() {
    
    const database = false;
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
            {loggedIn ? <SongReviewer setDarkMode={setDarkMode} darkMode={darkMode} setUsername={setUsername} username={username} setLoggedIn={setLoggedIn} database={database}/> :
             <Register setLoggedIn={setLoggedIn} setDarkMode={setDarkMode} darkMode={darkMode} 
             username = {username} setUsername={setUsername} setEmail={setEmail} database={database}/>}
        </>
    );
}

export default App;