import React from "react";
import Card from "./Card/card";

const NewPlaylist = ({ onSubmit, show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <Card className="card">
      <div className="title">
        <h1>Create Playlist</h1>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-card">
          <label htmlFor="title">Judul</label>
          <input type="text" id="title" placeholder="Judul Playlist" />
        </div>
        <div className="form-card">
          <label htmlFor="desc">Judul</label>
          <input type="text" id="title" placeholder="Deskripsi" />
        </div>
        <div className="form-card">
          <button id="submit"></button>
        </div>
      </form>
    </Card>
  );
};

export default NewPlaylist;
