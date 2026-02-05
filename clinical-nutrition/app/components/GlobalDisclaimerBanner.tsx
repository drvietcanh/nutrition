import { DISCLAIMER_COPY } from "../../config/disclaimers";

export function GlobalDisclaimerBanner() {
  const text = DISCLAIMER_COPY.global.bannerShort;

  return (
    <div className="w-full border-b border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-900 sm:text-sm">
      <p>{text}</p>
    </div>
  );
}

