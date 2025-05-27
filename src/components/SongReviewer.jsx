import Search from "./search"
import TopBar from "./topBar"

import "../styles/SongReviewer.css"
function SongReviewer(props) {
    return (
        <>
        <TopBar setDarkTheme={props.setDarkTheme} darkMode={props.darkMode}/>
        <Search />
      </>
    )
}

export default SongReviewer;