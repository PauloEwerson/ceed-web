import React from 'react';

function Button({ label, primary, onClick }) {
  return (
    <button
      className={`px-8 py-3 rounded-full font-bold text-white w-9/12
      ${
        primary
        ? 'bg-blue-500'
        : 'bg-yellow-500'}`
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
