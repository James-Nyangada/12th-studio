import React, { useState, useEffect } from 'react';


const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    author: "MUTHONI DRUMMER QUEEN"
  },
  {
    quote: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    author: "JANE DOE"
  },
  {
    quote: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
    author: "JOHN SMITH"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative">
                <div className="absolute -top-8 -left-4 text-6xl text-yellow-400 font-serif">"</div>
                <blockquote className="text-lg text-gray-800 text-center mb-4">
                  {testimonial.quote}
                </blockquote>
                <div className="text-center">
                  <cite className="text-sm font-bold uppercase tracking-wide bg-pink-100 px-2 py-1">
                    - {testimonial.author}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        aria-label="Previous testimonial"
      >
        
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        aria-label="Next testimonial"
      >
        
      </button>
    </div>
  );
};

export default TestimonialCarousel;