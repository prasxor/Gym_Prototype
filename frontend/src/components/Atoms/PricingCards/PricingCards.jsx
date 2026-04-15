import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

const PricingCards = ({ price, planName, features, styles }) => {
  return (
    <div className="rounded-3xl w-full max-w-sm h-100 shadow-lg p-1 border-2 text-gray-600">
      <div className="relative gap-3 flex flex-col items-center p-5 pt-10  h-full rounded-xl">
        <p className={`text-xl mb-3 text-center font-semibold text-white px-4 py-1 rounded-lg ${styles}`}>
          {planName}
        </p>
        <ul className="flex w-full mb-6 items-left justify-center flex-col space-y-3 mt-4">
          {features.map((item, index) => (
            <FeatureItem key={index}>{item}</FeatureItem>
          ))}
        </ul>
        <div className="w-[80%] mx-4 absolute flex justify-end mt-6 bottom-5">
          <a
            className={`w-full py-3 text-center text-white rounded-lg font-medium text-lg focus:outline-none ${styles}`}
            href="#"
          >
            ₹{price} <small className="text-xs ml-1 text-white">/ month</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
