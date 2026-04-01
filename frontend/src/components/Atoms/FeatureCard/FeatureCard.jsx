import React from "react";
import bodyBuilding from "../../../assets/body-part-muscle.svg"

const FeatureCard = ({img,heading}) => {
  return (
    <div className="h-40 w-72 bg-[#f7f9ffaf] rounded-4xl p-4 border border-black">
      <div className="h-[60%] rounded-4xl flex items-center justify-center">
        <img className="h-[50%]" src={img} alt="" />
      </div>
      <hr className="opacity-20"/>
      <div className="h-[40%] rounded-4xl flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold">{heading}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;
