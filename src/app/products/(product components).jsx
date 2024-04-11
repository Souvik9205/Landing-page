"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Product1 from "../(components)/(body components)/product1";
import Product2 from "../(components)/(body components)/product2";
import Product3 from "../(components)/(body components)/product3";
import Product4 from "../(components)/(body components)/product4";
import Product5 from "../(components)/(body components)/product5";
import Product6 from "../(components)/(body components)/product6";
import Product7 from "../(components)/(body components)/product7";
import Product8 from "../(components)/(body components)/product8";
import MotionDiv from "../(components)/(animation components)/motion";

function ProductCore() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);
  const textRef6 = useRef(null);
  const textRef7 = useRef(null);

  const isText1InView = useInView(textRef1);
  const isText2InView = useInView(textRef2);
  const isText3InView = useInView(textRef3);
  const isText4InView = useInView(textRef4);
  const isText5InView = useInView(textRef5);
  const isText6InView = useInView(textRef6);
  const isText7InView = useInView(textRef7);
  const is1InView = useInView(ref1);
  const is2InView = useInView(ref2);
  const is3InView = useInView(ref3);
  const is4InView = useInView(ref4);
  const is5InView = useInView(ref5);
  const is6InView = useInView(ref6);
  const is7InView = useInView(ref7);
  const main1Controls = useAnimation();
  const main2Controls = useAnimation();
  const main3Controls = useAnimation();
  const main4Controls = useAnimation();
  const main5Controls = useAnimation();
  const main6Controls = useAnimation();
  const main7Controls = useAnimation();
  const textControl1 = useAnimation();
  const textControl2 = useAnimation();
  const textControl3 = useAnimation();
  const textControl4 = useAnimation();
  const textControl5 = useAnimation();
  const textControl6 = useAnimation();
  const textControl7 = useAnimation();

  useEffect(() => {
    if (isText1InView) {
      textControl1.start("visible");
    }
    if (isText2InView) {
      textControl2.start("visible");
    }
    if (isText3InView) {
      textControl3.start("visible");
    }
    if (isText4InView) {
      textControl4.start("visible");
    }
    if (isText5InView) {
      textControl5.start("visible");
    }
    if (isText6InView) {
      textControl6.start("visible");
    }
    if (isText7InView) {
      textControl7.start("visible");
    }
    if (is1InView) {
      main1Controls.start("visible");
    }
    if (is2InView) {
      main2Controls.start("visible");
    }
    if (is3InView) {
      main3Controls.start("visible");
    }
    if (is4InView) {
      main4Controls.start("visible");
    }
    if (is5InView) {
      main5Controls.start("visible");
    }
    if (is6InView) {
      main6Controls.start("visible");
    }
    if (is7InView) {
      main7Controls.start("visible");
    }
  }, [
    is1InView,
    is2InView,
    is3InView,
    is4InView,
    is5InView,
    is6InView,
    is7InView,
    isText1InView,
    isText2InView,
    isText3InView,
    isText4InView,
    isText5InView,
    isText6InView,
    isText7InView,
  ]);

  return (
    <div>
      <MotionDiv
        variants={{
          hidden: { opacity: 0.2, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:pb-24  pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
            Workflow Management
          </h1>
          <motion.p
            variants={{
              hidden: { opacity: 1, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right"
          >
            This service will help our Clients to make workflows ranging from
            handling service tickets to managing Projects, online purchase
            orders etc.
          </motion.p>
        </div>
        <div className="md:w-1/2 ">
          <Product1 />
        </div>
      </MotionDiv>

      <MotionDiv
        ref={ref1}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={main1Controls}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:py-24  pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 ">
          <Product2 />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
            Sales Workforce Management
          </h1>
          <motion.p
            ref={textRef1}
            variants={{
              hidden: { opacity: 1, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl1}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left"
          >
            Managing the Sales team end to end is now convenient using our Sales
            workforce service. This includes managing commissioning, hierarchy,
            closures and various other aspects of Sales.
          </motion.p>
        </div>
      </MotionDiv>

      <MotionDiv
        ref={ref2}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={main2Controls}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:py-24  pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
            Digital Partner Relationship Management
          </h1>
          <motion.p
            ref={textRef2}
            variants={{
              hidden: { opacity: 1, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl2}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right"
          >
            Our Partnership management tool has made our clients to onboard more
            number of partners on their platform which in turn benefit their
            customers with more Products, choices and better pricing
          </motion.p>
        </div>
        <div className="md:w-1/2 ">
          <Product3 />
        </div>
      </MotionDiv>

      <MotionDiv
        ref={ref3}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={main3Controls}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:py-24  pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 ">
          <Product4 />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
            DiWa
          </h1>
          <motion.p
            ref={textRef3}
            variants={{
              hidden: { opacity: 1, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl3}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left"
          >
            We have a core mobile money management ecosystem providing a wide
            range of financial services like money transfer, bill payments,
            savings account etc.
          </motion.p>
        </div>
      </MotionDiv>

      <MotionDiv
        ref={ref4}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={main4Controls}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:py-24  pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
            Contracts Management
          </h1>
          <motion.p
            ref={textRef4}
            variants={{
              hidden: { opacity: 1, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl4}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right"
          >
            This tool helps our clients in managing arrangements between various
            partners, agents and other contractual partners on the terms and
            conditions on providing services/products in partnership
          </motion.p>
        </div>
        <div className="md:w-1/2 ">
          <Product5 />
        </div>
      </MotionDiv>

      <MotionDiv
        ref={ref5}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={main5Controls}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:py-24  pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 ">
          <Product6 />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
            Digital Voice of Customer
          </h1>
          <motion.p
            ref={textRef5}
            variants={{
              hidden: { opacity: 1, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl5}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left"
          >
            This is one of the most advanced and smart solution to know the
            sentiments of Customers. This is done while using various customer
            interaction points, making sense out of the raw data and decision
            making on action items for all customers
          </motion.p>
        </div>
      </MotionDiv>

      <MotionDiv
        ref={ref6}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={main6Controls}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:py-24 pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
            Digital Stock Management
          </h1>
          <motion.p
            ref={textRef6}
            variants={{
              hidden: { opacity: 1, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl6}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right"
          >
            This is a stock management capability we provide to our Clients.
            This includes both Logical and Physical product tracking.
          </motion.p>
        </div>
        <div className="md:w-1/2 ">
          <Product7 />
        </div>
      </MotionDiv>

      <MotionDiv
        ref={ref7}
        variants={{
          hidden: { opacity: 0.5, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={main7Controls}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col md:flex-row py-0 md:py-24  pb-8 sm:pb-0"
      >
        <div className="md:w-1/2 ">
          <Product8 />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
            Lead Management
          </h1>
          <motion.p
            ref={textRef7}
            variants={{
              hidden: { opacity: 1, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={textControl7}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left"
          >
            Customer relationship management is one of the most crucial part of
            a business. Our Lead management software help clients to track the
            whole of the sales pipeline from Lead generation to qualifying the
            lead, sending proposals, conducting demos and finally closing the
            deal
          </motion.p>
        </div>
      </MotionDiv>
    </div>
  );
}

export default ProductCore;
