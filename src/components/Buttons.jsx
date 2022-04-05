import { BsBook } from "react-icons/bs";
import "./style.css";
import React from "react";
import Navlink from "react-router-dom";

function Buttons({ href }) {
  
  
  return (
    <div>
      <a href={href} target="_blank">
        <div className="button">
          <BsBook />
        </div>
      </a>
    </div>
  );
}

export default Buttons;
