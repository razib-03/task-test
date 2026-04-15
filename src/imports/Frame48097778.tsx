function IconsTimes() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / times2">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="css-4hzbpn leading-[normal]">times</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[26px] text-black">
        <p className="css-4hzbpn leading-[32px]">Delete account</p>
      </div>
      <IconsTimes />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f575e] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Nevermind</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[48px] relative rounded-[100px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-0 relative size-full">
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e3338] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white">
        <p className="css-ew64yg leading-[24px]">Yes, delete</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ea333c] h-[48px] relative rounded-[100px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-0 relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] size-full">
      <Frame2 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Please confirm you want to delete your account.</p>
      </div>
      <Frame3 />
    </div>
  );
}