import React from "react";
import "./cardForm.css";

export default function CardForm() {
  return (
    <div className="form">
      <div className="container">
        <div className="card">
          <div className="title">
            <h1>Create Playlist</h1>
          </div>
          <div className="main-form">
            <div className="form-group">
              <label for="label">Title</label>
              <input type="text" name="" className="input" />
            </div>
            <div class="form-group">
              <label for="label">Playlist</label>
              <input type="text" name="" className="input" />
            </div>
            <div className="form-group">
              <button className="submit">Create Playlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
