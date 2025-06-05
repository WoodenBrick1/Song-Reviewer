import React, { useState, useRef } from "react";
import searchIcon from "../../assets/search.png";
import "../../styles/Pages/Search.css";

async function getAccessToken() {
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
}

function Search(props) {
    const [albums, setAlbums] = useState([]);
    const accessTokenRef = useRef(null); 

    async function getAlbums(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userAlbum = formData.get('album');
        const token = await getAccessToken();
        accessTokenRef.current = token; 
        if (!token) {
            console.error("Failed to retrieve access token");
            return;
        }
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(userAlbum)}&type=album&limit=10`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
        const data = await response.json();
        setAlbums(data.albums?.items || []);
    }

    async function handleAlbumClick(album) {
        const token = accessTokenRef.current; 
        if (!token) {
            console.error("No access token available");
            return;
        }
        const tracks = await getAlbumTracks(album.id, token);
        props.setAlbum({
            name: album.name,
            artists: album.artists.map(artist => artist.name).join(", "),
            releaseDate: album.release_date,
            cover: album.images[0]?.url,
            tracks: tracks
        });

        props.setReviewInProgress(true);
        props.setPage("Review");
    }

    async function getAlbumTracks(albumId, token) {
    let allTracks = [];
    let offset = 0;
    const limit = 50; 

    while (true) {
        const response = await fetch(
            `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=${limit}&offset=${offset}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        );
        const data = await response.json();
        allTracks = allTracks.concat(data.items);

        if (!data.next) break; 
        offset += limit;
    }

    return allTracks;
    }

    return (
        <>
            <form id="search-box" onSubmit={getAlbums}>
                <input className="search" name="album" />
                <button><img src={searchIcon} alt="search" /></button>
            </form>
            <div className="albums-list">
                {albums.map(album => (
                    <div key={album.id} className="album-item">
                        <img src={album.images[0]?.url} alt={album.name} width={100} onClick={() => handleAlbumClick(album)}/>
                        <div className="albumName">{album.name}</div>
                        <div className="artist">{album.artists.map(artist => artist.name).join(", ")}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;