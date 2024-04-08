import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 flex items-center justify-center w-full h-16 px-2 py-4 bg-transparent lg:h-20 "
    >
      <section className="h-full w-full lg:w-[90%] flex justify-between text-xl">
        <div className="cursor-pointer">Q</div>
      </section>
    </motion.header>
  );
}
