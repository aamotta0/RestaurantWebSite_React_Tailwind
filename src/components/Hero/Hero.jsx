import React from 'react'
import HeroPic from '../../assets/hero.png'

const Hero = () => {
    return (
        <>
            <div className='min-h-[500px] sm:min-h-[600px] bg-lightBlue flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        {/* Text content section */}
                        <div data-aos='zoom-in' data-aos-delay='200' className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                            <h1 className='text-8xl lg:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive'>
                                Rice
                                <span className='text-3xl font-sans text-dark'> Bowl</span>
                            </h1>
                            <p data-aos='fade' data-aos-delay='300' className='text-sm text-dark font-sans'>
                                {" "}
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus asperiores adipisci! Culpa, deserunt dignissimos. Libero veritatis sapiente maxime quas, natus itaque molestiae accusamus nam doloribus, esse at quibusdam eaque repudiandae quod reiciendis sed quasi similique impedit debitis vel asperiores corporis. Deserunt temporibus porro voluptas quia delectus eveniet inventore reiciendis.
                            </p>
                            <div data-aos='fade' data-aos-delay='400' data-aos-offset='0'>
                                <button className='primary-btn'>View Our Menu</button>
                            </div>
                        </div>
                        {/* Hero Image section */}
                        <div data-aos='zoom-in' data-aos-delay='500' className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                            <img src={HeroPic} className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1' />
                            <div className='bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white'>
                                <h1 className=''>Fresh Food</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero