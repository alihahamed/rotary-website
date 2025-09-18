
import RotaryLogo from '../assets/rotary-logo.jpg';

function Navbar(){
    return(
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-nuno">
      <li><a>Home</a></li>
      <li><a>About us</a></li>
      <li><a>Courses</a></li>
      <li><a>Why Choose Us</a></li>
      <li><a>About us</a></li>
      <li><a>News & Events</a></li>
      <li><a>Gallery</a></li>
      <li><a>Admissions</a></li>
      </ul>
    </div>
    <img src={RotaryLogo} alt="Rotary Logo" className="h-10 w-10 mr-2" />
    <a className="btn btn-ghost text-xl font-merri">Rotary Pre-University College </a>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal font-nuno text-[14px] border border-gray-400  bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full px-4 py-2 font-semibold">
      <li><a>Home</a></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><a>About us</a></li>
      <li><a>Courses</a></li>
      <li><a>Why Choose Us</a></li>
      <li><a>About us</a></li>
      <li><a>News & Events</a></li>
      <li><a>Gallery</a></li>
      <li><a>Admissions</a></li>
    </ul>
  </div>
</div>
        
    )
}

export default Navbar
