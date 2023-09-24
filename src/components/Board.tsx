import { useState } from "react";
import Square from "./Square";

const Xicon = (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Combined Shape"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53.2406 1.14742C52.0691 -0.0241513 50.1696 -0.0241497 48.998 1.14742L32 18.1454L15.002 1.14742C13.8304 -0.0241506 11.9309 -0.0241496 10.7594 1.14742L1.14742 10.7594C-0.0241497 11.9309 -0.0241481 13.8304 1.14742 15.002L18.1454 32L1.14742 48.998C-0.0241506 50.1696 -0.0241496 52.0691 1.14742 53.2406L10.7594 62.8526C11.9309 64.0241 13.8304 64.0241 15.002 62.8526L32 45.8546L48.998 62.8526C50.1696 64.0242 52.0691 64.0241 53.2406 62.8526L62.8526 53.2406C64.0242 52.0691 64.0241 50.1696 62.8526 48.998L45.8546 32L62.8526 15.002C64.0242 13.8304 64.0241 11.9309 62.8526 10.7594L53.2406 1.14742Z"
      fill="#31C3BD"
    />
  </svg>
);
const Oicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32ZM18.963 32C18.963 24.7998 24.7998 18.963 32 18.963C39.2002 18.963 45.037 24.7998 45.037 32C45.037 39.2002 39.2002 45.037 32 45.037C24.7998 45.037 18.963 39.2002 18.963 32Z"
      fill="#F2B137"
    />
  </svg>
);

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const CalculateWinner = (squares: boolean[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = Xicon;
    } else {
      nextSquares[i] = Oicon;
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      {/* SquareBoard */}
      <div>{status}</div>
      <div className="flex gap-5 mb-5">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex gap-5 mb-5">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex gap-5">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
