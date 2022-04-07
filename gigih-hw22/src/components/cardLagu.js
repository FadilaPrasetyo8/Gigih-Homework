import React from "react";
import "./cardLagu.css";
import Card from "./Card/card";

const CardLagu = ({ onSelectTracks, artists, itemSelected }) => {
  // return (
  //   <Card className="card-lagu">
  //     <div className="images">
  //       <img src={track.album.images[0].url} />
  //     </div>
  //     <div className="nama-lagu">
  //       <p>{track.name}</p>
  //     </div>
  //     <div className="nama-artist">
  //       <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
  //     </div>
  //     <div className="option">
  //       <div className="select">
  //         <button
  //           className={isSelected ? " btn-deselect" : ""}
  //           onClick={onSelectTracks}
  //         >
  //           {!isSelected ? "Select" : "Deselect"}
  //         </button>
  //       </div>
  //     </div>
  //   </Card>
  // );

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
        {!itemSelected.includes(artist.id) ? (
          <button
            className="card-btn"
            type="button"
            onClick={() => onSelectTracks(artist.id)}
          >
            Select
          </button>
        ) : (
          <button
            className="card-btn"
            style={{ backgroundColor: "#FF0000" }}
            type="button"
            onClick={() => onSelectTracks(artist.id)}
          >
            Deselect
          </button>
        )}
      </div>
    </div>
  ));
};

export default CardLagu;
