import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Footer(props) {
  const { section } = props;
  const ping = useRef();
  let pageInfo = "MAIN";

  useEffect(() => {
    if (ping.current) {
      gsap.to(ping.current, {
        scale: 2,
        duration: 0.7,
        opacity: 0.2,
        yoyo: true,
        repeat: -1,
      });
    }
  }, [section]);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-0 flex justify-between w-full h-16 px-6 "
    >
      <div className="flex items-center h-full gap-3 w-28 justify-evenly text-slate-500">
        <div className="h-[0.02rem] bg-slate-500 w-full"></div>
        <div className="">{pageInfo}</div>
      </div>

      {section == 0 && (
        <div className="grid w-16 h-full cursor-pointer place-content-center">
          <div className="place-content-center grid w-8 h-10 border-[2px] border-white rounded-full">
            <div className="grid w-5 border border-white rounded-full place-content-center h-7">
              <div
                ref={ping}
                className="place-content-center  grid w-2 h-2 bg-white border-[2px] border-blue-800 rounded-full"
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center h-full gap-4 px-2 w-fit">
        <div className="cursor-pointer">Github</div>
        <div className="cursor-pointer">Twitter</div>
        <div className="cursor-pointer">LinkedIn</div>
      </div>
    </motion.footer>
  );
}
