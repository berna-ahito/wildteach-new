import React from 'react';

export default function Card({ title, content, children, className = '', style = {} }) {
  return (
    <div className={className} style={style}>
      {children}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </div>
  );
}
