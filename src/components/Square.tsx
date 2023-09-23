interface SquareProps {
  value: boolean | string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <div
      onClick={onSquareClick}
      className="w-[140px] h-[140px] bg-SemiDarkNavy rounded-[15px] flex justify-center items-center shadow-2xl"
    >
      {value}
    </div>
  );
};

export default Square;
