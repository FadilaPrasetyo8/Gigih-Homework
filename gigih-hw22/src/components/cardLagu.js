import React from "react";
import "./cardLagu.css";
import CardForm from "./cardForm";

export default function CardLagu() {
  // const Databaru = data.map((filterData) => (
  //   <div className="cards" key={filterData.album.artists[0].id}>
  //     <div className="card-img">
  //       <img src={filterData.album.images[0].url} alt="" />
  //     </div>
  //     <div className="card-main">
  //       <h1>{filterData.album.artists[0].name}</h1>
  //       <p>{filterData.album.name}</p>
  //     </div>
  //     <div>
  //       <button className="card-btn">Select</button>
  //     </div>
  //   </div>

  //   // <figure key={filterData.id}>
  //   //   <img src={filterData.url} />
  //   //   <figcaption>{filterData.title}</figcaption>
  //   // </figure>
  // ));

  return (
    <div className="top">
      <div className="container-lagu">
        <CardForm />
      </div>
    </div>
  );
}
