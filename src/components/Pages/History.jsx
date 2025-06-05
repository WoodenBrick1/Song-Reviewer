import "../../styles/Pages/History.css";
import { useRef, useState } from "react";


function History({albums, setPage, setAlbum, setAlbums}) {
    const fileInputRef = useRef(null)
    const [searchAlbum, setSearchAlbum] = useState("");

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
                albums.filter(album => {
                    if (!searchAlbum) return true; 
                    const regex = new RegExp(searchAlbum, "i");
                    return regex.test(album.name)}).slice().reverse().map((album, index) => (
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

export default History;

