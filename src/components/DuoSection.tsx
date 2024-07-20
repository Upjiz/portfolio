import React from "react";
import Timeline from "./Timeline";
import AnimatedListComponent from "@/components/AnimatedList";

const DuoSection = () => {
  return (
    <div className="mb- dark:bg-gray-950">
      <h2 className="text-base font-semibold leading-7 text-center text-indigo-600">
        Mes Services Web
      </h2>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl dark:text-gray-300">
        Un projet en plusieurs étapes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 max-w-screen-xl mx-auto px-5">
        <div className="col-span-1">
          <Timeline />
        </div>
        <div className=" flex col-span-1 items-center">
          <AnimatedListComponent />
        </div>
      </div>
    </div>
  );
};

export default DuoSection;
