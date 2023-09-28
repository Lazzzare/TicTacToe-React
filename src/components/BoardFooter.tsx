interface Props {
  winCountX: number;
  winCountY: number;
  winner: string | null;
  tiesCount: number;
}

const BoardFooter = ({
  winCountX,
  winCountY,
  // winner,
  tiesCount,
}: Props) => {
  return (
    <div className="flex flex-row justify-between w-full mt-5">
      <div className="pt-[13px] pb-[11px] px-10 bg-LightBlue rounded-2xl flex flex-col text-center">
        <h4 className="text-sm tracking-[0.875px] font-medium text-DarkNavy">
          X (P2)
        </h4>
        <h2 className="text-2xl font-bold tracking-[1.5px] text-DarkNavy">
          {winCountX}
        </h2>
      </div>
      <div className="pt-[13px] pb-[11px] px-10 bg-Silver rounded-2xl flex flex-col text-center">
        <h4 className="text-sm tracking-[0.875px] font-medium text-DarkNavy">
          TIES
        </h4>
        <h2 className="text-2xl font-bold tracking-[1.5px] text-DarkNavy">
          {tiesCount}
        </h2>
      </div>
      <div className="pt-[13px] pb-[11px] px-10 bg-LightYellow rounded-2xl flex flex-col text-center">
        <h4 className="text-sm tracking-[0.875px] font-medium text-DarkNavy">
          O (P1)
        </h4>
        <h2 className="text-2xl font-bold tracking-[1.5px] text-DarkNavy">
          {winCountY}
        </h2>
      </div>
    </div>
  );
};

export default BoardFooter;
