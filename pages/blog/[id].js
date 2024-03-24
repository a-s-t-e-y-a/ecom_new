import React from 'react'

const SingleBlogPage = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
        {/* Header/Heading */}
        <div className='flex flex-col items-center justify-center shadow-sm'>
            <img src="/blog.png" className='w-[180px]'/>
            <h1 className='text-sm tracking-wider -mt-4'>with @akkukachasma</h1>
            <span className='mt-3'><hr /></span>
        </div>

        <div className='w-full mt-4'>
            <div className='border w-[60%] mx-auto p-3'>
                <div className='space-y-5'>
                    <div>
                    <h1 className="text-3xl tracking-wide font-bold text-center">Tech Diaries | akkukachasma, Supply Chain Product Manager manager to my manager</h1>
                    <div></div>
                    </div>
                    <div className='flex place-content-center'>
                        <img src="/blog2.jpeg" className='border'/>
                    </div>
                </div>
                
                <div className="space-y-5 text-md tracking-wide mt-8 text-justify">
                    <p>Para 1 Meet akkukachasma, Supply Chain Product Manager at Lenskart. His primary responsibilities include leading order management, inventory and warehouse operations. He is responsible for brainstorming, planning, and building the roadmap to enable 10x growth and keep the supply chain future-ready. This involves ongoing quarterly tasks and ensuring that the current system runs at full capacity with minimal disruption.</p>

                    <p> Para 2 Meet akkukachasma, Supply Chain Product Manager at Lenskart. His primary responsibilities include leading order management, inventory and warehouse operations. He is responsible for brainstorming, planning, and building the roadmap to enable 10x growth and keep the supply chain future-ready. This involves ongoing quarterly tasks and ensuring that the current system runs at full capacity with minimal disruption.</p>

                    <p>
                        If akkukachasma were to describe his life at Lenskart in one line, it would be a constant hustle to    achieve long-term vision.
                        akkukachasma’s advice to his younger self or someone new in the industry would be to keep learning and     develop a habit to read books. He believes in learning from other people’s experiences.
                        When asked where he sees Lenskart in the next three years, akkukachasma said that he believes Lenskart     has made eyewear a fashion accessory rather than just a vision correction tool. He is confident     that Lenskart will expand across the globe in more geographies and have a deeper penetration in     tier 2 and 3 cities in India. The business foundation is solid, and with all the technology     muscle they are building, they are on the cusp of exponential growth. He hopes Lenskart will be     one of the top 3 eyewear companies in the world.
                        The go-to advice for anyone who is looking for guidance from him is to focus on execution. It’s     good to plan things, but unless it’s coupled with great execution, all the planning in the  world would be of no use. He holds a strong belief in the value of learning through  imperfection. As a product manager, they recognize that the ability to identify the Minimum  Viable Product (MVP) is one of the most critical skills. Instead of striving for perfection in   every feature, they prioritize planning precisely what is necessary for the MVP. They     understand that creating multiple iterations of an imperfect MVP is more effective than trying  to plan and execute a perfect product from the outset. This approach allows for agility and  flexibility in responding to market feedback, ultimately leading to a better product.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SingleBlogPage