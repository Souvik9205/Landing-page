"use client";
import React, { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import MotionDiv from "../(components)/(animation components)/motion";
import Sol3 from "../(components)/(core components)/solution3";
import Sol4 from "../(components)/(core components)/solution4";

function Row2() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <MotionDiv
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationControls}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex sm:flex-row flex-col gap-10 py-16"
    >
      <div className="px-10 lg:px-20 sm:w-1/2">
        <Sol3 />
        <h2 className="text-3xl text-red-500 p-2 pt-10">Treasury Management</h2>
        <p>
          Treasury is key and central to the core business of our clients
          (MNCs/SMEs/MSMEs). We help our clients in planning and managing their
          cash flows, P & L and Business Accounts Management in general.
        </p>
      </div>
      <div className="px-10 lg:px-20 sm:w-1/2">
        <Sol4 />
        <h2 className="text-3xl text-red-500 p-2 pt-10">Insurance</h2>
        <p>
          Micro-insurance is one of the key areas where we have leveraged our
          financial services business. We have the capabilities to offer
          micro-insurance solutions to cater to the objectives of financial
          inclusion.
        </p>
      </div>
    </MotionDiv>
  );
}

export default Row2;
