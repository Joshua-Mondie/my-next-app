import React from "react";
import Cards from "./Cards";

const GetStarted = () => {
  return (
    <div>
      <h1 className=" text-4xl">Building Your Application</h1>
      <div>
        <h1 className="mt-8 leading-loose">
          Next.js provides the building blocks to create flexible, full-stack
          web applications. The guides in Building Your Application explain how
          to use these features and how to customize your application&apos;s
          behavior.
        </h1>
        <h1 className="mt-8 leading-loose text-justify">
          The sections and pages are organized sequentially, from basic to
          advanced, so you can follow them step-by-step when building your
          Next.js application. However, you can read them in any order or skip
          to the pages that apply to your use case.
        </h1>
        <h1 className="mt-8 leading-loose text-justify">
          If you&apos;re new to Next.js, we recommend starting with the Routing,
          Rendering, Data Fetching and Styling sections, as they introduce the
          fundamental Next.js and web concepts to help you get started. Then,
          you can dive deeper into the other sections such as Optimizing and
          Configuring. Finally, once you&apos;re ready, checkout the Deploying and
          Upgrading sections.
        </h1>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
  );
};

export default GetStarted;
