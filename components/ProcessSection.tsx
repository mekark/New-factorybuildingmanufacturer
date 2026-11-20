"use client";

import { Space_Grotesk } from "next/font/google";
import { useRef } from "react";
import { useCanvasZoom } from "./useCanvasZoom";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
  box: string;
  img: string;
  mobileIcon: string;
  mobileBox: string;
  mobileImg: string;
  nudge?: boolean;
  titleWidth?: number;
  titleLeading: number;
  descWidth?: number;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Site & Project Feasibility",
    description: "Geotechnical, regulatory, and budget checks.",
    icon: "/process/clipboard-check.svg",
    box: "inset-[8.33%_16.67%]",
    img: "inset-[-4.13%_-5.16%]",
    mobileIcon: "/process/mobile/clipboard-check.svg",
    mobileBox: "inset-[8.33%_16.66%_8.34%_16.67%]",
    mobileImg: "inset-[-4.5%_-5.62%]",
    nudge: true,
    titleWidth: 270,
    titleLeading: 24,
  },
  {
    number: "02",
    title: "Design & Engineering",
    description: "In-house engineering, plant layout and utility planning.",
    icon: "/process/drafting-compass.svg",
    box: "inset-[12.5%]",
    img: "inset-[-4.58%]",
    mobileIcon: "/process/mobile/drafting-compass.svg",
    mobileBox: "inset-[12.5%]",
    mobileImg: "inset-[-5%]",
    nudge: true,
    titleWidth: 221,
    titleLeading: 24,
  },
  {
    number: "03",
    title: "Civil Works & PEB",
    description:
      "Disciplined sequencing of civil works, steel framing and infrastructure.",
    icon: "/process/hard-hat.svg",
    box: "inset-[16.67%_8.33%_20.83%_8.33%]",
    img: "inset-[-5.5%_-4.13%_-5.5%_-4.12%]",
    mobileIcon: "/process/mobile/hard-hat.svg",
    mobileBox: "inset-[16.67%_8.33%_20.84%_8.33%]",
    mobileImg: "inset-[-6%_-4.5%_-6.01%_-4.5%]",
    titleLeading: 22.667,
  },
  {
    number: "04",
    title: "MEP Integration",
    description:
      "Electrical systems, piping, mechanical works and utility services.",
    icon: "/process/cable.svg",
    box: "inset-[12.5%_8.33%]",
    img: "inset-[-4.58%_-4.13%]",
    mobileIcon: "/process/mobile/cable.svg",
    mobileBox: "inset-[12.5%_8.33%]",
    mobileImg: "inset-[-5%_-4.5%]",
    titleWidth: 271,
    titleLeading: 24,
  },
  {
    number: "05",
    title: "Quality Validation",
    description: "Inspection, installation & compliance checks.",
    icon: "/process/shield-check.svg",
    box: "inset-[8.33%_16.67%_8.32%_16.67%]",
    img: "inset-[-4.12%_-5.16%]",
    mobileIcon: "/process/mobile/shield-check.svg",
    mobileBox: "inset-[8.33%_16.67%_8.32%_16.67%]",
    mobileImg: "inset-[-4.5%_-5.63%]",
    titleLeading: 24,
    descWidth: 271,
  },
  {
    number: "06",
    title: "Handover & After-Sales",
    description: "Snag clearance, documentation, and support.",
    icon: "/process/handshake.svg",
    box: "inset-[12.5%_8.33%_11.99%_8.33%]",
    img: "inset-[-4.55%_-4.13%]",
    mobileIcon: "/process/mobile/handshake.svg",
    mobileBox: "inset-[12.5%_8.33%_12%_8.33%]",
    mobileImg: "inset-[-4.97%_-4.5%]",
    titleLeading: 24,
    descWidth: 271,
  },
];

export default function ProcessSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);

  return (
    <section id="process" className="overflow-hidden bg-white font-sans xl:bg-[#f9f6f7]">
      <div
        ref={canvasRef}
        className="mobile-col canvas-zoom mx-auto w-full px-5 pb-[52px] pt-8 xl:w-[1920px] xl:bg-[#f9f6f7] xl:p-[80px]"
      >
        <div className="mx-auto flex w-full max-w-[350px] flex-col items-start gap-[14px] xl:max-w-none xl:gap-[50px]">
          <div className="flex w-full flex-col items-start gap-[6px] xl:gap-[16px]">
            <h2 className="w-full text-[28px] font-bold leading-[34px] text-[#0f172a] xl:whitespace-nowrap xl:text-[66px] xl:leading-[73.333px]">
              Our <span className="text-[#ed1d23]">Turnkey Factory</span> Construction Process
            </h2>
            <p className="w-full text-[14px] font-normal leading-[20px] text-[#64748b] xl:w-[1083px] xl:text-[24px] xl:leading-[32px]">
              From the first consultation to final handover, our factory construction services follow
              a <br className="hidden xl:block" />
              proven 6-step process, whether you are building a new plant or planning a factory
              expansion.
            </p>
          </div>

          <div className="relative w-full">
            <div className="pointer-events-none absolute left-[50px] right-[calc(16.667%-73.33px)] top-[45.5px] hidden h-[1.333px] bg-[#e4dfe0] xl:block" />

            <ol className="relative flex w-full flex-col gap-[26px] xl:grid xl:grid-cols-[repeat(6,minmax(0,1fr))] xl:gap-x-[28px] xl:gap-y-[30px]">
              {STEPS.map((step, index) => (
                <li
                  key={step.number}
                  className="relative flex w-full items-center gap-[17px] xl:flex-col xl:items-start xl:gap-[32px]"
                >
                  {index > 0 && (
                    <span
                      aria-hidden
                      className="absolute left-[16px] top-[-26px] h-[calc(50%+26px)] w-px bg-[#bcbcbc] xl:hidden"
                    />
                  )}
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[16px] top-1/2 h-[calc(50%+26px)] w-px bg-[#bcbcbc] xl:hidden"
                    />
                  )}

                  <span
                    className={`${spaceGrotesk.className} relative z-10 flex size-[33px] shrink-0 items-center justify-center rounded-full bg-white text-[14px] font-bold text-[#080808] xl:hidden`}
                  >
                    <svg aria-hidden viewBox="0 0 33 33" className="absolute inset-0 size-full -rotate-90">
                      <circle
                        cx="16.5"
                        cy="16.5"
                        r="15.5"
                        fill="none"
                        stroke="#bcbcbc"
                        strokeWidth="1"
                        strokeDasharray="8.5 3.68"
                      />
                    </svg>
                    <span className="relative">{step.number}</span>
                  </span>

                  <div className="relative z-10 flex min-w-0 flex-1 items-center gap-[10px] rounded-[6px] bg-[#fffcfc] py-[6px] pl-[10px] pr-[9px] drop-shadow-[-1px_1px_3px_rgba(30,30,30,0.1)] xl:min-w-0 xl:flex-1 xl:flex-col xl:items-start xl:gap-3 xl:rounded-none xl:bg-transparent xl:p-0 xl:shadow-none">
                    <div className="relative size-[20px] shrink-0 overflow-clip xl:hidden">
                      <div className={`absolute ${step.mobileBox}`}>
                        <div className={`absolute ${step.mobileImg}`}>
                          <img src={step.mobileIcon} alt="" className="block max-w-none" />
                        </div>
                      </div>
                    </div>

                    <p
                      className={`${spaceGrotesk.className} hidden text-[26px] font-bold leading-[21.333px] text-[#ed1d23] xl:block`}
                    >
                      {step.number}
                    </p>
                    <h3
                      className={`w-full text-[16px] font-semibold text-[#0f172a] ${index === 0 ? "leading-[24px]" : "leading-[normal]"} xl:text-[21px] xl:font-bold xl:text-[#1a1a1a]`}
                      style={{ lineHeight: undefined, width: undefined }}
                    >
                      <span
                        className="xl:block"
                        style={{
                          lineHeight: `${step.titleLeading}px`,
                          width: step.titleWidth,
                        }}
                      >
                        {step.title}
                      </span>
                    </h3>
                    <p
                      className="w-full text-[12px] font-normal leading-[20px] text-[#64748b] xl:text-[18px] xl:leading-[22.667px]"
                      style={{ width: step.descWidth }}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 hidden h-[92px] w-[100px] shrink-0 xl:order-first xl:block">
                    <div className="absolute left-0 top-[-0.33px] h-[92px] w-[100px] rounded-[18px] border-[0.917px] border-solid border-[#e4dfe0] bg-white" />
                    <div
                      className={`absolute left-1/2 size-[40px] -translate-x-1/2 -translate-y-1/2 overflow-clip ${step.nudge ? "top-[calc(50%-0.33px)]" : "top-1/2"}`}
                    >
                      <div className={`absolute ${step.box}`}>
                        <div className={`absolute ${step.img}`}>
                          <img src={step.icon} alt="" className="block size-full max-w-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}