"use client";
import React from "react";
import Sol1 from "../(components)/(core components)/Solution1";
import Sol2 from "../(components)/(core components)/solution2";
import MotionDiv from "../(components)/(animation components)/motion";

function Row1() {
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex sm:flex-row flex-col gap-10 py-16 "
    >
      <div className="px-10 lg:px-20 sm:w-1/2">
        <Sol1 />
        <h2 className="text-3xl text-red-500 p-2 pt-10">Payment Solutions</h2>
        <p>
          Our key solutioning is around keeping payments as the disruptor in the
          financial industry. We have been able to provide for a holistic
          solution around payments using external payment gateway integration
          points.
        </p>
      </div>
      <div className="px-10 lg:px-20 sm:w-1/2">
        <Sol2 />
        <h2 className="text-3xl text-red-500 p-2 pt-10">Telecommunications</h2>
        <p>
          We have the next generation of banking solution which is easily
          integrable and can be packaged with the telecom/mobility stack.
        </p>
      </div>
    </MotionDiv>
  );
}

export default Row1;
