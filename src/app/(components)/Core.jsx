import React from "react";
import Core1 from "./(core components)/core1";
import Core2 from "./(core components)/core2";
import Core3 from "./(core components)/core3";
import Core4 from "./(core components)/core4";

function Core() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl md:text-6xl  font-semibold p-10">
          Core Expertise
        </h1>
        <div className="flex gap-5 flex-col md:flex-row text-center justify-center p-10">
          <div className="flex flex-col gap-5 md:gap-8">
            <Core1 />
            <h2 className="text-3xl font-bold">Business Automation</h2>
            <p className="text-base lg:text-lg text-gray-700">
              We work to automate disjointed or complicated workflows and
              transform it into simple solutions thus increasing overall
              operational efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            <Core2 />
            <h2 className="text-3xl font-bold">Artificial Intelligence</h2>
            <p className="text-base lg:text-lg text-gray-700">
              AI is becoming part of daily life literally in every way. We are
              channelizing our workforce to create imprint by revolutionizing
              our client’s business and society.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            <Core3 />
            <h2 className="text-3xl font-bold">Product Design</h2>
            <p className="text-base lg:text-lg text-gray-700">
              We design to inspire and add competitive advantage, reduce
              complexities and captivate end-users by delivering world-class
              products to clients.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            <Core4 />
            <h2 className="text-3xl font-bold">Blockchain Technology</h2>
            <p className="text-base lg:text-lg text-gray-700">
              We are early adopters of blockchain to come up with
              next-generation secure digital assets that support multi-party
              agreements and automates transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Core;
