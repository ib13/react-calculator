import React from "react";
import "./ExtraButton.css";

export const ExtraButton = props => (
  <div className="clear-btn" onClick={props.handleExtra}>
    {props.children}
  </div>
  //   Anything between the tags is children
);
