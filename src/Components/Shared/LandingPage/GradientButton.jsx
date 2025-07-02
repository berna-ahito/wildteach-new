import React from "react";
import "../../../Pages/Styles/LandingPage/WhatIsWildTeach.css";

export default function GradientButton({ text, onClick, type = "button" }) {
  return (
    <button className="cta-btn" onClick={onClick} type={type}>
      <span>{text}</span>
      <div className="btn-shine"></div>
    </button>
  );
}
