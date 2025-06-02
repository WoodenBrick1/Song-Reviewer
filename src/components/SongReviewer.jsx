import Search from "./Pages/search"
import Review from "./Pages/Review"
import Profile from "./Pages/Profile"
import Settings from "./Pages/Settings"
import Help from "./Pages/Help"
import About from "./Pages/About"
import TopBar from "./topBar"
import {useState} from "react"
import "../styles/SongReviewer.css"
function SongReviewer(props) {
  const [page, setPage] = useState("Search");
  const [numOfReviews, setNumOfReviews] = useState(0);
  const [album, setAlbum] = useState({});
  const [reviewInProgress, setReviewInProgress] = useState(false);

 const renderPage = () => {
    switch (page){
      case "Search": 
          return <Search setPage={setPage} setAlbum={setAlbum} setReviewInProgress={setReviewInProgress}/>
      case "Review":
          return <Review album={album} setPage={setPage} setReviewInProgress={setReviewInProgress}/>
      case "Profile":
          return <Profile username={props.username} numOfReviews={numOfReviews}/>
      case "Settings":
          return <Settings darkMode = {props.darkMode} setDarkMode={props.setDarkMode} username={props.username} setUsername={props.setUsername}/>
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
        <TopBar setDarkMode={props.setDarkMode} darkMode={props.darkMode} setPage={setPage} reviewInProgress={reviewInProgress}/>
        <main className ={`${props.darkMode ? "dark-mode" : ""}`}>
          {renderPage()}
        </main>
      </>
    )
}

export default SongReviewer;