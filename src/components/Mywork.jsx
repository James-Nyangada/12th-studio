import React, { useState } from 'react';

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

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  return(
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
      <div className="absolute bottom-5 left-5 z-10">
        <h1 className="font-[Cinzel] text-7xl font-[100]  tracking-[0px] text-white">PORTFOLIO</h1>
      </div>
    </div>
  <div style={{ backgroundColor: '#fce5cd', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      
      {[
        <PortfolioItem
           key="1"
        image="/workable.jpg"
        title="Workable"
        description="Workable is a shared working space in Nairobi. I partnered with MK Creative Consulting to offer Phone Videography and Editing, Social Media Strategy, Planning and Creation for Workable. They were keen on showing more about their brand while maintaining a friendly and focused persona online."
        readMoreLink="#"
      />,
    
      <PortfolioItem
         key="2"
        image="/soapstone.jpg"
        title="SoapStone Interiors"
        description="Soapstone Interiors is a high end artisanal stone decor store specializing in handmade, ethical, sustainable bespoke soapstone decor items. I offered phone videography and editing for Soapstone Interiors from June to September 2024.
        We also had a Do-it -together approach with Dorothy from Soapstone Interiors where I provided coaching and guidance on:
          Social Media Storytelling
          Curating Instagram feed and stories using Canva
          Social Media Analytics
    Recording Voice overs for Instagram Reels"
        readMoreLink="#"
      />,

      <PortfolioItem
         key="3"
        image="/wanjiku_socials.webp"
        title="WANJIKU SOCIALS"
        description="Wanjiku is a Content Strategist based in Spain with her work across both Spain and Nairobi, Kenya. Between August 2021- September 2024, Wanjiku subcontracted me as a Social Media Manager to execute the content strategies she’d develop for her clients; Exquisite Spaces, Khalayi and Red Carpet Events. "
        readMoreLink="#"
        />,
    <PortfolioItem
       key="4"
      image="/Screenshot_18-10-2024_92624_.jpeg"
      title="SHARON MACHIRA"
      description="Sharon is a Creative director,  Journalist and influencer who contracted me for Social Media strategy, Management, and short-form video editing for her Instagram, Tiktok and Youtube."
      readMoreLink="#"
    />,
    <PortfolioItem
       key="5"
      image="/spys.jpg"
      title="ST. PAULS YOUTH SERVICES"
      description="SPYS is a Minnesota Based Non-Profit that supports Black Youth by pioneering practices, creating tools and forums like their podcast, Rewriting the Rules of Youth Engagement.
      I generated social media content to drive their audience to their podcast and organization events as well as monitored their analytics so they could create more targeted and strategic Social Media ads and maximize their reach."
      readMoreLink="#"
    />,
    <PortfolioItem
       key="6"
     image="/artistic_psychologist.webp"
      title="THE ARTSITIC PSYCHOLOGIST"
      description="For a year I generated social media content for The Artistic Psychologist, uploaded podcast episodes on Simplecast and Youtube, updated her blog monthly and did overall content planning and design on Notion and Canva."
      readMoreLink="#"
    />,
    
    
    <PortfolioItem
       key="7"
      image="/muthoni_music.webp"
      title="MUTHONI MUSIC"
      description="Between September 2022 and May 2023, I worked with Muthoni Music to reignite the Blankets and Wine pages in preparation for their comeback after a two year hiatus. I also managed and curated content for Perform Music Incubator and Muthoni Drummer Queen as an artist."
      readMoreLink="#"
    />,
    <PortfolioItem
       key="8"
      image="/beauty_square.webp"
      title="BEAUTY SQUARE"
      description="In 2021, I was subcontracted by Yvonne of Beauty Square to offer strategic insight for the page and schedule and design posts on Canva."
      readMoreLink="#"
    />,
    <PortfolioItem
       key="9"
      image="/kidum.webp"
      title="KIDUM"
      description="At the beginning of my Social Media career, I worked with Kidum Kibido, a Burundian musician based in Kenya to manage his social media content, post regularly and update his audience about his performances and new releases as well as manage his comments and direct messages."
      readMoreLink="#"
    />
      ].slice(0, showAll ? undefined : 4) // Show all items if `showAll` is true, otherwise limit to 4
      .map((item) => item)}

      {/* View More/View Less Button */}
      <button
          onClick={() => setShowAll(!showAll)}
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
            marginTop: '20px',
          }}
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
    
    
    {/* <PortfolioItem
      image="/amapiano.jpeg"
      title="For the Love of Amapiano"
      description="For the Love of Amapiano was an Amapiano event organized by Tiko Matata. They contracted me short-term for Social Media Strategy, Management and Curation for 2 months in order to build awareness for their event planned for 30th November 2024 where they staged Uncle Waffles, a South African DJ and producer. 
      In two months I built the Instagram page for the event from scratch to 1,200 followers, built an ad strategy that saw us sell X tickets and collaborated with their influencer and design team to propel their social media efforts leading to the event and post the event."
      readMoreLink="#"
    /> */}
    
    {/* <LoadMoreButton  /> */}
  </div>
  </>
)};

export default Portfolio;