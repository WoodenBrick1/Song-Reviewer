import Search from "./search"
import TopBar from "./topBar"

function SongReviewer(props) {
    return (
        <>
        <header>
          <h1 className="title">Song Reviewer</h1>
          <TopBar setDarkTheme={props.setDarkTheme} darkMode={props.darkMode}/>
        </header>
        
        <Search />
      </>
    )
}

export default SongReviewer;