import svgPaths from "./svg-u1zrqlgohb";

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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[48px] items-center relative shrink-0 w-full">
      <LogoOsUi />
      <IconsAngleDoubleRight />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative shrink-0 w-[355px]">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="size-full" />
    </div>
  );
}

function IconsUser() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / user">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[20%] not-italic right-[20%] text-[#2e3338] text-[16px] text-center top-1/2">
        <p className="leading-[normal] whitespace-pre-wrap">dashboard</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[285px]" data-name="Menu / Mobile / First Level / Normal">
      <IconsUser />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[16px] w-[205px]">
        <p className="leading-[24px] whitespace-pre-wrap">Overview</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelSelected() {
  return (
    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Selected">
      <div aria-hidden="true" className="absolute border-[#0645ad] border-r-3 border-solid inset-0 pointer-events-none" />
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[20%] not-italic right-[20%] text-[#657381] text-[16px] text-center top-1/2">
        <p className="leading-[normal] whitespace-pre-wrap">house-user</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelNormal1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Menu / Mobile / First Level / Normal">
      <div aria-hidden="true" className="absolute border-l-3 border-solid border-white inset-0 pointer-events-none" />
      <IconsUser1 />
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#657381] text-[16px] w-[205px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Households & Clients`}</p>
      </div>
    </div>
  );
}

function MenuMobileFirstLevelSelected1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Menu / Mobile / First Level / Selected">
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
            <p className="leading-[24px] whitespace-pre-wrap">{`Insights & Reporting`}</p>
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

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center px-[32px] relative shrink-0 w-[356px]">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 size-[24px]">
        <p className="leading-[1.4] whitespace-pre-wrap">question-square</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[40px] justify-center min-h-px min-w-px relative">
        <p className="leading-[24px] whitespace-pre-wrap">Help centre</p>
      </div>
    </div>
  );
}

function Frame16() {
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

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-[#657381] text-[16px]">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function LeftMain() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1117px] items-start left-0 py-[16px] top-0 w-[356px]" data-name="Left-main">
      <div aria-hidden="true" className="absolute border-[#e9ecef] border-r border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Frame3 />
      <Menu />
      <Frame32 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Libre_Baskerville:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2e3338] text-[40px]">
            <p className="leading-[normal] whitespace-pre-wrap">Good morning, James</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#657381] text-[14px] w-full">
        <p className="leading-[21px] whitespace-pre-wrap">Total AUM</p>
      </div>
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#2e3338] text-[22px] w-full whitespace-pre-wrap">$345,009,987.98</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-[201.25px]">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#657381] text-[14px] w-full">
        <p className="leading-[21px] whitespace-pre-wrap">Total clients</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e3338] text-[22px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">450</p>
      </div>
    </div>
  );
}

function ButtonInteraction() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button interaction">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-[201.25px]">
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#657381] text-[14px] w-full">
        <p className="leading-[21px] whitespace-pre-wrap">Total households</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e3338] text-[22px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">200</p>
      </div>
    </div>
  );
}

function ButtonInteraction1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Button interaction">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[40px] relative w-full">
          <Frame9 />
          <ButtonInteraction />
          <ButtonInteraction1 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#2e3338] text-[22px] w-full whitespace-pre-wrap">AUM over time</p>
    </div>
  );
}

function Component3M() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="3M">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">3M</p>
    </div>
  );
}

function Component6M() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="6M">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">6M</p>
    </div>
  );
}

function Component9M() {
  return (
    <div className="bg-[#1a79cb] content-stretch flex items-center justify-center px-[8px] relative rounded-[40px] shrink-0" data-name="9M">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white">9M</p>
    </div>
  );
}

function Component1Y() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="1Y">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">1Y</p>
    </div>
  );
}

function Component2Y() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[20px] shrink-0" data-name="2Y">
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">2Y</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Component3M />
      <Component6M />
      <Component9M />
      <Component1Y />
      <Component2Y />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium gap-[10px] h-[130px] items-end justify-center leading-[18px] relative shrink-0 text-[#adb5bd] text-[12px]">
      <p className="relative shrink-0">400M</p>
      <p className="relative shrink-0">300M</p>
      <p className="relative shrink-0">200M</p>
      <p className="relative shrink-0">100M</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative w-[8px] whitespace-pre-wrap">0</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame29 />
      <div className="absolute h-0 left-[43px] top-[121px] w-[543px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 543 1">
            <line id="Line 18" stroke="var(--stroke-0, #E9ECEF)" x2="543" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[43px] top-[93px] w-[543px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 543 1">
            <line id="Line 18" stroke="var(--stroke-0, #E9ECEF)" x2="543" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[43px] top-[65px] w-[543px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 543 1">
            <line id="Line 18" stroke="var(--stroke-0, #E9ECEF)" x2="543" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[43px] top-[37px] w-[543px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 543 1">
            <line id="Line 18" stroke="var(--stroke-0, #E9ECEF)" x2="543" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[43px] top-[9px] w-[543px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 543 1">
            <line id="Line 18" stroke="var(--stroke-0, #E9ECEF)" x2="543" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[25px] left-[56.5px] top-[14px] w-[529px]">
        <div className="absolute inset-[-8.02%_-0.03%_-7.86%_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 529.53 28.97">
            <path d={svgPaths.pf8981c0} id="Vector 9" stroke="var(--stroke-0, #1A79CB)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex font-['Work_Sans:Medium',sans-serif] font-medium gap-[8px] items-start leading-[18px] relative shrink-0 text-[#adb5bd] text-[12px] text-center w-[543px] whitespace-pre-wrap">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Sep</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Oct</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Nov</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Dec</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Jan</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Feb</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Mar</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Apr</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative">May</p>
    </div>
  );
}

function Aum() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="AUM">
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end p-[24px] relative w-full">
          <Frame31 />
          <Frame28 />
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0645ad] text-[16px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">View all</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0" data-name="Button">
      <Frame4 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Work_Sans:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px relative text-[#2e3338] text-[22px] whitespace-pre-wrap">Top Clients</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="1">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="2">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="3">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText2() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="4">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="5">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText4() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="6">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content5 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="7">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText6() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content6 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="8">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content7 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="9">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText8() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content8 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <ol className="block font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap" start="10">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[21px]">Household Name</span>
        </li>
      </ol>
    </div>
  );
}

function TableDesktopSmallCellText9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content9 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnTextZebra() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table / Desktop / Small/Column/Text/Zebra">
      <TableDesktopSmallCellText />
      <TableDesktopSmallCellText1 />
      <TableDesktopSmallCellText2 />
      <TableDesktopSmallCellText3 />
      <TableDesktopSmallCellText4 />
      <TableDesktopSmallCellText5 />
      <TableDesktopSmallCellText6 />
      <TableDesktopSmallCellText7 />
      <TableDesktopSmallCellText8 />
      <TableDesktopSmallCellText9 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$50,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText10() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content10 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$45,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content11 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$35,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText12() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content12 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$24,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content13 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$21,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText14() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content14 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$20,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content15 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$19,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText16() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content16 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$14,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content17 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$9,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText18() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content18 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">$2,000,000.00 CAD</p>
    </div>
  );
}

function TableDesktopSmallCellText19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content19 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnTextZebra1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table / Desktop / Small/Column/Text/Zebra">
      <TableDesktopSmallCellText10 />
      <TableDesktopSmallCellText11 />
      <TableDesktopSmallCellText12 />
      <TableDesktopSmallCellText13 />
      <TableDesktopSmallCellText14 />
      <TableDesktopSmallCellText15 />
      <TableDesktopSmallCellText16 />
      <TableDesktopSmallCellText17 />
      <TableDesktopSmallCellText18 />
      <TableDesktopSmallCellText19 />
    </div>
  );
}

function IconsFile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile />
    </div>
  );
}

function TableDesktopSmallCellIcon() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content20 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile1 />
    </div>
  );
}

function TableDesktopSmallCellIcon1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content21 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile2 />
    </div>
  );
}

function TableDesktopSmallCellIcon2() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content22 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile3 />
    </div>
  );
}

function TableDesktopSmallCellIcon3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content23 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile4 />
    </div>
  );
}

function TableDesktopSmallCellIcon4() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content24 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile5 />
    </div>
  );
}

function TableDesktopSmallCellIcon5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content25 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile6 />
    </div>
  );
}

function TableDesktopSmallCellIcon6() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content26 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile7 />
    </div>
  );
}

function TableDesktopSmallCellIcon7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content27 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile8 />
    </div>
  );
}

function TableDesktopSmallCellIcon8() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content28 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile9 />
    </div>
  );
}

function TableDesktopSmallCellIcon9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content29 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnIconZebra() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[138px]" data-name="Table / Desktop / Small/Column/Icon/Zebra">
      <TableDesktopSmallCellIcon />
      <TableDesktopSmallCellIcon1 />
      <TableDesktopSmallCellIcon2 />
      <TableDesktopSmallCellIcon3 />
      <TableDesktopSmallCellIcon4 />
      <TableDesktopSmallCellIcon5 />
      <TableDesktopSmallCellIcon6 />
      <TableDesktopSmallCellIcon7 />
      <TableDesktopSmallCellIcon8 />
      <TableDesktopSmallCellIcon9 />
    </div>
  );
}

function TableDesktopSmallZebra() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small / Zebra">
      <TableDesktopSmallColumnTextZebra />
      <TableDesktopSmallColumnTextZebra1 />
      <TableDesktopSmallColumnIconZebra />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pt-[24px] relative rounded-[inherit] w-full">
        <Frame20 />
        <TableDesktopSmallZebra />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <Aum />
      <Frame10 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] relative w-full">
          <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#2e3338] text-[22px] w-full whitespace-pre-wrap">Client activities</p>
        </div>
      </div>
    </div>
  );
}

function IconLeftText() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center left-0 top-0" data-name="Icon Left + Text">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Last 30 days</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[0_15.63px_0_16px] overflow-clip">
      <IconLeftText />
    </div>
  );
}

function IconsAngleDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / angle-down">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">angle-down</p>
      </div>
    </div>
  );
}

function IconsRight() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center overflow-clip right-[15.63px] top-0" data-name="Icons Right">
      <IconsAngleDown />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <IconsRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Dropdown">
      <Input />
    </div>
  );
}

function IconLeftText1() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center left-0 top-0" data-name="Icon Left + Text">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">All workflows</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute inset-[0_15.63px_0_16px] overflow-clip">
      <IconLeftText1 />
    </div>
  );
}

function IconsAngleDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / angle-down">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">angle-down</p>
      </div>
    </div>
  );
}

function IconsRight1() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center overflow-clip right-[15.63px] top-0" data-name="Icons Right">
      <IconsAngleDown1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame5 />
        <IconsRight1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Dropdown">
      <Input1 />
    </div>
  );
}

function IconLeftText2() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center left-0 top-0" data-name="Icon Left + Text">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">All steps</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute inset-[0_15.63px_0_16px] overflow-clip">
      <IconLeftText2 />
    </div>
  );
}

function IconsAngleDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / angle-down">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">angle-down</p>
      </div>
    </div>
  );
}

function IconsRight2() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center overflow-clip right-[15.63px] top-0" data-name="Icons Right">
      <IconsAngleDown2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[20px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame6 />
        <IconsRight2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Dropdown">
      <Input2 />
    </div>
  );
}

function IconLeftText3() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center left-0 top-0" data-name="Icon Left + Text">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#272b30] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">All status</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute inset-[0_15.63px_0_16px] overflow-clip">
      <IconLeftText3 />
    </div>
  );
}

function IconsAngleDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / angle-down">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">angle-down</p>
      </div>
    </div>
  );
}

function IconsRight3() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center overflow-clip right-[15.63px] top-0" data-name="Icons Right">
      <IconsAngleDown3 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[20px]" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame7 />
        <IconsRight3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] relative w-full">
        <Dropdown />
        <Dropdown1 />
        <Dropdown2 />
        <Input3 />
      </div>
    </div>
  );
}

function IconsUnsorted() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / unsorted">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / unsorted">
          <path clipRule="evenodd" d={svgPaths.p2eb1d180} fill="var(--fill-0, #657381)" fillRule="evenodd" id="unsorted" />
        </g>
      </svg>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#657381] text-[14px]">Client</p>
      <IconsUnsorted />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Header Cell/Text+Sort">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content30 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content31 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText21() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content32 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText22() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content33 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText23() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content34 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText24() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content35 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText25() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content36 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText26() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content37 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText27() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content38 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText28() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content39 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText29() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content40 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText30() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content41 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Client name</p>
    </div>
  );
}

function TableDesktopSmallCellText31() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Content42 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnTextNoZebra() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table / Desktop / Small/Column/Text/No Zebra">
      <TableDesktopSmallHeaderCellTextSort />
      <TableDesktopSmallCellText20 />
      <TableDesktopSmallCellText21 />
      <TableDesktopSmallCellText22 />
      <TableDesktopSmallCellText23 />
      <TableDesktopSmallCellText24 />
      <TableDesktopSmallCellText25 />
      <TableDesktopSmallCellText26 />
      <TableDesktopSmallCellText27 />
      <TableDesktopSmallCellText28 />
      <TableDesktopSmallCellText29 />
      <TableDesktopSmallCellText30 />
      <TableDesktopSmallCellText31 />
    </div>
  );
}

function IconsUnsorted1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / unsorted">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / unsorted">
          <path clipRule="evenodd" d={svgPaths.p2eb1d180} fill="var(--fill-0, #657381)" fillRule="evenodd" id="unsorted" />
        </g>
      </svg>
    </div>
  );
}

function Content43() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#657381] text-[14px]">Workflow</p>
      <IconsUnsorted1 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Header Cell/Text+Sort">
      <Content43 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content44() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">IPS group creation</p>
    </div>
  );
}

function TableDesktopSmallCellText32() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content44 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content45() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Onboarding</p>
    </div>
  );
}

function TableDesktopSmallCellText33() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content45 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content46() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Onboarding</p>
    </div>
  );
}

function TableDesktopSmallCellText34() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content46 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content47() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Onboarding</p>
    </div>
  );
}

function TableDesktopSmallCellText35() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content47 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content48() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Onboarding</p>
    </div>
  );
}

function TableDesktopSmallCellText36() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content48 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content49() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Onboarding</p>
    </div>
  );
}

function TableDesktopSmallCellText37() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content49 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content50() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Onboarding</p>
    </div>
  );
}

function TableDesktopSmallCellText38() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content50 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content51() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Funding</p>
    </div>
  );
}

function TableDesktopSmallCellText39() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content51 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content52() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Funding</p>
    </div>
  );
}

function TableDesktopSmallCellText40() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content52 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content53() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Funding</p>
    </div>
  );
}

function TableDesktopSmallCellText41() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content53 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content54() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Funding</p>
    </div>
  );
}

function TableDesktopSmallCellText42() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content54 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content55() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Funding</p>
    </div>
  );
}

function TableDesktopSmallCellText43() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content55 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnTextNoZebra1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[151px]" data-name="Table / Desktop / Small/Column/Text/No Zebra">
      <TableDesktopSmallHeaderCellTextSort1 />
      <TableDesktopSmallCellText32 />
      <TableDesktopSmallCellText33 />
      <TableDesktopSmallCellText34 />
      <TableDesktopSmallCellText35 />
      <TableDesktopSmallCellText36 />
      <TableDesktopSmallCellText37 />
      <TableDesktopSmallCellText38 />
      <TableDesktopSmallCellText39 />
      <TableDesktopSmallCellText40 />
      <TableDesktopSmallCellText41 />
      <TableDesktopSmallCellText42 />
      <TableDesktopSmallCellText43 />
    </div>
  );
}

function IconsUnsorted2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / unsorted">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / unsorted">
          <path clipRule="evenodd" d={svgPaths.p2eb1d180} fill="var(--fill-0, #657381)" fillRule="evenodd" id="unsorted" />
        </g>
      </svg>
    </div>
  );
}

function Content56() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#657381] text-[14px]">Step</p>
      <IconsUnsorted2 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Header Cell/Text+Sort">
      <Content56 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content57() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText44() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content57 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content58() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText45() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content58 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content59() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText46() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content59 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content60() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText47() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content60 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content61() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText48() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content61 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content62() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText49() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content62 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content63() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText50() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content63 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content64() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Custodian approval</p>
    </div>
  );
}

function TableDesktopSmallCellText51() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content64 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content65() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Document review</p>
    </div>
  );
}

function TableDesktopSmallCellText52() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content65 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content66() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Document review</p>
    </div>
  );
}

function TableDesktopSmallCellText53() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content66 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content67() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Document review</p>
    </div>
  );
}

function TableDesktopSmallCellText54() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content67 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content68() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px] whitespace-pre-wrap">Document review</p>
    </div>
  );
}

function TableDesktopSmallCellText55() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content68 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnAvatarNoZebra() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[150px]" data-name="Table / Desktop / Small/Column/Avatar/No Zebra">
      <TableDesktopSmallHeaderCellTextSort2 />
      <TableDesktopSmallCellText44 />
      <TableDesktopSmallCellText45 />
      <TableDesktopSmallCellText46 />
      <TableDesktopSmallCellText47 />
      <TableDesktopSmallCellText48 />
      <TableDesktopSmallCellText49 />
      <TableDesktopSmallCellText50 />
      <TableDesktopSmallCellText51 />
      <TableDesktopSmallCellText52 />
      <TableDesktopSmallCellText53 />
      <TableDesktopSmallCellText54 />
      <TableDesktopSmallCellText55 />
    </div>
  );
}

function IconsUnsorted3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / unsorted">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / unsorted">
          <path clipRule="evenodd" d={svgPaths.p2eb1d180} fill="var(--fill-0, #657381)" fillRule="evenodd" id="unsorted" />
        </g>
      </svg>
    </div>
  );
}

function Content69() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#657381] text-[14px]">Status</p>
      <IconsUnsorted3 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Header Cell/Text+Sort">
      <Content69 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content70() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Needs attention</p>
    </div>
  );
}

function TableDesktopSmallCellText56() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content70 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content71() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Needs attention</p>
    </div>
  );
}

function TableDesktopSmallCellText57() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content71 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content72() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">Needs attention</p>
    </div>
  );
}

function TableDesktopSmallCellText58() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content72 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content73() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">In progress</p>
    </div>
  );
}

function TableDesktopSmallCellText59() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content73 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content74() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">In progress</p>
    </div>
  );
}

function TableDesktopSmallCellText60() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content74 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content75() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">In progress</p>
    </div>
  );
}

function TableDesktopSmallCellText61() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content75 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content76() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">In progress</p>
    </div>
  );
}

function TableDesktopSmallCellText62() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content76 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content77() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">In progress</p>
    </div>
  );
}

function TableDesktopSmallCellText63() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content77 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content78() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#6a7178] text-[14px]">Complete</p>
    </div>
  );
}

function TableDesktopSmallCellText64() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content78 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content79() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#6a7178] text-[14px]">Complete</p>
    </div>
  );
}

function TableDesktopSmallCellText65() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content79 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content80() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#6a7178] text-[14px]">Complete</p>
    </div>
  );
}

function TableDesktopSmallCellText66() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content80 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content81() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#6a7178] text-[14px]">Complete</p>
    </div>
  );
}

function TableDesktopSmallCellText67() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Text">
      <Content81 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnAvatarNoZebra1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[125px]" data-name="Table / Desktop / Small/Column/Avatar/No Zebra">
      <TableDesktopSmallHeaderCellTextSort3 />
      <TableDesktopSmallCellText56 />
      <TableDesktopSmallCellText57 />
      <TableDesktopSmallCellText58 />
      <TableDesktopSmallCellText59 />
      <TableDesktopSmallCellText60 />
      <TableDesktopSmallCellText61 />
      <TableDesktopSmallCellText62 />
      <TableDesktopSmallCellText63 />
      <TableDesktopSmallCellText64 />
      <TableDesktopSmallCellText65 />
      <TableDesktopSmallCellText66 />
      <TableDesktopSmallCellText67 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort4() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Table / Desktop / Small/Header Cell/Text+Sort">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] w-full" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content82() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile10 />
    </div>
  );
}

function TableDesktopSmallCellIcon10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content82 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content83() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile11 />
    </div>
  );
}

function TableDesktopSmallCellIcon11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content83 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content84() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile12 />
    </div>
  );
}

function TableDesktopSmallCellIcon12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content84 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content85() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile13 />
    </div>
  );
}

function TableDesktopSmallCellIcon13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content85 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content86() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile14 />
    </div>
  );
}

function TableDesktopSmallCellIcon14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content86 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content87() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile15 />
    </div>
  );
}

function TableDesktopSmallCellIcon15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content87 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content88() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile16 />
    </div>
  );
}

function TableDesktopSmallCellIcon16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content88 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content89() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile17 />
    </div>
  );
}

function TableDesktopSmallCellIcon17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content89 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content90() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile18 />
    </div>
  );
}

function TableDesktopSmallCellIcon18() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content90 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content91() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile19 />
    </div>
  );
}

function TableDesktopSmallCellIcon19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content91 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content92() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile20 />
    </div>
  );
}

function TableDesktopSmallCellIcon20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content92 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsFile21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / file">
      <div className="absolute flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] inset-[20%] justify-center leading-[0] not-italic text-[#2e3338] text-[16px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap">arrow-right</p>
      </div>
    </div>
  );
}

function Content93() {
  return (
    <div className="content-stretch flex h-[48px] items-center relative shrink-0" data-name="Content">
      <IconsFile21 />
    </div>
  );
}

function TableDesktopSmallCellIcon21() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table / Desktop / Small/Cell/Icon">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] relative w-full">
          <Content93 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function TableDesktopSmallColumnIconZebra1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[48px]" data-name="Table / Desktop / Small/Column/Icon/Zebra">
      <TableDesktopSmallHeaderCellTextSort4 />
      <TableDesktopSmallCellIcon10 />
      <TableDesktopSmallCellIcon11 />
      <TableDesktopSmallCellIcon12 />
      <TableDesktopSmallCellIcon13 />
      <TableDesktopSmallCellIcon14 />
      <TableDesktopSmallCellIcon15 />
      <TableDesktopSmallCellIcon16 />
      <TableDesktopSmallCellIcon17 />
      <TableDesktopSmallCellIcon18 />
      <TableDesktopSmallCellIcon19 />
      <TableDesktopSmallCellIcon20 />
      <TableDesktopSmallCellIcon21 />
    </div>
  );
}

function TableDesktopSmallNoZebra() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Table / Desktop / Small / No Zebra">
      <TableDesktopSmallColumnTextNoZebra />
      <TableDesktopSmallColumnTextNoZebra1 />
      <TableDesktopSmallColumnAvatarNoZebra />
      <TableDesktopSmallColumnAvatarNoZebra1 />
      <TableDesktopSmallColumnIconZebra1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[830px] relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[24px] relative rounded-[inherit] size-full">
        <Frame21 />
        <Frame33 />
        <TableDesktopSmallNoZebra />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame11 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[989px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[24px] items-start px-[40px] relative size-full">
        <Frame22 />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame24 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[1117px] items-start left-[calc(16.67%+67px)] py-[40px] top-0 w-[1373px]">
      <Frame12 />
      <Frame27 />
    </div>
  );
}

export default function OverviewAfterSignIn() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Overview - After Sign-in">
      <LeftMain />
      <Frame13 />
    </div>
  );
}