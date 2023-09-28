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
      <div className="py-3 px-5 md:pt-[13px] md:pb-[11px] md:px-10 w-[96px] md:w-[140px] bg-LightBlue rounded-2xl flex flex-col text-center">
        <h4 className="text-sm tracking-[0.875px] font-medium text-DarkNavy">
          X (P2)
        </h4>
        <h2 className="text-2xl font-bold tracking-[1.5px] text-DarkNavy">
          {winCountX}
        </h2>
      </div>
      <div className="py-3 px-5 md:pt-[13px] md:pb-[11px] md:px-10 w-[96px] md:w-[140px] bg-Silver rounded-2xl flex flex-col text-center">
        <h4 className="text-sm tracking-[0.875px] font-medium text-DarkNavy">
          TIES
        </h4>
        <h2 className="text-2xl font-bold tracking-[1.5px] text-DarkNavy">
          {tiesCount}
        </h2>
      </div>
      <div className="py-3 px-5 md:pt-[13px] md:pb-[11px] md:px-10 w-[96px] md:w-[140px] bg-LightYellow rounded-2xl flex flex-col text-center">
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
