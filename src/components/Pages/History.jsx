import "../../styles/Pages/History.css";



function History({albums, setPage, setAlbum}) {
    function handleClick(album) {
    setAlbum(album);
    setPage("Review");
}
    return (<div id={"history-container"}>
            {albums.length > 0 ? (
                albums.map((album, index) => (
                    <div key={index} className="history-item">
                        <h2>{album.name}</h2>
                        <img src={album.cover} alt={album.name} width={100} onClick={() => {handleClick(album)}}/>
                        <p>Overall Rating: {album.overallRating}</p>
                    </div>
                ))
            ) : (
                <p>No reviews found.</p>
            )}
    </div>)
}

export default History;

