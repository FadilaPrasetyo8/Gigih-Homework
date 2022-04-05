import React from "react";
import Card from "./Card/card";

const CardForm = ({ onSubmit, onChange, logout }) => {
  return (
    <Card className="card">
      <div className="card-form">
        <form onSubmit={onSubmit}>
          <input
            className="form-input"
            type="text"
            onChange={onChange}
            placeholder="Search..."
          />
          <button>Search</button>
          <button className="btn-primary btn-logout" onClick={logout}>
            Logout
          </button>
        </form>
      </div>
    </Card>
  );
};

export default CardForm;
