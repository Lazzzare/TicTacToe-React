import "../index.css";
import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";
import { useState } from "react";

interface Props {
  value: string;
  onSquareClick: () => void;
  xIsNext: boolean;
  resetClicked: boolean;
}

const Square = ({ value, xIsNext, onSquareClick }: Props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!value && !hovered) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!value && hovered) {
      setHovered(false);
    }
  };

  const handleClick = () => {
    if (!value) {
      onSquareClick();
    }
  };

  const hoverClass = xIsNext && hovered ? "hover-x" : hovered ? "hover-o" : "";
  const clickedClass = value ? "clicked-square" : "";

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-[96px] md:w-[140px] h-[96px] md:h-[140px] shadow bg-SemiDarkNavy rounded-2xl flex justify-center items-center ${hoverClass} ${clickedClass}`}
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
