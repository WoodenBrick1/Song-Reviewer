import "../styles/topBar.css"

function TopBar(props) {

    return (
    <header className = {`${props.darkMode ? "dark-mode" : ""}`}>
        <h1 className="title">Song Reviewer</h1>
        <div className={`menu ${props.darkMode ? "dark-mode" : ""}`}>
            <button onClick={() => {props.setPage(props.reviewInProgress ? "Review" : "Search")}}>Search</button>
            <button onClick={() => {props.setPage("Profile")}}>Profile</button>
            <button onClick={() => {props.setPage("History")}}>History</button>
            <button onClick={() => {props.setPage("Settings")}}>Settings</button>
            <button onClick={() => {props.setPage("About")}}>About</button>            
            <button onClick={() => {props.setPage("Logout")}}>Logout</button>
        </div>
    </header>
    )
}

export default TopBar;