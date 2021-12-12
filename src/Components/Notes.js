import React from "react";
import "./Notes.css";
import bin from "../images/delete.png";

function Notes(props) {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    let hrs = date.getHours();
    let ampm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 12 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    return `${hrs}:${min} ${ampm} `;
  };
  const formatTime = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = date.getDate();
    const month = monthName[date.getMonth()];

    return `${day}  ${month}`;
  };
  const updateText = (text, id) => {
    props.updateText(text, id);
  };

  return (
    <>
      <div className="notes" style={{ backgroundColor: props.note.color }}>
        <textarea
          className="notes_text"
          defaultValue={props.note.text}
          onChange={(event) => updateText(event.target.value, props.note.id)}
        ></textarea>

        <div className="note_footer">
          <p className="notes_date">
            {formatTime(props.note.time) + " , "}
            <span className="boldd">{formatDate(props.note.time)}</span>
          </p>
          <img
            src={bin}
            alt="delete"
            onClick={() => props.deleteNote(props.note.id)}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Notes;
