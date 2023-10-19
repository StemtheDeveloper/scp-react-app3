import React from "react";
import ReactDOM from "react-dom/client";
import subjects from "./subjectData.json";
import "./App.css";

function SubButton(props) {
  return (
    <>
      <div className="SubButtons">
        <button className="SubButton" onClick={props.onClick}>
          {props.subject}
        </button>
      </div>
    </>
  );
}

export default SubButton;
