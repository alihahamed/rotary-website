import RotaryLogo from "../assets/rotary-logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to hero
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with hash for scrolling
      navigate('/#home');
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-nuno"
          >
            <li>
              <a className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                Home
              </a>
            </li>
            <li>
              <Link to={"/about-us"} className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                About us
              </Link>
            </li>
            <li>
              <a className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                Courses
              </a>
            </li>
          <li>
            <Link to={"/why-choose-us"} className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
              Why Choose Us
            </Link>
          </li>
            <li>
              <a className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                About us
              </a>
            </li>
            <li>
              <Link to={"/news-events"} className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                News & Events
              </Link>
            </li>
            <li>
              <a className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                Gallery
              </a>
            </li>
            <li>
              <a className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                Admissions
              </a>
            </li>
          </ul>
        </div>
        <img src={RotaryLogo} alt="Rotary Logo" className="h-10 w-10 mr-2" />
        <button onClick={handleHomeClick} className="btn btn-ghost text-xl font-merri" > 
          Rotary Pre-University College{" "}
        </button>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal font-nuno text-[14px] bg-gradient-to-r from-white to-blue-50 border border-gray-400 rounded-lg px-4 py-2 font-semibold">
          
            <li>
              <Link to={"/"} className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                Home
              </Link>
            </li>
          
          {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
          
            <li>
            <Link to={"/about-us"}   className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
                About us
              </Link>
            </li>
          
          <li>
            <Link to={"/courses"} className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
              Courses
            </Link>
          </li>
          <li>
            <Link to={"/why-choose-us"} className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link to={"/news-events"} className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
              News & Events
            </Link>
          </li>
          <li>
            <a className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
              Gallery
            </a>
          </li>
          <li>
            <a className="hover:text-red-800 hover:border-b-2 hover:border-red-800 transition">
              Admissions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
