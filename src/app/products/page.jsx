"use client";
import React from "react";
import { motion } from "framer-motion";
import Product1 from "../(components)/(body components)/product1";
import Product2 from "../(components)/(body components)/product2";
import Product3 from "../(components)/(body components)/product3";
import Product4 from "../(components)/(body components)/product4";
import Product5 from "../(components)/(body components)/product5";
import Product6 from "../(components)/(body components)/product6";
import Product7 from "../(components)/(body components)/product7";
import Product8 from "../(components)/(body components)/product8";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const components = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

function page() {
  return (
    <div className="md:px-14 px-2 py-8">
      <div className="px-0 lg:px-28">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="lg:mx-28"
        >
          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:pb-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
                Workflow Management
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right">
                This service will help our Clients to make workflows ranging
                from handling service tickets to managing Projects, online
                purchase orders etc.
              </p>
            </div>
            <div className="md:w-1/2 ">
              <Product1 />
            </div>
          </motion.div>

          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:py-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 ">
              <Product2 />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
                Sales Workforce Management
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left">
                Managing the Sales team end to end is now convenient using our
                Sales workforce service. This includes managing commissioning,
                hierarchy, closures and various other aspects of Sales.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:py-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
                Digital Partner Relationship Management
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right">
                Our Partnership management tool has made our clients to onboard
                more number of partners on their platform which in turn benefit
                their customers with more Products, choices and better pricing
              </p>
            </div>
            <div className="md:w-1/2 ">
              <Product3 />
            </div>
          </motion.div>

          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:py-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 ">
              <Product4 />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
                DiWa
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left">
                We have a core mobile money management ecosystem providing a
                wide range of financial services like money transfer, bill
                payments, savings account etc.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:py-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
                Contracts Management
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right">
                This tool helps our clients in managing arrangements between
                various partners, agents and other contractual partners on the
                terms and conditions on providing services/products in
                partnership
              </p>
            </div>
            <div className="md:w-1/2 ">
              <Product5 />
            </div>
          </motion.div>

          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:py-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 ">
              <Product6 />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
                Digital Voice of Customer
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left">
                This is one of the most advanced and smart solution to know the
                sentiments of Customers. This is done while using various
                customer interaction points, making sense out of the raw data
                and decision making on action items for all customers
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:py-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-right">
                Digital Stock Management
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-right">
                This is a stock management capability we provide to our Clients.
                This includes both Logical and Physical product tracking.
              </p>
            </div>
            <div className="md:w-1/2 ">
              <Product7 />
            </div>
          </motion.div>

          <motion.div
            variants={components}
            className="flex flex-col md:flex-row py-0 md:py-20  pb-8 sm:pb-0"
          >
            <div className="md:w-1/2 ">
              <Product8 />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
              <h1 className="text-5xl lg:text-6xl font-medium font-mono text-left">
                Lead Management
              </h1>
              <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full text-left">
                Customer relationship management is one of the most crucial part
                of a business. Our Lead management software help clients to
                track the whole of the sales pipeline from Lead generation to
                qualifying the lead, sending proposals, conducting demos and
                finally closing the deal
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default page;
