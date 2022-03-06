import React from "react";
import "./NotesDetails.css";

function NoteDetails(props) {
  const note = props.location.state;

  return (
    <div className="app-details">
      <div className="app-details-main">
        <button>Go Back</button>
      </div>
      <div className="app-details-note">{note.body}</div>
    </div>
  );
}

export default NoteDetails;
