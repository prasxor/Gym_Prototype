import React from "react";
import FeatureCard from "../components/Atoms/FeatureCard/FeatureCard";
import bodyBuilding from "../assets/body-part-muscle.svg";
import personalTraining from "../assets/wellness.svg";
import cardio from "../assets/workout-stretching.svg";
import yoga from "../assets/workout-stretching1.svg";
import HeadingSection from "../components/Atoms/headingSection/HeadingSection";
import "./Home.css";
import PricingCards from "../components/Atoms/PricingCards/PricingCards";
import TrainerCard from "../components/TrainerCard";
import FeatureCardUpdated from "../components/Atoms/FeatureCardUpdated";
import { MasonryGridGallery } from "../components/MasonryGridGallery";
import Footer from "./Footer";
import Testimonials from "../components/Atoms/Testimonials";

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
    <section className="bg-white min-h-screen w-full flex flex-col">
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="relative z-10 text-6xl text-white font-bold">
          Transform Your Body, Transform Your Life.
        </h1>
        <p className="relative z-10 text-2xl text-gray-300 font-medium">Discipline over motivation. Systems over excuses. Results over everything.</p>
        </div>
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
        <div className="flex flex-row items-center justify-center border border-amber-400 h-[70%] w-full gap-20">
          {/* <FeatureCard img={bodyBuilding} heading={"Weight Training"} />
          <FeatureCard img={personalTraining} heading={"Personal Training"} />
          <FeatureCard img={cardio} heading={"Cardio / HIIT"} />
          <FeatureCard img={yoga} heading={"Yoga / Zumba"} /> */}
          <FeatureCardUpdated img={yoga} title={"Yoga / Zumba"} para={"Improve flexibility, burn calories, and relieve stress through rhythmic, energizing sessions. Build balance, enhance mobility, and enjoy fun."}/>
          <FeatureCardUpdated img={cardio} title={"Cardio / HIIT"} para={"Increase endurance, improve heart health, and push your limits with structured, time-efficient training sessions regularly."}/>
          <FeatureCardUpdated img={bodyBuilding} title={"Personal Training"} para={"Focus on strength, technique, and consistency with one-on-one coaching tailored to your specific fitness goals."}/>
          {/* <FeatureCardUpdated /> */}
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
          <PricingCards
            price={"999"}
            planName={"Basic Plan"}
            features={basicFeatures}
            styles={"bg-gray-700 hover:bg-gray-800"}
          />
          <PricingCards
            price={"1,999"}
            planName={"Standard Plan"}
            features={standardFeatures}
            styles={"bg-green-500 hover:bg-green-600"}
          />
          <PricingCards
            price={"3,499"}
            planName={"Premium Plan"}
            features={premiumFeatures}
            styles={"bg-yellow-500 hover:bg-yellow-600"}
          />
          {/* <PricingCards/> */}
        </div>
      </div>
      <div className="h-[70vh] bg-white text-black w-full border ">
        <HeadingSection
          title={"Train With Experts"}
          para={
            "Certified trainers to guide, motivate, and push you towards real results."
          }
        />
        <div className=" w-full h-[70%] flex items-center justify-center gap-15">
          <TrainerCard
            img={
              "https://images.pexels.com/photos/32695885/pexels-photo-32695885.jpeg"
            }
            name={"Asso Myron"}
            job={"Strength Coach"}
            imgPosition={"object-cover object-center h-full"}
          />
          <TrainerCard
            img={
              "https://images.unsplash.com/photo-1696564006617-1a85ba3a8f3e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"George Dagerotip"}
            job={"Fat Loss Coach"}
            imgPosition={"object-contain object-center h-auto"}
          />
          <TrainerCard
            img={
              "https://images.unsplash.com/photo-1653587108842-58a9416a0ce9?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            name={"Ali choubin"}
            job={"Personal Trainer"}
            imgPosition={"object-cover object-center h-full object-top"}
          />
        </div>
      </div>
      <div className="flex flex-col h-auto my-20 gap-10 justify-center items-center">
        <HeadingSection
          title={"Inside Our Gym"}
          para={"Explore our equipment, space, and real workout environment."}
        />
        <MasonryGridGallery />
      </div>
      <div className="flex w-full flex-col h-auto items-center justify-center">
        <HeadingSection
          title={"Real Results, Real Stories"}
          para={
            "See how our members transformed their fitness journey with us."
          }
        />
        <Testimonials />
      </div>
      <div className="flex w-full flex-col h-200 items-center justify-center gap-10">
        <HeadingSection
          title={"Visit Us Anytime"}
          para={
            "Convenient timings and easy location access for your daily workouts."
          }
        />
        <section className="py-20 w-[80%] h-150">
          <div className="w-full h-full border border-red-500 mx-auto flex flex-row justify-between gap-10">
            {/* Left */}
            <div className="bg-white p-8 flex justify-center flex-col rounded-xl shadow">
              

              <div className="mt-6 space-y-2">
                <p>Mon - Sat: 5:00 AM – 10:00 PM</p>
                <p>Sunday: 6:00 AM – 2:00 PM</p>
              </div>

              <div className="mt-6">
                <p>
                  Plot No.722, Road No.36, Pemmasani Complex - 3rd Floor, Near
                  Madhapur Police Station, Jubilee Hills, Hyderabad Hyderabad,
                  Telangana
                </p>
                <p className="">+918977712481</p>
              </div>
            </div>

            {/* Right */}
            <div className="w-full h-full rounded-xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
