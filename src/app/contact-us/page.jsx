import React from "react";
import { Button } from "@nextui-org/react";
import Instagram from "../(components)/(footer components)/instaLogo";
import LinkedIn from "../(components)/(footer components)/linkedInLogo";
import Facebook from "../(components)/(footer components)/facebookLogo";

function page() {
  return (
    <div className="sm:px-20 lg:mx-40">
      <h1 className="text-6xl text-red-500 font-medium">Contact Us</h1>
      <div className="flex sm:flex-row flex-col py-10">
        <div className="w-full sm:w-2/3 p-3">
          <form>
            <div>
              <h1 className="text-xl">
                Name <span className="text-gray-500">(required)</span>
              </h1>
              <div className="flex gap-4">
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-lg pt-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="border border-gray-500 p-2 w-full"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-lg pt-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="border border-gray-500 p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">
                <h1 className="text-xl">
                  Email <span className="text-gray-500">(required)</span>
                </h1>
              </label>
              <input
                type="email"
                required
                className="border border-gray-500 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">
                <h1 className="text-xl">
                  Subject <span className="text-gray-500">(required)</span>
                </h1>
              </label>
              <input
                type="text"
                required
                className="border border-gray-500 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">
                <h1 className="text-xl">
                  Message <span className="text-gray-500">(required)</span>
                </h1>
              </label>
              <textarea
                required
                className="border border-gray-500 p-2 w-full"
              ></textarea>
            </div>
            <div className="mb-4">
              <Button color="danger" radius="none" size="lg">
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-7 w-full sm:w-1/3 pl-10">
          <p className="text-2xl ">
            Mail us at{" "}
            <span className="text-red-500">support@pericius.com</span>
          </p>

          <p className="text-2xl">
            Currently we operate out of{" "}
            <span className="text-red-500">India, Nigeria and Dubai</span>
          </p>

          <p className="text-red-500 pt-5 text-2xl">Our address: </p>
          <p className="text-2xl">
            <span className="font-medium">
              Pericius Technologies Computer Systems Software Design
            </span>{" "}
            808 Burlington Tower, Business Bay, Dubai. P.O. Box 337382
          </p>
          <div className="flex gap-4 py-3">
            <Instagram />
            <LinkedIn />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
