"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import MotionDiv from "./(animation components)/motion";
import Image1 from "./(body components)/Image1";
import Image2 from "./(body components)/image2";

function Body() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const isTextInView = useInView(textRef);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const textControlL = useAnimation();
  const textControlR = useAnimation();

  useEffect(() => {
    if (isTextInView) {
      textControlL.start("visible");
      textControlR.start("visible");
    }
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, isTextInView]);

  return (
    <div className="px-0 md:px-5">
      <MotionDiv
        ref={ref}
        variants={{
          hidden: { opacity: 0.2, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col-reverse md:flex-row pb-20 md:pt-8 pt-2 "
      >
        <div className="md:w-2/5 flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono">
            Disruptive Solutions
          </h1>
          <motion.p
            ref={textRef}
            variants={{
              hidden: { opacity: 1, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800  md:w-auto md:h-auto w-full h-full"
          >
            We provide integrated solutions using emerging technologies and
            extensive consulting to match your business needs
          </motion.p>
        </div>
        <div className="md:w-3/5">
          <Image1 />
        </div>
      </MotionDiv>
      <MotionDiv
        ref={ref}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        className="flex flex-col md:flex-row py-0 md:py-20 "
      >
        <div className="md:w-1/2 ">
          <Image2 />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono">
            Think <span className="text-red-500">Beyond</span> Business
          </h1>
          <motion.p
            ref={textRef}
            variants={{
              hidden: { opacity: 1, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControlR}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full"
          >
            We transform visions into reality for businesses across borders with
            our expertise, contemplating organizational needs for its
            performance, allowing the businesses to focus more on its growth,
            expansion and sustainability.
          </motion.p>
        </div>
      </MotionDiv>
    </div>
  );
}

export default Body;
