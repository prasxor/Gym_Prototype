import React from "react";
import FeatureCard from "../components/Atoms/FeatureCard/FeatureCard";
import bodyBuilding from "../assets/body-part-muscle.svg";
import personalTraining from "../assets/wellness.svg";
import cardio from "../assets/workout-stretching.svg";
import yoga from "../assets/workout-stretching1.svg";
import HeadingSection from "../components/Atoms/headingSection/HeadingSection";
import "./Home.css";
import PricingCards from "../components/Atoms/PricingCards/PricingCards";

const Home = () => {
  const basicFeatures = [
    <> Access to gym equipment </>,
    <> Cardio + weight section </>,
    <> Locker facility </>,
    <> General trainer support </>,
  ];

  const standardFeatures = [
    <> Everything in Basic </>,
    <> Personal trainer guidance (limited) </>,
    <> Diet plan (basic) </>,
    <> Group classes (Zumba / Yoga) </>,
  ];

  const premiumFeatures = [
    <> Everything in Standard </>,
    <> Dedicated personal trainer </>,
    <> Custom diet plan </>,
    <> Progress tracking </>,
    <> Priority support </>,
  ];

  return (
    <section className="bg-white h-auto w-full flex items-center justify-center flex-col">
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/17211446/pexels-photo-17211446.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-7xl text-white font-bold">
          Hero section
        </h1>
        <div className="custom-shape-divider-bottom-1775038508">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="h-[50vh] w-full flex flex-col justify-center items-center">
        <HeadingSection
          title={"Transform Your Body"}
          para={
            "Choose the right program based on your goals — strength, weight loss, or overall fitness."
          }
        />
        <div className="flex flex-row items-center justify-evenly border border-amber-400 h-[70%] w-full gap-7">
          <FeatureCard img={bodyBuilding} heading={"Weight Training"} />
          <FeatureCard img={personalTraining} heading={"Personal Training"} />
          <FeatureCard img={cardio} heading={"Cardio / HIIT"} />
          <FeatureCard img={yoga} heading={"Yoga / Zumba"} />
        </div>
      </div>
      <div className="h-[70vh] w-full border border-amber-400">
        <HeadingSection
          title={"Flexible Membership Plans"}
          para={
            "Affordable pricing designed to fit your routine — no hidden charges."
          }
        />
        <div className="flex flex-row items-center justify-center gap-15 w-full h-[70%]">
                     <PricingCards price={"999"} planName={"Basic Plan"} features={basicFeatures} />
            <PricingCards price={"1,999"} planName={"Standard Plan"} features={standardFeatures} />
            <PricingCards price={"3,499"} planName={"Premium Plan"} features={premiumFeatures} />
          {/* <PricingCards/> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
