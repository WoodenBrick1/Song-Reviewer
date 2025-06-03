import "../../styles/Pages/Review.css"

function Review ({album, setPage, setReviewInProgress, setNumOfReviews, setAlbums}) {

    function handleSave(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const ratings = {};
        album.tracks.forEach(track => {
            const rating = formData.get(track.name);
            if (rating) {
                ratings[track.name] = parseFloat(rating, 10);
            }
        });
        const overallRating = formData.get("overall");
        if (overallRating) {
            ratings["Overall"] = parseFloat(overallRating, 10);
        }

        const newAlbum = {
            name: album.name,
            artists: album.artists,
            cover: album.cover,
            releaseDate: album.releaseDate,
            tracks: album.tracks.map(track => ({
                name: track.name,
                rating: ratings[track.name] || "N/A"
            })),
            overallRating: ratings["Overall"] || "N/A"
        };

        const savedReviews = JSON.parse(localStorage.getItem("albumReviews") || "[]");

        const index = savedReviews.findIndex(
            album => album.name === newAlbum.name && album.artists === newAlbum.artists
        );

        if (index !== -1) {
            savedReviews[index] = newAlbum;
        } else {
            savedReviews.push(newAlbum);
        }
        localStorage.setItem("albumReviews", JSON.stringify(savedReviews));

        setAlbums(savedReviews);
        setPage("Search")
        setNumOfReviews(prev => prev + 1);
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
  
        <form className="review" onSubmit={handleSave}>
            <h2>Tracks:</h2>
            {album.tracks.map(track => {
                const prevRating = (track.rating && track.rating !== "N/A") ? track.rating : "";
                return <section className="track" key={track.name}>
                        <label>{track.name}</label>
                        <input type="number" min="0" max="10" name={track.name} step="0.1" defaultValue={prevRating}></input>
                    </section>
            })}

            <section className="track overall">
                <label>Overall</label>
                <input type="number" min="0" max="10" name="overall" defaultValue={album.overallRating && album.overallRating !== "N/A" ? album.overallRating : ""} step="0.1"></input>
            </section>
        <button className="save">Save</button>
        </form>

    </div>

)
}

export default Review;