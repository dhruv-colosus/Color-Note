import React, { useState } from "react";
import "./SideBar.css";

import plusIcon from "../images/plus.png";

function SideBar(props) {
  const colors = [
    "pink",
    "#54CBBF",
    "#F8BD6D",
    "#FE9B71",
    "#E3EE8E",
    "#B592FD",
  ];
  const [listOpen, setListOpen] = useState(false);

  return (
    <>
      <div className="sidebar">
        <h2>Notez</h2>
        <div className="sidebar_img">
          <img
            src={plusIcon}
            alt="plus"
            onClick={() => setListOpen(!listOpen)}
          />
        </div>
        <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                className="sidebar_listitem"
                style={{ backgroundColor: color }}
                onClick={() => props.addNote(color)}
              ></li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
