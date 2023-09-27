import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";

interface Props {
  winner: string | null;
}

const WinnerBox = ({ winner }: Props) => {
  let icon = null;
  if (winner) {
    icon =
      winner === "X" ? (
        <img src={Xicon} alt="Xicon" className="w-5 h-5" />
      ) : (
        <img src={Oicon} alt="Oicon" className="w-5 h-5" />
      );
  }
  return <div>{icon}</div>;
};

export default WinnerBox;
