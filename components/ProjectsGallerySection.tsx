"use client";

import Image from "next/image";
import { CSSProperties, useRef } from "react";
import { useCanvasZoom } from "./useCanvasZoom";

type Tile = {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  radius: string;
  crop?: { left: string; top: string; width: string; height: string };
  narrowSrc?: string;
  narrowCrop?: { left: string; top: string; width: string; height: string };
};

const TILES: Tile[] = [
  {
    id: "a",
    src: "/projects/gallery-1.webp",
    alt: "Modern industrial warehouse with a louvred glass facade beside a truck yard",
    x: 80,
    y: 198.3,
    w: 867.5,
    h: 488.5,
    radius: "xl:rounded-tl-[32px]",
    crop: { left: "0.02%", top: "0%", width: "101.65%", height: "101.74%" },
    narrowCrop: { left: "0.07%", top: "-0.25%", width: "102.11%", height: "111.85%" },
  },
  {
    id: "b",
    src: "/projects/gallery-2.webp",
    alt: "Aerial view of a large white warehouse with loading docks",
    x: 972.5,
    y: 198.3,
    w: 867.5,
    h: 488.5,
    radius: "xl:rounded-tr-[32px]",
    crop: { left: "-5.01%", top: "-2.5%", width: "104.97%", height: "104.97%" },
    narrowCrop: { left: "-3.71%", top: "-6.74%", width: "103.63%", height: "113.4%" },
  },
  {
    id: "c",
    src: "/projects/gallery-3.webp",
    alt: "Industrial warehouse with a brown and glass entrance facade",
    x: 80,
    y: 711.8,
    w: 867.5,
    h: 488.5,
    radius: "",
    crop: { left: "-11.16%", top: "-2.25%", width: "119.17%", height: "119.15%" },
    narrowCrop: { left: "0.02%", top: "-8.69%", width: "107.7%", height: "117.86%" },
  },
  {
    id: "d",
    src: "/projects/gallery-4.webp",
    alt: "Blue steel warehouse on an industrial estate",
    x: 972.5,
    y: 711.8,
    w: 867.5,
    h: 488.5,
    radius: "",
  },
  {
    id: "e",
    src: "/projects/gallery-5-new.webp",
    narrowSrc: "/projects/mobile/gallery-5-new.webp",
    alt: "Large white industrial shed with landscaped surroundings seen from above",
    x: 80,
    y: 1225.3,
    w: 867.5,
    h: 488.5,
    radius: "xl:rounded-bl-[32px]",
  },
  {
    id: "f",
    src: "/projects/gallery-6.webp",
    narrowSrc: "/projects/mobile/gallery-6.webp",
    alt: "White and blue industrial warehouse with loading docks and a delivery truck",
    x: 972.5,
    y: 1225.3,
    w: 867.5,
    h: 488.5,
    radius: "xl:rounded-br-[32px]",
    crop: { left: "-10.82%", top: "-10.66%", width: "110.81%", height: "110.75%" },
    narrowCrop: { left: "-11.44%", top: "-17.22%", width: "111.54%", height: "122.06%" },
  },
];

export default function ProjectsGallerySection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);

  return (
    <section className="overflow-hidden bg-[#f9f6f7] font-sans">
      <div
        ref={canvasRef}
        className="mobile-col canvas-zoom relative mx-auto w-full px-5 py-8 xl:h-[1766px] xl:w-[1920px] xl:p-0"
      >
        <div className="relative flex flex-col items-start gap-4 xl:absolute xl:left-[80px] xl:top-[52px] xl:w-[648px] xl:gap-[14px]">
          <div className="flex w-full flex-col items-start gap-[10px] font-bold xl:gap-[13px] xl:w-[509px]">
            <p className="w-full text-[12px] font-bold uppercase leading-[18px] tracking-[1.5978px] text-[#ed1d23] xl:text-[16px] xl:leading-[21.304px]">
              our work
            </p>
            <h2 className="w-full text-[28px] font-bold leading-[32px] text-[#0f172a] xl:text-[66px] xl:leading-[60px]">
              Projects <span className="text-[#ed1d23]">Gallery</span>
            </h2>
          </div>
        </div>

        <div className="relative mt-6 flex w-full flex-col gap-4 xl:mt-0 xl:block">
          {TILES.map((tile) => {
            const vars = {
              "--x": `${tile.x}px`,
              "--y": `${tile.y}px`,
              "--w": `${tile.w}px`,
              "--h": `${tile.h}px`,
              ...(tile.crop && {
                "--cl": tile.crop.left,
                "--ct": tile.crop.top,
                "--cw": tile.crop.width,
                "--ch": tile.crop.height,
              }),
            } as CSSProperties;

            const narrowSrc = tile.narrowSrc ?? tile.src;

            return (
              <figure
                key={tile.id}
                style={vars}
                className={`relative m-0 h-[180px] w-full overflow-hidden bg-[#d9d9d9] xl:absolute xl:left-[var(--x)] xl:top-[var(--y)] xl:h-[var(--h)] xl:w-[var(--w)] ${tile.radius}`}
              >
                {tile.narrowCrop ? (
                  <div className="absolute inset-0 xl:hidden" style={tile.narrowCrop}>
                    <Image
                      src={narrowSrc}
                      alt={tile.alt}
                      fill
                      sizes="100vw"
                      quality={60}
                      className="object-fill"
                    />
                  </div>
                ) : (
                  <Image
                    src={narrowSrc}
                    alt={tile.alt}
                    fill
                    sizes="100vw"
                    quality={60}
                    className="object-cover xl:hidden"
                  />
                )}

                {tile.crop ? (
                  <div className="absolute inset-0 hidden xl:block xl:inset-auto xl:left-[var(--cl)] xl:top-[var(--ct)] xl:h-[var(--ch)] xl:w-[var(--cw)]">
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      sizes="900px"
                      className="object-fill"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 hidden xl:block">
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      sizes="720px"
                      className="object-cover"
                    />
                  </div>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}