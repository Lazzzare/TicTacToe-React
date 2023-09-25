import { useState } from "react";
import Square from "./Square";

const restartSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
  >
    <g filter="url(#filter0_i_0_2689)">
      <rect width="52" height="52" rx="10" fill="#A8BFC9" />
    </g>
    <path
      d="M35.5241 16H33.644C33.3812 15.9997 33.1679 16.2126 33.1676 16.4756C33.1676 16.4834 33.1678 16.4911 33.1681 16.4988L33.3268 19.7829C31.46 17.5818 28.7198 16.3143 25.8348 16.3174C20.4154 16.3175 15.996 20.7432 16 26.1663C16.004 31.598 20.4058 36 25.8348 36C28.2702 36.0034 30.6195 35.0993 32.425 33.4639C32.6208 33.2885 32.6375 32.9874 32.4622 32.7915C32.4563 32.7849 32.4502 32.7785 32.444 32.7722L31.0957 31.423C30.9186 31.2459 30.6346 31.2363 30.4461 31.4012C27.5521 33.949 23.1419 33.6669 20.5956 30.7709C18.0494 27.875 18.3314 23.4619 21.2254 20.914C24.1195 18.3661 28.5297 18.6483 31.0759 21.5442C31.2755 21.7712 31.4601 22.011 31.6287 22.2619L27.6024 22.0686C27.3398 22.0562 27.1169 22.259 27.1044 22.5217C27.104 22.5294 27.1038 22.5371 27.1039 22.5448V24.4262C27.1039 24.6892 27.3169 24.9024 27.5798 24.9024H35.5242C35.787 24.9024 36 24.6892 36 24.4262V16.4762C36 16.2132 35.787 16 35.5241 16Z"
      fill="#1F3641"
    />
    <defs>
      <filter
        id="filter0_i_0_2689"
        x="0"
        y="0"
        width="52"
        height="52"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.418727 0 0 0 0 0.538482 0 0 0 0 0.590549 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_0_2689"
        />
      </filter>
    </defs>
  </svg>
);

const Logo = (
  <svg
    width="72"
    height="32"
    viewBox="0 0 72 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 2">
      <path
        id="Combined Shape Copy"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
        fill="#31C3BD"
      />
      <path
        id="Oval Copy"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.9704 15.8706C71.9704 7.10551 64.8649 0 56.0998 0C47.3348 0 40.2292 7.10551 40.2292 15.8706C40.2292 24.6357 47.3348 31.7412 56.0998 31.7412C64.8649 31.7412 71.9704 24.6357 71.9704 15.8706ZM49.634 15.8706C49.634 12.2996 52.5289 9.4048 56.0998 9.4048C59.6708 9.4048 62.5656 12.2996 62.5656 15.8706C62.5656 19.4416 59.6708 22.3364 56.0998 22.3364C52.5289 22.3364 49.634 19.4416 49.634 15.8706Z"
        fill="#F2B137"
      />
    </g>
  </svg>
);

interface BoardProps {
  Xicon: React.ReactElement;
  Oicon: React.ReactElement;
}

const Board = ({ Xicon, Oicon }: BoardProps) => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const CalculateWinner = (
    squares: (React.ReactElement | null)[]
  ): string | null => {
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
        return squares[a]?.props?.children as string;
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
    status = winner + " Winner";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
    status = (xIsNext ? "X" : "O") + " Turn";
  }

  return (
    <>
      {/* SquareBoard */}
      <div className="flex flex-row justify-between w-[460px] items-center mb-5">
        {Logo}
        <div className="pt-3 pb-4 px-8 bg-SemiDarkNavy rounded-xl text-Silver tracking-[1px]">
          {status}
        </div>
        <div onClick={handleRestart} className="cursor-pointer">
          {restartSvg}
        </div>
      </div>
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
      {/* Footer */}
      <div className="flex flex-row justify-between w-[460px] mt-5">
        {/* X */}
        <div className="w-36 pt-3 pb-3 px-10 text-center bg-LightBlue rounded-2xl">
          <h2>X (You)</h2>
          <p>0</p>
        </div>
        {/* Ties */}
        <div className="w-36 pt-3 pb-3 px-10 text-center bg-Silver rounded-2xl">
          <h2>TIES</h2>
          <p>0</p>
        </div>
        {/* O */}
        <div className="w-36 pt-3 pb-3 px-10 text-center bg-LightYellow rounded-2xl">
          <h2>O (CPU)</h2>
          <p>0</p>
        </div>
      </div>
    </>
  );
};

export default Board;
