import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotesList from "./NotesList";
import "./App.css";
import NoteDetails from "./NoteDetails";

function App() {
  return (
    <div className="App">
      <div className="app-note">
        <div className="app-note-header">
          <h3>Notes App</h3>
        </div>

        <Switch>
          <Route path="/list" component={NotesList} />
          <Route path="/details" component={NoteDetails} />
          <Route path="/">
            <Redirect to="/list" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
