import Search from "./search"
import TopBar from "./topBar"
import {useState} from "react"
import "../styles/SongReviewer.css"
function SongReviewer(props) {
  const [page, setPage] = useState("Search");

  const renderPage = () => {
    switch (page){
      case "Search": 
          return <Search />
      case "Logout":
          return <Logout />
      case "Profile":
          return <Profile />
      case "Settings":
          return <Settings />
      case "Help":
          return <Help />
      case "About":
          return <About />

      default:
          return <Search />
    }
  }

  console.log(page);
    return (
        <>
        <TopBar setDarkTheme={props.setDarkTheme} darkMode={props.darkMode} setPage={setPage}/>
        <main className ={`${props.darkMode ? "dark-mode" : ""}`}>
          <Search />
        </main>
      </>
    )
}

export default SongReviewer;