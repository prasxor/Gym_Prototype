import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

const PricingCards = ({ price, planName,features }) => {
  return (
    <div className="rounded-2xl w-100 h-100 shadow-lg p-3 bg-indigo-500 text-gray-600 max-w-md">
      <div className="relative flex flex-col items-center p-5 pt-10 bg-blue-100 h-full rounded-xl">
        <span className="-mt-3 absolute top-0 right-0 flex items-center bg-indigo-500 rounded-l-full py-2 px-3 text-xl font-semibold text-amber-100">
          ₹{price} <small className="text-xs ml-1 text-white">/ month</small>
        </span>
        <p className="text-xl mb-3 text-center font-semibold text-blue-800 bg-indigo-200 px-2 py-1 rounded-lg">
          {planName}
        </p>
        <ul className="flex w-full mb-6 items-left justify-center flex-col space-y-3 mt-4">
                    {features.map((item, index) => (
            <FeatureItem key={index}>{item}</FeatureItem>
          ))}
        </ul>
        <div className="w-[80%] mx-4 absolute flex justify-end mt-6 bottom-5">
          <a
            className="w-full py-3 text-center text-white bg-indigo-600 rounded-lg font-medium text-lg hover:bg-indigo-700 focus:outline-none"
            href="#"
          >
            Choose plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
