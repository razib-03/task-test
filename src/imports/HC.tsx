import svgPaths from "./svg-ziwu6xezqb";

function IconsEnvelope() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / envelope">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[16px] text-center text-white">
        <p className="leading-[normal] whitespace-pre-wrap">user-plus</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
      <IconsEnvelope />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">New client</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2e3338] content-stretch flex h-[48px] items-start justify-center overflow-clip px-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <Frame />
    </div>
  );
}

function IconsEnvelope1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / envelope">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">house-user</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
      <IconsEnvelope1 />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Create household</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e9ecef] content-stretch flex h-[48px] items-start justify-center overflow-clip px-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <Frame1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[40px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Libre_Baskerville:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2e3338] text-[40px]">
            <p className="leading-[normal] whitespace-pre-wrap">{`Households & Clients`}</p>
          </div>
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-center px-[40px] py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#0645ad] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0645ad] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">Households</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-center px-[40px] py-[8px] relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4]">Clients</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="leading icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#657381] text-[14px] text-center top-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[48px] relative rounded-[72px] shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border-2 border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[72px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <LeadingIcon />
          <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[22px] justify-center leading-[0] min-h-px min-w-px relative text-[#657381] text-[16px]">
            <p className="leading-[1.4] whitespace-pre-wrap">Search households</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="dropdown">
      <Container />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center leading-[0] px-[16px] py-[15px] relative rounded-[100px] shrink-0 text-[#2e3338] text-[16px] whitespace-nowrap" data-name="Component 3">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[1.4]">Filter team</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center leading-[0] px-[16px] py-[15px] relative rounded-[100px] shrink-0 text-[#2e3338] text-[16px] whitespace-nowrap" data-name="Component 3">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[1.4]">Advisor</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Component1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Dropdown />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[40px] relative w-full">
        <Frame21 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame19 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="trailing icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#949494] text-[14px] text-center top-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap">angle-up</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Name</p>
      </div>
      <TrailingIcon />
    </div>
  );
}

function HeaderSelectAll() {
  return (
    <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="header select all">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function RowData() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center relative shrink-0 w-[32px]" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-none">Household name 1</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="label">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[32px] relative size-full">
          <RowData />
        </div>
      </div>
    </div>
  );
}

function RowData1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center relative shrink-0" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-none">Household name 2</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="label">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[32px] relative size-full">
          <RowData1 />
        </div>
      </div>
    </div>
  );
}

function RowData2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-none">Household name 3</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="label">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[32px] relative size-full">
          <RowData2 />
        </div>
      </div>
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[288px]" data-name="columns">
      <HeaderSelectAll />
      <Label />
      <Label1 />
      <Label2 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="trailing icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#949494] text-[14px] text-center top-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap">angle-up</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Members</p>
      </div>
      <TrailingIcon1 />
    </div>
  );
}

function HeaderSort() {
  return (
    <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Header sort">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function RowData3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function RowData4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function RowData5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Columns1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="columns">
      <HeaderSort />
      <RowData3 />
      <RowData4 />
      <RowData5 />
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="trailing icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#949494] text-[14px] text-center top-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap">angle-up</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Primary</p>
      </div>
      <TrailingIcon2 />
    </div>
  );
}

function HeaderSort1() {
  return (
    <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Header sort">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative size-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function RowData6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Client name</p>
      </div>
    </div>
  );
}

function RowData7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Client name</p>
      </div>
    </div>
  );
}

function RowData8() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Client name</p>
      </div>
    </div>
  );
}

function Columns2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="columns">
      <HeaderSort1 />
      <RowData6 />
      <RowData7 />
      <RowData8 />
    </div>
  );
}

function TrailingIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="trailing icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#949494] text-[14px] text-center top-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap">angle-up</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Team</p>
      </div>
      <TrailingIcon3 />
    </div>
  );
}

function HeaderSort2() {
  return (
    <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Header sort">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative size-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function RowData9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Team name 1</p>
      </div>
    </div>
  );
}

function RowData10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Team name 2</p>
      </div>
    </div>
  );
}

function RowData11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Team name 3</p>
      </div>
    </div>
  );
}

function Columns3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="columns">
      <HeaderSort2 />
      <RowData9 />
      <RowData10 />
      <RowData11 />
    </div>
  );
}

function TrailingIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="trailing icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#949494] text-[14px] text-center top-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap">angle-up</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Advisor</p>
      </div>
      <TrailingIcon4 />
    </div>
  );
}

function HeaderSort3() {
  return (
    <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Header sort">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function RowData12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Advisor name</p>
      </div>
    </div>
  );
}

function RowData13() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Advisor name</p>
      </div>
    </div>
  );
}

function RowData14() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Advisor name</p>
      </div>
    </div>
  );
}

function Columns4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="columns">
      <HeaderSort3 />
      <RowData12 />
      <RowData13 />
      <RowData14 />
    </div>
  );
}

function TrailingIcon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="trailing icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#949494] text-[14px] text-center top-[12px]">
        <p className="leading-[normal] whitespace-pre-wrap">angle-up</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">AUM</p>
      </div>
      <TrailingIcon5 />
    </div>
  );
}

function HeaderSort4() {
  return (
    <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Header sort">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function RowData15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">$775,000 CAD</p>
      </div>
    </div>
  );
}

function RowData16() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">$12,025,000 CAD</p>
      </div>
    </div>
  );
}

function RowData17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">$15,98,10,000 CAD</p>
      </div>
    </div>
  );
}

function Columns5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="columns">
      <HeaderSort4 />
      <RowData15 />
      <RowData16 />
      <RowData17 />
    </div>
  );
}

function HeaderSort5() {
  return (
    <div className="bg-[#fafafa] h-[56px] relative shrink-0 w-full" data-name="Header sort">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pr-[40px] size-full" />
      </div>
    </div>
  );
}

function RightAction() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="right action">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#657381] text-[16px] text-center top-[12px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Ellipsis</p>
      </div>
    </div>
  );
}

function RowData18() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pr-[40px] relative size-full">
          <RightAction />
        </div>
      </div>
    </div>
  );
}

function RightAction1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="right action">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#657381] text-[16px] text-center top-[12px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Ellipsis</p>
      </div>
    </div>
  );
}

function RowData19() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pr-[40px] relative size-full">
          <RightAction1 />
        </div>
      </div>
    </div>
  );
}

function RightAction2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="right action">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] left-[12px] not-italic size-[24px] text-[#657381] text-[16px] text-center top-[12px]">
        <p className="leading-[1.4] whitespace-pre-wrap">ellipsis</p>
      </div>
    </div>
  );
}

function RowData20() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="row data">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pr-[40px] relative size-full">
          <RightAction2 />
        </div>
      </div>
    </div>
  );
}

function Columns6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="columns">
      <HeaderSort5 />
      <RowData18 />
      <RowData19 />
      <RowData20 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="table">
      <Columns />
      <Columns1 />
      <Columns2 />
      <Columns3 />
      <Columns4 />
      <Columns5 />
      <Columns6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full">
      <Table />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[803px] items-start left-[calc(16.67%+68px)] py-[40px] top-0 w-[1372px]">
      <Frame22 />
      <Frame18 />
      <Frame14 />
    </div>
  );
}

function G() {
  return (
    <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[85.274px]" data-name="g12">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.2762 19.9998">
        <g id="g12">
          <path d={svgPaths.p174db900} fill="var(--fill-0, #2E3338)" id="path14" />
          <path d={svgPaths.p209dc3c0} fill="var(--fill-0, #2E3338)" id="path16" />
          <path d={svgPaths.p257a7080} fill="var(--fill-0, #2E3338)" id="path18" />
          <path d={svgPaths.pdd732c0} fill="var(--fill-0, #2E3338)" id="path20" />
          <path d={svgPaths.pe7c00} fill="var(--fill-0, #2E3338)" id="path22" />
          <path d={svgPaths.p2b21ce80} fill="var(--fill-0, #2E3338)" id="path24" />
          <path d={svgPaths.p5c02680} fill="var(--fill-0, #2E3338)" id="path26" />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative" data-name="logo">
      <G />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0" data-name="Logo">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Logo2 />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0" data-name="Logo">
      <Logo1 />
    </div>
  );
}

function LogoOsUi() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[35px] items-start justify-center min-h-px min-w-px opacity-90 py-px relative" data-name="Logo OS UI">
      <Logo />
    </div>
  );
}

function IconsAngleDoubleRight() {
  return (
    <div className="relative rounded-[30px] shrink-0 size-[40px]" data-name="Icons / angle-double-right">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">angle-double-left</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[48px] items-center relative shrink-0 w-full">
      <LogoOsUi />
      <IconsAngleDoubleRight />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative shrink-0 w-[355px]">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="size-full" />
    </div>
  );
}

function IconsUser() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / user">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[20%] not-italic right-[20%] text-[#657381] text-[16px] text-center top-1/2">
        <p className="leading-[normal] whitespace-pre-wrap">dashboard</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[285px]" data-name="Menu / Mobile / First Level / Normal">
      <IconsUser />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
        <p className="leading-[24px] whitespace-pre-wrap">Overview</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelSelected() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Selected">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] relative size-full">
          <MenuMobileFirstLevelNormal />
        </div>
      </div>
    </div>
  );
}

function IconsUser1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / user">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[20%] not-italic right-[20%] text-[#2e3338] text-[16px] text-center top-1/2">
        <p className="leading-[normal] whitespace-pre-wrap">house-user</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Menu / Mobile / First Level / Normal">
      <IconsUser1 />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[16px] w-[205px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Households & Clients`}</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelSelected1() {
  return (
    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Selected">
      <div aria-hidden="true" className="absolute border-[#0645ad] border-r-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] relative size-full">
          <MenuMobileFirstLevelNormal1 />
        </div>
      </div>
    </div>
  );
}

function IconsUser2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / user">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[20%] not-italic right-[20%] text-[#657381] text-[16px] text-center top-1/2">
        <p className="leading-[normal] whitespace-pre-wrap">tasks</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Menu / Mobile / First Level / Normal">
      <div aria-hidden="true" className="absolute border-l-3 border-solid border-white inset-0 pointer-events-none" />
      <IconsUser2 />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
        <p className="leading-[24px] whitespace-pre-wrap">Workflows</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelSelected2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Selected">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] relative size-full">
          <MenuMobileFirstLevelNormal2 />
        </div>
      </div>
    </div>
  );
}

function IconsUser3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / user">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[20%] not-italic right-[20%] text-[#657381] text-[16px] text-center top-1/2">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right-arrow-left</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Menu / Mobile / First Level / Normal">
      <div aria-hidden="true" className="absolute border-l-3 border-solid border-white inset-0 pointer-events-none" />
      <IconsUser3 />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
        <p className="leading-[24px] whitespace-pre-wrap">Money movement</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelSelected3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Selected">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] relative size-full">
          <MenuMobileFirstLevelNormal3 />
        </div>
      </div>
    </div>
  );
}

function IconsUser4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / user">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[20%] not-italic right-[20%] text-[#657381] text-[16px] text-center top-1/2">
        <p className="leading-[normal] whitespace-pre-wrap">pie-chart</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Menu / Mobile / First Level / Normal">
      <div aria-hidden="true" className="absolute border-l-3 border-solid border-white inset-0 pointer-events-none" />
      <IconsUser4 />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
        <p className="leading-[24px] whitespace-pre-wrap">Portfolio details</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelSelected4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Selected">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] relative size-full">
          <MenuMobileFirstLevelNormal4 />
        </div>
      </div>
    </div>
  );
}

function IconsBriefcase() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / briefcase">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#657381] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">legal</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Normal">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[32px] relative size-full">
          <IconsBriefcase />
          <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
            <p className="leading-[24px] whitespace-pre-wrap">Compliance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bagde() {
  return <div className="absolute bg-[#dc2020] left-[310px] rounded-[100px] size-[8px] top-[320px]" data-name="Bagde" />;
}

function IconsBellO() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / bell-o">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#657381] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">bar-chart</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Normal">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[32px] relative size-full">
          <IconsBellO />
          <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
            <p className="leading-[24px] whitespace-pre-wrap">{`Insights & Reports`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsBellO1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / bell-o">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#657381] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">gear</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Normal">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[32px] relative size-full">
          <IconsBellO1 />
          <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
            <p className="leading-[24px] whitespace-pre-wrap">User management</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsBellO2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / bell-o">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#657381] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">external-link</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Normal">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[32px] relative size-full">
          <IconsBellO2 />
          <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
            <p className="leading-[24px] whitespace-pre-wrap">d1g1t</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsBellO3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / bell-o">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#657381] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">external-link</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Normal">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[32px] relative size-full">
          <IconsBellO3 />
          <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
            <p className="leading-[24px] whitespace-pre-wrap">Conquest</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative w-[356px]" data-name="Menu">
      <MenuMobileFirstLevelSelected />
      <MenuMobileFirstLevelSelected1 />
      <MenuMobileFirstLevelSelected2 />
      <MenuMobileFirstLevelSelected3 />
      <MenuMobileFirstLevelSelected4 />
      <MenuMobileFirstLevelNormal5 />
      <Bagde />
      <MenuMobileFirstLevelNormal6 />
      <MenuMobileFirstLevelNormal7 />
      <MenuMobileFirstLevelNormal8 />
      <MenuMobileFirstLevelNormal9 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center px-[32px] relative shrink-0 w-[356px]">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 size-[24px]">
        <p className="leading-[1.4] whitespace-pre-wrap">question-circle</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center min-h-px min-w-px relative">
        <p className="leading-[24px] whitespace-pre-wrap">Help centre</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center px-[32px] relative shrink-0 w-[356px]">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.4]">user-gear</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center min-h-px min-w-px relative">
        <p className="leading-[24px] whitespace-pre-wrap">Advisor Name</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.4]">angle-right</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-[#657381] text-[16px]">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function LeftMain() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1117px] items-start left-0 py-[16px] top-0 w-[356px]" data-name="Left-main">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-r border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Frame4 />
      <Menu />
      <Frame25 />
    </div>
  );
}

export default function HC() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="H&C">
      <Frame15 />
      <LeftMain />
    </div>
  );
}