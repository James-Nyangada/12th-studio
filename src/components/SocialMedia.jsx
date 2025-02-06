import React from 'react'

const SocialMedia = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-[180px] mb-[60px]">
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
            <img src="/A7309662.jpg" alt="Hands typing on laptop" className="w-full md:w-1/2 object-cover" />
            <div className="flex flex-col ">
                <div>
                <h2 className="text-4xl font-bold mb-4">Social Media Management</h2>
                <p className="mb-4 text-[19px]">Curation package</p>
                <ul className="list-disc pl-5 mb-4 text-[19px]">
                <li>Month on Month Social media Idea curation</li>
                <li>Content and Platform strategy</li>
                <li>Posting and Scheduling based on agreed cadence</li>
                <li>Monthly social media and analytics report</li>
                <li>Post Captioning</li>
                <li>DM and comments Management</li>
                </ul>
                {/* <p className="font-semibold mb-2">INVESTMENT:</p> */}
                <p className="text-xl font-bold mb-4">Ksh 30,000 per month(Minimum 3 months)</p>
                </div>
                <a href='https://calendly.com/thetwelfthstudio/discovery-call'>
                <button className="border-2 border-[#e67e22] tracking-widest font-bold text-black hover:bg-[#e67e22] hover:text-white transition ease-in duratation-300 px-6 py-2 w-full md:w-auto">BOOK A DISCOVERY CALL</button>
                </a>
                
            </div>
            </div>
        </div>
        
        <div className="space-y-12 mt-10">
            <div className="flex flex-col md:flex-row gap-8">
            <img src="/A7309662.jpg" alt="Hands typing on laptop" className="w-full md:w-1/2 object-cover" />
            <div className="flex flex-col ">
                <div>
                <h2 className="text-4xl font-bold mb-4">Social Media Management & Curation</h2>
                <p className="mb-4 text-[19px]">In this package, you get;</p>
                <ul className="list-disc pl-5 mb-4 text-[19px]">
                <li>Social media Audits</li>
                <li>Content curation and Ideation</li>
                <li>Content design and copy</li>
                <li>Social Media Strategy</li>
                <li>Post analysis and Report</li>
                <li>Content shoot cordination</li>
                </ul>
                <p className="font-semibold mb-2">INVESTMENT:</p>
                <p className="text-xl font-bold mb-4">Ksh 40,000 - 50,000 (Monthly)</p>
                </div>
                <a href='https://calendly.com/thetwelfthstudio/discovery-call'>
                <button className="border-2 border-[#e67e22] tracking-widest font-bold text-black hover:bg-[#e67e22] hover:text-white transition ease-in duratation-300 px-6 py-2 w-full md:w-auto">BOOK A DISCOVERY CALL</button>
                </a>
                
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default SocialMedia