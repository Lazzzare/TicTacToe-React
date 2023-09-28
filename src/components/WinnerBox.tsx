import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";
import { Link } from "react-router-dom";

interface Props {
  winner: string | null;
  onNewRound: () => void;
}

const WinnerBox = ({ winner, onNewRound }: Props) => {
  let icon = null;
  if (winner) {
    icon =
      winner === "X" ? (
        <img src={Xicon} alt="Xicon" className="w-7 md:w-16 h-7 md:h-16" />
      ) : (
        <img src={Oicon} alt="Oicon" className="w-7 md:w-16 h-7 md:h-16" />
      );
  }
  const handleNextRound = () => {
    onNewRound();
  };
  return (
    <div className="absolute flex flex-col justify-center items-center mx-auto w-full py-11 bg-SemiDarkNavy">
      <div className="flex flex-col space-y-6 items-center text-center">
        <h2 className="text-Silver font-bold tracking-[1px] text-center">
          PLAYER 1 WINS!
        </h2>
        <div className="flex flex-row gap-3 md:gap-6 items-center">
          {icon}
          <h1 className="text-LightYellow font-bold text-2xl md:text-[40px] tracking-[2.5px]">
            TAKES THE ROUND
          </h1>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-8">
        <Link to={"/"}>
          <button className="shadowSilver bg-Silver font-bold rounded-xl tracking-[1px] text-DarkNavy pt-[15px] pb-[16px] px-[17px]">
            Quit
          </button>
        </Link>
        <button
          onClick={handleNextRound}
          className="shadowYellow bg-LightYellow rounded-xl font-bold tracking-[1px] text-DarkNavy py-[15px] px-[17px]"
        >
          NEXT ROUND
        </button>
      </div>
    </div>
  );
};

export default WinnerBox;
