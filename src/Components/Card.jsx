import React from 'react';

export default function Card({ title, content, children, style, className = '' }) {
  return (
    <div
      className={className}
      style={{
       
        ...style,
      }}
    >
      {title && <h3 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>{title}</h3>}
      {content && <p style={{ fontSize: '28px', margin: '40px 0px 8px 0' }}>{content}</p>}
      {children}
    </div>
  );
}
