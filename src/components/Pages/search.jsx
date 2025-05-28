import searchIcon from "../../assets/search.png"
import "../../styles/Pages/Search.css"
function Search() {
    return (<div id="search-box">
                <input className="search" />
                <button><img src={searchIcon} alt="search"></img></button>
            </div>)
}

export default Search;