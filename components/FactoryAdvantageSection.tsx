"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { useCanvasZoom } from "./useCanvasZoom";

const POINTS = [
  {
    label: "Turnkey Factory Construction",
    description:
      "We take single-point accountability from design to handover. As a Turnkey Factory Construction Company and factory shed construction company, we ensure that our engineering, manufacturing, procurement and erection are done under one umbrella, which ensures that your project stays on track and within budget.",
  },
  {
    label: "In-House Structural Engineers",
    description:
      "As an industrial factory building contractor, we use BIM-based structural analysis to design every structure accurately before work begins. This makes us a dependable factory building contractor for large plants, with fewer on-site design changes.",
  },
  {
    label: "Foundations & Structures Designed for Your Loads",
    description:
      "We customise the design for your machinery, overhead cranes, mezzanines and floor loads. As a factory construction contractor, we size footings, pedestals and crane gantry supports for safe load transfer and vibration control.",
  },
  {
    label: "Factory Expansion Without Disrupting Production",
    description:
      "As your industrial construction contractor, Mekark connects design, civil works, structural steel, MEP and project execution through one EPC delivery model.",
    narrowDescription:
      "As a turnkey factory expansion contractor and industrial building expansion contractor we plan and execute factory building extensions and industrial shed extension work around your running operations. We match the new bay to the existing structure, so your factory facility expansion adds capacity with minimal downtime.",
  },
  {
    label: "Fully Automated Steel Production",
    description:
      "Factory extensions and manufacturing plant expansion can be considered during the original engineering, reducing what needs to be reworked when the facility grows.",
    narrowDescription:
      "The latest automation ensures consistency and reduces human error. Our automated manufacturing process will cut, weld, and finish all members of your structure to the same specifications, ensuring consistent quality for each component.",
  },
  {
    label: "Safe Construction & Pre-Handover Inspection ",
    description:
      "ISO 9001:2015 and CE-certified processes support fabrication quality with documentation your project and compliance teams can verify.",
    narrowDescription:
      "The latest automation ensures consistency and reduces human error. Our automated manufacturing process will cut, weld, and finish all members of your structure to the same specifications, ensuring consistent quality for each component.",
  },
] as const;

const ROW_WIDTHS = [700, 666, 645, 645, 666, 700] as const;
const ROW_HEIGHTS = [60, 60, 85.5, 86, 67.5, 84] as const;

export default function FactoryAdvantageSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionId = useId();
  useCanvasZoom(canvasRef);

  return (
    <section className="overflow-hidden bg-[#f9f6f7] font-sans xl:bg-white">
      <div
        ref={canvasRef}
        className="mobile-col canvas-zoom relative mx-auto w-full xl:h-[865.333px] xl:w-[1920px]"
      >
        <div className="relative h-[249px] w-full overflow-hidden xl:hidden">
          <Image
            src="/advantage/mobile-factory-banner.png"
            alt="Mekark factory construction site with an engineer and a billboard reading: we build factories, you build future"
            width={583}
            height={262}
            sizes="150vw"
            quality={60}
            className="pointer-events-none absolute left-0 top-[-13px] h-[262px] w-[583px] max-w-none object-cover"
          />
        </div>

        <div className="hidden xl:block">
          <div className="absolute left-0 top-[-0.33px] h-[865.333px] w-[1920px] overflow-hidden">
            <Image
              src="/advantage/factory-bg-v2.webp"
              alt=""
              width={1000}
              height={640}
              sizes="1920px"
              className="pointer-events-none absolute left-[-0.01%] top-[-38.54%] h-[142%] w-full max-w-none"
            />
          </div>
          <div className="absolute left-[1004px] top-[-0.33px] h-[568px] w-[916px] bg-[#e60f1a]" />
          <div className="absolute left-[1047px] top-[489px] h-[224px] w-[873px] bg-[#e60f1a]" />
          <Image
            src="/advantage/panel-overlay.webp"
            alt=""
            width={916}
            height={399}
            sizes="916px"
            className="pointer-events-none absolute left-[1004px] top-[-3px] h-[398.667px] w-[916px] max-w-none object-cover"
          />
          <div className="pointer-events-none absolute left-[816px] top-0 h-[865px] w-[328px] overflow-hidden">
            <Image
              src="/advantage/person-2.webp"
              alt=""
              width={1440}
              height={649}
              sizes="1920px"
              className="absolute left-[-248.78%] top-[-0.04%] h-[100.04%] w-[585.37%] max-w-none"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 bg-[linear-gradient(180deg,#fffdfd_6.034%,#e60f1a_47.028%)] p-5 xl:absolute xl:inset-x-0 xl:top-0 xl:items-end xl:bg-transparent xl:p-0">
          <div className="flex w-full flex-col items-start gap-3 xl:absolute xl:left-[1102px] xl:top-[40.33px] xl:w-[782.667px] xl:gap-[25px]">
            <h2 className="w-full text-[28px] font-bold leading-[34px] text-[#030303] xl:text-[53.333px] xl:font-extrabold xl:leading-[60px] xl:tracking-[-1.3333px]">
              Why Top Industries
              <br />
              Choose Mekark
            </h2>
            <p className="w-full text-[14px] font-normal text-[#424242] xl:whitespace-nowrap xl:text-[21.333px] xl:leading-[28px]">
              India&apos;s Leading Industrial Factory Construction &amp; Expansion Company
            </p>
          </div>

          <div className="relative w-full xl:absolute xl:left-[1102px] xl:top-[216px] xl:h-[452px] xl:w-[710px] xl:overflow-hidden">
            <ul className="flex w-full flex-col gap-5 xl:h-full xl:items-end xl:gap-[10px] xl:overflow-y-auto xl:overflow-x-clip xl:pt-[5px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {POINTS.map((point, index) => {
                const isOpen = openIndex === index;
                const isLast = index === POINTS.length - 1;
                const buttonId = `${accordionId}-button-${index}`;
                const panelId = `${accordionId}-panel-${index}`;
                const width = ROW_WIDTHS[index];
                const narrowBody =
                  "narrowDescription" in point && point.narrowDescription
                    ? point.narrowDescription
                    : point.description;

                return (
                  <li
                    key={point.label}
                    style={{ width: width, minHeight: ROW_HEIGHTS[index] }}
                    className={`relative w-full shrink-0 text-white max-xl:!w-full max-xl:!min-h-0 xl:text-inherit ${isLast ? "" : "xl:border-b-[1.333px] xl:border-solid xl:border-[#e58282]"}`}
                  >
                    {index > 0 && (
                      <img
                        src="/advantage/mobile-divider.svg"
                        alt=""
                        className="pointer-events-none absolute -top-[11px] left-0 block max-w-full xl:hidden"
                      />
                    )}

                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between text-left text-[16px] font-bold leading-[18px] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:items-center xl:pb-[13.333px] xl:pt-[12px] xl:text-[24px] xl:leading-[29.867px]"
                      style={{ width: undefined }}
                    >
                      <span className="flex min-w-0 items-start xl:contents">
                        <span className="w-6 shrink-0 text-center xl:w-[37px] xl:text-left">
                          {index + 1}.
                        </span>
                        <span className="min-w-0 flex-1 xl:block xl:w-[492px] xl:shrink-0">
                          {point.label}
                        </span>
                      </span>
                      <img
                        src="/advantage/mobile-chevron.svg"
                        alt=""
                        className={`block max-w-none transition-transform duration-300 xl:hidden ${isOpen ? "-rotate-90" : "rotate-90"}`}
                      />
                      <img
                        src="/advantage/chevron.svg"
                        alt=""
                        width={30}
                        height={30}
                        className={`ml-auto hidden size-[30px] shrink-0 transition-transform duration-300 xl:block ${isOpen ? "-rotate-90" : "rotate-90"}`}
                      />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`mx-auto max-w-[299px] pt-[10px] xl:mx-0 xl:max-w-none xl:pt-0 ${!isOpen ? "max-xl:hidden" : ""}`}
                    >
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 xl:grid ${isOpen ? "xl:grid-rows-[1fr]" : "xl:grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden">
                          <p className="whitespace-pre-line text-[14px] font-medium text-white xl:w-[632px] xl:pb-[14px] xl:pl-[37px] xl:text-[17px] xl:leading-normal">
                            <span className="xl:hidden">{narrowBody}</span>
                            <span className="hidden xl:inline">{point.description}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Image
              src="/advantage/list-fade.webp"
              alt=""
              width={723}
              height={55}
              sizes="723px"
              className="pointer-events-none absolute bottom-[-60px] left-[-13px] hidden h-[55px] w-[723px] max-w-none object-cover xl:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}