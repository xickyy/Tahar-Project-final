import './Header.css';
import image from './TAHAR.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../../dist/output.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when the screen size changes to desktop
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  // Add a resize event listener to handle the screen size change
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <header className="bg-blue-900 text-white">
      <div className="mx-2 flex items-center justify-between">
        <Link to="/">
          <img className="w-32  md:mt-5 rounded-full border-2 border-black mb-2 mt-2" src={image} alt="LOGO" />
        </Link>

        <div>
            <p className='text-lg xl:text-6xl lg:text-4xl md:text-2xl text-center tahar-header-text mb-4'>Tahar Garage Door Services</p>

          <div className="custom-call-header-scrolly md:hidden">
            <a
              className="w-48 mr-2 ml-2 mb-2 bg-red-600 hover:bg-green-600 text-white py-1 px-4 rounded-3xl inline-block text-center"
              href="tel:661-202-8255"
            >
              Call/Text For A Free Quote! 661-202-8255
            </a>
          </div>
        </div>


        <div className="hidden md:flex justify-between py-4 text-center">
          <a
            className="w-32 mr-4 ml-2 mb-2 md:my-0 bg-red-600 hover:bg-green-600 text-white py-2 px-4 rounded-lg inline-block"
            href="tel:661-202-8255"
          >
            Call/Text For A Free Quote! 661-202-8255
          </a>
        </div>
        {/* Show the button only on screens the size of a mobile device */}
        <button
          className="md:hidden bg-blue-500 hover:bg-blue-600 h-14 mt-9 text-white px-2 py-1 rounded-lg toggle-button"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Show the mobile menu on screens the size of a mobile device */}
      {isMobileMenuOpen && (
        <div className=" bg-blue-400 container mx-auto py-4 text-center custom-menu-slide">
          <ul className="space-y-2">
            <li>
              <Link
                className="hover:text-blue-300"
                to="/about"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/reviews"
                onClick={toggleMobileMenu}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/services"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/gallery"
                onClick={toggleMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/faq"
                onClick={toggleMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/contact"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      <nav className="hidden md:block space-x-4 text-center">
        <Link className="hover:text-blue-300 custom-nav-css" to="/about">
          About Us
        </Link>
        <Link className="hover:text-blue-300 custom-nav-css" to="/reviews">
          Reviews
        </Link>
        <Link className="hover:text-blue-300 custom-nav-css" to="/services">
          Services
        </Link>
        <Link className="hover:text-blue-300 custom-nav-css" to="/gallery">
          Gallery
        </Link>
        <Link className="hover:text-blue-300 custom-nav-css" to="/faq">
          FAQ
        </Link>
        <Link className="hover:text-blue-300 custom-nav-css" to="/contact">
          Contact
        </Link>
      </nav>



    </header>
  );
};

export default Header;
