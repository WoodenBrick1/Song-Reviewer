import {useState, useEffect} from "react";
import "./styles/App.css"
import SongReviewer from "./components/SongReviewer";
import Login from "./components/Login";


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
      
    return (  
        <>
            {loggedIn ? <SongReviewer setDarkTheme={setDarkMode} darkMode={darkMode}/> :
             <Login setLoggedIn={setLoggedIn} setDarkTheme={setDarkMode} darkMode={darkMode}/>}
        </>
    );
}

export default App;