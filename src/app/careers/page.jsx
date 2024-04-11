import React from "react";
import CBanner from "../(components)/(body components)/careerBanner";
import CareerHead from "./(career head)";

function page() {
  return (
    <div className="lg:px-48 lg:m-10 p-5">
      <div className="flex w-full ">
        <CareerHead />
        <div className="w-full sm:w-1/2">
          <CBanner />
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-medium py-10">
          We&apos;re always looking for people who want to make real
          <span className="text-red-500"> impact.</span>
        </h1>
        <p className="text-lg pt-5 pb-3">
          We are a collective of smart people trying to solve real world
          challenges, and we believe we can create real impact through our work.
          We believe that teams perform best when they are diverse and when
          their potential is allowed to be unleashed.
        </p>
        <p className="text-lg py-3">
          Above all, we are passionate about what we do, and we have fun while
          doing it.
        </p>
        <p className="text-lg py-3 pb-10">
          Do you think we may be a good fit? Get in touch with us through{" "}
          <span className="text-red-500 underline"> careers@pericius.com</span>
        </p>

        <h2 className="text-5xl font-medium py-20">
          Job <span className="text-red-500">openings</span>
        </h2>
      </div>
    </div>
  );
}

export default page;
