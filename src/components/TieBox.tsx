import { Link } from "react-router-dom";

interface Props {
  onNewRound: () => void;
  isTie: boolean;
  setIsTie: (e: boolean) => void;
}

const TieBox = ({ onNewRound, setIsTie }: Props) => {
  const handleNextRound = () => {
    onNewRound();
    setIsTie(false);
  };

  return (
    <div className="absolute flex flex-col justify-center items-center mx-auto w-full py-11 bg-SemiDarkNavy">
      <div className="flex flex-col space-y-6">
        <h2 className="text-Silver font-bold tracking-[1px] text-center">
          It's a tie!
        </h2>
        <h1 className="text-LightYellow font-bold text-[40px] tracking-[2.5px]">
          Next Round
        </h1>
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
          Next Round
        </button>
      </div>
    </div>
  );
};

export default TieBox;
