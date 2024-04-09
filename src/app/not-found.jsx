import React from "react";
import Error404 from "./(components)/(body components)/error404";

function NotFound() {
  return (
    <div className="mx-0 md:mx-46 px-10 sm:px-20 w-full min-h-screen">
      <div className="sm:px-15 md:px-20 flex justify-center flex-col items-center w-full">
        <div className="w-full md:w-2/3">
          <Error404 />
        </div>

        <h1 className="text-4xl sm:text-6xl text-center font-medium sm:px-3 pb-8">
          Page Not Found
        </h1>
        <p className="text-lg py-2 px-3">
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or maybe you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
