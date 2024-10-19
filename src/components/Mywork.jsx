import React from 'react';

const PortfolioItem = ({ image, title, description, readMoreLink }) => (
  <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'center',}} className='flex-column-sm'>
    <img src={image} alt={title} style={{ width: '400px', height: '380px', objectFit: 'cover', marginRight: '25px' }} />
    <div style={{ flex: 1 }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h2>
      <p style={{ fontSize: '16px', marginBottom: '10px', lineHeight: '1.4' }}>{description}</p>
      
    </div>
  </div>
);
const LoadMoreButton = ({ onClick }) => (
  <button 
    onClick={onClick} 
    style={{
      display: 'block',
      width: '100%',
      padding: '15px',
      backgroundColor: '#ff6b35',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textAlign: 'center',
      marginTop: '2px'
    }}
  >
    Load More
  </button>
);

const Portfolio = () => (
  <>
       <div className="relative h-[70vh] w-full overflow-hidden">
      <img
        src="/A7309500.jpg"
        alt="Hands holding a smartphone"
        className="h-full w-full object-cover"
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(230, 126, 34, 1) 0%, rgba(230, 126, 34, 0.8) 20%, rgba(230, 126, 34, 0.6) 40%, rgba(230, 126, 34, 0.4) 60%, rgba(230, 126, 34, 0.2) 80%, rgba(230, 126, 34, 0) 100%)',
          mixBlendMode: 'multiply'
        }}
      ></div>
      <div className="absolute bottom-5 left-10 z-10">
        <h1 className="font-serif text-6xl font-light tracking-wide text-[#E8A589]">PORTFOLIO</h1>
      </div>
    </div>
  <div style={{ backgroundColor: '#fce5cd', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
    
    <PortfolioItem
      image="/Screenshot_18-10-2024_92624_.jpeg"
      title="SHARON MACHIRA"
      description="Sharon Machira is a multimedia journalist and storyteller with over eight years of experience in telling African stories. Based in Nairobi, Kenya, she works for the BBC as a TV and Radio Presenter where she is also a Senior Presenter."
      readMoreLink="#"
    />
    <PortfolioItem
     image="/artistic_psychologist.webp"
      title="THE ARTSITIC PSYCHOLOGIST"
      description="Nairobi based Psychologist who needed help with Blog, Podcast and Social Media Content Management"
      readMoreLink="#"
    />
    <PortfolioItem
      image="/wanjiku_socials.webp"
      title="WANJIKU SOCIALS"
      description="A Content Strategist who has subcontracted me for work with Khalayi, Red Carpet Entertainment and Exquisite Spaces Inspirations."
      readMoreLink="#"
    />
    <PortfolioItem
      image="/stpaul.webp"
      title="ST. PAULS YOUTH SERVICES"
      description="Minnesota based Non-Profit that has contracted me for all round Social Media Solutions; Strategy, solutions and Management."
      readMoreLink="#"
    />
    <PortfolioItem
      image="/muthoni_music.webp"
      title="MUTHONI MUSIC"
      description="Creative entrepreneur and musician that needed Social Media Management and Strategy for herself, the Perform Music Incubator and Blankets and Wine."
      readMoreLink="#"
    />
    <PortfolioItem
      image="/beauty_square.webp"
      title="BEAUTY SQUARE"
      description="Beauty and Skincare enterprise that needed help with Content Management, Strategy, and scheduling"
      readMoreLink="#"
    />
    <PortfolioItem
      image="/kidum.webp"
      title="KIDUM"
      description="Kenyan based Burundian Musician who needed Social Media Management."
      readMoreLink="#"
    />
    {/* <LoadMoreButton  /> */}
  </div>
  </>
);

export default Portfolio;