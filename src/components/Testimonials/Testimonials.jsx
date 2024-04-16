import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// TestimonialData
const TestimonialData = [
    {
        id: 1,
        name: 'Noodle Soup',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        img: 'https://picsum.photos/101/101'
    },
    {
        id: 2,
        name: 'Rice Bowls',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        img: 'https://picsum.photos/102/102'
    },
    {
        id: 3,
        name: 'Sala Bowls',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        img: 'https://picsum.photos/103/103'
    },
    {
        id: 4,
        name: 'Beverages',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        img: 'https://picsum.photos/104/104'
    }
]

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                {/* Header section */}
                <div className='mb-10'>
                    <h1 className='text-center text-4xl font-bold font-cursive2'>Testimonials</h1>
                </div>
                {/* Slider section */}
                <Slider {...settings} className=''>
                    {TestimonialData.map((test) => (
                        <div className='my-6'>
                            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                <div className='mb-4'>
                                    <img src={test.img} alt={test.name} className='rounded-full w-20 h-20' />
                                </div>
                                {/* content section */}
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-gray-500'>{test.text}</p>
                                        <h1 className='text-xl font-bold text-black/80 font-cursive2'>{test.name}</h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials