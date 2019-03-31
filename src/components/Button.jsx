import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
  //This checks that if it is a operator or not
  //NaN is not a number
  //So what we are doing that if it is a number or . or = then return true
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
      //   If true nothing but false then add a class operator
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
