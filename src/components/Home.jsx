import React from 'react';



export default function Home() {
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/A7309500.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Logo */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center opacity-0">
          <div className="text-black text-center leading-tight">
            <div className="text-2xl font-serif">12th</div>
            <div className="text-xl font-serif">Studio</div>
            <div className="text-[0.5rem] uppercase tracking-wider">Social Media Studio</div>
          </div>
        </div>

        {/* Main Text */}
        <div className="text-white">
          <h2 className="text-2xl mb-2">THE TWELFTH STUDIO</h2>
          <h1 className="text-5xl font-thin tracking-wider text-[#e67e22]" style={{ fontFamily: "'Playfair Display', serif" }}>
            SOCIAL MEDIA CONSULTANT
          </h1>
        </div>
      </div>
    </div>

    
    </>
  );
}