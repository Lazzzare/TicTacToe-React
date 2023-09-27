import { useState } from "react";
import Square from "./Square";
// import Xicon from "../assets/icon-x.svg";
// import Oicon from "../assets/icon-o.svg";
import BoardHeader from "./BoardHeader";
import WinnerBox from "./WinnerBox";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));

  console.log(squares);

  // const X = <img src={Xicon} alt="Xicon" />;
  // const O = <img src={Oicon} alt="Oicon" />;

  const calculateWinner = (squares: string[]) => {
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
        return squares[a]; // Return the winning symbol (X or O)
      }
    }

    return null;
  };

  console.log("calculate", calculateWinner(squares));

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (xIsNext ? "X" : "O") + " TURN";
  }

  console.log("Winner", winner);

  return (
    <>
      {/* BoardHeader */}
      <BoardHeader status={`${status}`} winner={winner} />
      {/* Board */}
      <div className="flex flex-col">
        <div className="flex gap-x-5 mb-5">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex gap-x-5 mb-5">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex gap-x-5">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <WinnerBox winner={winner} />
    </>
  );
};

export default Board;
