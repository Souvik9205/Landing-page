import React from "react";
import Image1 from "./(body components)/Image1";
import Image2 from "./(body components)/image2";

function Body() {
  return (
    <div className="px-0 md:px-5">
      <div className="flex flex-col-reverse md:flex-row pb-20 md:pt-8 pt-2 fade-in">
        <div className="md:w-2/5 flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono">
            Disruptive Solutions
          </h1>
          <p className="text-lg text-gray-800  md:w-auto md:h-auto w-full h-full">
            We provide integrated solutions using emerging technologies and
            extensive consulting to match your business needs
          </p>
        </div>
        <div className="md:w-3/5">
          <Image1 />
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-0 md:py-20 fade-in">
        <div className="md:w-1/2 ">
          <Image2 />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center items-center p-10">
          <h1 className="text-5xl lg:text-6xl font-medium font-mono">
            Think <span className="text-red-500">Beyond</span> Business
          </h1>
          <p className="text-lg text-gray-800 w-full md:w-auto md:h-auto h-full">
            We transform visions into reality for businesses across borders with
            our expertise, contemplating organizational needs for its
            performance, allowing the businesses to focus more on its growth,
            expansion and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
