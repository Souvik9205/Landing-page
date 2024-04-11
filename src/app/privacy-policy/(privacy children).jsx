"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function PrivacyHead() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <motion.p
        ref={ref}
        variants={{
          hidden: { opacity: 0.5, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        className="text-4xl sm:text-6xl text-center font-medium sm:px-3 pb-8"
      >
        PRIVACY POLICY
      </motion.p>
    </div>
  );
}

export default PrivacyHead;
