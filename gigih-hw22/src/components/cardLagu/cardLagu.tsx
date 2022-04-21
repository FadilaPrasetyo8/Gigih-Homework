import "./cardLagu.css";
import { Duration } from "../../duration/duration";

const CardLagu = ({ onSelectTracks, tracks, itemSelected }) => {
  return (
    <div className="cards" key={tracks.id}>
      <div className="card-img">
        {tracks.album.images.length ? (
          <img src={tracks.album.images[0].url} alt="img-albums" />
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
      <div className="card-duration">
        <p>{Duration(tracks.duration_ms)}</p>
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
  );
};

export default CardLagu;
