import React from "react";
import "./cardForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./cardLagu.css";

export default function CardForm() {
  const CLIENT_ID = "55ec1a3ca9a64bfa9720edac9915bf53";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONE_TYPE = "token";
  const SCOPE = "playlist-modify-private";

  const [token, setToken] = useState("");
  const [searchKey, setsearchKey] = useState("");
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    // console.log(window.location);
    // let tkn = window.localStorage.getItem("token");

    if (!token && hash) {
      setToken(
        hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"))
          .split("=")[1]
      );
      window.location.hash = "";

      // window.localStorage.setItem("token", token);
    }
    // setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    // window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
      },
    });

    setArtist(data.tracks.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div className="cards" key={artist.id}>
        <div className="card-img">
          {artist.album.images.length ? (
            <img src={artist.album.images[0].url} alt="" />
          ) : (
            <div>No Image</div>
          )}
        </div>
        <div className="card-main">
          <p>{artist.name}</p>
        </div>
        <div>
          <button className="card-btn">Select</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Spotify React</h1> */}
        <div className="form">
          <div className="container">
            <div className="card">
              <div className="title">
                <h1>Search Music</h1>
              </div>

              {token ? (
                // <form onSubmit={searchArtists}>
                //   <input type="text" onChange={(e) => setsearchKey(e.target.value)} />
                //   <button type={"submit"}>Search</button>
                // </form>

                <form onSubmit={searchArtists}>
                  <input
                    type="text"
                    onChange={(e) => setsearchKey(e.target.value)}
                  />
                  <button type={"submit"}>Search</button>
                </form>
              ) : (
                <p>Please login</p>
              )}

              {!token ? (
                <a
                  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONE_TYPE}&scope=${SCOPE}`}
                >
                  Login to Spotify
                </a>
              ) : (
                <button onClick={logout}>Logout</button>
              )}
            </div>
          </div>
        </div>
        <div className="top">
          <div className="container-lagu">{renderArtists()}</div>
        </div>
      </header>
    </div>
  );
}
