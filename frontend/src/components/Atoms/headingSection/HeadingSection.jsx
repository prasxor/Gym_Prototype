import React from "react";

const HeadingSection = ({title, para}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-5 px-5 h-[30%] w-full">
      <h2 className="text-4xl mb-2 font-extrabold">{title}</h2>
      <p className="text-l font-normal opacity-70">
        {para}
      </p>
    </div>
  );
};

export default HeadingSection;
