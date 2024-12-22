import { useState } from "react";
import "./navbar.scss";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-scroll';
import classNames from "classnames";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  const headerClasses = classNames('navbar_section px', { 'scrolled': hasScrolled });
  return (
    <nav className={headerClasses}>
      <div className="navbar_section_logo">
        <h1>Travalo</h1>
      </div>
      <div className="navbar_section_menu">
        <ul>
          <li>
          <Link to="destination" smooth={true} duration={200}>Destination</Link>
          </li>
          <li>
            <Link to="activity" smooth={true} duration={200}>Our activity</Link>
          </li>
          <li>
          <Link to="trips" smooth={true} duration={200}>Trips</Link>
          </li>
          <li>
          <Link to="footer" smooth={true} duration={200}>who we are?</Link>
          </li>
        </ul>
      </div>
      <FaBarsStaggered
        size={25}
        fill="#fff"
        className="navbar_section_menu_icon"
      />
    </nav>
  );
};

export default Navbar;
