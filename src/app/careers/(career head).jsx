"use client";
import React from "react";
import MotionDiv from "../(components)/(animation components)/motion";

function CareerHead() {
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3, duration: 0.5 }}
      className="w-2 sm:w-1/2 flex items-center"
    >
      <h1 className="text-medium sm:text-4xl lg:text-6xl font-medium pl-10 md:pl-36 ">
        Let&apos;s
        <span className="text-red-500"> make great things happen!</span>
      </h1>
    </MotionDiv>
  );
}

export default CareerHead;
