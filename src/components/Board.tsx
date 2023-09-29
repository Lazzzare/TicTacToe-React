import { useState } from "react";
import Square from "./Square";
import BoardHeader from "./BoardHeader";
import WinnerBox from "./WinnerBox";
import BoardFooter from "./BoardFooter";
import RefreshBox from "./RefreshBox";
import TieBox from "./TieBox";

const Board = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [refresh, setRefresh] = useState<boolean>(false);
  const [winCountX, setWinCountX] = useState<number>(0);
  const [tiesCount, setTiesCount] = useState<number>(0);
  const [winCountY, setWinCountY] = useState<number>(0);
  const [isTie, setIsTie] = useState<boolean>(false);
  const [resetClicked, setResetClicked] = useState<boolean>(false);

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
        return squares[a];
      }
    }

    return null;
  };

  function handleClick(i: number) {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    if (!newSquares.includes("") && !calculateWinner(newSquares)) {
      setTiesCount((ties) => ties + 1);
      setIsTie(true);
    }

    const winner = calculateWinner(newSquares);
    if (winner) {
      if (winner === "X") {
        setWinCountX((prevCount) => prevCount + 1);
      } else if (winner === "O") {
        setWinCountY((prevCount) => prevCount + 1);
      }
    }
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (xIsNext ? "X" : "O") + " TURN";
  }

  const handleNewRound = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    // setRefresh(!refresh);

    setResetClicked((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          winner || refresh ? "opacity-30" : "opacity-100"
        } w-[328px] md:w-[457px]`}
      >
        {/* BoardHeader */}
        <BoardHeader
          status={`${status}`}
          winner={winner}
          setRefresh={setRefresh}
        />
        {/* Board */}
        <div className="flex flex-col">
          <div className="flex gap-x-5 mb-5">
            <Square
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
            <Square
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
            <Square
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
          </div>
          <div className="flex gap-x-5 mb-5">
            <Square
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
            <Square
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
            <Square
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
          </div>
          <div className="flex gap-x-5">
            <Square
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
              xIsNext={xIsNext}
              resetClicked={resetClicked}
            />
          </div>
        </div>
        <BoardFooter
          winCountX={winCountX}
          winCountY={winCountY}
          winner={winner}
          tiesCount={tiesCount}
        />
      </div>
      {winner ? (
        <WinnerBox winner={winner} onNewRound={handleNewRound} />
      ) : null}
      {refresh ? (
        <RefreshBox refresh={refresh} setRefresh={setRefresh} />
      ) : null}
      {isTie ? (
        <TieBox onNewRound={handleNewRound} isTie={isTie} setIsTie={setIsTie} />
      ) : null}
    </>
  );
};

export default Board;
