export default function Frame() {
  return (
    <div className="bg-white relative rounded-[16px] size-full">
      <div className="content-stretch flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium gap-[24px] items-start leading-[21px] overflow-clip p-[16px] relative rounded-[inherit] size-full text-[14px] text-black">
        <p className="css-ew64yg relative shrink-0">Income</p>
        <p className="css-ew64yg relative shrink-0">Part-time retirement</p>
        <p className="css-ew64yg relative shrink-0">Full-time retirement</p>
        <p className="css-ew64yg relative shrink-0">Wealth accumulation</p>
        <p className="css-ew64yg relative shrink-0">Speculation</p>
        <p className="css-ew64yg relative shrink-0">Education</p>
        <p className="css-ew64yg relative shrink-0">Wealth preservation</p>
        <p className="css-ew64yg relative shrink-0">Other</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}