import HomeLogo from "../assets/HomeLogo.svg";
import Restart from "../assets/icon-restart.svg";
import Xicon from "../assets/icon-x.svg";
import Oicon from "../assets/icon-o.svg";

type WinnerType = "X" | "O" | null;

interface Props {
  status: string;
  winner: WinnerType | string;
}

const BoardHeader = ({ status, winner }: Props) => {
  let icon = null;
  if (winner) {
    icon =
      winner === "X" ? (
        <img src={Xicon} alt="Xicon" className="w-5 h-5" />
      ) : (
        <img src={Oicon} alt="Oicon" className="w-5 h-5" />
      );
  }
  return (
    <div className="flex flex-row justify-between w-[460px] mb-5">
      <img src={HomeLogo} alt="HomeLogo" className="w-[70px]" />
      <div className="flex flex-row gap-x-3 bg-SemiDarkNavy pt-3 pb-4 px-7 rounded-xl shadow items-center">
        {icon}
        <h3 className="uppercase font-bold tracking-[1px] text-Silver">
          {!winner ? status : "Winner"}
          {/* {status} */}
        </h3>
      </div>
      <img src={Restart} alt="Restart" />
    </div>
  );
};

export default BoardHeader;
