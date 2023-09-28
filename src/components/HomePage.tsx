import HomeLogo from "../assets/HomeLogo.svg";
import IconXgrey from "../assets/icon-x-grey.svg";
import IconXblack from "../assets/icon-x-black.svg";
import IconOgrey from "../assets/icon-o-grey.svg";
import IconOblack from "../assets/icon-o-black.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [pickMark, setPickMark] = useState("O");

  return (
    <div className="w-[327px] md:w-[460px]">
      <img src={HomeLogo} alt="HomeLogo" className="mx-auto mb-10" />
      <div className="pt-6 pb-7 px-6 bg-SemiDarkNavy rounded-2xl items-center text-center justify-center flex flex-col shadow">
        <h2 className="mb-6 text-Silver tracking-[1px] font-bold">
          PICK PLAYER 1’S MARK
        </h2>
        {/* Player Pick X or O */}
        <div className="flex bg-DarkNavy px-2 py-2 rounded-xl">
          {/* X */}
          <div
            onClick={() => setPickMark("X")}
            className={`${
              pickMark === "X" ? "bg-Silver" : "bg-transparent"
            } px-8 w-[131px] md:w-[198px] h-[54px] flex justify-center items-center rounded-md cursor-pointer`}
          >
            {pickMark === "X" ? (
              <img src={IconXblack} alt="IconXblack" className="w-8 h-8" />
            ) : (
              <img src={IconXgrey} alt="IconXgrey" className="w-8 h-8" />
            )}
          </div>
          {/* O */}
          <div
            onClick={() => setPickMark("O")}
            className={`${
              pickMark === "O" ? "bg-Silver" : "bg-transparent"
            } px-8 w-[131px] md:w-[198px] h-[54px] flex justify-center items-center rounded-md cursor-pointer`}
          >
            {pickMark === "O" ? (
              <img src={IconOblack} alt="IconXblack" className="w-8 h-8" />
            ) : (
              <img src={IconOgrey} alt="IconXgrey" className="w-8 h-8" />
            )}
          </div>
        </div>
        <p className="mt-4 text-Silver text-sm tracking-[0.875px] font-normal opacity-50">
          REMEMBER : X GOES FIRST
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-y-5">
        <button
          onClick={() => alert("In Progress... (Coming Soon)")}
          className="shadowYellow justify-center flex text-xl font-bold tracking-[1.25px] bg-LightYellow text-DarkNavy pt-4 pb-6 rounded-2xl border-[0px]"
        >
          NEW GAME (VS CPU)
        </button>
        <Link to={"/board"}>
          <div className="shadowBlue justify-center flex text-xl font-bold tracking-[1.25px] bg-LightBlue text-DarkNavy pt-4 pb-6 rounded-2xl">
            NEW GAME (VS PLAYER)
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
