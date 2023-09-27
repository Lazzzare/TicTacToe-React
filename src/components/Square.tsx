// import { useState } from "react";
import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";

interface Props {
  value: string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Props) => {
  let icon = null;

  if (value === "X") {
    icon = <img src={Xicon} alt="Xicon" className="w-10 h-10" />;
  } else if (value === "O") {
    icon = <img src={Oicon} alt="Oicon" className="w-10 h-10" />;
  }
  return (
    <button
      onClick={onSquareClick}
      className="w-[140px] h-[140px] shadow bg-SemiDarkNavy rounded-2xl flex justify-center items-center"
    >
      {icon}
    </button>
  );
};

export default Square;
