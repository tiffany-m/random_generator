import React from 'react';
import { FORTUNES } from '../shared/fortunesData';

function Fortunes(props) {
  let randomNumber = Math.floor(Math.random() * (FORTUNES.length));
  document.querySelector('fortunesDisplay').innerHTML = fortune[randomNumber];

  return (
    <div className="fortune-text">

    </div>
  );
};

export default Fortunes;
