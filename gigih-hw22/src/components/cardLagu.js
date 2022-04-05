import React from "react";
import "./cardLagu.css";
import Card from "./Card/card";

const CardLagu = ({ track, isSelected, onSelectTracks }) => {
  return (
    <Card className="card-lagu">
      <div className="images">
        <img src={track.album.images[0].url} />
      </div>
      <div className="nama-lagu">
        <p>{track.name}</p>
      </div>
      <div className="nama-artist">
        <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
      <div className="option">
        <div className="select">
          <button
            className={isSelected ? " btn-deselect" : ""}
            onClick={onSelectTracks}
          >
            {!isSelected ? "Select" : "Deselect"}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardLagu;
