import React from "react";
import CardLagu from "./cardLagu";

const Lagu = ({ tracks, onSelectTrack, selectTrack }) => {
  function renderCardLagu() {
    return tracks.map((track) => {
      return (
        <CardLagu
          className="top"
          key={track.id}
          tracks={track}
          onSelectTracks={onSelectTrack}
          itemSelected={selectTrack?.find(
            (selectTrack) => selectTrack.id === track.id
          )}
        />
      );
    });
  }

  return <div className="lagu">{renderCardLagu()}</div>;
};

export default Lagu;
