import React from 'react';
import Square from './square.js';
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn } from 'react-icons/fa';
import './chessboard.css';

const pieces = [
  [<FaChessRook />, <FaChessKnight />, <FaChessBishop />, <FaChessQueen />, <FaChessKing />, <FaChessBishop />, <FaChessKnight />, <FaChessRook />],
  [<FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  [<FaChessPawn style={{ color: "grey" }} />, <FaChessPawn style={{ color: "grey" }} />, <FaChessPawn style={{ color: "grey" }} />, <FaChessPawn style={{ color: "grey" }} />, <FaChessPawn style={{ color: "grey" }} />, <FaChessPawn style={{ color: "grey" }} />, <FaChessPawn style={{ color: "grey" }} />, <FaChessPawn style={{ color: "grey" }} />],
  [<FaChessRook style={{ color: "grey" }} />, <FaChessKnight style={{ color: "grey" }} />, <FaChessBishop style={{ color: "grey" }} />, <FaChessQueen style={{ color: "grey" }} />, <FaChessKing style={{ color: "grey" }} />, <FaChessBishop style={{ color: "grey" }} />, <FaChessKnight style={{ color: "grey" }} />, <FaChessRook style={{ color: "grey" }} />]
];

const Chessboard = () => {
  const renderSquare = (i, j) => {
    const isBlack = (i + j) % 2 === 1;
    const piece = pieces[i][j];
    return <Square key={`${i}${j}`} isBlack={isBlack} piece={piece} />;
  };

  return (
    <div className="chessboard">
      {Array.from({ length: 8 }).map((_, i) => (
        Array.from({ length: 8 }).map((_, j) => renderSquare(i, j))
      ))}
    </div>
  );
};

export default Chessboard;
