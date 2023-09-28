import "../index.css";
import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";

interface Props {
  value: string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Props) => {
  return (
    <button
      onClick={onSquareClick}
      className={`relative w-[96px] md:w-[140px] h-[96px] md:h-[140px] shadow bg-SemiDarkNavy rounded-2xl flex justify-center items-center`}
    >
      {value === "X" && (
        <img src={Xicon} alt="Xicon" className={`w-8 md:w-16 h-8 md:h-16`} />
      )}
      {value === "O" && (
        <img src={Oicon} alt="Oicon" className={`w-8 md:w-16 h-8 md:h-16`} />
      )}
    </button>
  );
};

export default Square;
