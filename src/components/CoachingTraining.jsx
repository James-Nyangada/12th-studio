import React from 'react'

const CoachingTraining = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-[160px] mb-[60px]">
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
                <img src="/Screenshot_18-10-2024_212536_.jpeg" alt="Person holding clipboard" className="w-full  md:w-1/2 object-cover" />
                <div className="flex flex-col ">
                    <div>
                    <h2 className="text-4xl font-bold mb-4">Coaching & Workshops</h2>
                    <p className="mb-4 text-[19px]">I coach beginner Social Media Managers through my collaborative Social Media Management Course and facilitate Social Media Workshops for organizations on a contractual basis.</p>
                    </div>
                    <a href='/contact'>
                    <button className="border-2 border-[#e67e22] tracking-widest font-bold text-black hover:bg-[#e67e22] hover:text-white transition ease-in duratation-300 px-6 py-2 w-full md:w-auto">GET QUOTE</button>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoachingTraining