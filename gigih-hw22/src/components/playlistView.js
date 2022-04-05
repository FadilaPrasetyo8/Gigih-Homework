import React from "react";
import Card from "./Card/card";

const PlaylistView = ({ albumImages, albumName, songTitle, artistName }) => {
  return (
    <Card className="card-playlist-view">
      <div className="album-image">
        <img src={albumImages} alt={albumName} />
      </div>
      <div className="song-title">
        <p>{songTitle}</p>
      </div>
      <div className="artist-name">
        <p>{artistName}</p>
      </div>
    </Card>
  );
};

export default PlaylistView;
