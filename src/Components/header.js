import React, { useState } from "react";
import logo from "../assests/vighnexlogo.png";

const Icon = ({ type, size = 24 }) => {
  const paths = {
    code: (
      <>
        <path d="M9 18 3 12l6-6" />
        <path d="m15 6 6 6-6 6" />
        <path d="m14 4-4 16" />
      </>
    ),
    design: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 8h8M8 12h5M8 16h8" />
      </>
    ),
    marketing: (
      <>
        <path d="M3 11v2M6 9v6M9 7v10M12 5v14M15 8v8M18 10v4M21 12h.01" />
      </>
    ),
    mobile: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M10 18h4" />
      </>
    ),
    cloud: (
      <path d="M17.5 19H9a6 6 0 1 1 1.3-11.86A7 7 0 0 1 23 12a4 4 0 0 1-5.5 7Z" />
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    rocket: (
      <>
        <path d="M4.5 16.5c-1.5 1.5-2 4-2 4s2.5-.5 4-2l2-2-2-2-2 2Z" />
        <path d="m14 5 5 5" />
        <path d="M13 4c3-2 7-2 8-1-1 1 0 5-1 7l-7 7-5-5 7-8Z" />
        <circle cx="16" cy="8" r="1" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type] || paths.spark}
    </svg>
  );
};

export { Icon };

export default function Header({
  menuOpen,
  setMenuOpen,
  scrolled,
  scrollTo,
}) {
  const [activeItem, setActiveItem] = useState("home");

  const container = {
    width: "min(1180px,92%)",
    margin: "0 auto",
  };

  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["services", "Services"],
    ["why", "Why Us"],
    ["technology", "Technology"],
    ["projects", "Projects"],
    ["testimonials", "Testimonials"],
    ["faq", "FAQ"],
    ["contact", "Contact"],
  ];

  const handleNavigation = (id) => {
    setActiveItem(id);

    if (typeof scrollTo === "function") {
      scrollTo(id);
    }

    if (typeof setMenuOpen === "function") {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className="vighnex-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 82,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          background: scrolled
            ? "rgba(250,247,240,.97)"
            : "rgba(250,247,240,.94)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled
            ? "0 10px 35px rgba(0,0,0,.12)"
            : "0 2px 12px rgba(0,0,0,.04)",
          transition: "all .3s ease",
        }}
      >
        <div
          style={{
            ...container,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 22,
          }}
        >
          {/* LOGO */}
          <button
            type="button"
            onClick={() => handleNavigation("home")}
            aria-label="Go to home"
            style={{
              border: 0,
              padding: 0,
              margin: 0,
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              minWidth: 235,
              height: 76,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 225,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                overflow: "hidden",
                background: "transparent",
              }}
            >
              <img
                src={logo}
                alt="Vighnex Technologies"
                style={{
                  width: 525,
                  height: 112,
                  maxWidth: "none",
                  objectFit: "contain",
                  objectPosition: "left center",
                  display: "block",
                  background: "transparent",
                  mixBlendMode: "multiply",
                  transform: "scale(1.05)",
                  transformOrigin: "left center",
                }}
              />
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <div
            className={`vighnex-nav-links ${
              menuOpen ? "vighnex-nav-open" : ""
            }`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 17,
              flexWrap: "nowrap",
              flex: 1,
            }}
          >
            {navItems.map(([id, text]) => {
              const active = activeItem === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleNavigation(id)}
                  style={{
                    position: "relative",
                    border: 0,
                    background: "transparent",
                    color: active ? "#092338" : "#24384b",
                    fontWeight: active ? 850 : 700,
                    fontSize: 12.5,
                    cursor: "pointer",
                    padding: "9px 2px",
                    whiteSpace: "nowrap",
                    transition: "all .25s ease",
                  }}
                >
                  {text}

                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 1,
                      height: 2,
                      borderRadius: 10,
                      background: "#092338",
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      transition: "transform .25s ease",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* CONNECT BUTTON */}
          <button
            type="button"
            onClick={() => handleNavigation("contact")}
            style={{
              border: 0,
              borderRadius: 50,
              padding: "13px 21px",
              fontSize: 13,
              fontWeight: 800,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "#092338",
              color: "#fff",
              whiteSpace: "nowrap",
              boxShadow: "0 7px 18px rgba(9,35,56,.18)",
              transition: "all .25s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(9,35,56,.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 7px 18px rgba(9,35,56,.18)";
            }}
          >
            Let's Connect
            <Icon type="arrow" size={16} />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="vighnex-mobile-menu"
            style={{
              border: 0,
              background: "transparent",
              color: "#092338",
              cursor: "pointer",
              width: 44,
              height: 44,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
            }}
          >
            <Icon type={menuOpen ? "close" : "menu"} size={29} />
          </button>
        </div>
      </nav>

      <style>{`
        .vighnex-header button:hover {
          opacity: 0.92;
        }

        @media (max-width: 1200px) {
          .vighnex-header {
            height: 78px !important;
          }

          .vighnex-header > div {
            gap: 12px !important;
          }

          .vighnex-header .vighnex-nav-links {
            gap: 10px !important;
          }

          .vighnex-header .vighnex-nav-links button {
            font-size: 11px !important;
          }

          .vighnex-header > div > button:first-child {
            min-width: 205px !important;
          }

          .vighnex-header > div > button:first-child > div {
            width: 200px !important;
          }

          .vighnex-header > div > button:first-child img {
            width: 200px !important;
          }
        }

        @media (max-width: 1050px) {
          .vighnex-header .vighnex-nav-links {
            gap: 7px !important;
          }

          .vighnex-header .vighnex-nav-links button {
            font-size: 10.5px !important;
          }

          .vighnex-header > div > button:first-child {
            min-width: 180px !important;
          }

          .vighnex-header > div > button:first-child > div {
            width: 175px !important;
          }

          .vighnex-header > div > button:first-child img {
            width: 175px !important;
          }

          .vighnex-header > div > button:nth-last-child(2) {
            padding: 11px 14px !important;
            font-size: 11px !important;
          }
        }

        @media (max-width: 900px) {
          .vighnex-header {
            height: 76px !important;
          }

          .vighnex-header .vighnex-nav-links {
            position: absolute !important;
            top: 76px !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            display: none !important;
            flex-direction: column !important;
            align-items: stretch !important;
            justify-content: flex-start !important;
            gap: 0 !important;
            padding: 12px 5% 18px !important;
            background: rgba(250,247,240,.98) !important;
            backdrop-filter: blur(18px) !important;
            -webkit-backdrop-filter: blur(18px) !important;
            box-shadow: 0 15px 35px rgba(0,0,0,.12) !important;
            border-top: 1px solid rgba(9,35,56,.08) !important;
          }

          .vighnex-header .vighnex-nav-links.vighnex-nav-open {
            display: flex !important;
          }

          .vighnex-header .vighnex-nav-links button {
            width: 100% !important;
            text-align: left !important;
            font-size: 14px !important;
            padding: 13px 8px !important;
            border-bottom: 1px solid rgba(9,35,56,.06) !important;
          }

          .vighnex-header .vighnex-nav-links button span {
            display: none !important;
          }

          .vighnex-header > div > button:nth-last-child(2) {
            display: none !important;
          }

          .vighnex-header .vighnex-mobile-menu {
            display: flex !important;
          }

          .vighnex-header > div > button:first-child {
            min-width: 210px !important;
            height: 70px !important;
          }

          .vighnex-header > div > button:first-child > div {
            width: 205px !important;
            height: 68px !important;
          }

          .vighnex-header > div > button:first-child img {
            width: 205px !important;
            height: 68px !important;
          }
        }

        @media (max-width: 520px) {
          .vighnex-header > div {
            width: 94% !important;
          }

          .vighnex-header > div > button:first-child {
            min-width: 180px !important;
            height: 68px !important;
          }

          .vighnex-header > div > button:first-child > div {
            width: 175px !important;
            height: 64px !important;
          }

          .vighnex-header > div > button:first-child img {
            width: 175px !important;
            height: 64px !important;
          }

          .vighnex-header .vighnex-mobile-menu {
            width: 42px !important;
            height: 42px !important;
          }
        }

        @media (max-width: 360px) {
          .vighnex-header > div > button:first-child {
            min-width: 155px !important;
          }

          .vighnex-header > div > button:first-child > div {
            width: 150px !important;
          }

          .vighnex-header > div > button:first-child img {
            width: 150px !important;
          }
        }
      `}</style>
    </>
  );
}