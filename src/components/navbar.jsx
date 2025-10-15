import RotaryLogo from "../assets/rotary-logo.jpg";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page and scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handlePageClick = (path) => {
    if (location.pathname === path) {
      // Already on the page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to the page and scroll to top
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };



  return (
    <div className="navbarl bg-white/95 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 border-b border-gray-200">
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
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
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
                Home
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/about-us"}
                onClick={() => handlePageClick('/about-us')}
                className={`${isActive('/about-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                About us
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/courses"}
                onClick={() => handlePageClick('/courses')}
                className={`${isActive('/courses') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                Courses
              </Link>
            </li>
          <li className="py-1">
            <Link
              to={"/why-choose-us"}
              onClick={() => handlePageClick('/why-choose-us')}
              className={`${isActive('/why-choose-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
            >
              Why Choose Us
            </Link>
          </li>
            <li className="py-1">
              <Link
                to={"/news-events"}
                onClick={() => handlePageClick('/news-events')}
                className={`${isActive('/news-events') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                News & Events
              </Link>
            </li>
            <li className="py-1">
              <Link
                to={"/gallery"}
                onClick={() => handlePageClick('/gallery')}
                className={`${isActive('/gallery') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition py-2 px-4 block rounded`}
              >
                Gallery
              </Link>
            </li>
          <li>
            <details className="relative">
              <summary className={`${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}>Admissions</summary>
              <ul className="absolute left-0 top-full mt-1 p-2 bg-white border border-gray-300 rounded-lg shadow-lg w-64 z-50">
                <li><Link to={"/admissions"} onClick={() => handlePageClick('/admissions')} className={`${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}>Eligibility & Requirements</Link></li>
                <li><Link to={"/admissions/procedure"} onClick={() => handlePageClick('/admissions/procedure')} className={`${isActive('/admissions/procedure') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}>Procedure</Link></li>
                <li><Link to={"/admissions/results"} onClick={() => handlePageClick('/admissions/results')} className={`${isActive('/admissions/results') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}>Results</Link></li>
                <li><Link to={"/admissions/apply"} onClick={() => handlePageClick('/admissions/apply')} className={`${isActive('/admissions/apply') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition block`}>Apply</Link></li>
              </ul>
            </details>
          </li>
          </ul>
        )}
        <img src={RotaryLogo} alt="Rotary Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-13 lg:w-13" />
        <button onClick={handleHomeClick} className="btn btn-ghost text-lg sm:text-lg md:text-xl lg:text-2xl font-merri tracking-wide" >
          <span>Rotary Pre-University College</span>
          
        </button>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal font-nuno text-[14px] bg-gradient-to-r from-white to-blue-50 border border-gray-400 rounded-lg px-4 py-2 font-semibold">

            <li>
              <Link
                to="/"
                onClick={() => handlePageClick('/')}
                className={`${isActive('/') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}
              >
                Home
              </Link>
            </li>

          
      

            <li>
            <Link
              to={"/about-us"}
              onClick={() => handlePageClick('/about-us')}
              className={`${isActive('/about-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}
            >
                About us
              </Link>
            </li>

          <li>
            <Link
              to={"/courses"}
              onClick={() => handlePageClick('/courses')}
              className={`${isActive('/courses') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to={"/why-choose-us"}
              onClick={() => handlePageClick('/why-choose-us')}
              className={`${isActive('/why-choose-us') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}
            >
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link
              to={"/news-events"}
              onClick={() => handlePageClick('/news-events')}
              className={`${isActive('/news-events') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}
            >
              News & Events
            </Link>
          </li>
          <li>
            <Link
              to={"/gallery"}
              onClick={() => handlePageClick('/gallery')}
              className={`${isActive('/gallery') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}
            >
              Gallery
            </Link>
          </li>
          <li>
        <details>
          <summary className={`${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:border-b-2 hover:border-red-800 transition`}>Admissions</summary>
          <ul className="p-2">
           <Link to={"/admissions"} onClick={() => handlePageClick('/admissions')}
              className={`${isActive('/admissions') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>   <li><a>Eligibility & Requirements</a></li></Link>
            <li><Link to={"/admissions/procedure"} onClick={() => handlePageClick('/admissions/procedure')}  className={`${isActive('/admissions/procedure') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>Procedure</Link></li>
            <li><Link to={"/admissions/results"} onClick={() => handlePageClick('/admissions/results')} className={`${isActive('/admissions/results') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>Results</Link></li>
            <li><Link to={"/admissions/apply"} onClick={() => handlePageClick('/admissions/apply')} className={`${isActive('/admissions/apply') ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : ''} hover:text-red-800 hover:bg-red-50 hover:border-b-2 hover:border-red-800 transition`}>Apply</Link></li>
          </ul>
        </details>
      </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
