import React from 'react';

function Button({ children }) {
  return (
    <div>
      <input type="button" value={children} />
    </div>
  );
}

export default Button;
