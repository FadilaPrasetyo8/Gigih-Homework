import React from "react";
import Card from "./Card/card";

const PlaylistView = ({ itemSelected }) => {
  return itemSelected.map((track) => (
    <Card className="card-playlist-view" key={track.id}>
      <div className="album-image">
        <img src={track.album.images[0].url} alt={track.album.name} />
      </div>
      <div className="song-title">
        <p>{track.name}</p>
      </div>
      <div className="artist-name">
        <p>{track.artists}</p>
      </div>
    </Card>
  ));
};

export default PlaylistView;
