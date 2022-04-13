import React from "react";
//css
import "./Index.css";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useEffect, useState } from "react";
import axios from "axios";
import Lagu from "../../components/Lagu";
import NewPlaylist from "../../components/newPlaylist";
import LoginPage from "../Login/Login";
import {
  getTracks,
  getToken,
  createPlaylist,
  getUserInfo,
  addTracks,
} from "../../auth/auth";

const Main = () => {
  const CLIENT_ID = "55ec1a3ca9a64bfa9720edac9915bf53";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONE_TYPE = "token";
  const SCOPE = "playlist-modify-private";

  const [token, setToken] = useState("");
  const [searchKey, setsearchKey] = useState("");
  const [artists, setArtist] = useState([]);
  const [itemSelected, setItemSelected] = useState([]);

  // Tracks to add to playlist

  // Config

  const [userInfo, setUserInfo] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // const hash = window.location.hash;
    // console.log(window.location);
    // let tkn = window.localStorage.getItem("token");

    if (!token) {
      setToken(getToken());
    }

    // if (!token && hash) {
    //   setToken(
    //     hash
    //       .substring(1)
    //       .split("&")
    //       .find((elem) => elem.startsWith("access_token"))
    //       .split("=")[1]
    //   );
    //   window.location.hash = "";

    //   // window.localStorage.setItem("token", token);
    // }
    // setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    setArtist([]);
    window.localStorage.removeItem("token");
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
    // console.log(data.tracks.items);
  };

  useEffect(() => {
    if (token) {
      getUserInfo(token).then((res) => {
        setUserInfo(res);
      });
    }
  }, [token]);

  const handleCreatePlaylist = (e) => {
    e.preventDefault();

    // Retrieve the user's input
    const playlistData = {
      name: e.target.title.value,
      description: e.target.desc.value,
    };

    // Create playlist and add the selected tracks
    const tracksToAdd = itemSelected.map((track) => track.uri);
    createPlaylist(userInfo.id, playlistData, tracksToAdd);

    // Reset State
    setItemSelected([]);
  };

  const handleSelect = (track) => {
    const isSelected = itemSelected.find(
      (itemSelected) => itemSelected === track
    );

    if (isSelected) {
      setItemSelected(
        itemSelected.filter((selectedTrack) => selectedTrack !== track)
      );
    } else {
      setItemSelected((prev) => [...prev, track]);
    }
  };

  return (
    <header>
      <div className="form">
        <div className="container">
          <div className="card">
            {token ? (
              <form onSubmit={searchArtists}>
                {/* <input
                  type="text"
                  onChange={(e) => setsearchKey(e.target.value)}
                /> */}
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                ></Box>

                <TextField
                  id="standard-basic"
                  // label="Standard"
                  variant="standard"
                  type="text"
                  onChange={(e) => setsearchKey(e.target.value)}
                />
                {/* <button type={"submit"}>Search</button> */}
                <Button type={"submit"} variant="contained">
                  Search
                </Button>
              </form>
            ) : (
              <p>Please login</p>
            )}

            {!token ? <LoginPage /> : <button onClick={logout}>Logout</button>}
          </div>
        </div>
      </div>
      <div>
        {itemSelected.length > 0 ? (
          <div>
            <NewPlaylist onSubmit={handleCreatePlaylist} />
            {/* <PlaylistView itemSelected={itemSelected} /> */}
          </div>
        ) : null}
      </div>
      <Lagu
        tracks={artists}
        onSelectTrack={handleSelect}
        selectTrack={itemSelected}
      />
    </header>
  );
};

export default Main;
