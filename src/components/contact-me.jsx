import React from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="relative h-[70vh] bg-[url('/public/workshop.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">CONTACT US</h1>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
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
                className="w-full px-4 py-2 bg-[#f4a261] hover:bg-[#e76f51] text-white font-bold rounded-md transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Google Maps Placeholder */}
          <div className="w-full md:w-1/2">
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
              {/* Replace this div with an actual Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635266738000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}