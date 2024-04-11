import React from "react";
import ProductCore from "./(product components)";

function page() {
  return (
    <div className="md:px-14 px-2 py-8">
      <div className="px-0 lg:px-28">
        <div className="lg:mx-28">
          <ProductCore />
        </div>
      </div>
    </div>
  );
}

export default page;
