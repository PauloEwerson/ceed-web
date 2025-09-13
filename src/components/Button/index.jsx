import React from 'react';

function Button({ label, primary, onClick, className }) {
  return (
    <button
      className={`
        px-6 py-3
        rounded-full
        font-bold
        text-white
        ${primary ? 'bg-blue-500' : 'bg-yellow-500'}
        ${className || ''}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;