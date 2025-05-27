import searchIcon from "../assets/search.png"

function Search() {
    return (<div id="search-box">
                <img src={searchIcon} alt="search"></img>
            <input className="search" />
            </div>)
}

export default Search;