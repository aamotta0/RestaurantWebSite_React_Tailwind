import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../../assets/logo.png'

// FooterLinks
const FooterLinks = [
    {
        name: 'Home',
        link: '/#'
    },
    {
        name: 'About',
        link: '/#about'
    },
    {
        name: 'Contact',
        link: '/#contact'
    },
    {
        name: 'Blog',
        link: '/#blog'
    }
];

const Footer = () => {
    return (
        <div className=''>
            <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                {/* Company details */}
                <div className='py-8 px-4'>
                    <img src={logo} alt="logo" className='w-36' />
                    <div className='space-y-5'>
                        <p className='pt-4 opacity-60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <div>
                            <button className='primary-btn' target='_blank'>
                                Visit channel Discord
                            </button>
                        </div>
                    </div>
                </div>
                {/* Footer Links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-5'>Important Links</h1>
                        <ul className='space-y-5'>
                            {
                                FooterLinks.map((link, index) => {
                                    return (
                                        <li key={index} className='pt-2'>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* Second col links */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-5'>Quick Links</h1>
                        <ul className='space-y-5'>
                            {
                                FooterLinks.map((link, index) => {
                                    return (
                                        <li key={index} className='pt-2'>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* Company Address section */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-semibold sm:text-left mb-5'>Address</h1>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#" className=''>
                                <FaInstagram className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#" className=''>
                                <FaFacebook className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#" className=''>
                                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright section */}
            <div className='bg-gray-200'>
                <div className='text-xs text-center md:text-sm container p-4 flex justify-between'>
                    <p>Copyright &copy; 2024 - All Rights Reserved</p>
                    <div className='flex justify-center items-center gap-3'>
                        <a href="#">Privacy</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer