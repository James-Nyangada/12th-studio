import React from 'react';

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
    <h1 className="font-serif text-6xl font-light tracking-wide text-[#E8A589]">SERVICES</h1>
  </div>
</div>

    
    <div className="max-w-4xl mx-auto px-4 mt-[60px] mb-[60px]">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8">
          <img src="/A7309662.jpg" alt="Hands typing on laptop" className="w-full md:w-1/2 object-cover" />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Social Media Management & Curation</h2>
              <p className="mb-4">In this package, you get;</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Social Media Audits</li>
                <li>Content Curation & Ideation</li>
                <li>Content Design & Copy</li>
                <li>Social Media Strategy</li>
                <li>Post Analysis & Reporting</li>
                <li>Content Shoot Coordination</li>
              </ul>
              <p className="font-semibold mb-2">INVESTMENT:</p>
              <p className="text-xl font-bold mb-4">Ksh 40,000 - 50,000 (Monthly)</p>
            </div>
            <a href='/contact'>
            <button className="border-2 border-[#e67e22] text-black hover:bg-[#e67e22] hover:text-white transition ease-in duratation-300 px-6 py-2 w-full md:w-auto">BOOK A DISCOVERY CALL</button>
            </a>
            
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="flex flex-col md:flex-row gap-8">
          <img src="/A7309870.jpg" alt="Person talking on phone" className="w-full md:w-1/2 object-cover" />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Consultations</h2>
              <p className="mb-4">Consultation sessions cover strategic and tactical questions that you have about Social Media.</p>
              <p className="font-semibold mb-2">INVESTMENT:</p>
              <p className="text-xl font-bold mb-4">Ksh 3,000 (Per Hour)</p>
            </div>
            <a href='/contact'>
            <button className="border-2 border-[#e67e22] text-black hover:bg-[#e67e22] hover:text-white transition ease-in duratation-300 px-6 py-2 w-full md:w-auto">BOOK A SESSION</button>
            </a>
            
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="flex flex-col md:flex-row gap-8">
          <img src="/Screenshot_18-10-2024_212536_.jpeg" alt="Person holding clipboard" className="w-full  md:w-1/2 object-cover" />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Coaching & Workshops</h2>
              <p className="mb-4">I coach beginner Social Media Managers through my collaborative Social Media Management Course and facilitate Social Media Workshops for organizations on a contractual basis.</p>
            </div>
            <a href='/contact'>
              <button className="border-2 border-[#e67e22] text-black hover:bg-[#e67e22] hover:text-white transition ease-in duratation-300 px-6 py-2 w-full md:w-auto">GET QUOTE</button>
            </a>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}