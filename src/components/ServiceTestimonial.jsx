import React from 'react';
import { Link } from 'react-router-dom';

export default function Component() {
  return (
    <>
    <div className="bg-[#fae8e1] p-8 rounded-3xl font-sans">
      <h2 className="text-[50px] font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { title: 'Social Media Management', image: '/image_3.webp', link: '/social-media' },
          { title: 'Consultancy', image: '/image_1.webp', link: '/consultations' },
          { title: 'Coaching & Training', image: '/management.webp', link: '/coaching-and-training' },
        ].map((service, index) => (
          <Link to={service.link}>
          <div key={index} className="relative overflow-hidden rounded-lg h-[300px]">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <div className="text-white text-xl font-semibold flex justify-between items-center w-full">
                {service.title}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg> 
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end mb-12">
      {/* <a href='/contact'>
      <button className="bg-[#e68e5d] text-white px-20 py-3 tracking-widest font-semibold uppercase text-[20px]">
          Get in touch
        </button>
      </a>
         */}
      </div>
      <div className="flex flex-col items-center">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e68e5d] mb-4">
          <path d="M14 24H6C6 14.0589 14.0589 6 24 6V14C18.4772 14 14 18.4772 14 24Z" fill="currentColor"/>
          <path d="M38 24H30C30 14.0589 38.0589 6 48 6V14C42.4772 14 38 18.4772 38 24Z" fill="currentColor"/>
        </svg>
        <p className="text-[30px] leading-relaxed mb-4 text-[#4a4a4a] text-center max-w-3xl">
        Thank you for the professionalism, timeliness, unique & outstanding way in which you carry out the work whenever I reach out to you with a project.
        </p>
        <p className="font-bold text-[20px] uppercase">- Dorothy Kirori</p>
      </div>
    </div>
    </>
  );
}