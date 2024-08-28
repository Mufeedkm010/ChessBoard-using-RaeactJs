import React from 'react';
import './square.css';

const Square = ({ isBlack, piece }) => {
  return (
    <div className={`square ${isBlack ? 'black' : 'white'}`}>
      {piece && (
        <button className="piece-button">
          <span className="piece">{piece}</span>
        </button>
      )}
    </div>
  );
};

export default Square;
