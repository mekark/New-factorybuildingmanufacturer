"use client";

import Image from "next/image";
import { CSSProperties, useRef, useState } from "react";
import { FAQS } from "./faqData";
import { useCanvasZoom } from "./useCanvasZoom";

const LEADING_SPACE_ROWS = new Set([1, 3, 4, 7, 9]);

function FaqDivider() {
  return (
    <div
      aria-hidden
      className="relative h-0 w-[calc(100%+11px)] shrink-0 self-end xl:hidden"
    >
      <span className="absolute inset-x-0 -top-px h-px bg-[#e2e2e2]" />
    </div>
  );
}

export default function FaqSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="overflow-x-clip bg-[#f9f6f7] font-sans">
      <div
        ref={canvasRef}
        className="mobile-col canvas-zoom relative mx-auto flex w-full flex-col gap-6 px-5 py-8 xl:block xl:h-[1348px] xl:w-[1920px] xl:gap-10 xl:p-0"
      >
        <div className="xl:absolute xl:inset-y-0 xl:left-[107px] xl:w-[692px]">
          <div className="flex flex-col items-start gap-[21px] xl:sticky xl:top-[22px] xl:gap-[37px]">
            <div className="flex w-full flex-col items-start gap-3 px-5 py-[6px] xl:gap-[25.467px] xl:p-0">
              <span className="flex items-center gap-[10.667px] whitespace-nowrap text-[14.667px] font-extrabold uppercase tracking-[2.6667px] text-[#c4161c] before:h-[2.667px] before:w-[26.667px] before:shrink-0 before:bg-[#c4161c] before:content-[''] xl:gap-0 xl:rounded-full xl:border-[1.333px] xl:border-solid xl:border-[#fcd5d0] xl:bg-[#feeae7] xl:px-[20px] xl:py-[9.333px] xl:text-[16px] xl:font-semibold xl:normal-case xl:leading-[26px] xl:tracking-normal xl:text-[#cc000a] xl:before:hidden">
                FAQ
              </span>

              <h2 className="w-full max-w-[309px] text-[28px] max-xl:capitalize font-bold leading-[32px] text-[#070506] xl:max-w-none xl:text-[66px] xl:leading-[81.6px]">
                Frequently asked
                <br />
                <span className="xl:text-[#cc000a]">
                  questions<span className="hidden xl:inline">.</span>
                </span>
              </h2>
            </div>

            <div className="relative aspect-square w-full max-w-[350px] self-center xl:size-[614px] xl:max-w-none xl:self-start xl:ml-[39px]">
              <Image
                src="/faq/factory.webp"
                alt="Illustration of an industrial factory building with a tall chimney"
                fill
                sizes="(min-width: 1280px) 614px, 350px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="flex w-full flex-col items-end gap-3 xl:absolute xl:left-[901.44px] xl:top-[142.33px] xl:w-[911.556px] xl:items-stretch xl:gap-0">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = index + 1;
            const isFirst = index === 0;

            const rowAlign = isOpen
              ? "xl:items-end"
              : faq.align === "start"
                ? "xl:items-start"
                : "xl:items-center";

            return (
              <li
                key={faq.q}
                className={`flex w-full flex-col items-end gap-3 xl:block xl:gap-0 xl:shadow-[inset_0_-1.333px_0_#e2e2e2] xl:pb-[33.333px] ${isFirst ? "xl:pt-0" : "xl:pt-[32px]"} max-xl:pb-0`}
              >
                <div className="flex w-full flex-col items-start overflow-hidden xl:contents">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className={`flex w-full cursor-pointer items-center gap-4 text-left xl:justify-between xl:gap-0 ${rowAlign}`}
                  >
                    <span
                      className={`min-w-0 flex-1 whitespace-pre-wrap text-[16px] font-medium leading-[24px] transition-colors duration-300 xl:block xl:w-[var(--qw)] xl:shrink-0 xl:whitespace-normal xl:text-[24px] xl:leading-[32px] ${isOpen ? "text-[#c4161c]" : "text-[#080808]"}`}
                      style={{ "--qw": `${faq.width}px` } as CSSProperties}
                    >
                      {faq.literal ? (
                        <>
                          <span className={isOpen ? "" : "xl:text-[#080808]"}>{`${LEADING_SPACE_ROWS.has(index) ? " " : ""}${number}.`}</span>
                          {` ${faq.q}`}
                        </>
                      ) : (
                        <>
                          <span className="xl:hidden">
                            {`${LEADING_SPACE_ROWS.has(index) ? " " : ""}${number}.${index === 0 ? "" : " "}`}
                          </span>
                          <ol className="list-decimal max-xl:contents" start={number}>
                            <li className="ms-[36px] max-xl:contents">{faq.q}</li>
                          </ol>
                        </>
                      )}
                    </span>

                    {isOpen ? (
                      <span className="flex size-[33.941px] shrink-0 items-center justify-center xl:size-[52.797px]">
                        <span className="flex size-6 rotate-45 items-center justify-center rounded-full bg-[#c4161c] text-[21.333px] font-normal text-[#f5f5f5] xl:size-[37.333px]">
                          +
                        </span>
                      </span>
                    ) : (
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f0f0f0] text-[21.333px] font-normal text-[#9a9a9a] xl:size-[37.333px]">
                        +
                      </span>
                    )}
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`grid w-full transition-[grid-template-rows,opacity] duration-300 ease-out xl:max-w-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-[10px] xl:mx-auto text-[14px] font-medium leading-[20px] text-[#5a5a5a] xl:w-[876px] xl:pt-[18.667px] xl:text-[20px] xl:leading-[30px]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>

                <FaqDivider />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}