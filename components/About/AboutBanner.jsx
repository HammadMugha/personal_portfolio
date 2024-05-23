"use client";
import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[600px] FlexCenter flex-col"
    >
      <Container>
        <div className="grid sm:grid-cols-2 gap-[30px] items-center">
          <div className="col min-h-[300px]">
            <div className="relative">
              <Image
                src="/ne.jpg"
                width={500} height={500}
                alt=""
                className="w-full object-contain h-full rounded-[30px] border-[8px] border-green "
              />
            </div>
          </div>
          <div className="col sm:text-left text-center">
            <h2 className="text-green sm:text-[60px] text-[25px] font-bold sm:leading-[65px]">
              Hi, I'm Hammad <br /> Mughal
            </h2>
            <p className="my-[30px]">
              I turn vision into reality with code. Whether I'm working on a
              website or any digital product, I bring my commitment to design
              excellence and user-centered thinking to every project I work on.
            </p>
            <p>
              Explore my latest projects showcasing my expertise in Reactjs,
              Nextjs, Javascript, Typescript and web development.
            </p>
            <div className="flex cursor-pointer items-center gap-5 justify-end w-full mt-[40px]">
              <img
                src="pk.avif"
                className="w-[60px] rounded-lg shadow-md object-cover"
              />
              <h4 className="text-16px font-semibold">Lahore,Pakistan</h4>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
