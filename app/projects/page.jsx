import Container from "@/components/Container";
import { projects } from "@/constants/data";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Banner from "@/components/Banner";
export default function Projects() {
  return (
    <>
      <div className="py-[60px]"
      >
        <Container>
          <h2 className="text-[35px] text-green font-semibold">Projects</h2>
          <p className="text-[13px] mb-[50px]">
            Here are some of the projects I'd like to share
          </p>
          <div className="grid sm:grid-cols-3 gap-[20px]">
            {projects.map((item, i) => (
              <div className="col bg-white rounded-md shadow-md cursor-pointer">
                <img src={item.img} alt="" className="h-[200px] object-cover w-full" />
                <div className="p-[20px]">
                  <h2 className="text-[20px] mb-[15px] font-semibold">
                    {item.name}
                  </h2>
                  <p className="text-[14px] font-medium">
                    {item.desc.slice(0, 70)}
                  </p>
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-3 pt-[40px]">
                      <Link
                        href={item.source}
                        className="flex items-center gap-2"
                      >
                        <FaGithub />
                        Source code
                      </Link>
                      <Link
                        href={item.live}
                        className="flex items-center gap-2"
                      >
                        <FaEye />
                        Live
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex text-center mt-[80px] flex-col items-center justify-center gap-3">
            <h3 className="text-[20px] mb-[15px] font-semibold">
              I am currently building new projects and learning backend
              development to expand my skill set beyond frontend.
            </h3>
            <h4 className="">
              Visit my github to see some of the latest projects{" "}
              <Link
                className="text-green font-semibold"
                href={"https://github.com/HammadMugha?tab=repositories"}
              >
                Github
              </Link>
            </h4>
          </div>
        </Container>
      </div>
      <Banner />
    </>
  );
}
