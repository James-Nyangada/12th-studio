import React from 'react';

export default function AboutMe() {
  return (
    <div className="flex bg-white p-8 max-w-6xl mx-auto">
      <div className="w-2/5 pr-8">
        <img
          src="/A7309578.jpg"
          alt="Professional woman sitting at a table"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-3/5">
        <h2 className="text-5xl font-light text-orange-400 mb-6">About</h2>
        <p className="text-gray-800 mb-4 text-lg leading-relaxed">
          My name is Olivia Mukora and for 7 years I've been working
          with entrepreneurs, personal brands, and organizations to
          amplify their online brands and messaging through
          captivating content.
        </p>
        <p className="text-gray-800 mb-4 text-lg leading-relaxed">
          I believe in data-driven & connection-based content. I've
          worked across industries from events like Blankets and Wine
          to Non-profit organizations based in Nairobi and Minnesota
          as a consultant and in-house Social Media Marketer.
        </p>
        <p className="text-gray-800 mb-4 text-lg leading-relaxed">
          I've also been subcontracted by agencies or other
          professionals in the Digital marketing space for Social Media
          & Content Management.
        </p>
        <p className="text-gray-800 mb-8 text-lg leading-relaxed">
          In 2023 I began coaching Social Media Managers in a
          collaborative course with Wanjiku Socials.
        </p>
        <button className="border-2 p-3 border-[#e67e22] font-bold hover:bg-[#e67e22] hover:text-white transition ease-in">
          VIEW PORTFOLIO
        </button>
      </div>
    </div>
  );
}