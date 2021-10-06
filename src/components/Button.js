import React from 'react';

const Button = ({ text, buttonHandler }) => (
  <button type="button" onClick={buttonHandler}>
    {text}
  </button>
);

export default Button;
