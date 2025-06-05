
import { useRef, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "../../styles/Pages/History.css";


function History({albums, setPage, setAlbum, setAlbums}) {
    const fileInputRef = useRef(null)
    const [searchAlbum, setSearchAlbum] = useState("");
    const [sortOption, setSortOption] = useState("Date (Newest to Oldest)");

    function handleClick(album) {
    setAlbum(album);
    setPage("Review");
}
  function handleDownload() {
        const text = JSON.stringify(albums, null, 2); 
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "albumReviews.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function handleImport(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedAlbums = JSON.parse(e.target.result);
                if (Array.isArray(importedAlbums)) {
                    setAlbums(importedAlbums);
                    localStorage.setItem("albumReviews", JSON.stringify(importedAlbums));
                    alert("Albums imported successfully!");
                } else {
                    alert("Invalid file format.");
                }
            } catch {
                alert("Failed to import. Make sure the file is correct.");
            }
        };
        reader.readAsText(file);
    }

    function triggerFileInput() {
        fileInputRef.current.click();
    }

    function handleSearch(event) {
        setSearchAlbum(event.target.value);
    }

 
    return (<div id={"history-container"}>
            <DropdownElement sortOption={sortOption} setSortOption={setSortOption}/>
            <button className="import" onClick={triggerFileInput}>Import Reviews</button>
            <button onClick={handleDownload} className="export">Export Reviews</button>

           
            <label className="search">Search Album:
                <input name="album" onChange={handleSearch}/>
            </label>
           

            <input
                type="file"
                accept=".txt,application/json"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleImport}
            />
            <div className="history-items">
            {albums.length > 0 ? (
                sortAlbums(albums, sortOption).filter(album => {
                    if (!searchAlbum) return true; 
                    const regex = new RegExp(searchAlbum, "i");
                    return regex.test(album.name)}).slice().map((album, index) => (
                    <div key={index} className="history-item">
                        <h2 className="historyName">{album.name}</h2>
                        <img src={album.cover} alt={album.name} width={100} onClick={() => {handleClick(album)}}/>
                        <p>Overall Rating: {album.overallRating}</p>
                    </div>
                ))
            ) : (
                <p>No reviews found.</p>
            )}
            </div>
    </div>)
}

function sortAlbums(albums, option) {
        switch (option) {
            case "Date (Oldest to Newest)":
                return albums;
            case "Date (Newest to Oldest)":
                return albums.slice().reverse();
            case "Best to Worst":
                return albums.slice().sort((a, b) => b.overallRating - a.overallRating);
            case "Worst to Best":
                return albums.slice().sort((a, b) => a.overallRating - b.overallRating);
            default:
                return albums;

        }
    }

function DropdownElement ({ sortOption, setSortOption }) {
    return (
     <Dropdown className="dropdown">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {sortOption}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortOption("Date (Oldest to Newest)")}>
                    Date (Oldest to Newest)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Date (Newest to Oldest)")}>
                    Date (Newest to Oldest)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Best to Worst")}>
                    Best to Worst
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Worst to Best")}>
                    Worst to Best
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>)
}

export default History;

