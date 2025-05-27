import "../styles/topBar.css"

function TopBar(props) {

    return (
    <header className = {`${props.darkMode ? "dark-mode" : ""}`}>
        <h1 className="title">Song Reviewer</h1>
        <div className={`menu ${props.darkMode ? "dark-mode" : ""}`}>
            <button>Search</button>
            <button>Logout</button>
            <button>Profile</button>
            <button>Settings</button>
            <button>Help</button>
            <button>About</button>
        </div>
    </header>
    )
}

export default TopBar;