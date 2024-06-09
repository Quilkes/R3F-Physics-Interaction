import React from "react";

export default function PageTwo() {
  return (
    <section className="relative w-screen h-screen">
      <div className="absolute w-80 h-72 top-[9rem] left-[7rem]">
        <p className="pb-5 font-bold leading-relaxed text-8xl">Engage</p>
        <p className="text-lg font-semibold">
          Design evokes user's emotion and keep them engaging to your story
        </p>
      </div>
      <div className="absolute grid place-content-center text-[10rem] w-44 h-60 bottom-[6rem] right-[8.5rem]">
        <p>02</p>
      </div>
    </section>
  );
}
