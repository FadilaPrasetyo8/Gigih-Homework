import React from "react";
//css
import "./Index.css";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Lagu from "../../components/Lagu/Lagu";
import NewPlaylist from "../../components/newPlaylist/newPlaylist";
import TokenContext from "../../contex/contex";
import { getToken } from "../../auth/getToken";
import { createPlaylist, getUserInfo } from "../../auth/auth";

const Main = () => {
  const { token, setToken } = useContext(TokenContext);
  const [searchKey, setsearchKey] = useState("");
  const [artists, setArtist] = useState([]);
  const [itemSelected, setItemSelected] = useState([]);

  // Tracks to add to playlist

  // Config

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (!token) {
      setToken(getToken());
    }
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
    if (localStorage.getItem("token")) {
      getUserInfo().then((res) => {
        setUserInfo(res);
      });
    }
  }, []);

  const handleCreatePlaylist = (e) => {
    e.preventDefault();

    // Retrieve the user's input
    const playlistData = {
      name: e.target.title.value,
      description: e.target.desc.value,
    };

    // Create playlist and add the selected tracks
    const tracksToAdd = itemSelected.map((track) => track.uri);
    createPlaylist(userInfo.id, playlistData, tracksToAdd, token);

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
      <div className="logout">
        <Button variant="contained" onClick={logout} className="btn-primary">
          LogOut
        </Button>
      </div>
      <div className="form">
        <div className="container">
          <div className="card">
            <form className="search-artist" onSubmit={searchArtists}>
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
