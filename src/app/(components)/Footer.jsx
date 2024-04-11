import React from "react";
import LogoSmall from "./(footer components)/Logo-small";
import Instagram from "./(footer components)/instaLogo";
import LinkedIn from "./(footer components)/linkedInLogo";
import Facebook from "./(footer components)/facebookLogo";
import Link from "next/link";

function Footer() {
  return (
    <div className="sm:px-16 py-6 px-0">
      <div className="border border-gray-700 border-t-0 border-l-0 border-r-0 border-b-1 p-4">
        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <div className="sm:w-4/6 flex flex-col gap-5">
            <LogoSmall />
            <p className="text-gray-700 text-lg">info@pericius.com</p>
            <div className="flex w-full gap-3">
              <a href="#" target="_blank">
                <Instagram />
              </a>
              <a href="#" target="_blank">
                <LinkedIn />
              </a>
              <a href="#" target="_blank">
                <Facebook />
              </a>
            </div>
          </div>
          <div className="sm:w-1/6">
            <Link href="/products">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Products
              </p>
            </Link>
            <Link href="/solutions">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Solutions
              </p>
            </Link>
            <Link href="/about-us">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                About Us
              </p>
            </Link>
            <Link href="/careers">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Careers
              </p>
            </Link>
            <Link href="/case-studies">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Case Studies
              </p>
            </Link>
          </div>
          <div className="sm:w-1/6">
            <Link href="/terms-and-conditions" target="_blank">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Terms & Conditions
              </p>
            </Link>

            <Link href="/privacy-policy" target="_blank">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Privacy Policy
              </p>
            </Link>

            <Link href="/cookie-policy" target="_blank">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Cookie Policy
              </p>
            </Link>

            <Link href="/contact-us">
              <p className="text-red-600 text-lg underline underline-offset-2 hover:text-black hover:font-medium hover:underline-offset-4 hover:cursor-pointer">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-sm sm:text-lg text-gray-900 p-10 pb-0">
          © 2021 Pericius Technologies Computer Systems Software Design
        </p>
      </div>
    </div>
  );
}

export default Footer;
