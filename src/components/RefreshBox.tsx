import { Link } from "react-router-dom";

interface Props {
  refresh: boolean;
  setRefresh: (e: boolean) => void;
}

const RefreshBox = ({ refresh, setRefresh }: Props) => {
  console.log(refresh);

  return (
    <div className="absolute flex flex-col justify-center space-y-8 items-center mx-auto w-full py-16 bg-SemiDarkNavy">
      <h1 className="text-[40px] text-Silver font-bold tracking-[2.5px] text-center">
        RESTART GAME?
      </h1>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => setRefresh(false)}
          className="pt-[15px] pb-[17px] px-[18px] rounded-xl bg-Silver shadowSilver font-bold text-DarkNavy tracking-[1px]"
        >
          NO, CANCEL
        </button>
        <Link to={"/"}>
          <button className="pt-[15px] pb-[17px] px-[17px] rounded-xl bg-LightYellow shadowYellow font-bold text-DarkNavy tracking-[1px]">
            YES, RESTART
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RefreshBox;
