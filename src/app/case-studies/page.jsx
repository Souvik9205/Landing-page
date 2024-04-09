import React from "react";
import Link from "next/link";
import Study1 from "../(components)/(body components)/study1";
import { Button } from "@nextui-org/react";
import Study3 from "../(components)/(body components)/study3";
import Study2 from "../(components)/(body components)/study2";

function page() {
  return (
    <div className="px-3">
      <h1 className="text-5xl sm:text-6xl w-full text-center font-medium p-5">
        Case Studies
      </h1>
      <div className="flex flex-col sm:flex-row lg:px-20 lg:mx-44 py-14 gap-8">
        <div className="w-full sm:w-2/3">
          <Study1 />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-start items-start gap-5 p-3">
          <h1 className="text-4xl sm:text-6xl font-medium pt-14">
            Business Growth
          </h1>
          <p className="text-lg">
            Assisted a prominent Financial Services provider in India for its
            digital transformation of their business model and triggered 60%
            growth.
          </p>
          <Button color="danger">
            <Link href="/case-study-1">View Case Study</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row lg:px-20 lg:mx-44 pb-14 gap-8">
        <div className="w-full sm:w-1/3 flex flex-col justify-start items-start gap-5 p-3">
          <h1 className="text-4xl sm:text-6xl font-medium pt-14">
            Digital Expansion
          </h1>
          <p className="text-lg">
            Helped set up a Telecom BSS provider to some of the world&apos;s
            largest telecom operators to provide a natural extension of its
            platform that is integrated with a digital banking platform.
          </p>
          <Button color="danger">
            <Link href="/case-study-2">View Case Study</Link>
          </Button>
        </div>
        <div className="w-full sm:w-2/3">
          <Study2 />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:px-20 lg:mx-44 pb-14 gap-8">
        <div className="w-full sm:w-2/3">
          <Study3 />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-start items-start gap-5 p-3">
          <h1 className="text-4xl sm:text-6xl font-medium pt-14">
            Business Consulting
          </h1>
          <p className="text-lg">
            Developed business-friendly regulations and sector specific
            licensing models, where we worked with stakeholders to help fine –
            tune the proposed regulations under the existing regulatory
            frameworks.
          </p>
          <Button color="danger">
            <Link href="/case-study-3">View Case Study</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
