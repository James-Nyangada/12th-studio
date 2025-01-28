import React from 'react'

const Consultancy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-[160px] mb-[60px]">
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
                <img src="/A7309870.jpg" alt="Person talking on phone" className="w-full md:w-1/2 object-cover" />
                <div className="flex flex-col ">
                    <div>
                    <h2 className="text-4xl font-bold mb-4">Consultations</h2>
                    <p className="mb-4 text-[19px]">Consultation sessions cover strategic and tactical questions that you have about Social Media.</p>
                    <p className="font-semibold mb-2 text-[19px]">INVESTMENT:</p>
                    <p className="text-xl font-bold mb-4 text-[19px]">Ksh 3,000 (Per Hour)</p>
                    </div>
                    <a href='https://forms.gle/kfortP3zFSjvkUhs7'>
                    <button className="border-2 border-[#e67e22] tracking-widest font-bold text-black hover:bg-[#e67e22] hover:text-white transition ease-in duratation-300 px-6 py-2 w-full md:w-auto">BOOK A SESSION</button>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultancy