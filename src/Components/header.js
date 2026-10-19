
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assests/vighnexlogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    {
      name: "All Services",
      path: "/services",
    },
    {
      name: "Web Development",
      path: "/services/web-development",
    },
    {
      name: "Mobile App Development",
      path: "/services/mobile-development",
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
    },
    {
      name: "Logo & Branding",
      path: "/services/logo-branding",
    },
    {
      name: "UI/UX Design",
      path: "/services/ui-ux-design",
    },
    {
      name: "Cloud Deployment",
      path: "/services/cloud-deployment",
    },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path ||
        location.pathname.startsWith(`${path}/`);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <style>{`
        .vh-header,
        .vh-header * {
          box-sizing: border-box;
        }

        .vh-header {
          --vh-bg: #03162c;
          --vh-cyan: #00c9f2;
          --vh-gold: #f4bd42;

          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          color: #ffffff;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          background: rgba(2, 19, 39, 0.97);
          border-bottom: 1px solid rgba(0, 171, 255, 0.32);
          box-shadow: 0 5px 24px rgba(0, 0, 0, 0.12);
          transition: background .25s ease, box-shadow .25s ease;
        }

        .vh-header.vh-scrolled {
          background: rgba(2, 15, 32, 0.98);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.28);
        }

        .vh-topbar {
          min-height: 43px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 7px 3%;
          border-bottom: 1px solid rgba(0, 185, 255, 0.20);
          background: linear-gradient(
            90deg,
            rgba(5, 43, 78, .9),
            rgba(2, 20, 42, .95)
          );
        }

        .vh-top-contact,
        .vh-top-right,
        .vh-socials,
        .vh-top-item {
          display: flex;
          align-items: center;
        }

        .vh-top-contact {
          gap: 15px;
          min-width: 0;
        }

        .vh-top-item {
          gap: 8px;
          color: #e5efff;
          font-size: 12px;
          white-space: nowrap;
          text-decoration: none;
        }

        .vh-top-icon {
          color: var(--vh-cyan);
          font-size: 17px;
          line-height: 1;
        }

        .vh-top-divider {
          width: 1px;
          height: 23px;
          flex-shrink: 0;
          background: rgba(0, 195, 255, 0.38);
        }

        .vh-top-right {
          gap: 15px;
        }

        .vh-trust-items {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .vh-trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          color: #e6efff;
          font-size: 11px;
        }

        .vh-trust-check {
          display: grid;
          place-items: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          color: #00223a;
          background: var(--vh-cyan);
          font-size: 11px;
          font-weight: 900;
        }

        .vh-socials {
          gap: 7px;
        }

        .vh-social {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border-radius: 50%;
          color: #ffffff;
          background: #0876c9;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: transform .2s ease, filter .2s ease;
        }

        .vh-social:hover {
          transform: translateY(-2px);
          filter: brightness(1.15);
        }

        .vh-social.vh-instagram {
          background: linear-gradient(135deg, #7438ff, #fa286d, #ffb32c);
        }

        .vh-social.vh-youtube {
          background: #f21d30;
        }

        .vh-social.vh-facebook {
          background: #1877f2;
        }

        .vh-mainbar {
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 13px 2.5%;
          background:
            radial-gradient(
              ellipse at 0% 100%,
              rgba(0, 104, 200, .15),
              transparent 40%
            ),
            linear-gradient(100deg, #041a32, #020f21 65%, #03172e);
        }

        .vh-brand {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          min-width: 0;
          text-decoration: none;
        }

        .vh-logo {
          display: block;
          width: 225px;
          max-width: 100%;
          height: 66px;
          object-fit: contain;
          object-position: left center;
          flex-shrink: 1;
        }

        .vh-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.8vw, 30px);
          min-width: 0;
        }

        .vh-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 0;
          border: 0;
          color: #edf3ff;
          background: transparent;
          font-family: inherit;
          font-size: 14px;
          font-weight: 550;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          transition: color .2s ease;
        }

        .vh-nav-link::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 0;
          height: 2px;
          border-radius: 5px;
          background: linear-gradient(90deg, #00d7f5, #6551ff);
          transition: width .25s ease;
        }

        .vh-nav-link:hover,
        .vh-nav-link.vh-active {
          color: #4adfff;
        }

        .vh-nav-link:hover::after,
        .vh-nav-link.vh-active::after {
          width: 100%;
        }

        .vh-home-link.vh-active {
          padding: 12px 18px;
          border-radius: 40px;
          color: #ffffff;
          background: linear-gradient(110deg, #0798f5, #0759d8);
          box-shadow: 0 4px 18px rgba(0, 126, 255, .2);
        }

        .vh-home-link.vh-active::after {
          display: none;
        }

        .vh-services-wrap {
          position: relative;
        }

        .vh-dropdown-arrow {
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid currentColor;
          transition: transform .2s ease;
        }

        .vh-services-wrap:hover .vh-dropdown-arrow,
        .vh-services-wrap:focus-within .vh-dropdown-arrow,
        .vh-services-wrap.vh-dropdown-open .vh-dropdown-arrow {
          transform: rotate(180deg);
        }

        .vh-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: -15px;
          width: 250px;
          max-height: 70vh;
          overflow-y: auto;
          padding: 9px;
          border: 1px solid rgba(0, 180, 255, .28);
          border-radius: 13px;
          background: #061a31;
          box-shadow: 0 14px 35px rgba(0, 0, 0, .35);
          opacity: 0;
          visibility: hidden;
          transform: translateY(7px);
          transition: opacity .2s, transform .2s, visibility .2s;
        }

        .vh-services-wrap:hover .vh-dropdown,
        .vh-services-wrap:focus-within .vh-dropdown,
        .vh-services-wrap.vh-dropdown-open .vh-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .vh-dropdown-link {
          display: block;
          padding: 11px 12px;
          border-radius: 8px;
          color: #dce9fc;
          font-size: 13px;
          text-decoration: none;
          transition: color .2s, background .2s;
        }

        .vh-dropdown-link:hover,
        .vh-dropdown-link.vh-active {
          color: #45e0ff;
          background: rgba(0, 161, 255, .12);
        }

        .vh-quote-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          flex-shrink: 0;
          min-height: 48px;
          padding: 0 22px;
          border: 1px solid rgba(255, 255, 255, .12);
          border-radius: 40px;
          color: #ffffff;
          background: linear-gradient(105deg, #05b9ef, #087bfa 48%, #8129f6);
          box-shadow: 0 5px 20px rgba(20, 106, 255, .28);
          font-size: 13px;
          font-weight: 750;
          white-space: nowrap;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s;
        }

        .vh-quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(20, 106, 255, .4);
        }

        .vh-quote-icon {
          font-size: 17px;
        }

        .vh-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          border: 1px solid rgba(0, 194, 255, .3);
          border-radius: 10px;
          color: #ffffff;
          background: rgba(0, 140, 255, .12);
          font-size: 24px;
          cursor: pointer;
        }

        .vh-mobile-panel {
          display: none;
        }

        .vh-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          padding: 13px 10px;
          border: 0;
          border-bottom: 1px solid rgba(255, 255, 255, .08);
          color: #e8f1ff;
          background: transparent;
          font-family: inherit;
          font-size: 15px;
          text-align: left;
          text-decoration: none;
          cursor: pointer;
        }

        .vh-mobile-link.vh-active {
          color: #32d9ff;
        }

        .vh-mobile-submenu {
          display: grid;
          gap: 2px;
          padding: 4px 0 8px 15px;
        }

        .vh-mobile-submenu a {
          display: block;
          padding: 10px;
          border-radius: 7px;
          color: #bdcde3;
          font-size: 13px;
          text-decoration: none;
        }

        .vh-mobile-submenu a:hover,
        .vh-mobile-submenu a.vh-active {
          color: #42ddff;
          background: rgba(0, 160, 255, .1);
        }

        @media (min-width: 1600px) {
          .vh-mainbar {
            padding-right: 3.2%;
            padding-left: 3.2%;
          }

          .vh-logo {
            width: 245px;
            height: 72px;
          }

          .vh-nav-link {
            font-size: 15px;
          }
        }

        @media (max-width: 1250px) {
          .vh-topbar {
            padding-right: 2%;
            padding-left: 2%;
          }

          .vh-top-contact {
            gap: 10px;
          }

          .vh-top-item {
            font-size: 11px;
          }

          .vh-trust-items {
            gap: 9px;
          }

          .vh-trust-item {
            font-size: 10px;
          }

          .vh-mainbar {
            gap: 14px;
            padding-right: 2%;
            padding-left: 2%;
          }

          .vh-logo {
            width: 185px;
            height: 59px;
          }

          .vh-nav {
            gap: 13px;
          }

          .vh-nav-link {
            font-size: 12px;
          }

          .vh-quote-btn {
            min-height: 44px;
            padding: 0 15px;
            font-size: 12px;
          }
        }

        @media (max-width: 960px) {
          .vh-topbar {
            min-height: 38px;
          }

          .vh-trust-items {
            display: none;
          }

          .vh-mainbar {
            min-height: 78px;
          }

          .vh-logo {
            width: 195px;
            height: 58px;
          }

          .vh-nav,
          .vh-mainbar > .vh-quote-btn {
            display: none;
          }

          .vh-mobile-toggle {
            display: inline-flex;
          }

          .vh-mobile-panel {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            max-height: calc(100vh - 115px);
            overflow-y: auto;
            flex-direction: column;
            gap: 4px;
            padding: 14px 22px 24px;
            border-top: 1px solid rgba(0, 191, 255, .2);
            background: #03162c;
            box-shadow: 0 18px 28px rgba(0, 0, 0, .35);
          }

          .vh-mobile-quote {
            margin-top: 13px;
          }
        }

        @media (max-width: 600px) {
          .vh-topbar {
            padding: 8px 12px;
          }

          .vh-top-contact {
            gap: 9px;
            width: 100%;
            justify-content: space-between;
          }

          .vh-top-item {
            gap: 5px;
            font-size: 10px;
          }

          .vh-top-item.vh-location {
            display: none;
          }

          .vh-top-divider.vh-location {
            display: none;
          }

          .vh-top-right {
            gap: 0;
          }

          .vh-socials {
            gap: 5px;
          }

          .vh-social {
            width: 24px;
            height: 24px;
            font-size: 11px;
          }

          .vh-mainbar {
            min-height: 72px;
            padding: 9px 14px;
          }

          .vh-logo {
            width: 175px;
            height: 51px;
          }

          .vh-mobile-toggle {
            width: 39px;
            height: 39px;
          }
        }

        @media (max-width: 360px) {
          .vh-top-item.vh-email {
            display: none;
          }

          .vh-logo {
            width: 150px;
          }
        }
      `}</style>

      <header className={`vh-header ${isScrolled ? "vh-scrolled" : ""}`}>
        {/* TOP CONTACT BAR */}
        <div className="vh-topbar">
          <div className="vh-top-contact">
            <a
              className="vh-top-item vh-location"
              href="https://maps.google.com/?q=Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="vh-top-icon">⌖</span>
              <span>Addis Ababa, Ethiopia</span>
            </a>

            <span className="vh-top-divider vh-location" />

            <a className="vh-top-item" href="tel:+919390642779">
              <span className="vh-top-icon">☎</span>
              <span>+91 9390642779</span>
            </a>

            <span className="vh-top-divider vh-email" />

            <a
              className="vh-top-item vh-email"
              href="mailto:vighnextechnologies@gmail.com"
            >
              <span className="vh-top-icon">✉</span>
              <span>vighnextechnologies@gmail.com</span>
            </a>
          </div>

          <div className="vh-top-right">
            <div className="vh-trust-items">
              <div className="vh-trust-item">
                <span className="vh-trust-check">✓</span>
                Innovative Solutions
              </div>

              <div className="vh-trust-item">
                <span className="vh-trust-check">✓</span>
                Reliable Support
              </div>

              <div className="vh-trust-item">
                <span className="vh-trust-check">✓</span>
                Client Success
              </div>
            </div>

            <span className="vh-top-divider" />

            <div className="vh-socials">
              <a
                className="vh-social"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                className="vh-social vh-instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                className="vh-social vh-youtube"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>

              <a
                className="vh-social vh-facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION */}
        <div className="vh-mainbar">
          <Link
            to="/"
            className="vh-brand"
            onClick={closeMenus}
            aria-label="Vighnex Technologies - Home"
          >
            <img
              src={logo}
              alt="Vighnex Technologies"
              className="vh-logo"
            />
          </Link>

          <nav className="vh-nav" aria-label="Main navigation">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`vh-nav-link ${
                  isActive(item.path)
                    ? `vh-active ${
                        item.path === "/" ? "vh-home-link" : ""
                      }`
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div
              className={`vh-services-wrap ${
                servicesOpen ? "vh-dropdown-open" : ""
              }`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`vh-nav-link ${
                  isActive("/services") ? "vh-active" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setServicesOpen(false);
                  }
                }}
              >
                Services <span className="vh-dropdown-arrow" />
              </button>

              <div className="vh-dropdown">
                {serviceItems.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`vh-dropdown-link ${
                      isActive(service.path) ? "vh-active" : ""
                    }`}
                    onClick={closeMenus}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`vh-nav-link ${
                  isActive(item.path) ? "vh-active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="vh-quote-btn"
            onClick={closeMenus}
          >
            <span className="vh-quote-icon" aria-hidden="true">
              ➤
            </span>
            Get a Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="vh-mobile-toggle"
            onClick={() => {
              setMobileMenuOpen((open) => !open);
              setServicesOpen(false);
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* RESPONSIVE MOBILE MENU */}
        {mobileMenuOpen && (
          <nav className="vh-mobile-panel" aria-label="Mobile navigation">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`vh-mobile-link ${
                  isActive(item.path) ? "vh-active" : ""
                }`}
                onClick={closeMenus}
              >
                {item.name}
              </Link>
            ))}

            <button
              type="button"
              className={`vh-mobile-link ${
                isActive("/services") ? "vh-active" : ""
              }`}
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
            >
              Services
              <span className="vh-dropdown-arrow" />
            </button>

            {servicesOpen && (
              <div className="vh-mobile-submenu">
                {serviceItems.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={
                      isActive(service.path) ? "vh-active" : ""
                    }
                    onClick={closeMenus}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`vh-mobile-link ${
                  isActive(item.path) ? "vh-active" : ""
                }`}
                onClick={closeMenus}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="vh-quote-btn vh-mobile-quote"
              onClick={closeMenus}
            >
              <span className="vh-quote-icon" aria-hidden="true">
                ➤
              </span>
              Get a Quote
            </Link>
          </nav>
        )}
      </header>

      {/* Fixed-header spacing is handled by App.js mainContent marginTop. */}
    </>
  );
};

export default Header;
