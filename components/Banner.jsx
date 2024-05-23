import React from "react";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="py-[50px]">
      <Container>
        <div className="bg-green rounded-xl py-[80px] px-[20px] flex-col FlexCenter">
          <Button
            text={"GET IN TOUCH"}
            style={"text-green bg-white rounded-full py-2"}
          />
          <h2 className="sm:text-[70px] text-[25px] text-white font-bold my-[40px]">
            <Link href={"asjh"}>hm9640802@gmail.com</Link>
          </h2>
          <Link href={"wa.me/03024099648"}>
          <Button
            text={"Send Message"}
            style={"text-green font-semibold bg-white rounded-md py-3 transitions hover:scale-110"}
            icon={true}
          />
          </Link>
        </div>
      </Container>
    </div>
  );
}
