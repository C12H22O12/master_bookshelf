"use client";

import Carousel from "@/component/Carousels";
import Header from "@/component/Header";
import Info from "@/component/Info";

export default function Home() {
  return (
    <div className="flex flex-col w-dvw h-dvh">
      <div className="flex items-center flex-initial w-full h-1/6 ">
        <Header />
      </div>
      <div className="flex-initial w-dvw h-5/6 py-4 overflow-scroll scrollbar-hide">
        <Carousel />
      </div>
      <Info />
    </div>
  );
}
