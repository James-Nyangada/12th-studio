import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PortfolioItem = ({ image, title, description }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    const link = linkRef.current;
    link.style.setProperty('--line-width', '0%');

    const handleMouseEnter = () => {
      link.style.setProperty('--line-width', '100%');
    };

    const handleMouseLeave = () => {
      link.style.setProperty('--line-width', '0%');
    };

    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      link.removeEventListener('mouseenter', handleMouseEnter);
      link.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center mb-8 bg-white rounded-lg overflow-hidden shadow-md w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" />
      <div className="p-4 w-full sm:w-2/3">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          ref={linkRef}
          href="#"
          className="text-orange-500 font-semibold relative inline-block"
          style={{
            '--line-width': '0%',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: '-2px',
              width: 'var(--line-width)',
              height: '2px',
              backgroundColor: 'currentColor',
              transition: 'width 0.3s ease',
            },
          }}
        >
          Read More →
        </a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <>
     <div className="relative h-[70vh] bg-[url('/public/workshop.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">MY WORK</h1>
        </div>
      </div>
    <div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF1E6' }}>
      <div className="max-w-7xl mx-auto space-y-8">
        <PortfolioItem
          image="/olivia.webp"
          title="SHARON MACHIRA"
          description="Sharon Machira is a multimedia journalist and storyteller with over eight years of experience in telling African stories. Based in Nairobi, Kenya, she works for the BBC as a TV and Radio Presenter where she is also a Senior Presenter."
        />
        <PortfolioItem
          image="/artistic_psychologist.webp"
          title="THE ARTISTIC PSYCHOLOGIST"
          description="Nairobi based Psychologist who needed help with Blog, Podcast and Social MediaContent Management"
        />
        <PortfolioItem
          image="/wanjiku_socials.webp"
          title="WANJIKU SOCIALS"
          description="A Content Strategist who has subcontracted me for work with Khalayi, Red Carpet Entertainment and Exquisite Spaces Inspirations."
        />
        <PortfolioItem
          image="/stpaul.webp"
          title="ST PAULS YOUTH SERVICE"
          description="Minnesota based Non-Profit that has contracted me for all round Social Media Solutions; Strategy, solutions and Management."
        />
        <PortfolioItem
          image="/muthoni_music.webp"
          title="MUTHON MUSIC"
          description="Creative entrepreneur and musician that needed Social Media Management and Strategy for herself, the Perform Music Incubator and Blankets and Wine."
        />
        <PortfolioItem
          image="/beauty_square.webp"
          title="BEAUTY SQUARE"
          description="Beauty and Skincare enterprise that needed help with Content Management, Strategy, and scheduling"
        />
        <PortfolioItem
          image="/kidum.webp"
          title="KIDUM"
          description="Kenyan based Burundian Musician who needed Social Media Management."
        />
      </div>
    </div>
    </>
  );
};

export default Portfolio;