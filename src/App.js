import "./App.css";
import React, { useState, useEffect } from "react";
import NoteContainer from "./Components/NoteContainer";
import SideBar from "./Components/SideBar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),

      text: "Add Note",
      color: color,
      time: Date.now(),
    });
    setNotes(tempNotes);
  };
  const deleteNote = (id) => {
    const tempNote = [...notes];
    const index = tempNote.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNote.splice(index, 1);
    setNotes(tempNote);
  };
  const updateText = (text, id) => {
    const tempNote = [...notes];
    const index = tempNote.find((item) => item.id === id);
    if (index < 0) return;

    index.text = text;
    const finalindex = tempNote.findIndex((note) => note.id === id);
    tempNote[finalindex].text = text;

    setNotes(tempNote);
  };
  return (
    <div className="App">
      <SideBar className="sidebaar" addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
