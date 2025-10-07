// import React, { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     // Run once on load (in case page is already scrolled)
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setMenuOpen((open) => !open);

//   return (
//     <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="navbar-left">
//         {/* Logo section */}
//         <img className="logo-img" src="/images/logo.webp" alt="Therapy Mind" />
//         <span className="logo-subtitle">
//           THE PSYCHOLOGY CLINIC (SINGAPORE)
//         </span>
//       </div>

//       {/* Hamburger for mobile */}
//       <div
//         className={`hamburger ${menuOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//       >
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>

//       {/* Desktop navigation */}
//       <ul className="nav-links desktop-nav">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#aboutus">About Us</a></li>
//         <li><a href="#ourservices">Our Services</a></li>
//         <li><a href="#events">Events</a></li>
//         <li><a href="#insights">Insights</a></li>
//       </ul>

//       {/* Desktop Contact button */}
//       <button className="contact-btn desktop-nav">CONTACT US</button>

//       {/* Mobile overlay menu */}
//       {menuOpen && (
//         <div className="mobile-overlay">
//           <div className="mobile-header">
//             <span
//               className="close-icon"
//               onClick={toggleMenu}
//             >
//               &times;
//             </span>
//           </div>
//           <ul className="nav-links nav-active">
//             <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//             <li><a href="#aboutus" onClick={toggleMenu}>About Us</a></li>
//             <li><a href="#ourservices" onClick={toggleMenu}>Our Services</a></li>
//             <li><a href="#events" onClick={toggleMenu}>Events</a></li>
//             <li><a href="#insights" onClick={toggleMenu}>Insights</a></li>
//             <li>
//               <button
//                 className="contact-btn"
//                 onClick={toggleMenu}
//               >
//                 CONTACT US
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;








import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-left">
        <img className="logo-img" src="/logo.png" alt="Therapy Mind" />
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="nav-links desktop-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#ourservices">Our Services</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#insights">Insights</a></li>
      </ul>

      <button className="contact-btn desktop-nav">CONTACT US</button>

      {menuOpen && (
        <div className="mobile-overlay">
          <ul className="nav-links nav-active">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#aboutus" onClick={toggleMenu}>About us</a></li>
            <li><a href="#ourservices" onClick={toggleMenu}>Our Services</a></li>
            <li><a href="#events" onClick={toggleMenu}>Events</a></li>
            <li><a href="#insights" onClick={toggleMenu}>Insights</a></li>
            <li><button className="contact-btn" onClick={toggleMenu}>CONTACT US</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

