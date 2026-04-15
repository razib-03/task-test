import imgImage72 from "figma:asset/ffc4abdd735792c411cf136a385f85a7fd8b0903.png";

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Libre_Baskerville:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2e3338] text-[40px]">
            <p className="leading-[normal] whitespace-pre-wrap">Workflows</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center py-[40px] relative size-full">
      <Frame />
      <div className="h-[700.848px] relative shrink-0 w-[1293px]" data-name="image 72">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage72} />
      </div>
    </div>
  );
}