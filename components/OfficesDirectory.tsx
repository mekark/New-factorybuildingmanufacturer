import { OFFICES, OFFICE_SLOT } from "../lib/offices";

export default function OfficesDirectory({ className = "" }: { className?: string }) {
  return (
    <address
      className={`flex w-full flex-col rounded-[20px] border border-solid border-black/5 bg-[#212121] px-4 py-4 not-italic sm:rounded-[22px] sm:px-5 sm:py-5 xl:px-6 xl:py-[22px] ${className}`}
    >
      <div className="flex items-center gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#cc000a] sm:size-12 sm:rounded-2xl">
          <svg
            viewBox="0 0 24 24"
            className="size-5 shrink-0 text-white"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
        </span>
        <span className="flex flex-col">
          <span className="text-[10px] font-bold uppercase leading-4 text-[#a9a9a9] sm:text-[13px] sm:leading-[18px]">
            Offices across India
          </span>
          <span className="text-sm font-extrabold leading-6 text-white sm:text-[17px]">
            Our Locations
          </span>
        </span>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-solid border-white/10 pt-3 sm:mt-2.5 sm:max-xl:grid-cols-2 xl:grid-cols-3 xl:grid-rows-[auto_auto] xl:items-start">
        {OFFICES.map((office, index) => (
          <div
            key={office.city}
            className={`flex flex-col gap-1 self-start ${OFFICE_SLOT[index] ?? ""}`}
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#ff4d55] uppercase sm:text-xs">
              {office.city}
            </span>
            <span className="text-xs leading-[1.55] text-white/70 sm:text-[13px]">
              {office.address}
            </span>
          </div>
        ))}
      </div>
    </address>
  );
}