import React from "react";
import Row1 from "./(row1)";
import Row2 from "./(row2)";

function page() {
  return (
    <div className="p-2 lg:px-32 lg:mx-36">
      <div className="w-full text-center justify-center items center">
        <h1 className="text-5xl p-3">
          <span className="text-red-600">Innovative</span> Solutions
        </h1>
        <p className="text-lg p-5">
          Ground breaking solutions across multiple sectors
        </p>
      </div>
      <div>
        <Row1 />
      </div>
      <div>
        <Row2 />
      </div>
    </div>
  );
}
export default page;
