import React, { useState } from "react";
import "./NoteContainer.css";
import Notes from "./Notes";
import SearchBar from "./SearchBar";

function NoteContainer(props) {
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverseArray(props.notes);
  console.log("Setted Note");

  const [displayNotes, setdisplayNotes] = useState(notes);
  const [ver, setVer] = useState(false);
  const searchHandler = (event) => {
    event.preventDefault(); //Search Function
    setVer(true);
    console.log("You Searched");

    let searchQuery = event.target.value.toLowerCase(),
      filteredNotes = notes.filter((el) => {
        let SearchValue = el.text.toLowerCase();
        console.log(SearchValue.indexOf(searchQuery));
        return SearchValue.indexOf(searchQuery) !== -1;
      });

    setdisplayNotes(filteredNotes);
  };
  const deleteNote = (id) => {
    setdisplayNotes(notes);
    props.deleteNote(id);
  };
  const updateText = (text, id) => {
    setdisplayNotes(notes);

    props.updateText(text, id);
  };

  return (
    <>
      <div className="note-container">
        <SearchBar notes={notes} searchHandler={searchHandler} />
        <h2>My Notes</h2>
        <div className="note-container-notes custom-scroll">
          {console.log(displayNotes)}
          {notes?.length > 0 ? (
            notes.map((note) => {
              return (
                <div className="note-container-note" key={note.id}>
                  <Notes
                    note={note}
                    deleteNote={() => deleteNote(note.id)}
                    updateText={() => updateText(note.text, note.id)}
                  />
                </div>
              );
            })
          ) : (
            <div className="note-container-note">
              <h3>No Notes Present</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NoteContainer;
