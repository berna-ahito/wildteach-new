import React from 'react';

export default function Card({ title, content, children, style, className = '' }) {
  return (
    <div
      className={className}
      style={{
        border: '2px solid',
        borderColor: '#000', 
        borderRadius: '8px',
        padding: '16px',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        minWidth: '160px',
        minHeight: '100px',
        textAlign: 'center',
        ...style,
      }}
    >
      {title && <h3 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>{title}</h3>}
      {content && <p style={{ fontSize: '28px', margin: '40px 0px 8px 0' }}>{content}</p>}
      {children}
    </div>
  );
}
