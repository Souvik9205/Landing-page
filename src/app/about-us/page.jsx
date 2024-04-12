import React from "react";
import Banner from "../(components)/(core components)/Banner";
import About1 from "../(components)/(core components)/about1";
import About2 from "../(components)/(core components)/about2";
import About3 from "../(components)/(core components)/about3";
import About4 from "../(components)/(core components)/about4";
import About5 from "../(components)/(core components)/about5";

function page() {
  return (
    <div>
      <div className="flex w-full bg-red-500 ">
        <div className="w-2 sm:w-1/3 flex items-center p-1">
          <h1 className="text-medium sm:text-4xl lg:text-6xl font-medium pl-10 md:pl-36 ">
            We’re all about collective
          </h1>
        </div>
        <div className="w-full sm:w-2/3">
          <Banner />
        </div>
      </div>
      <div className="lg:px-36 p-5 sm:p-20 lg:mx-20">
        <div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 text-lg">
              We believe in contributing to collective growth of all
              stakeholders – our customers, investors, our employees & society
              by being the forefront of cutting edge technologies.
            </p>
            <br />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 text-lg">
              We are leaders in emergent technology and consulting in diverse
              industries. Our goal is to evolve and meet the requirements of our
              clients by pioneering new age technologies and designs. We
              continually work with clients across all sectors turning their
              insightful information to meet business requirements.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center p-8 flex-col gap-5">
          <h1 className="text-red-500 text-3xl sm:text-5xl font-medium text-center ">
            Our Mission
          </h1>
          <p className="text-gray-700 text-lg sm:text-2xl font-semibold  text-center">
            “Build client centric products and solutions across ever growing
            domains using cutting edge technologies and multi domain expertise.”
          </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center item-center sm:items-start gap-6 py-20">
          <div className="w-full sm:w-1/4 flex justify-center">
            <h1 className="text-red-500 text-3xl sm:text-5xl font-medium text-center ">
              Our Vision
            </h1>
          </div>
          <div className="sm:w-3/4 flex flex-row justify-center items-center p-2 sm:p-0">
            <ul className=" list-decimal ">
              <li className="py-2">
                <span className="text-red-500 underline">
                  Sustainable Profitability
                </span>
                - Corporate Sustainable Profitability is the belief that a
                ecologically, economically and socially conscious decision made
                by a corporate will be profitable to a business as well.
                Pericius believes that our business development model should
                focus on the consumer and must be economically and ecologically
                sustainable.
              </li>
              <li className="py-2">
                <span className="text-red-500 underline">Transformation</span>-
                We believe that true transformation can come about only when we
                have the courage to call out not just our wins, but our losses
                too. In order to push beyond the boundaries that we may have
                created for ourselves, courage is essential for bringing about
                transformation in the things that we do.
              </li>
              <li className="py-2">
                <span className="text-red-500 underline">
                  Customer Orientation
                </span>
                - Pericius believes in a customer oriented approach to
                developing our products and services. The final aim of our work
                is to satisfy the needs of our customers. To achieve this,
                employees at Pericius use various methodologies to work and
                collaborate effectively.
              </li>
              <li className="py-2">
                <span className="text-red-500 underline">3D Diversity</span>-
                Diversity and Inclusion is important in any organisation, now
                more than ever. However, today, diversity must not be limited to
                race, gender, etc. A more three dimensional approach to
                diversity and inclusion is necessary. Pericius’s vision of 3D
                Diversity enable collaboration. It helps employees empathise
                with each other and thus, work more efficiently to achieve the
                company mission.
              </li>
              <li className="py-2">
                <span className="text-red-500 underline">
                  Operational Excellence
                </span>
                - Pericius aims to achieve Operational Excellence by promoting a
                spirit of humility among its employees. The work systems of
                Pericius allows employees to make mistakes and learn from them.
                We also provide a system of support and mentorship to promote an
                atmosphere where one can accept their mistakes and improve upon
                them. Thus, Operational Excellence is achieved.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-500">
        <div className="sm:px-20 sm:mx-20 px-4">
          <div
            className="flex flex-col gap-8 border border-l-0
        border-r-0 border-t-0 border-white text-white"
          >
            <h1 className="text-6xl font-semibold text-center p-8">
              Core Values
            </h1>
            <About1 />
            <h2 className="text-2xl font-medium text-center pb-8">
              Empiricism
            </h2>
            <p className="text-lg text-center pb-8">
              Pericius believes that all our work must be fact-based,
              evidence-based and experience-based. Our process involves being
              transparent with employees as well as all stakeholders, inspecting
              our methods regularly and adjusting our systems based on empiric
              evidence. We use current experiences and evidence to assess how
              things might pan out in the future. Thus, our we can sustainably
              develop our business processes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-10 text-white">
            <div>
              <About2 />
              <h2 className="text-2xl font-medium text-center p-8">Courage</h2>
              <p className="text-lg text-center pb-8">
                Pericius aims to have a level of openness with all stakeholders
                so that, they would have the courage to say and do what needs to
                be done at the right time. This is necessary to promote a
                transformative spirit in the work done by the company.
              </p>
            </div>
            <div>
              <About3 />
              <h2 className="text-2xl font-medium text-center p-8">Humility</h2>
              <p className="text-lg text-center pb-8">
                Pericius strives to have an inclusive ecosystem where there is
                room to safely make mistakes and learn from them
              </p>
            </div>
            <div>
              <About4 />
              <h2 className="text-2xl font-medium text-center p-8">Honesty</h2>
              <p className="text-lg text-center pb-8">
                Honesty is an important prerequisite to promote three
                dimensional diversity. It is only when all stakeholders are
                honest about their needs, thoughts and opinions, that true
                development and collaboration be achieved.
              </p>
            </div>
            <div>
              <About5 />
              <h2 className="text-2xl font-medium text-center p-8">
                Lean Thinking
              </h2>
              <p className="text-lg text-center pb-8">
                The Lean Thinking business methodology at Pericius includes
                using the SCRUM methodology to systematically achieve our goals.
                To fulfil the vision of Customer Orientation, we at Pericius aim
                to eliminate obstacles that could deviate us from our
                organisational goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
