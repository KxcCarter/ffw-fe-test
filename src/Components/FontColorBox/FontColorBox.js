import React from 'react';

const FontColorBox = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
      <h1>{props.color}</h1>
      <h1>{props.label}</h1>
    </div>
  );
};

export default FontColorBox;
