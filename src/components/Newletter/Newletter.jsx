import React from 'react'
import BgPng from '../../assets/food2-plate.png'

// Newletter
const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    height: '100%',
    width: '100%',
}

const Newletter = () => {
    return (
        <>
            <div className='bg-primary text-white' style={backgroundStyle}>
                <div className='container bg-black/60 sm:bg-transparent py-16'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
                        <div className='space-y-4 text-center sm:text-left'>
                            {/* Text section */}
                            <h1 className='text-2xl sm:text-3xl font-semibold text-white/90'>
                                {" "}
                                Ready to get started
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            {/* Input section */}
                            <div className='text-center sm:text-left'>
                                <input type="text" className='max-w-[400px] px-4 py-2 rounded-l-md ring-0 focus:outline-none text-dark' placeholder='Enter your email' />
                                <button className='bg-white text-primary px-4 py-2 rounded-r-md'>
                                    {" "}
                                    <span className='text-sm uppercase font-semibold'>
                                        Get Started
                                    </span>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Newletter