import React from "react";
import "./cardLagu.css";
import Card from "./Card/card";

const CardLagu = ({ onSelectTracks, tracks, itemSelected }) => {
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

  return (
    <div className="container">
      <div className="cards" key={tracks.id}>
        <div className="card-img">
          {tracks.album.images.length ? (
            <img src={tracks.album.images[0].url} alt="" />
          ) : (
            <div>No Image</div>
          )}
        </div>
        <div className="card-main">
          <p>{tracks.name}</p>
        </div>
        <div className="card-name">
          <p>{tracks.artists[0].name}</p>
        </div>
        <div className="btn">
          <button
            className={itemSelected ? " btn-deselect" : ""}
            onClick={() => onSelectTracks(tracks)}
          >
            {!itemSelected ? "Select" : "Deselect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLagu;
