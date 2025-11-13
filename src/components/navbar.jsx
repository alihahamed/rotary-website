import RotaryLogo from "../assets/rotary-logo.jpg";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpenIcon, Calendar1, CircleQuestionMark, Home, Image, Info, Scale, Send, SquarePen, Trophy, UserPen } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handlePageClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar bg-white/95 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 border-b border-gray-200">
      <div className="navbar-start">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-ghost btn-circle lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        {mobileMenuOpen && (
          <ul className="menu menu-sm bg-base-100 rounded-box z-1 mt-3 w-64 p-2 shadow-lg font-nuno text-base absolute top-full left-0">
            <li className="py-1">
              <Link
                to="/"
                onClick={() => handlePageClick('/')}
                className={`${isActive('/') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
               <Home size={16} className="inline-block mr-2" /> Home
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/about-us"}
                onClick={() => handlePageClick('/about-us')}
                className={`${isActive('/about-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                <Info size={16} className="inline-block mr-2" /> About us
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/courses"}
                onClick={() => handlePageClick('/courses')}
                className={`${isActive('/courses') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                <BookOpenIcon size={16} className="inline-block mr-2" /> Courses
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/why-choose-us"}
                onClick={() => handlePageClick('/why-choose-us')}
                className={`${isActive('/why-choose-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                <CircleQuestionMark size={16} className="inline-block mr-2" /> Why Choose Us
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/news-events"}
                onClick={() => handlePageClick('/news-events')}
                className={`${isActive('/news-events') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                <Calendar1 size={16} className="inline-block mr-2" /> News & Events
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/gallery"}
                onClick={() => handlePageClick('/gallery')}
                className={`${isActive('/gallery') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                <Image size={16} className="inline-block mr-2" /> Gallery
              </Link>
            </li>
            <li>
              <details className="relative">
                <summary className={`${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}><UserPen size={16} className="inline-block mr-2" /> Admissions</summary>
                <ul className="absolute left-0 top-full mt-1 p-2 bg-white border border-gray-300 rounded-lg shadow-lg w-64 z-50">
                  <li><Link to={"/admissions"} onClick={() => handlePageClick('/admissions')} className={`${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}><Scale size={16} className="inline-block mr-2" /> Eligibility & Requirements</Link></li>
                  <li><Link to={"/admissions/procedure"} onClick={() => handlePageClick('/admissions/procedure')} className={`${isActive('/admissions/procedure') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}><SquarePen size={16} className="inline-block mr-2" /> Procedure</Link></li>
                  <li><Link to={"/admissions/results"} onClick={() => handlePageClick('/admissions/results')} className={`${isActive('/admissions/results') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}><Trophy size={16} className="inline-block mr-2" /> Results</Link></li>
                  <li><Link to={"/admissions/apply"} onClick={() => handlePageClick('/admissions/apply')} className={`${isActive('/admissions/apply') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}><Send size={16} className="inline-block mr-2" /> Apply</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        )}
        <img src={RotaryLogo} alt="Rotary Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-13 lg:w-13" />
        <button onClick={handleHomeClick} className="btn btn-ghost text-xl sm:text-lg md:text-xl lg:text-2xl font-merri tracking-wide">
          <span>Rotary Pre-University College</span>
        </button>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center gap-3 font-nuno text-sm bg-gradient-to-r from-white to-blue-50 border border-gray-400 rounded-lg px-4 py-2 font-semibold">
            <li>
              <Link
                to="/"
                onClick={() => handlePageClick('/')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded ${isActive('/') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition whitespace-nowrap`}
              >
               <Home size={18} /> Home
              </Link>
            </li>

            <li>
              <Link
                to={"/about-us"}
                onClick={() => handlePageClick('/about-us')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded ${isActive('/about-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition whitespace-nowrap`}
              >
                <Info size={18} /> About us
              </Link>
            </li>

            <li>
              <Link
                to={"/courses"}
                onClick={() => handlePageClick('/courses')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded ${isActive('/courses') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition whitespace-nowrap`}
              >
               <BookOpenIcon size={18} /> Courses
              </Link>
            </li>

            <li>
              <Link
                to={"/why-choose-us"}
                onClick={() => handlePageClick('/why-choose-us')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded ${isActive('/why-choose-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition whitespace-nowrap`}
              >
               <CircleQuestionMark size={18} /> Why Choose Us
              </Link>
            </li>

            <li>
              <Link
                to={"/news-events"}
                onClick={() => handlePageClick('/news-events')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded ${isActive('/news-events') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition whitespace-nowrap`}
              >
              <Calendar1 size={18} /> News & Events
              </Link>
            </li>

            <li>
              <Link
                to={"/gallery"}
                onClick={() => handlePageClick('/gallery')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded ${isActive('/gallery') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition whitespace-nowrap`}
              >
               <Image size={18} /> Gallery
              </Link>
            </li>

            <li className="relative group">
              <button className={`flex items-center gap-1.5 px-3 py-2 rounded ${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition whitespace-nowrap`}>
                <UserPen size={18} /> Admissions
              </button>
              <ul className="absolute top-full right-0 mt-1 p-2 bg-white border border-gray-300 rounded-lg shadow-lg w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link to={"/admissions"} onClick={() => handlePageClick('/admissions')} className={`flex items-center gap-2 px-3 py-2 rounded ${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>
                    <Scale size={18} /> Eligibility & Requirements
                  </Link>
                </li>
                <li>
                  <Link to={"/admissions/procedure"} onClick={() => handlePageClick('/admissions/procedure')} className={`flex items-center gap-2 px-3 py-2 rounded ${isActive('/admissions/procedure') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>
                    <SquarePen size={18} /> Procedure
                  </Link>
                </li>
                <li>
                  <Link to={"/admissions/results"} onClick={() => handlePageClick('/admissions/results')} className={`flex items-center gap-2 px-3 py-2 rounded ${isActive('/admissions/results') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>
                    <Trophy size={18} /> Results
                  </Link>
                </li>
                <li>
                  <Link to={"/admissions/apply"} onClick={() => handlePageClick('/admissions/apply')} className={`flex items-center gap-2 px-3 py-2 rounded ${isActive('/admissions/apply') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>
                    <Send size={18} /> Apply
                  </Link>
                </li>
              </ul>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;