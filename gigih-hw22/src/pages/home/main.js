import React, { useEffect, useState } from "react";

import CardLagu from "../../components/cardLagu";
import CardForm from "../../components/cardForm";
import NewPlaylist from "../../components/newPlaylist";
import PlaylistView from "../../components/playlistView";
import Login from "../../components/login";
import Lagu from "../../components/Lagu";

import {
  searchTrack,
  getToken,
  createPlaylist,
  getUserInfo,
} from "../../auth/auth";

const Index = () => {
  const konfigurasi = {
    client_id: "55ec1a3ca9a64bfa9720edac9915bf53",
    redirect_uri: "http://localhost:3000/",
    auth_endpoint: "https://accounts.spotify.com/authorize",
    scope: [
      "user-read-email",
      "user-read-private",
      "playlist-modify-private",
      "playlist-read-private",
    ],
  };

  let redirectUrl = `${konfigurasi.auth_endpoint}?client_id=${konfigurasi.client_id}&response_type=token&redirect_uri=${konfigurasi.redirect_uri}&scope=${konfigurasi.scope}`;

  // Tracks
  const [tracks, setTracks] = useState([]);
  const [keyword, setKeyword] = useState("");

  // Tracks to add to playlist
  const [selectedTracks, setSelectedTracks] = useState([]);

  // Config
  const [userInfo, setUserInfo] = useState([]);
  const [token, setToken] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!token) {
      setToken(getUserInfo());
    }
  }, []);

  //logut
  const handleLogout = () => {
    setToken = "";
    window.localStorage.removeItem("item");
  };

  //data dari api
  const handleSearch = (event) => {
    event.preventDefault();
    searchTrack(keyword, token).then((data) => setTracks(data));
  };

  //select track
  const handleSelect = (track) => {
    const isSelected = selectedTracks.find(
      (selectedTrack) => selectedTrack === track
    );

    if (isSelected) {
      setSelectedTracks(
        selectedTracks.filter((selectedTrack) => selectedTrack !== track)
      );
    } else {
      setSelectedTracks((prev) => [...prev, track]);
    }
  };

  const handleCreatePlaylist = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.title.value,
      description: event.target.dec.value,
    };

    const trackAdd = selectedTracks.map((track) => track.uri);
    createPlaylist(userInfo.id, data, trackAdd);

    setSelectedTracks([]);
    setShow(false);
  };

  const viewTracks = Object.values(selectedTracks).map((track) => {
    <PlaylistView
      key={track.id}
      songTitle={track.name}
      albumImages={track.album.images[0].url}
      artistName={track.artists}
      albumName={track.album.name}
    />;
  });

  const handleChange = (event) => setKeyword(event.target.value);

  return (
    <>
      {!token ? (
        <Login redirectUrl={redirectUrl} />
      ) : (
        <>
          <NewPlaylist
            onSubmit={handleCreatePlaylist}
            show={show}
            onClose={() => setShow(false)}
          />
          <div id="tracks">
            {selectedTracks.length > 0 ? (
              <div className="section-introduction">
                <h1 className="title">Create Playlists</h1>
                <p>Create your personal playlist from the selected tracks.</p>
                <div className="preview-selected-tracks">{viewTracks}</div>
              </div>
            ) : null}
            <div className="section-introduction">
              <h1 className="title">Find and Create Playlist</h1>
              <p>Find a track, select it, and create your personal playlist</p>
            </div>
            <CardForm
              onChange={handleChange}
              onSubmit={handleSearch}
              logout={handleLogout}
            />
            <Lagu
              tracks={tracks}
              onSelectTrack={handleSelect}
              selectedTracks={selectedTracks}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Index;
