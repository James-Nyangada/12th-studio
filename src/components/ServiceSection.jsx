import React from 'react';
import Service from './ServiceTestimonial';

export default function Component() {
  return (
    <>
    <div className="relative h-[70vh] w-full overflow-hidden">
  <img
    src="/A7309362.jpg"
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
    <p className="font-[Cinzel] text-7xl font-[100] tracking-wide text-white">SERVICES</p>
  </div>
</div>

    

    <Service/>
    </>
  );
}