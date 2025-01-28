import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function ContactPage() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uk9zttx', 'template_ykv7min', form.current, 'LKYT2ZF4AGUC6nwTf')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        e.target.reset();
      }, (error) => {
        console.error('Error sending email:', error);
        alert('An error occurred. Please try again later.');
      });
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
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
          <p className="font-[Cinzel] text-7xl font-[100] font-light text-white">CONTACT US</p>
        </div>
      </div>


      {/* Contact Form and Map */}
      <div className="container mx-auto px-4 py-12">
        <div className="md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  required 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-[60px] py-3 bg-[#f4a261] text-[20px] hover:bg-[#e76f51] text-white font-bold tracking-widest transition duration-300 ease-in-out"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Google Maps Placeholder */}
          
        </div>
      </div>
    </div>
  )
}