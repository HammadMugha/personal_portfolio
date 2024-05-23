"use client"
import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.div className="pt-[120px] min-h-[500px]"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
      <Container>
        <div className="pt-4">
          <h1 className="sm:text-[80px] text-[35px] text-green font-bold mb-3">
            Hammad Mughal
          </h1>
          <h3 className="text-2xl text-black font-medium mb-5">
            Frontend and React.js developer
          </h3>
          <h4 className="text-black text-[20px]">
            <span className="text-green">Hi</span>, I'm <span className="text-green">Hammad Mughal</span> , I turn vision into reality with code and
            design.
          </h4>
        </div>
      </Container>
    </motion.div>
  );
}
