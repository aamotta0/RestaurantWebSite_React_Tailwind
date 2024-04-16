import React from 'react'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {/* Image section */}
                        <div className='flex justify-center items-center'>
                            <img src={BannerImg} alt="Banner Image" className='max-w-[450px] w-full mx-auto shadow-1' />
                        </div>
                        {/* Text Content section */}
                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <p className='uppercase text-3xl font-semibold text-dark'>About</p>
                            <h1 className='text-5xl text-primary font-cursive2 font-bold'>Fresh Bowl</h1>
                            <p className='text-sm text-gray-500 tracking-wide leading-5'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus exercitationem aut, aperiam doloremque iusto fugiat consectetur animi aspernatur recusandae! Fugiat, numquam autem sapiente harum atque debitis repudiandae eos nam quam molestiae labore rerum dolor repellat cupiditate nostrum nulla aliquam eum quod unde consequatur ab, consectetur tenetur doloribus. Nemo, tempora quasi?
                            </p>
                            <div className=''>
                                <button className='primary-btn'>View Our Menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner