import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const className = `btn-base ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}