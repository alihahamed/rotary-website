
import logo from '../assets/logo.webp'
import githubIcon from '../icons/github.png'
import instagramIcon from '../assets/instagram-icon.png'
import collegeLogo from '../assets/insta-college-logo.jpg'
import nssLogo from '../assets/insta-nns-logo.jpg'
import { useState, useEffect, useRef } from 'react'

function Footer() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen && isMobile) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdownOpen, isMobile]);

    const handleInstagramClick = () => {
        if (isMobile) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    return(
        <footer className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Institution Info */}
                    <div className="text-center md:text-left">
                        <img
                            src={logo}
                            alt="Rotary Pre-University College Logo"
                            className="h-16 mx-auto md:mx-0 mb-4 rounded-full"
                            loading="lazy"
                        />
                        <h3 className="text-xl font-merri font-bold mb-2">Rotary Pre-University College</h3>
                        <p className="text-sm font-nuno leading-relaxed mb-4">
                            Empowering minds, shaping futures since 1992.<br/>
                            
                        </p>
                        <p className="text-xs font-nuno">
                            Copyright © {new Date().getFullYear()} - All rights reserved
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-merri font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm font-nuno">
                            <li><a href="/admissions" className="hover:text-blue-200 transition-colors">Admissions</a></li>
                            <li><a href="/courses" className="hover:text-blue-200 transition-colors">Courses</a></li>
                            <li><a href="/why-choose-us" className="hover:text-blue-200 transition-colors">Why Choose Us</a></li>
                            <li><a href="/about-us" className="hover:text-blue-200 transition-colors">About Us</a></li>
                            <li><a href="/gallery" className="hover:text-blue-200 transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-merri font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm font-nuno">
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="mr-2">📍</span>
                                <span>Jyotinagara, Moodbidri<br/>Karnataka - 574227</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="mr-2">📞</span>
                                <span>+91 8258298524</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="mr-2">✉️</span>
                                <span>info@rotarycollege.edu</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="mr-2">🕒</span>
                                <span>Mon - Sat: 8:30 AM - 5:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-merri font-bold mb-4">Follow Us</h3>
                        <div className="relative inline-block group" ref={dropdownRef}>
                            <img
                                src={instagramIcon}
                                alt="Instagram"
                                className="w-12 h-12 mx-auto md:mx-0 cursor-pointer hover:scale-110 transition-transform duration-200"
                                onClick={handleInstagramClick}
                                loading="lazy"
                            />
                            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black rounded-lg shadow-lg transition-all duration-200 z-10 min-w-max ${
                                isMobile
                                    ? (isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible')
                                    : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                            }`}>
                                <div className="p-2">
                                    <a
                                        href="https://www.instagram.com/rotary_puc/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 p-2 hover:bg-gray-600 rounded transition-colors"
                                        onClick={() => isMobile && setIsDropdownOpen(false)}
                                    >
                                        <img
                                            src={collegeLogo}
                                            alt="College Instagram"
                                            className="w-6 h-6 rounded-full"
                                            loading="lazy"
                                        />
                                        <span className="text-sm text-white font-nuno">College</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/nss_rotarypuc/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 p-2 hover:bg-gray-600 rounded transition-colors"
                                        onClick={() => isMobile && setIsDropdownOpen(false)}
                                    >
                                        <img
                                            src={nssLogo}
                                            alt="NSS Instagram"
                                            className="w-6 h-6 rounded-full"
                                            loading="lazy"
                                        />
                                        <span className="text-sm text-white font-nuno">NSS</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Developer Credit */}
                <div className="border-t border-blue-500/20 mt-8 pt-4">
                    <p className="text-center text-xs text-blue-100/60 font-nuno">
                        developed by{' '}
                        <a
                            href="https://github.com/alihahamed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-200 transition-colors duration-200 underline decoration-1 underline-offset-2 flex items-center justify-center"
                        >
                            <img
                                src={githubIcon}
                                alt="GitHub"
                                className="w-4 h-4 mt-1 mr-2 inline-block"
                                loading="lazy"
                            />
                            Ali
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
