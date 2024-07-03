import React from "react";
import useStore from "../../store/Store";

export default function Header() {
  // Accessing current section and section setter from the store  =====>
  const section = useStore((state) => state.section);

  return (
    <>
      <section className="fixed top-0 right-0 z-50 flex flex-col items-center w-32 h-full pt-8 cursor-pointer ">
        <div className="flex flex-col justify-center w-10 h-10 gap-1">
          <div className="w-4/5 h-[0.35rem] bg-black rounded-sm"></div>
          <div className="w-4/5 h-[0.35rem] bg-black rounded-sm"></div>
          <div className="self-start w-1/2 h-[0.35rem] bg-black rounded-sm"></div>
        </div>

        <div className="h-36 w-16 absolute right-7 justify-center gap-3 top-[40%] flex flex-col items-start pl-2">
          <span
            className={`h-3 w-3 bg-black ${
              section === 0 ? "opacity-100" : "opacity-35"
            } transition-opacity duration-1000 ease-in-out`}
          ></span>
          <span
            className={`h-3 w-3 bg-black ${
              section === 1 ? "opacity-100" : "opacity-35"
            } transition-opacity duration-1000 ease-in-out`}
          ></span>
          <span
            className={`h-3 w-3 bg-black ${
              section === 2 ? "opacity-100" : "opacity-35"
            } transition-opacity duration-1000 ease-in-out`}
          ></span>
        </div>
      </section>
    </>
  );
}
