"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useRef } from "react";
import { PHONE_TEL_HREF, WHATSAPP_HREF } from "../lib/contact";
import { useCanvasZoom } from "./useCanvasZoom";
import {
  EnquiryValues,
  INDUSTRY_TYPES,
  SQFT_OPTIONS,
  useEnquiryForm,
} from "./useEnquiryForm";
// Inter is only used by the hero badge (per Figma).
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

/* ============================================================
   CONTENT DATA
   ============================================================ */

// Feature points, in Figma grid order (row by row, two columns).
const FEATURES = [
  "Automotive, EV, Electronics, Electrical & Semiconductor.",
  "Renewable Energy, Engineering,Electrical Vehicle.",
  "Cold Storage & Clean Rooms,  Machinery & Heavy Manufacturing.",
  "Textile, Pharmaceutical, Chemical & Life Sciences.",
  "Metals, Steel, Building Materials, Packaging & Plastics, Logistics.",
  "Apparel, Leather, Food Processing, Beverage, FMCG.",
] as const;

// Client logos (same set and sizing as the PEB site): `scale` zooms logos whose
// artwork has extra padding inside the file; the rest use the default 34px height.
const CLIENT_LOGOS = [
  { name: "VWU", src: "/hero/clients/vwu.webp", scale: 1 },
  { name: "Voltas", src: "/hero/clients/voltas.webp", scale: 1.6 },
  { name: "TVS", src: "/hero/clients/tvs.webp", scale: 1.6 },
  { name: "Tata Electronics", src: "/hero/clients/tata.webp", scale: 1.6 },
  { name: "Schwing Stetter", src: "/hero/clients/stetter.webp", scale: 1.6 },
  { name: "SRF", src: "/hero/clients/srf.webp", scale: 1.6 },
  { name: "Saveetha", src: "/hero/clients/saveetha.webp", scale: 1.2 },
  { name: "Sarvam Safety", src: "/hero/clients/sarvam.webp", scale: 1 },
  { name: "Reliance", src: "/hero/clients/reliance.webp", scale: 1.2 },
  { name: "Orbittal", src: "/hero/clients/orbittal.webp", scale: 1.2 },
  { name: "NS Instruments", src: "/hero/clients/nsi.webp", scale: 1 },
  { name: "MRF", src: "/hero/clients/mrf.webp", scale: 1 },
  { name: "L&T", src: "/hero/clients/lt.webp", scale: 1 },
  { name: "Caterpillar", src: "/hero/clients/cat.webp", scale: 1.2 },
  { name: "LA Freightlift", src: "/hero/clients/laf.webp", scale: 1.2 },
  { name: "Komatsu", src: "/hero/clients/komatsu.webp", scale: 1 },
] as const;

// Stats: value (white) + suffix (red, each with its own Figma colour).
const STATS = [
  { value: "300", suffix: "+", suffixColor: "#c4161c", label: "Projects" },
  { value: "18", suffix: "+", suffixColor: "#cc000a", label: "years Experience" },
  { value: "40,000 ", suffix: "MT", suffixColor: "#ed1d23", label: "Annual Production" },
  { value: "250", suffix: "+", suffixColor: "#c4161c", label: "Engineering Team" },
] as const;

const MOBILE_TRUST_LOGOS = [
  { name: "L&T", src: "/hero/mobile/design-lt.webp", w: 64, h: 64 * (1132 / 2084) },
  { name: "CAT", src: "/hero/mobile/design-cat.webp", w: 48, h: 48 },
  { name: "TVS", src: "/hero/mobile/design-tvs.webp", w: 52, h: 53 },
  { name: "Tata", src: "/hero/mobile/design-tata.webp", w: 32, h: 32 },
] as const;

/* ============================================================
   FORM FIELD STYLES (Figma: #f0f0f0 fill, #e2e2e2 1.101px stroke)
   ============================================================ */

const LABEL_CLASS =
  "block text-[14px] font-bold leading-[19px] text-white";

const FIELD_BASE_CLASS =
  "block w-full rounded-[8px] border-[1.101px] border-[#e2e2e2] bg-[#f0f0f0] text-[12px] font-normal text-[#18181b] outline-none transition-colors placeholder:text-[#757575] focus:border-[#c4161c]";

const ERROR_CLASS =
  "pointer-events-none absolute left-0 top-full mt-px text-[11px] leading-[13px] text-[#ff6b6b]";

/* ============================================================
   HERO SECTION
   ============================================================ */

export default function HeroSection() {
  const enquiryForm = useEnquiryForm();
  const { values, errors, submitError, isSubmitting, handleChange, handleSubmit } =
    enquiryForm;
  const canvasRef = useRef<HTMLDivElement>(null);

  useCanvasZoom(canvasRef);

  // Error ring for invalid fields.
  const invalid = (field: keyof EnquiryValues) =>
    errors[field] ? "!border-[#ff6b6b]" : "";

  // Selects show their placeholder option in Figma grey until a value is chosen.
  const selectTone = (field: keyof EnquiryValues) =>
    values[field] ? "text-[#18181b]" : "text-[#757575]";

  return (
    /* ==========================================================
       HERO WRAPPER — full-bleed background, 1920×1013 design canvas
       ========================================================== */
    <section className="hero-section relative isolate overflow-hidden bg-[#060606] font-sans">
      {/* Mobile-only Figma backdrop (decorative) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 xl:hidden">
        <Image
          src="/hero/mobile/design-layer1.webp"
          alt=""
          width={941}
          height={1672}
          sizes="101vw"
          quality={60}
          loading="lazy"
          fetchPriority="low"
          className="absolute left-[-0.82%] top-[-76.25px] h-[698.67px] w-[100.82%] max-w-none"
        />
        <Image
          src="/hero/mobile/design-image22.webp"
          alt=""
          width={941}
          height={1672}
          sizes="241vw"
          quality={60}
          loading="lazy"
          fetchPriority="low"
          className="absolute left-[-70.46%] top-[15.44px] h-[1671.95px] w-[241.28%] max-w-none"
        />
        <Image
          src="/hero/mobile/design-image23.webp"
          alt=""
          width={714}
          height={2202}
          sizes="130vw"
          quality={60}
          loading="lazy"
          fetchPriority="low"
          className="absolute left-[-15.13%] top-[419px] h-[1556px] w-[129.49%] max-w-none object-cover"
        />
        <div className="absolute inset-x-0 top-[284px] h-[1691px] bg-[rgba(15,15,15,0.4)]" />
      </div>

        {/* ---------- Background: industrial plant photo (desktop) ---------- */}
        <Image
          src="/hero/hero-bg.webp"
          alt=""
          width={1672}
          height={941}
          priority
          fetchPriority="high"
          sizes="100vw"
          aria-hidden
          className="absolute inset-0 -z-20 hidden h-full w-full max-w-none object-cover object-[70%_center] xl:block xl:inset-auto xl:left-[1.4635%] xl:top-0 xl:h-auto xl:w-[102.43%] xl:object-fill"
        />

        {/* ---------- Background: dark-to-red left→right gradient overlay ---------- */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#060606_24.831%,rgba(6,6,6,0.8)_42.674%,rgba(141,21,23,0.07)_69.272%,rgba(237,32,36,0.13)_88.021%)] max-xl:bg-[linear-gradient(180deg,rgba(6,6,6,0.82)_0%,rgba(6,6,6,0.9)_100%)]"
        />

        {/* ---------- Design canvas ----------
            ≥1920px: exact Figma frame (1920 wide, 80px left inset), zoom 1.
            1280–1919px: same frame, zoomed continuously to fill the viewport.
            <1280px: stacked mobile layout. */}
        <div
          ref={canvasRef}
          className="mobile-col canvas-zoom relative z-10 mx-auto w-full min-h-0 bg-[#060606] px-5 pb-16 pt-4 sm:px-6 xl:h-[1013px] xl:min-h-0 xl:w-[1920px] xl:bg-transparent xl:pb-0 xl:pl-[80px] xl:pr-0 xl:pt-[86px]"
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-[50px]">
            <div className="flex w-full min-w-0 flex-col items-start gap-3 xl:gap-[24px] xl:w-auto xl:shrink-0">
              <p
                className={`${inter.className} ml-0 flex h-6 w-fit max-w-[calc(100%-40px)] items-center gap-2 rounded-full border border-solid border-white/20 px-3 text-[10px] font-medium leading-[normal] text-white xl:h-auto xl:max-w-none xl:gap-[10.667px] xl:border-[1.333px] xl:px-[17.333px] xl:py-[9.333px] xl:text-[16px] xl:leading-[21.333px]`}
              >
                <span aria-hidden className="size-2 shrink-0 rounded-full bg-[#e40015] xl:size-[10.667px]" />
                Industrial Factory Construction &amp; Expansion Company
              </p>

              <div className="relative -mx-5 w-[calc(100%+2.5rem)] max-xl:min-h-[219px] xl:mx-0 xl:w-auto xl:min-h-0">
                <div className="relative h-[219px] w-full overflow-hidden bg-[#060606] xl:hidden">
                  <picture>
                    <source type="image/webp" srcSet="/hero/mobile/design-banner-lcp.webp" />
                    <img
                      src="/hero/mobile/design-banner-lcp.webp"
                      alt=""
                      width={780}
                      height={439}
                      decoding="async"
                      loading="eager"
                      fetchPriority="high"
                      className="absolute bottom-[-1px] left-0 h-[219px] w-full object-cover object-bottom"
                    />
                  </picture>
                  <div className="absolute bottom-px left-0 h-[108px] w-full bg-[linear-gradient(182.77deg,rgba(30,30,30,0)_1.0095%,#1e1e1e_99.312%)]" />
                </div>

                <h1 className="max-xl:absolute max-xl:inset-x-0 max-xl:bottom-[14px] max-xl:z-10 flex flex-col items-start gap-[6px] font-bold text-white xl:static xl:gap-[20px]">
                  <span className="ml-5 block w-[calc(100%-40px)] text-[22px] font-bold leading-[1.15] text-white xl:ml-0 xl:w-auto xl:text-[54px] xl:leading-[58px]">
                    Build Factory. Design to Delivery
                  </span>
                  <span className="relative ml-[-1px] block bg-[#c4161c] py-px pl-5 pr-2 text-[16px] font-bold leading-[normal] text-white xl:ml-0 xl:inline-block xl:h-[59px] xl:w-[695px] xl:bg-[#ed1d23] xl:px-[5px] xl:text-[54px] xl:leading-[58px]">
                    <span className="block whitespace-nowrap xl:absolute xl:left-[5px] xl:top-[24px] xl:-translate-y-1/2">
                      Construction &amp; Expansion
                    </span>
                  </span>
                </h1>
              </div>

              <div className="w-full text-[14px] font-normal leading-[normal] text-[#a9a9a9] xl:text-[22px] xl:leading-[28px]">
                <p>
                  <span className="font-bold text-[#ed1d23]">MEKARK</span>
                  {" - Builds Every Structure You Want."}
                </p>
                <p className="xl:whitespace-nowrap">
                  {"All kinds of Industrial, Factory Construction & Expansion projects – "}
                  <span className="font-bold text-white">ALL INDIA</span>
                </p>
              </div>

              <div className="flex w-full flex-col items-start gap-[6px] xl:w-auto xl:gap-4">
                <p className="text-[14px] font-bold leading-[normal] text-[#f3f3f3] xl:text-[22px] xl:leading-[28px]">
                  In-House PEB Manufacturing - Civil - PEB – MEP - Turnkey EPC.
                </p>
                <ul className="flex w-full flex-col gap-[6px] xl:w-auto xl:inline-grid xl:grid-cols-[repeat(2,fit-content(100%))] xl:gap-x-5 xl:gap-y-4">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 rounded-[12px] px-3 xl:gap-[8px] xl:rounded-none xl:px-0"
                    >
                      <img
                        src="/hero/mobile/design-chevron.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="block shrink-0 xl:hidden"
                      />
                      <img
                        src="/hero/icons/chevron.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="hidden size-6 shrink-0 xl:block"
                      />
                      <span className="min-w-0 whitespace-pre-wrap text-[12px] font-normal leading-5 text-[#b5b5b5] xl:whitespace-pre xl:text-[18px] xl:text-[#f7f7f7]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-[10px] bg-[linear-gradient(175.66deg,rgb(8,9,10)_1.2889%,rgb(101,69,40)_91.175%)] px-4 py-6 xl:relative xl:h-[147px] xl:w-[847px] xl:overflow-hidden xl:rounded-[18px] xl:bg-none xl:p-0">
                <div
                  aria-hidden
                  className="absolute inset-0 hidden bg-[linear-gradient(180deg,#060606_0.179%,rgba(105,63,29,0.5)_99.821%)] backdrop-blur-[500px] xl:block"
                />
                <p className="text-[14px] font-semibold uppercase leading-5 text-[#ed1d23] xl:absolute xl:z-10 xl:left-[41px] xl:top-[20.67px] xl:text-[#fa7783]">
                  Trusted Across India
                </p>

                <div className="flex w-full flex-nowrap items-start gap-x-[18px] max-[379px]:gap-x-2 xl:hidden">
                  {MOBILE_TRUST_LOGOS.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex h-10 min-w-0 max-w-16 flex-1 basis-0 items-center justify-center overflow-hidden rounded-[6px] bg-[#f9f6f7]"
                    >
                      {logo.name === "Tata" ? (
                        <span className="relative size-8 shrink-0 overflow-hidden">
                          <img
                            src={logo.src}
                            alt={logo.name}
                            className="absolute left-[-100%] top-[-69.9%] h-[301.97%] w-[300%] max-w-none"
                          />
                        </span>
                      ) : (
                        <img
                          src={logo.src}
                          alt={logo.name}
                          width={logo.w}
                          height={logo.h}
                          className="block shrink-0 object-cover"
                          style={{ width: logo.w, height: logo.h }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="absolute left-8 right-[26px] top-14 hidden h-[75px] overflow-hidden xl:block xl:w-[789px]">
                  <div className="hero-logo-track absolute left-0 top-[17px] flex w-max items-center gap-[50px] pr-[50px]">
                    {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
                      <div
                        key={`${logo.name}-${index}`}
                        className="relative h-10 w-[90px] shrink-0 rounded-lg bg-[#f9f6f7]"
                        aria-hidden={index >= CLIENT_LOGOS.length}
                      >
                        <img
                          src={logo.src}
                          alt={index < CLIENT_LOGOS.length ? logo.name : ""}
                          width={120}
                          height={40}
                          className="pointer-events-none absolute left-1/2 top-1/2 h-[34px] w-auto max-w-[calc(100%-12px)] -translate-x-1/2 -translate-y-1/2 object-contain"
                          style={{
                            height: logo.scale === 1 ? 34 : 40,
                            scale: logo.scale === 1 ? undefined : logo.scale,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid w-full xl:w-auto grid-cols-2 gap-x-3 gap-y-3.5 xl:flex xl:h-[117.333px] xl:flex-nowrap xl:items-center xl:gap-x-12 xl:border-t xl:border-[#e2e2e2] xl:pt-px">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex h-[75px] flex-col justify-center gap-1 whitespace-nowrap rounded-[10px] border border-solid border-white/[0.08] bg-[#1a1a1a] px-5 xl:h-[85.333px] xl:flex-col xl:items-start xl:gap-[5.333px] xl:rounded-none xl:border-0 xl:bg-transparent xl:px-0"
                  >
                    <p className="text-[24px] font-extrabold leading-[normal] text-white max-[379px]:text-xl xl:text-[42px]">
                      {stat.value}
                      <span style={{ color: stat.suffixColor }}>{stat.suffix}</span>
                    </p>
                    <p className="text-[10px] font-semibold uppercase leading-[normal] text-[#9a9a9a] xl:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop CTAs — hidden on mobile (mobile CTAs sit below the form) */}
              <div className="hidden flex-wrap items-center gap-[30px] xl:flex">
                {/* WhatsApp (solid white pill) */}
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[55.333px] items-center justify-center gap-[9.623px] rounded-full bg-white px-[24.058px] text-[16px] font-bold leading-[24.058px] text-[#e5091f] transition-opacity hover:opacity-90"
                >
                  WhatsApp
                  <span className="relative block size-[18px] shrink-0 overflow-hidden">
                    <span
                      className="absolute inset-y-0 left-0 right-[0.48%] [mask-repeat:no-repeat] [mask-size:18px_18px]"
                      style={{ maskImage: "url(/hero/icons/whatsapp-mask.svg)" }}
                    >
                      <img
                        src="/hero/icons/whatsapp.svg"
                        alt=""
                        className="absolute inset-0 block size-full max-w-none"
                      />
                    </span>
                  </span>
                </a>

                {/* Call Now (outlined pill) */}
                <a
                  href={PHONE_TEL_HREF}
                  className="flex h-[55.333px] items-center justify-center gap-[9.623px] rounded-full border border-white px-[24.058px] text-[16px] font-bold leading-[24.058px] text-white transition-colors hover:bg-white/10"
                >
                  Call Now
                  <img
                    src="/hero/icons/phone-call.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="block size-[18px] shrink-0"
                  />
                </a>
              </div>
            </div>

            {/* ========================================================
                RIGHT COLUMN — "Request Your Project Blueprint" glass form
                ======================================================== */}
            <form
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              className="flex w-full flex-col items-center gap-4 rounded-[24px] bg-[rgba(255,255,255,0.01)] px-5 py-6 shadow-[0px_26.43px_88.09px_0px_rgba(0,0,0,0.06)] backdrop-blur-[15px] xl:gap-[26px] xl:rounded-[31.931px] xl:px-[50px] xl:py-[44px] xl:shadow-[0px_26.428px_88.092px_0px_rgba(0,0,0,0.45)] xl:w-[660.688px] xl:shrink-0"
            >
              <div className="flex w-full flex-col gap-[6px] text-white xl:max-w-[364px] xl:items-start">
                <h2 className="text-[24px] font-extrabold leading-[33px] xl:text-[24px] xl:leading-[normal] xl:text-[#f5f5f5]">
                  Request Your Project Blueprint
                </h2>
                <p className="text-[14px] font-medium leading-[19px] xl:max-w-[337px]">
                  Get a custom layout, cost range &amp; 150-day* timeline
                </p>
              </div>

              {/* ---------- Form fields ---------- */}
              <div className="flex w-full flex-col items-start">
                {/* Row 1: Full Name + Project Location */}
                <div className="flex w-full flex-col xl:flex-row xl:items-center xl:gap-[35px]">
                  {/* Full Name (Figma: no top padding, 7px label gap) */}
                  <div className="relative flex w-full flex-col gap-[7px] pt-[14px] xl:w-[262.202px] xl:shrink-0 xl:pt-0">
                    <label htmlFor="hero-name" className={`${LABEL_CLASS} sr-only xl:not-sr-only`}>
                      Full Name*
                    </label>
                    <input
                      id="hero-name"
                      name="name"
                      type="text"
                      placeholder="Enter Your name"
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      className={`${FIELD_BASE_CLASS} h-[44px] pl-[18px] pr-[18px] xl:h-[46.2px] ${invalid("name")}`}
                    />
                    {errors.name ? <p className={ERROR_CLASS}>{errors.name}</p> : null}
                  </div>

                  {/* Project Location */}
                  <div className="relative flex w-full flex-col gap-[6.607px] pt-[14px] xl:w-[261.339px] xl:shrink-0">
                    <label htmlFor="hero-location" className={`${LABEL_CLASS} sr-only xl:not-sr-only`}>
                      Project Location
                    </label>
                    <input
                      id="hero-location"
                      name="projectLocation"
                      type="text"
                      placeholder="Enter Project Location"
                      value={values.projectLocation}
                      onChange={handleChange}
                      className={`${FIELD_BASE_CLASS} h-[44px] pl-[22.13px] pr-[35px] tracking-[0.3303px] xl:h-[46.2px]`}
                    />
                  </div>
                </div>

                {/* Row 2: Mobile Number + Email Address */}
                <div className="flex w-full flex-col xl:flex-row xl:items-center xl:gap-[35.237px]">
                  {/* Mobile Number */}
                  <div className="relative flex w-full flex-col gap-[6.607px] pt-[14px] xl:w-[261.339px] xl:shrink-0">
                    <label htmlFor="hero-phone" className={`${LABEL_CLASS} sr-only xl:not-sr-only`}>
                      Mobile Number*
                    </label>
                    <input
                      id="hero-phone"
                      name="phoneNumber"
                      type="tel"
                      inputMode="tel"
                      maxLength={10}
                      placeholder="98765 43210"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phoneNumber)}
                      className={`${FIELD_BASE_CLASS} h-[44px] pl-[17.62px] pr-[17.62px] xl:h-[46.2px] ${invalid("phoneNumber")}`}
                    />
                    {errors.phoneNumber ? (
                      <p className={ERROR_CLASS}>{errors.phoneNumber}</p>
                    ) : null}
                  </div>

                  {/* Email Address */}
                  <div className="relative flex w-full flex-col gap-[6.607px] pt-[14px] xl:w-[261.339px] xl:shrink-0">
                    <label htmlFor="hero-email" className={`${LABEL_CLASS} sr-only xl:not-sr-only`}>
                      Email Address
                    </label>
                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      placeholder="abcd@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      className={`${FIELD_BASE_CLASS} h-[44px] pl-[17.62px] pr-[17.62px] xl:h-[46.2px] ${invalid("email")}`}
                    />
                    {errors.email ? <p className={ERROR_CLASS}>{errors.email}</p> : null}
                  </div>
                </div>

                {/* Row 3: Industry Type + Project Sq. Ft (selects) */}
                <div className="flex w-full flex-col xl:flex-row xl:items-center xl:gap-[37px]">
                  {/* Industry Type */}
                  <div className="relative flex w-full flex-col gap-[6.607px] pt-[14px] xl:w-[261.339px] xl:shrink-0">
                    <label htmlFor="hero-industry" className={`${LABEL_CLASS} sr-only xl:not-sr-only`}>
                      Industry Type*
                    </label>
                    <select
                      id="hero-industry"
                      name="industryType"
                      value={values.industryType}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.industryType)}
                      className={`${FIELD_BASE_CLASS} h-[44px] cursor-pointer appearance-none pl-[16.62px] pr-[35px] xl:h-[46.2px] ${selectTone("industryType")} ${invalid("industryType")}`}
                    >
                      <option value="" disabled>
                        Select your Industry type
                      </option>
                      {INDUSTRY_TYPES.map((option) => (
                        <option key={option} value={option} className="text-[#18181b]">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.industryType ? (
                      <p className={ERROR_CLASS}>{errors.industryType}</p>
                    ) : null}
                  </div>

                  {/* Project Sq. Ft */}
                  <div className="relative flex w-full flex-col gap-[6.607px] pt-[14px] xl:w-[261.339px] xl:shrink-0">
                    <label htmlFor="hero-sqft" className={`${LABEL_CLASS} sr-only xl:not-sr-only`}>
                      Project Sq. Ft*
                    </label>
                    <select
                      id="hero-sqft"
                      name="sqft"
                      value={values.sqft}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.sqft)}
                      className={`${FIELD_BASE_CLASS} h-[44px] cursor-pointer appearance-none pl-[22px] pr-[35px] xl:h-[46.2px] xl:w-[261.079px] ${selectTone("sqft")} ${invalid("sqft")}`}
                    >
                      <option value="" disabled>
                        Select Sq.ft Requirement
                      </option>
                      {SQFT_OPTIONS.map((option) => (
                        <option key={option} value={option} className="text-[#18181b]">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.sqft ? <p className={ERROR_CLASS}>{errors.sqft}</p> : null}
                  </div>
                </div>

                {/* Row 4: Requirement Details (textarea) */}
                <div className="relative flex w-full flex-col gap-[6.607px] pt-[14px] xl:w-[559px]">
                  <label htmlFor="hero-requirements" className={`${LABEL_CLASS} sr-only xl:not-sr-only`}>
                    Requirement Details
                  </label>
                  <textarea
                    id="hero-requirements"
                    name="requirements"
                    placeholder="Enter Requirement Details"
                    value={values.requirements}
                    onChange={handleChange}
                    className={`${FIELD_BASE_CLASS} h-[72px] resize-none pb-[14px] pl-[22px] pr-[35px] pt-[14px] leading-[normal] xl:h-[82.2px]`}
                  />
                </div>
              </div>

              {/* ---------- Submit button + reassurance note ---------- */}
              <div className="flex w-full flex-col items-center gap-[14px]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-[63.867px] w-full items-center justify-center rounded-[9px] bg-[#c4161c] px-[40px] py-[20px] text-center text-[18px] font-bold leading-[normal] text-[#f5f5f5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#ad1318] disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {isSubmitting ? "Submitting..." : "Request an Estimate →"}
                </button>

                <p className="py-px text-center text-[12px] font-medium leading-[normal] tracking-[0.3303px] text-[#8a8a8a]">
                  100% Transparent Consultation with single point project support
                </p>

                {/* Submission error (only shown when the API call fails) */}
                {submitError ? (
                  <p role="alert" className="text-center text-[12px] text-[#ff6b6b]">
                    {submitError}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
    </section>
  );
}


