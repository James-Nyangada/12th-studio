import React from "react";
import AboutMe from './about-me';
import Service from './ServiceTestimonial'

export default function About() {
  return (
    <>
    <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/image_4.webp"
          alt="Hands holding a smartphone"
          className="h-full w-full object-cover object-bottom"
          
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(230, 126, 34, 1) 0%, rgba(230, 126, 34, 0.8) 20%, rgba(230, 126, 34, 0.6) 40%, rgba(230, 126, 34, 0.4) 60%, rgba(230, 126, 34, 0.2) 80%, rgba(230, 126, 34, 0) 100%)',
            mixBlendMode: 'multiply'
          }}
        ></div>
        <div className="absolute bottom-5 left-10 z-10">
          <p className="font-[Cinzel] text-7xl font-[100] font-light text-white">ABOUT ME</p>
        </div>
      </div>

      <AboutMe/>
      {/* <Service/> */}
    </>
  );
}
