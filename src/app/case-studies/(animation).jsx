"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Study3 from "../(components)/(body components)/study3";
import Study2 from "../(components)/(body components)/study2";
import MotionDiv from "../(components)/(animation components)/motion";
import Study1 from "../(components)/(body components)/study1";

function Body() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const is1InView = useInView(ref1);
  const is2InView = useInView(ref2);
  const isText1InView = useInView(textRef1);
  const isText2InView = useInView(textRef2);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const textControls1 = useAnimation();
  const textControls2 = useAnimation();

  useEffect(() => {
    if (is1InView) {
      controls1.start("visible");
    }
    if (is2InView) {
      controls2.start("visible");
    }
    if (isText1InView) {
      textControls1.start("visible");
    }
    if (isText2InView) {
      textControls2.start("visible");
    }
  }, [is1InView, is2InView, isText1InView, isText2InView]);

  return (
    <div>
      <motion.p
        variants={{
          hidden: { opacity: 0.2, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="text-5xl sm:text-6xl w-full text-center font-medium p-5"
      >
        Case Studies
      </motion.p>
      <MotionDiv
        variants={{
          hidden: { opacity: 0.2, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col sm:flex-row lg:px-20 lg:mx-44 py-14 gap-8"
      >
        <div className="w-full sm:w-2/3">
          <Study1 />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-start items-start gap-5 p-3">
          <h1 className="text-4xl sm:text-6xl font-medium pt-14">
            Business Growth
          </h1>
          <motion.p
            variants={{
              hidden: { opacity: 1, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg"
          >
            Assisted a prominent Financial Services provider in India for its
            digital transformation of their business model and triggered 60%
            growth.
          </motion.p>
          <Button color="danger">
            <Link href="/case-study-1">View Case Study</Link>
          </Button>
        </div>
      </MotionDiv>
      <MotionDiv
        ref={ref1}
        variants={{
          hidden: { opacity: 0.2, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls1}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col-reverse sm:flex-row lg:px-20 lg:mx-44 pb-14 gap-8"
      >
        <div className="w-full sm:w-1/3 flex flex-col justify-start items-start gap-5 p-3">
          <h1 className="text-4xl sm:text-6xl font-medium pt-14">
            Digital Expansion
          </h1>
          <motion.p
            ref={textRef1}
            variants={{
              hidden: { opacity: 1, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControls1}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg"
          >
            Helped set up a Telecom BSS provider to some of the world&apos;s
            largest telecom operators to provide a natural extension of its
            platform that is integrated with a digital banking platform.
          </motion.p>
          <Button color="danger">
            <Link href="/case-study-2">View Case Study</Link>
          </Button>
        </div>
        <div className="w-full sm:w-2/3">
          <Study2 />
        </div>
      </MotionDiv>
      <MotionDiv
        ref={ref2}
        variants={{
          hidden: { opacity: 0.2, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls2}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col sm:flex-row lg:px-20 lg:mx-44 pb-14 gap-8"
      >
        <div className="w-full sm:w-2/3">
          <Study3 />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-start items-start gap-5 p-3">
          <h1 className="text-4xl sm:text-6xl font-medium pt-14">
            Business Consulting
          </h1>
          <motion.p
            ref={textRef2}
            variants={{
              hidden: { opacity: 1, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControls2}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg"
          >
            Developed business-friendly regulations and sector specific
            licensing models, where we worked with stakeholders to help fine –
            tune the proposed regulations under the existing regulatory
            frameworks.
          </motion.p>
          <Button color="danger">
            <Link href="/case-study-3">View Case Study</Link>
          </Button>
        </div>
      </MotionDiv>
    </div>
  );
}

export default Body;
