import searchIcon from "../../assets/search.png"
import "../../styles/Pages/Search.css"

async function getAlbums(event) {

    event.preventDefault();
    const formData = new FormData(event.target);

    const userAlbum = formData.get('album')
}
function Search() {
    return (<form id="search-box" onSubmit={getAlbums}>
                <input className="search" name="album"/>
                <button><img src={searchIcon} alt="search"></img></button>
            </form>)
}

export default Search;