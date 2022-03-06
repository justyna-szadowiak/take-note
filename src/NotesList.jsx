import React, { useState } from "react";
import uuid from "react-uuid";
import Note from "./Note";
import NoteDetails from "./NoteDetails";
import "./Note";
import "./App.css";

function NotesList(props) {
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState("");

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      body,
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((notes) => notes.id !== idToDelete));
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <textarea
          id="body"
          placeholder="Note text..."
          onChange={onBodyChange}
        />
        <button onClick={onAddNote}>Add note</button>
      </div>
      <div className="app-main-note-preview">
        <h2>Lastest notes</h2>
        {notes.map((note) => (
          <div key="{note.id}">
            <Note note={note} onDeleteNote={deleteNote} onClick={NoteDetails} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
