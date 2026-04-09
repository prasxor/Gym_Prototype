import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border-default m-4">
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
              BeastMode Fitness
            </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a href="#HomePage" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#featuresSection" className="hover:underline me-4 md:me-6">
                Features
              </a>
            </li>
            <li>
              <a href="#PricingSection" className="hover:underline me-4 md:me-6">
                Pricing
              </a>
            </li>
            <li>
              <a href="#LocationSection" className="hover:underline me-4 md:me-6">
                Location
              </a>
            </li>
            <li>
              <a href="#TrainerSection" className="hover:underline me-4 md:me-6">
                Trainers
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline me-4 md:me-6">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonialsSection" className="hover:underline">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">
          © 2026{" "}
          <a href="#" className="hover:underline">
            BeastMode Fitness™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
