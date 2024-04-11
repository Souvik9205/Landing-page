"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Core1 from "./(core components)/core1";
import Core2 from "./(core components)/core2";
import Core3 from "./(core components)/core3";
import Core4 from "./(core components)/core4";

function Core() {
  const ref = useRef(null);
  const component1 = useRef(null);
  const component2 = useRef(null);
  const component3 = useRef(null);
  const component4 = useRef(null);
  const isInView = useInView(ref);
  const isComp1InView = useInView(component1);
  const isComp2InView = useInView(component2);
  const isComp3InView = useInView(component3);
  const isComp4InView = useInView(component4);
  const mainControls = useAnimation();
  const compControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (isComp1InView) {
      compControls.start("visible");
    }
    if (isComp2InView) {
      compControls.start("visible");
    }
    if (isComp3InView) {
      compControls.start("visible");
    }
    if (isComp4InView) {
      compControls.start("visible");
    }
  }, [isComp1InView, isComp2InView, isComp3InView, isComp4InView, isInView]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5">
        <motion.p
          ref={ref}
          variants={{
            hidden: { opacity: 0.2, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
          className="text-4xl md:text-6xl  font-semibold p-10"
        >
          Core Expertise
        </motion.p>
        <div className="flex gap-5 flex-col md:flex-row text-center justify-center p-10">
          <motion.div
            ref={component1}
            variants={{
              hidden: { opacity: 0.2, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={compControls}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="flex flex-col gap-5 md:gap-8"
          >
            <Core1 />
            <h2 className="text-3xl font-bold">Business Automation</h2>
            <p className="text-base lg:text-lg text-gray-700">
              We work to automate disjointed or complicated workflows and
              transform it into simple solutions thus increasing overall
              operational efficiency.
            </p>
          </motion.div>
          <motion.div
            ref={component2}
            variants={{
              hidden: { opacity: 0.2, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={compControls}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="flex flex-col gap-5 md:gap-8"
          >
            <Core2 />
            <h2 className="text-3xl font-bold">Artificial Intelligence</h2>
            <p className="text-base lg:text-lg text-gray-700">
              AI is becoming part of daily life literally in every way. We are
              channelizing our workforce to create imprint by revolutionizing
              our client’s business and society.
            </p>
          </motion.div>
          <motion.div
            ref={component3}
            variants={{
              hidden: { opacity: 0.2, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={compControls}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="flex flex-col gap-5 md:gap-8"
          >
            <Core3 />
            <h2 className="text-3xl font-bold">Product Design</h2>
            <p className="text-base lg:text-lg text-gray-700">
              We design to inspire and add competitive advantage, reduce
              complexities and captivate end-users by delivering world-class
              products to clients.
            </p>
          </motion.div>
          <motion.div
            ref={component4}
            variants={{
              hidden: { opacity: 0.2, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={compControls}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="flex flex-col gap-5 md:gap-8"
          >
            <Core4 />
            <h2 className="text-3xl font-bold">Blockchain Technology</h2>
            <p className="text-base lg:text-lg text-gray-700">
              We are early adopters of blockchain to come up with
              next-generation secure digital assets that support multi-party
              agreements and automates transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Core;
