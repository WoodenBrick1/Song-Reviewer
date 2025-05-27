import Search from "./search"
import TopBar from "./topBar"

import "../styles/SongReviewer.css"
function SongReviewer(props) {
    return (
        <>
        <TopBar setDarkTheme={props.setDarkTheme} darkMode={props.darkMode}/>
        <main className ={`${props.darkMode ? "dark-mode" : ""}`}>
          <Search />
        </main>
      </>
    )
}

export default SongReviewer;