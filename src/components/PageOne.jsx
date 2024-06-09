import React from "react";

export default function PageOne() {
  return (
    <section className="w-screen h-screen">
      <div className="absolute grid place-content-center text-[10rem] w-44 h-60 top-[5rem] left-[7rem]">
        <p>01</p>
      </div>
      <div className="absolute w-80 h-72 top-[12.5rem] right-[14rem]">
        <p className="pb-5 font-bold leading-relaxed text-8xl">Trigger</p>
        <p className="text-lg font-semibold">
          User experience is an ongoing story, and web design help create the
          flow of that story
        </p>
      </div>
    </section>
  );
}
