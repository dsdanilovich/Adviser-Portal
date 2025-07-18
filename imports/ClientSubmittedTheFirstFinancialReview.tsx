import svgPaths from "./svg-5tct9sfgjw";
import imgImg from "figma:asset/660172515f53f05f4e4e91228db9b70b2af7c5c6.png";
import imgVector from "figma:asset/9e57244e08b5060a3ebc49a227a547b868a1f308.png";

function AcmeLogo() {
  return (
    <div className="relative shrink-0 size-6" data-name="acme-logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="acme-logo">
          <mask
            height="24"
            id="mask0_18_6262"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_18_6262)">
            <g filter="url(#filter0_i_18_6262)" id="hexagon">
              <path d={svgPaths.p1d14a00} fill="url(#paint0_linear_18_6262)" />
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="18"
            id="filter0_i_18_6262"
            width="20.2"
            x="1.9"
            y="3"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_18_6262"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_18_6262"
            x1="5.49998"
            x2="18"
            y1="-1.5"
            y2="27"
          >
            <stop stopColor="#C8B6FE" />
            <stop offset="0.239583" stopColor="#DAD9B6" />
            <stop offset="0.463542" stopColor="#A5EAB8" />
            <stop offset="0.713542" stopColor="#B7E2EF" />
            <stop offset="1" stopColor="#F995D7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame26080710() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 h-14 items-start justify-center px-3.5 py-0 relative shrink-0">
      <AcmeLogo />
    </div>
  );
}

function GridView() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="grid_view">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="grid_view">
          <mask
            height="20"
            id="mask0_18_6315"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6315)">
            <path
              d={svgPaths.p11e1980}
              fill="var(--fill-0, white)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GridView1() {
  return (
    <div className="relative shrink-0 size-5" data-name="grid_view">
      <GridView />
    </div>
  );
}

function Frame26080709() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <GridView1 />
    </div>
  );
}

function NavigationBarItem() {
  return (
    <div
      className="bg-[#2c303a] box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start overflow-clip p-[16px] relative shrink-0 w-[52px]"
      data-name="Navigation bar/Item"
    >
      <Frame26080709 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="group">
          <mask
            height="20"
            id="mask0_18_6277"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6277)">
            <path
              d={svgPaths.p1f257a00}
              fill="var(--fill-0, white)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-5" data-name="group">
      <Group />
    </div>
  );
}

function Frame26080711() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Group1 />
    </div>
  );
}

function NavigationBarItem1() {
  return (
    <div
      className="bg-[#151517] box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start overflow-clip p-[16px] relative shrink-0 w-[52px]"
      data-name="Navigation bar/Item"
    >
      <Frame26080711 />
    </div>
  );
}

function Work() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="work">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="work">
          <mask
            height="20"
            id="mask0_18_6294"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6294)">
            <path
              d={svgPaths.p9a96200}
              fill="var(--fill-0, white)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <Work />
    </div>
  );
}

function Frame26080712() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Icon />
    </div>
  );
}

function NavigationBarItem2() {
  return (
    <div
      className="bg-[#2c303a] box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start overflow-clip p-[16px] relative shrink-0 w-[52px]"
      data-name="Navigation bar/Item"
    >
      <Frame26080712 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="badge">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="badge">
          <mask
            height="20"
            id="mask0_18_6311"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6311)">
            <path
              d={svgPaths.pb429500}
              fill="var(--fill-0, white)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="relative shrink-0 size-5" data-name="badge">
      <Badge />
    </div>
  );
}

function Frame26080713() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Badge1 />
    </div>
  );
}

function NavigationBarItem3() {
  return (
    <div
      className="bg-[#2c303a] box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start overflow-clip p-[16px] relative shrink-0 w-[52px]"
      data-name="Navigation bar/Item"
    >
      <Frame26080713 />
    </div>
  );
}

function UiShellLeftPanel() {
  return (
    <div
      className="bg-[#2c303a] box-border content-stretch flex flex-col items-center justify-start min-h-[1024px] p-0 relative self-stretch shrink-0"
      data-name="UI shell left panel"
    >
      <Frame26080710 />
      <NavigationBarItem />
      <NavigationBarItem1 />
      <NavigationBarItem2 />
      <NavigationBarItem3 />
    </div>
  );
}

function Frame26080701() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">John Doe</p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron_right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chevron_right">
          <path
            d={svgPaths.p76fc640}
            fill="var(--fill-0, #8E8E8E)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function UiShellHeaderItem() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start pl-0 pr-1 py-0 relative shrink-0"
      data-name="UI shell header/Item"
    >
      <Frame26080701 />
      <ChevronRight />
    </div>
  );
}

function Frame26080702() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Financial reviews</p>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron_right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chevron_right">
          <path
            d={svgPaths.p76fc640}
            fill="var(--fill-0, #8E8E8E)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function UiShellHeaderItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start pl-0 pr-1 py-0 relative shrink-0"
      data-name="UI shell header/Item"
    >
      <Frame26080702 />
      <ChevronRight1 />
    </div>
  );
}

function Frame26080703() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Financial review 001
        </p>
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron_right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chevron_right">
          <path
            d={svgPaths.p76fc640}
            fill="var(--fill-0, #8E8E8E)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function UiShellHeaderItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start pl-0 pr-1 py-0 relative shrink-0"
      data-name="UI shell header/Item"
    >
      <Frame26080703 />
      <ChevronRight2 />
    </div>
  );
}

function UiShellHeaderItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start p-0 relative shrink-0"
      data-name="UI shell header/Item"
    >
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Recommendation wizard
        </p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-14 items-center justify-start p-0 relative shrink-0"
      data-name="left"
    >
      <UiShellHeaderItem />
      <UiShellHeaderItem1 />
      <UiShellHeaderItem2 />
      <UiShellHeaderItem3 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="search">
          <path
            clipRule="evenodd"
            d={svgPaths.p37c8ba00}
            fill="var(--fill-0, #161616)"
            fillRule="evenodd"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[10px] relative shrink-0"
      data-name="Button"
    >
      <Search />
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chat">
          <g id="Vector">
            <path d={svgPaths.p37aae380} fill="var(--fill-0, #161616)" />
            <path d={svgPaths.p3ea53b30} fill="var(--fill-0, #161616)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[10px] relative shrink-0"
      data-name="Button"
    >
      <Chat />
    </div>
  );
}

function Monogram() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-[40px] shrink-0 size-8"
      data-name="Monogram"
    >
      <div
        className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full"
        data-name="img"
        style={{ backgroundImage: `url('${imgImg}')` }}
      />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[10px] relative rounded-md shrink-0 size-12"
      data-name="button"
    >
      <Monogram />
    </div>
  );
}

function Right() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-14 items-center justify-end p-0 relative shrink-0"
      data-name="right"
    >
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function UiShellHeader() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="UI shell header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-8 py-0 relative size-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

function CustomUiShellHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Custom UI shell header"
    >
      <UiShellHeader />
    </div>
  );
}

function Frame26080707() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Profile</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080707 />
    </div>
  );
}

function Frame26080706() {
  return (
    <div className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Financial reviews</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#0f62fe] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Frame26080706 />
    </div>
  );
}

function Frame26080708() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Active goals</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080708 />
    </div>
  );
}

function Frame26080714() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Accounts</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080714 />
    </div>
  );
}

function Frame26080715() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Payments</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080715 />
    </div>
  );
}

function Frame26080716() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Services</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080716 />
    </div>
  );
}

function Frame26080717() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Documents</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080717 />
    </div>
  );
}

function Frame26080718() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Administration</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080718 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Tabs">
      <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-4 py-0 relative w-full">
          <Component1ComponentPartsTabsItem />
          <Component1ComponentPartsTabsItem1 />
          <Component1ComponentPartsTabsItem2 />
          <Component1ComponentPartsTabsItem3 />
          <Component1ComponentPartsTabsItem4 />
          <Component1ComponentPartsTabsItem5 />
          <Component1ComponentPartsTabsItem6 />
          <Component1ComponentPartsTabsItem7 />
        </div>
      </div>
    </div>
  );
}

function Frame26080719() {
  return (
    <div className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Recommendation wizard
        </p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#0f62fe] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Frame26080719 />
    </div>
  );
}

function Frame26080720() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Fact finding</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080720 />
    </div>
  );
}

function Frame26080721() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Goals</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsTabsItem10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="1 component parts/tabs/item"
    >
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame26080721 />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tabs">
      <div className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-6 py-0 relative w-full">
          <Component1ComponentPartsTabsItem8 />
          <Component1ComponentPartsTabsItem9 />
          <Component1ComponentPartsTabsItem10 />
        </div>
      </div>
    </div>
  );
}

function Frame26081031() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative w-full">
          <Tabs1 />
        </div>
      </div>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="lock">
          <mask
            height="18"
            id="mask0_18_6304"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_18_6304)">
            <path
              d={svgPaths.p393aea00}
              fill="var(--fill-0, #525252)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26080900() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <Lock />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">View only</p>
      </div>
    </div>
  );
}

function Frame26080901() {
  return (
    <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0">
      <Frame26080900 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Approved: Feb 25, 2024
        </p>
      </div>
    </div>
  );
}

function ControlPanelHeading() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="control panel heading"
    >
      <div className="font-['Inter_Variable:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[25px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">
          Recommendation wizard
        </p>
      </div>
      <Frame26080901 />
      <div
        className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] max-w-[600px] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[14px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[20px]">
          Manage accounts, services and set up one-time and monthly payments.
          Generate and send documents to the client.
        </p>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#161616] text-left w-full"
      data-name="Section Heading"
    >
      <div className="font-['Inter_Variable:Bold',_sans-serif] relative shrink-0 text-[19px] text-nowrap">
        <p className="block leading-[28px] whitespace-pre">
          Accounts and payments
        </p>
      </div>
      <div className="font-['Inter_Variable:Regular',_sans-serif] h-10 max-w-[600px] relative shrink-0 text-[14px] w-full">
        <p className="block leading-[20px]">
          Prepare accounts, set up the necessary transfers and payments. They
          will be available to the user after signing the recommendation letter.
        </p>
      </div>
    </div>
  );
}

function GolfCourse25() {
  return (
    <div className="relative shrink-0 size-5" data-name="golf_course_24">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="golf_course">
          <mask
            height="20"
            id="mask0_18_6251"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6251)">
            <path
              d={svgPaths.p75718a0}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Monogram2() {
  return (
    <div
      className="bg-[#ddf1db] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-[40px] shrink-0 size-7"
      data-name="Monogram"
    >
      <GolfCourse25 />
    </div>
  );
}

function Component1ComponentPartsStatusShapes1() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="1 component parts/status/shapes">
          <path
            clipRule="evenodd"
            d={svgPaths.p1f5c8880}
            fill="var(--fill-0, #24A148)"
            fillRule="evenodd"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Status2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes1 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Required</p>
      </div>
    </div>
  );
}

function Status3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-0 pt-1 px-0 relative shrink-0"
      data-name="Status"
    >
      <Status2 />
    </div>
  );
}

function Title2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Additional Pension
        </p>
      </div>
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Pension</p>
      </div>
      <Status3 />
    </div>
  );
}

function Title3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <Monogram2 />
      <Title2 />
    </div>
  );
}

function LumpSum() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter_Variable:Regular',_sans-serif] items-end justify-end leading-[0] not-italic pb-0 pt-[3px] px-0 relative shrink-0 text-nowrap"
      data-name="Lump sum"
    >
      <div className="relative shrink-0 text-[#161616] text-[14px] text-right">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          £440,000
        </p>
      </div>
      <div className="relative shrink-0 text-[12px] text-left text-neutral-600">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          01.2029
        </p>
      </div>
    </div>
  );
}

function MonthlyIncome1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter_Variable:Regular',_sans-serif] items-end justify-end leading-[0] not-italic pb-0 pt-[3px] px-0 relative shrink-0 text-nowrap"
      data-name="Monthly income"
    >
      <div className="relative shrink-0 text-[#161616] text-[14px] text-right">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          £2,000/mo
        </p>
      </div>
      <div className="relative shrink-0 text-[12px] text-left text-neutral-600">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          01.2029-01.2038
        </p>
      </div>
    </div>
  );
}

function MoreVert1() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6287"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6287)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px1() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert1 />
    </div>
  );
}

function ButtonOverflowMenu1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] relative rounded-md shrink-0"
      data-name="Button Overflow Menu"
    >
      <MoreVert30020Px1 />
    </div>
  );
}

function GoalHeader1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-0 py-3 relative shrink-0 w-full"
      data-name="Goal header"
    >
      <Title3 />
      <LumpSum />
      <MonthlyIncome1 />
      <ButtonOverflowMenu1 />
    </div>
  );
}

function Frame26081095() {
  return <div className="h-12 shrink-0 w-full" />;
}

function Account() {
  return (
    <div
      className="bg-[#f4f4f4] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Account"
    >
      <Frame26081095 />
    </div>
  );
}

function ExternalAccounts() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="External accounts"
    >
      <Account />
    </div>
  );
}

function Frame26081096() {
  return <div className="h-12 shrink-0 w-full" />;
}

function Account1() {
  return (
    <div
      className="bg-[#f4f4f4] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Account"
    >
      <Frame26081096 />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-5" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="add">
          <path
            d={svgPaths.p34717600}
            fill="var(--fill-0, #0F62FE)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center px-0 py-2 relative shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f62fe] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">New account</p>
      </div>
      <Add />
    </div>
  );
}

function JustFaAccounts() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="JustFA accounts"
    >
      {[...Array(3).keys()].map((_, i) => (
        <Account1 key={i} />
      ))}
      <Button3 />
    </div>
  );
}

function Accounts() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accounts">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start pl-16 pr-0 py-0 relative w-full">
          <ExternalAccounts />
          <div className="h-0 relative shrink-0 w-full">
            <div
              className="absolute bottom-0 left-0 right-0 top-[-1px]"
              style={
                {
                  "--stroke-0":
                    "rgba(198.00000339746475, 198.00000339746475, 198.00000339746475, 1)",
                } as React.CSSProperties
              }
            />
          </div>
          <JustFaAccounts />
        </div>
      </div>
    </div>
  );
}

function GoalPension() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Goal/Pension"
    >
      <GoalHeader1 />
      <Accounts />
    </div>
  );
}

function GolfCourse26() {
  return (
    <div className="relative shrink-0 size-5" data-name="golf_course_24">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="golf_course">
          <mask
            height="20"
            id="mask0_18_6251"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6251)">
            <path
              d={svgPaths.p75718a0}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Monogram3() {
  return (
    <div
      className="bg-[#ddf1db] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-[40px] shrink-0 size-7"
      data-name="Monogram"
    >
      <GolfCourse26 />
    </div>
  );
}

function Component1ComponentPartsStatusShapes2() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="1 component parts/status/shapes">
          <path
            clipRule="evenodd"
            d={svgPaths.p1f5c8880}
            fill="var(--fill-0, #24A148)"
            fillRule="evenodd"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Status4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes2 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Required</p>
      </div>
    </div>
  );
}

function Status5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-0 pt-1 px-0 relative shrink-0"
      data-name="Status"
    >
      <Status4 />
    </div>
  );
}

function Title4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Additional Pension
        </p>
      </div>
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Investment</p>
      </div>
      <Status5 />
    </div>
  );
}

function Title5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Title"
    >
      <Monogram3 />
      <Title4 />
    </div>
  );
}

function LumpSum1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter_Variable:Regular',_sans-serif] items-end justify-end leading-[0] not-italic pb-0 pt-[3px] px-0 relative shrink-0 text-nowrap"
      data-name="Lump sum"
    >
      <div className="relative shrink-0 text-[#161616] text-[14px] text-right">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          £440,000
        </p>
      </div>
      <div className="relative shrink-0 text-[12px] text-left text-neutral-600">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          01.2029
        </p>
      </div>
    </div>
  );
}

function MonthlyIncome2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter_Variable:Regular',_sans-serif] items-end justify-end leading-[0] not-italic pb-0 pt-[3px] px-0 relative shrink-0 text-nowrap"
      data-name="Monthly income"
    >
      <div className="relative shrink-0 text-[#161616] text-[14px] text-right">
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          £2,000/mo
        </p>
      </div>
      <div className="relative shrink-0 text-[12px] text-left text-neutral-600">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          01.2029-01.2038
        </p>
      </div>
    </div>
  );
}

function MoreVert2() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6287"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6287)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px2() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert2 />
    </div>
  );
}

function ButtonOverflowMenu2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] relative rounded-md shrink-0"
      data-name="Button Overflow Menu"
    >
      <MoreVert30020Px2 />
    </div>
  );
}

function GoalHeader2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-0 py-3 relative shrink-0 w-full"
      data-name="Goal header"
    >
      <Title5 />
      <LumpSum1 />
      <MonthlyIncome2 />
      <ButtonOverflowMenu2 />
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-5" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="add">
          <path
            d={svgPaths.p34717600}
            fill="var(--fill-0, #161616)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] relative shrink-0"
      data-name="Button"
    >
      <Add1 />
    </div>
  );
}

function HeadingContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-center p-0 relative shrink-0"
      data-name="heading container"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">{`JustFA Accounts & Payments`}</p>
      </div>
      <Button4 />
    </div>
  );
}

function SectionHeadingMediumTrue() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-end pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Section heading/Medium/True"
    >
      <HeadingContainer />
    </div>
  );
}

function Frame26080948() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)]">
        <p className="block leading-[18px] text-nowrap whitespace-pre">
          Account 6
        </p>
      </div>
      <div className="font-['Inter_Variable:Regular',_sans-serif] relative shrink-0 text-[#6e6e6e] text-[12px]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          02FC25J
        </p>
      </div>
    </div>
  );
}

function Frame26080935() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-end leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap">
      <Frame26080948 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] relative shrink-0 text-[#8e6a00] text-[12px]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">GIA</p>
      </div>
    </div>
  );
}

function Frame26080955() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame26080935 />
    </div>
  );
}

function Frame26080950() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-end leading-[0] not-italic p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] relative shrink-0 text-[#6e6e6e] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Active</p>
      </div>
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-right w-20">
        <p className="block leading-[18px]">£ 0</p>
      </div>
    </div>
  );
}

function MoreVert3() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6287"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6287)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px3() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert3 />
    </div>
  );
}

function ButtonOverflowMenu3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] right-0 rounded-md translate-y-[-50%]"
      data-name="Button Overflow Menu"
      style={{ top: "calc(50% - 10px)" }}
    >
      <MoreVert30020Px3 />
    </div>
  );
}

function Account4() {
  return (
    <div className="relative shrink-0 w-full" data-name="account">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between pl-4 pr-12 py-4 relative w-full">
          <Frame26080955 />
          <Frame26080950 />
          <ButtonOverflowMenu3 />
        </div>
      </div>
    </div>
  );
}

function Frame26081059() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-0 py-4 relative shrink-0 w-full">
      <Account4 />
    </div>
  );
}

function Add2() {
  return (
    <div className="relative shrink-0 size-4" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="add">
          <path
            d={svgPaths.p200f7672}
            fill="var(--fill-0, #161616)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Action">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-4 py-2 relative w-full">
          <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Label</p>
          </div>
          <Add2 />
        </div>
      </div>
    </div>
  );
}

function PaymentFigure() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="_Payment Figure">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="_Payment Figure">
          <path
            clipRule="evenodd"
            d={svgPaths.p295ca4c0}
            fill="var(--fill-0, #161616)"
            fillRule="evenodd"
            id="event_repeat"
          />
          <rect
            fill="var(--fill-0, #161616)"
            height="12"
            id="Rectangle 12"
            rx="1"
            width="2"
            x="5"
          />
          <rect
            fill="var(--fill-0, #161616)"
            height="12"
            id="Rectangle 13"
            rx="1"
            transform="rotate(-90 0 7)"
            width="2"
            y="7"
          />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter_Variable:Regular',_sans-serif] gap-2.5 items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-left text-nowrap"
      data-name="Label"
    >
      <div className="relative shrink-0 text-[#161616]">
        <p className="block leading-[18px] text-nowrap whitespace-pre">
          Recurring payment in
        </p>
      </div>
      <div className="relative shrink-0 text-neutral-600">
        <p className="block leading-[18px] text-nowrap whitespace-pre">
          Monthly
        </p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Name"
    >
      <PaymentFigure />
      <Label />
    </div>
  );
}

function Component1ComponentPartsStatusShapes3() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <div
        className="absolute left-1/2 size-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="vector"
      >
        <img
          className="block max-w-none size-full"
          height="10"
          loading="lazy"
          src={imgVector}
          width="10"
        />
      </div>
    </div>
  );
}

function Status6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes3 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Draft</p>
      </div>
    </div>
  );
}

function Status7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-end justify-center p-0 relative shrink-0"
      data-name="Status"
    >
      <Status6 />
    </div>
  );
}

function Payment() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 relative shrink-0 w-[72px]"
      data-name="Payment"
    >
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#24a148] text-[14px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">+£300</p>
      </div>
    </div>
  );
}

function MoreVert4() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6287"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6287)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px4() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert4 />
    </div>
  );
}

function ButtonOverflowMenu4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] right-0 rounded-md top-1/2 translate-y-[-50%]"
      data-name="Button Overflow Menu"
    >
      <MoreVert30020Px4 />
    </div>
  );
}

function Payment1() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Payment">
      <div className="absolute border-[#c6c6c6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start pl-6 pr-12 py-3 relative w-full">
          <Name />
          <Status7 />
          <Payment />
          <ButtonOverflowMenu4 />
        </div>
      </div>
    </div>
  );
}

function Account5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-lg shrink-0 w-full"
      data-name="account"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]" />
      <Frame26081059 />
      <Action />
      <Payment1 />
    </div>
  );
}

function Frame26080949() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)]">
        <p className="block leading-[18px] text-nowrap whitespace-pre">
          Account 4
        </p>
      </div>
      <div className="font-['Inter_Variable:Regular',_sans-serif] relative shrink-0 text-[#6e6e6e] text-[12px]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          02FC25J
        </p>
      </div>
    </div>
  );
}

function Frame26080936() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-end leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap">
      <Frame26080949 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] relative shrink-0 text-[#d02670] text-[12px]">
        <p className="block leading-[16px] text-nowrap whitespace-pre">ISA</p>
      </div>
    </div>
  );
}

function Frame26080956() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame26080936 />
    </div>
  );
}

function Frame26080951() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-end leading-[0] not-italic p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] relative shrink-0 text-[#6e6e6e] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Active</p>
      </div>
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-right w-20">
        <p className="block leading-[18px]">£0</p>
      </div>
    </div>
  );
}

function MoreVert5() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6287"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6287)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px5() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert5 />
    </div>
  );
}

function ButtonOverflowMenu5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] right-0 rounded-md translate-y-[-50%]"
      data-name="Button Overflow Menu"
      style={{ top: "calc(50% - 10px)" }}
    >
      <MoreVert30020Px5 />
    </div>
  );
}

function Account6() {
  return (
    <div className="relative shrink-0 w-full" data-name="account">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between pl-4 pr-12 py-4 relative w-full">
          <Frame26080956 />
          <Frame26080951 />
          <ButtonOverflowMenu5 />
        </div>
      </div>
    </div>
  );
}

function Frame26081060() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-0 py-4 relative shrink-0 w-full">
      <Account6 />
    </div>
  );
}

function Add3() {
  return (
    <div className="relative shrink-0 size-4" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="add">
          <path
            d={svgPaths.p200f7672}
            fill="var(--fill-0, #161616)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Action1() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Action">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-4 py-2 relative w-full">
          <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">Label</p>
          </div>
          <Add3 />
        </div>
      </div>
    </div>
  );
}

function PaymentFigure1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="_Payment Figure">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="_Payment Figure">
          <path
            clipRule="evenodd"
            d={svgPaths.p295ca4c0}
            fill="var(--fill-0, #161616)"
            fillRule="evenodd"
            id="event_repeat"
          />
          <rect
            fill="var(--fill-0, #161616)"
            height="12"
            id="Rectangle 12"
            rx="1"
            width="2"
            x="5"
          />
          <rect
            fill="var(--fill-0, #161616)"
            height="12"
            id="Rectangle 13"
            rx="1"
            transform="rotate(-90 0 7)"
            width="2"
            y="7"
          />
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter_Variable:Regular',_sans-serif] gap-2.5 items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-[14px] text-left text-nowrap"
      data-name="Label"
    >
      <div className="relative shrink-0 text-[#161616]">
        <p className="block leading-[18px] text-nowrap whitespace-pre">
          Recurring payment in
        </p>
      </div>
      <div className="relative shrink-0 text-neutral-600">
        <p className="block leading-[18px] text-nowrap whitespace-pre">
          Monthly
        </p>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Name"
    >
      <PaymentFigure1 />
      <Label1 />
    </div>
  );
}

function Component1ComponentPartsStatusShapes4() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <div
        className="absolute left-1/2 size-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="vector"
      >
        <img
          className="block max-w-none size-full"
          height="10"
          loading="lazy"
          src={imgVector}
          width="10"
        />
      </div>
    </div>
  );
}

function Status8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes4 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Draft</p>
      </div>
    </div>
  );
}

function Status9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-end justify-center p-0 relative shrink-0"
      data-name="Status"
    >
      <Status8 />
    </div>
  );
}

function Payment2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 relative shrink-0 w-[72px]"
      data-name="Payment"
    >
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#24a148] text-[14px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">+£300</p>
      </div>
    </div>
  );
}

function MoreVert6() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6287"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6287)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px6() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert6 />
    </div>
  );
}

function ButtonOverflowMenu6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] right-0 rounded-md top-1/2 translate-y-[-50%]"
      data-name="Button Overflow Menu"
    >
      <MoreVert30020Px6 />
    </div>
  );
}

function Payment3() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Payment">
      <div className="absolute border-[#c6c6c6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start pl-6 pr-12 py-3 relative w-full">
          <Name1 />
          <Status9 />
          <Payment2 />
          <ButtonOverflowMenu6 />
        </div>
      </div>
    </div>
  );
}

function Account7() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-lg shrink-0 w-full"
      data-name="account"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1)]" />
      <Frame26081060 />
      <Action1 />
      <Payment3 />
    </div>
  );
}

function Frame26081009() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Account5 />
      <Account7 />
    </div>
  );
}

function JustFaAccounts1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="JustFA-accounts"
    >
      <SectionHeadingMediumTrue />
      <Frame26081009 />
    </div>
  );
}

function GoalInvestment() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Goal/Investment"
    >
      <GoalHeader2 />
      <JustFaAccounts1 />
    </div>
  );
}

function ListOfGoals() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="List of goals"
    >
      <div className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <GoalPension />
      <GoalInvestment />
    </div>
  );
}

function SectionsAccountsAndPayments() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Sections/Accounts and payments"
    >
      <SectionHeading />
      <ListOfGoals />
    </div>
  );
}

function Replay() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="replay">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="replay">
          <mask
            height="18"
            id="mask0_18_6244"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_18_6244)">
            <path
              d={svgPaths.p2f984b80}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Monogram4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-[40px] shrink-0 size-8"
      data-name="Monogram"
    >
      <Replay />
    </div>
  );
}

function Component1ComponentPartsStatusShapes5() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <div
        className="absolute left-1/2 size-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="vector"
      >
        <img
          className="block max-w-none size-full"
          height="10"
          loading="lazy"
          src={imgVector}
          width="10"
        />
      </div>
    </div>
  );
}

function Status10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes5 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Draft</p>
      </div>
    </div>
  );
}

function Frame26080902() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Ongoing</p>
      </div>
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Standard</p>
      </div>
      <Status10 />
    </div>
  );
}

function Frame26080903() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Portfolio management service
        </p>
      </div>
      <Frame26080902 />
    </div>
  );
}

function Frame26081133() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Monogram4 />
      <Frame26080903 />
    </div>
  );
}

function MoreVert7() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6240"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6240)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #525252)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px7() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert7 />
    </div>
  );
}

function ButtonOverflowMenu7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] right-0 rounded-md translate-y-[-50%]"
      data-name="Button Overflow Menu"
      style={{ top: "calc(50% - 0.5px)" }}
    >
      <MoreVert30020Px7 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="bg-[#0f62fe] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center p-[8px] relative shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Add to bulk</p>
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className="relative rounded-md shrink-0 w-full" data-name="Service">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-center justify-start pl-4 pr-12 py-4 relative w-full">
          <Frame26081133 />
          <ButtonOverflowMenu7 />
          <Button5 />
        </div>
      </div>
      <div className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function Counter1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="counter_1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="counter_1">
          <mask
            height="18"
            id="mask0_18_6236"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_18_6236)">
            <path
              d={svgPaths.p10a53800}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Monogram5() {
  return (
    <div
      className="relative rounded-[40px] shrink-0 size-8"
      data-name="Monogram"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative size-8">
        <Counter1 />
      </div>
      <div className="absolute border border-[#c6c6c6] border-dashed inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function Frame26081002() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">One-off</p>
      </div>
    </div>
  );
}

function Component1ComponentPartsStatusShapes6() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <div
        className="absolute left-1/2 size-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="vector"
      >
        <img
          className="block max-w-none size-full"
          height="10"
          loading="lazy"
          src={imgVector}
          width="10"
        />
      </div>
    </div>
  );
}

function Status11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes6 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Draft</p>
      </div>
    </div>
  );
}

function Frame26080904() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame26081002 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-600 text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Standard</p>
      </div>
      <Status11 />
    </div>
  );
}

function Frame26080905() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Financial review and recommendation
        </p>
      </div>
      <Frame26080904 />
    </div>
  );
}

function Frame26081134() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Monogram5 />
      <Frame26080905 />
    </div>
  );
}

function MoreVert8() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6240"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6240)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #525252)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px8() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert8 />
    </div>
  );
}

function ButtonOverflowMenu8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] right-0 rounded-md translate-y-[-50%]"
      data-name="Button Overflow Menu"
      style={{ top: "calc(50% - 0.5px)" }}
    >
      <MoreVert30020Px8 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[#0f62fe] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center p-[8px] relative shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Add to bulk</p>
      </div>
    </div>
  );
}

function Service1() {
  return (
    <div className="relative rounded-md shrink-0 w-full" data-name="Service">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-8 items-center justify-start pl-4 pr-12 py-4 relative w-full">
          <Frame26081134 />
          <ButtonOverflowMenu8 />
          <Button6 />
        </div>
      </div>
      <div className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function SectionsServices() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Sections/Services"
    >
      <Service />
      <Service1 />
    </div>
  );
}

function HeadingContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-7 items-center justify-center p-0 relative shrink-0"
      data-name="heading container"
    >
      <div className="font-['Inter_Variable:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[19px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[28px] whitespace-pre">
          Recommendation letter
        </p>
      </div>
    </div>
  );
}

function SectionHeadingLargeTrue() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-end pb-2 pt-0 px-0 relative shrink-0 w-full"
      data-name="Section heading/Large/True"
    >
      <div className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HeadingContainer1 />
    </div>
  );
}

function Description() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="description">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="description">
          <path
            d={svgPaths.p375b9c00}
            fill="var(--fill-0, #161616)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Monogram6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-[40px] shrink-0 size-8"
      data-name="Monogram"
    >
      <Description />
    </div>
  );
}

function Frame26081008() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter_Variable:Regular',_sans-serif] gap-1 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[12px] text-left text-neutral-600 text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Last edited:
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Feb 12, 2024
        </p>
      </div>
    </div>
  );
}

function Component1ComponentPartsStatusShapes7() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <div
        className="absolute left-1/2 size-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="vector"
      >
        <img
          className="block max-w-none size-full"
          height="10"
          loading="lazy"
          src={imgVector}
          width="10"
        />
      </div>
    </div>
  );
}

function Status12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes7 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Draft</p>
      </div>
    </div>
  );
}

function Frame26081007() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Frame26081008 />
      <Status12 />
    </div>
  );
}

function Frame26081006() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Recommendation letter
        </p>
      </div>
      <Frame26081007 />
    </div>
  );
}

function Frame26081005() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Frame26081006 />
    </div>
  );
}

function Frame26081140() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Monogram6 />
      <Frame26081005 />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="edit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="edit">
          <path
            d={svgPaths.p2e565f00}
            fill="var(--fill-0, #161616)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f4f4f4] h-7 relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip p-[8px] relative">
        <Edit />
        <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
          <p className="block leading-[16px] whitespace-pre">Edit</p>
        </div>
      </div>
      <div className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[#0f62fe] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center p-[8px] relative shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Add to bulk</p>
      </div>
    </div>
  );
}

function Frame26081138() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0">
      <Button7 />
      <Button8 />
    </div>
  );
}

function MoreVert9() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="more_vert">
          <mask
            height="20"
            id="mask0_18_6287"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_18_6287)">
            <path
              d={svgPaths.p13c55a00}
              fill="var(--fill-0, #161616)"
              id="vector"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVert30020Px9() {
  return (
    <div className="relative shrink-0 size-5" data-name="more_vert_300_20px">
      <MoreVert9 />
    </div>
  );
}

function ButtonOverflowMenu9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] right-0 rounded-md top-1/2 translate-y-[-50%]"
      data-name="Button Overflow Menu"
    >
      <MoreVert30020Px9 />
    </div>
  );
}

function RecommendationLetter() {
  return (
    <div
      className="relative rounded-md shrink-0 w-full"
      data-name="Recommendation letter"
    >
      <div className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start pl-4 pr-12 py-4 relative w-full">
          <Frame26081140 />
          <Frame26081138 />
          <ButtonOverflowMenu9 />
        </div>
      </div>
    </div>
  );
}

function RecommendationLetters() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="recommendation-letters"
    >
      <SectionHeadingLargeTrue />
      <RecommendationLetter />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start overflow-clip p-0 relative shrink-0 w-[660px]">
      <ControlPanelHeading />
      <SectionsAccountsAndPayments />
      <SectionsServices />
      <RecommendationLetters />
    </div>
  );
}

function LeadIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lead icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="description">
          <path
            d={svgPaths.p375b9c00}
            fill="var(--fill-0, #161616)"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Component1ComponentPartsStatusShapes8() {
  return (
    <div
      className="relative shrink-0 size-3"
      data-name="1 component parts/status/shapes"
    >
      <div
        className="absolute left-1/2 size-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="vector"
      >
        <img
          className="block max-w-none size-full"
          height="10"
          src={imgVector}
          width="10"
        />
      </div>
    </div>
  );
}

function Status13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
    >
      <Component1ComponentPartsStatusShapes8 />
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Not sent</p>
      </div>
    </div>
  );
}

function Frame26081147() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#6f6f6f] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Confirmation</p>
      </div>
      <Status13 />
    </div>
  );
}

function Frame26081146() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
      <div className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          Document name
        </p>
      </div>
      <Frame26081147 />
    </div>
  );
}

function Document() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Document"
    >
      <LeadIcon />
      <Frame26081146 />
    </div>
  );
}

function Frame26081142() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Document key={i} />
      ))}
    </div>
  );
}

function Button9() {
  return (
    <div
      className="bg-[#0f62fe] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Send all</p>
      </div>
    </div>
  );
}

function Documents() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start overflow-clip p-0 relative rounded-md shrink-0 w-full"
      data-name="Documents"
    >
      <div className="font-['Inter_Variable:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[19px] text-left text-nowrap">
        <p className="block leading-[28px] whitespace-pre">Documents</p>
      </div>
      <div
        className="font-['Inter_Variable:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[20px]">
          As you configure your setup, the necessary documents for
          implementation will gradually appear here.
        </p>
      </div>
      <Frame26081142 />
      <Button9 />
    </div>
  );
}

function Frame26081053() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Inter_Variable:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Documents</p>
      </div>
    </div>
  );
}

function Documents1() {
  return (
    <div
      className="bg-neutral-100 box-border content-stretch flex flex-col gap-8 items-start justify-start px-0 py-8 relative shrink-0 w-[368px]"
      data-name="Documents"
    >
      <Documents />
      <Frame26081053 />
    </div>
  );
}

function Frame26080866() {
  return (
    <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame11 />
      <Documents1 />
    </div>
  );
}

function Frame26080705() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative w-full">
          <Frame26080866 />
        </div>
      </div>
    </div>
  );
}

function Frame26080867() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Tabs />
      <Frame26081031 />
      <Frame26080705 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[32px] relative w-full">
          <Frame26080867 />
        </div>
      </div>
    </div>
  );
}

function Frame26080865() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <CustomUiShellHeader />
      <Frame9 />
    </div>
  );
}

export default function ClientSubmittedTheFirstFinancialReview() {
  return (
    <div
      className="bg-[#eeeeee] box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full"
      data-name="Client submitted the first financial review"
    >
      <UiShellLeftPanel />
      <Frame26080865 />
    </div>
  );
}