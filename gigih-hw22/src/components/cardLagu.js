import React from "react";
import "./cardLagu.css";

export default function CardLagu(props) {
  return (
    <div className="top">
      <div className="container-lagu">
        <div className="cards">
          <div className="card-img">
            <img src={props.data.album.images[0].url} alt="" />
          </div>
          <div className="card-main">
            <h1>{props.data.name}</h1>
            <h2>{props.data.artists[0].name}</h2>
          </div>
          <div>
            <button className="card-btn">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}
