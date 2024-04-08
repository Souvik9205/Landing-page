import React from "react";
import Sol1 from "../(components)/(core components)/Solution1";
import Sol2 from "../(components)/(core components)/solution2";
import Sol3 from "../(components)/(core components)/solution3";
import Sol4 from "../(components)/(core components)/solution4";

function page() {
  return (
    <div className="p-5 sm:px-32 md:mx-36">
      <div className="w-full text-center justify-center items center">
        <h1 className="text-5xl p-3">
          <span className="text-red-600">Innovative</span> Solutions
        </h1>
        <p className="text-lg p-5">
          Ground breaking solutions across multiple sectors
        </p>
      </div>
      <div className="flex gap-10 py-16 ">
        <div className="px-20">
          <Sol1 />
          <h2 className="text-3xl text-red-500 p-2 pt-10">Payment Solutions</h2>
          <p>
            Our key solutioning is around keeping payments as the disruptor in
            the financial industry. We have been able to provide for a holistic
            solution around payments using external payment gateway integration
            points.
          </p>
        </div>
        <div className="px-20">
          <Sol2 />
          <h2 className="text-3xl text-red-500 p-2 pt-10">
            Telecommunications
          </h2>
          <p>
            We have the next generation of banking solution which is easily
            integrable and can be packaged with the telecom/mobility stack.
          </p>
        </div>
      </div>
      <div className="flex gap-10 py-16">
        <div className="px-20">
          <Sol3 />
          <h2 className="text-3xl text-red-500 p-2 pt-10">
            Treasury Management
          </h2>
          <p>
            Treasury is key and central to the core business of our clients
            (MNCs/SMEs/MSMEs). We help our clients in planning and managing
            their cash flows, P & L and Business Accounts Management in general.
          </p>
        </div>
        <div className="px-20">
          <Sol4 />
          <h2 className="text-3xl text-red-500 p-2 pt-10">Insurance</h2>
          <p>
            Micro-insurance is one of the key areas where we have leveraged our
            financial services business. We have the capabilities to offer
            micro-insurance solutions to cater to the objectives of financial
            inclusion.
          </p>
        </div>
      </div>
    </div>
  );
}
export default page;
