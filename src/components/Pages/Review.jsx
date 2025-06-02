import "../../styles/Pages/Review.css"

function Review ({album, setPage, setReviewInProgress}){

    function handleClick() {
        setPage("Search")
        setReviewInProgress(false);
    }
    return (
    <div id="review-page">
        <section className="albumInfo">
            <h1>{album.name}</h1>
            <h2>By: {album.artists}</h2>
            <img src={album.cover} alt={album.name + " cover"} />
            <p className="releaseDate">Released: {album.releaseDate}</p>
        </section>
  
        <section className="review">
            <h2>Tracks:</h2>
            {album.tracks.map(track => {
                return <section className="track">
                        <label>{track.name}</label>
                        <input type="number" min="0" max="10"></input>
                    </section>
            })}

            <section className="track overall">
                <label>Overall</label>
                <input type="number" min="0" max="10"></input>
            </section>
        <button className="save" onClick={handleClick}>Save</button>
        </section>

    </div>

)
}

export default Review;