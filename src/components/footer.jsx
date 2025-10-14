
import logo from '../assets/logo.webp'
import githubIcon from '../icons/github.png'

function Footer() {
    return(
        <footer className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Institution Info */}
                    <div className="text-center md:text-left">
                        <img
                            src={logo}
                            alt="Rotary Pre-University College Logo"
                            className="h-16 mx-auto md:mx-0 mb-4 rounded-2xl"
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
                            <li><a href="#admissions" className="hover:text-blue-200 transition-colors">Admissions</a></li>
                            <li><a href="#courses" className="hover:text-blue-200 transition-colors">Courses</a></li>
                            <li><a href="#facilities" className="hover:text-blue-200 transition-colors">Facilities</a></li>
                            <li><a href="#about" className="hover:text-blue-200 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
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
