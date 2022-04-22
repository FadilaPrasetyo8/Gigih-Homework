import Card from "../Card/card";
import "./newPlaylist.css";

const NewPlaylist = ({ onSubmit }) => {
  return (
    <div className="top">
      <Card className="card">
        <div className="title">
          <h1>Create Playlist</h1>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-card">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              required
              id="title"
              placeholder="Judul Playlist"
              minLength={10}
            />
          </div>
          <div className="form-card">
            <label htmlFor="desc">Deskripsi</label>
            <input
              type="text"
              required
              minLength={20}
              id="desc"
              placeholder="Deskripsi"
            />
          </div>
          <div className="form-card">
            <button id="submit">Create</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewPlaylist;
