import React from "react";
import CardLagu from "./cardLagu";

const Lagu = ({ tracks, onSelectTrack, selectTrack }) => {
  function renderCardLagu() {
    return tracks.map((track) => {
      return (
        <CardLagu
          key={track.id}
          track={track}
          onSelectTrack={onSelectTrack}
          isSelected={selectTrack?.find(
            (selectTrack) => selectTrack.id === track.id
          )}
        />
      );
    });
  }

  return <div className="lagu">{renderCardLagu()}</div>;
};

export default Lagu;
