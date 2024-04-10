"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Animation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Animation;
