import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../assets/banner.png'


// Menu Data
const MenuData = () => [
    {
        id: 1,
        name: 'Noodle Soup',
        price: "$ 299",
        img: Img1
    },
    {
        id: 2,
        name: 'Rice Bowls',
        price: "$ 199",
        img: Img1
    },
    {
        id: 3,
        name: 'Sala Bowls',
        price: "$ 99",
        img: Img1
    },
    {
        id: 4,
        name: 'Beverages',
        price: "$ 599",
        img: Img1
    },
]



const OurMenu = () => {
    // Slider Settings
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
        <div className='py-16 bg-primary text-white'>
            <div className='container'>
                {/* Header Section */}
                <div className='mb-10 space-y-5'>
                    <h1 className='text-center text-4xl font-bold'>Our Menu</h1>
                    <div className='text-center sm:max-w-sm mx-auto text-xs opacity-75'>
                        {" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fugiat commodi dolorum cumque iusto enim vel laudantium facilis.
                    </div>
                </div>
                {/* Slider Section */}
                <div>
                    <Slider {...settings}>
                        {MenuData().map((menu) => (
                            <div className='my-16'>
                                <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl'>
                                    {/* Image Section */}
                                    <div className='mb-3 flex justify-center'>
                                        <img src={menu.img} alt={menu.name} className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1' />
                                    </div>
                                    {/* Text Content section  */}
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3 text-center'>
                                            <h1 className='text-xl'>{menu.name}</h1>
                                            <p className='text-3xl font-semibold'>
                                                <span className='text-2xl font-cursive2'>Only</span> {" "}
                                                {menu.price}.00</p>
                                            <a href="#" className='underline'>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurMenu