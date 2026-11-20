import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_HREF } from "../lib/contact";

/**
 * Call Now + WhatsApp contact rows (same pattern as the MEP healthcare landing CTA).
 */
export default function CtaContactCards({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5 xl:w-[693.333px] xl:flex-nowrap ${className}`}
    >
      <a
        href={PHONE_TEL_HREF}
        className="flex w-full items-center gap-4 rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 transition-colors hover:bg-[#2b2b2b] sm:h-[84px] sm:min-w-0 sm:flex-1 sm:rounded-[22px] sm:px-5 sm:py-0 max-xl:min-w-[280px]"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#cc000a] sm:size-12 sm:rounded-2xl">
          <img
            src="/cta/phone.svg"
            alt=""
            width={26}
            height={26}
            className="size-6 sm:size-5"
          />
        </span>
        <span className="flex min-w-0 flex-1 flex-col items-start gap-0.5 sm:gap-0">
          <span className="text-[10px] font-bold uppercase leading-4 whitespace-nowrap text-[#a9a9a9] sm:text-[13px] sm:leading-[18px]">
            Call Now
          </span>
          <span className="w-full whitespace-nowrap text-sm font-extrabold leading-6 text-white sm:text-[17px]">
            {PHONE_DISPLAY}
          </span>
        </span>
        <img
          src="/cta/arrow.svg"
          alt=""
          width={27}
          height={26}
          className="h-[26px] w-6 shrink-0 sm:h-auto sm:w-5"
        />
      </a>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center gap-4 rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 transition-colors hover:bg-[#2b2b2b] sm:h-[84px] sm:min-w-0 sm:flex-1 sm:rounded-[22px] sm:px-5 sm:py-0 max-xl:min-w-[280px]"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#cc000a] sm:size-12 sm:rounded-2xl">
          <img
            src="/cta/whatsapp.webp"
            alt=""
            width={39}
            height={39}
            className="size-[30px] object-cover"
          />
        </span>
        <span className="min-w-0 flex-1 text-sm font-bold leading-6 whitespace-nowrap text-white sm:text-[19px]">
          WhatsApp Us Now
        </span>
        <img
          src="/cta/arrow.svg"
          alt=""
          width={27}
          height={26}
          className="h-[26px] w-6 shrink-0 sm:h-auto sm:w-5"
        />
      </a>
    </div>
  );
}