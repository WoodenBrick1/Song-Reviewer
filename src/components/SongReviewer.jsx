import Search from "./Pages/search"
import Profile from "./Pages/Profile"
import Settings from "./Pages/Settings"
import Help from "./Pages/Help"
import About from "./Pages/About"
import TopBar from "./topBar"
import {useState} from "react"
import "../styles/SongReviewer.css"
function SongReviewer(props) {
  const [page, setPage] = useState("Search");

  const renderPage = () => {
    switch (page){
      case "Search": 
          return <Search />
      case "Profile":
          return <Profile username={props.username}/>
      case "Settings":
          return <Settings darkMode = {props.darkMode} setDarkMode={props.setDarkMode} />
      case "Help":
          return <Help />
      case "About":
          return <About />
      case "Logout":
          return props.setLoggedIn(false);
      default:
          return <Search />
    }
  }
    return (
        <>
        <TopBar setDarkMode={props.setDarkMode} darkMode={props.darkMode} setPage={setPage}/>
        <main className ={`${props.darkMode ? "dark-mode" : ""}`}>
          {renderPage()}
        </main>
      </>
    )
}

export default SongReviewer;