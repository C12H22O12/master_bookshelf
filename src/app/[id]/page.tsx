"use client";

import { E } from "@/component/Explain";

export default function Detail() {
  return (
    <div className="flex flex-col w-dvw h-fit max-lg:px-6 max-lg:py-[53px]">
      {/* PC */}
      <div className="w-full h-full max-lg:hidden">
        <E.PC />
      </div>

      {/* MOBILE */}
      <div className="lg:hidden">
        <E.Mobile />
      </div>
    </div>
  );
}
