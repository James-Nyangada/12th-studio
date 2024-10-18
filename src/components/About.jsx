import React from "react";
import Service from './service'
import TestimonialCarousel from "./TestimonialSection";
import AboutMe from './about-me'

export default function About() {
  return (
    <>
     <div className="relative h-[70vh] bg-[url('/public/workshop.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">ABOUT ME</h1>
        </div>
      </div>
    <AboutMe/>
    <Service/>
    <TestimonialCarousel/>
    </>
  );
}
