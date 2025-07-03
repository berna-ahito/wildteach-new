import React from "react";

export default function InputCards({ title, children, className = "" }) {
  return (
    <div className={`input-card-wrapper ${className}`}>
      {title && <h3 className="input-card-title">{title}</h3>}
      <div className="input-card-content">{children}</div>
    </div>
  );
}
