import React from "react";
import { Link } from "react-router-dom";

function Note({ note, onDeleteNote }) {
  return (
    <div className="preview-title">
      <Link to={{ pathname: "/details", state: note }} params={note}>
        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
      </Link>
      <small className="markdown-preview">
        Last modified:
        {new Date(note.lastModified).toLocaleDateString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </small>
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  );
}

export default Note;
