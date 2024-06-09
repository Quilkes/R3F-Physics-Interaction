import React from "react";

export default function PageThree() {
  return (
    <section className="relative w-screen h-screen">
      <div className="absolute grid place-content-center text-[10rem] w-44 h-60 top-[5rem] left-[7rem]">
        <p>03</p>
      </div>
      <div className="absolute w-80 h-72 top-[7rem] right-[14rem]">
        <p className="pb-5 font-bold leading-relaxed text-8xl">Guide</p>
        <p className="text-lg font-semibold">
          Outstanding design triggers your brain orient itself within any given
          screen and guide them to the actions they need to make
        </p>
      </div>
    </section>
  );
}
