import React, { useState } from "react";
import logo from "../assests/vighnexlogo.png";

const Footer = ({ scrollTo }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleScroll = (id) => {
    if (typeof scrollTo === "function") {
      scrollTo(id);
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Email validated successfully.");
    setEmail("");
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Services", id: "services" },
    { label: "Our Projects", id: "projects" },
    { label: "Contact Us", id: "contact" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Logo & Branding",
    "UI/UX Design",
    "Cloud Deployment",
  ];

  const socialLinks = [
    { label: "LinkedIn", icon: "in", url: "https://www.linkedin.com/" },
    { label: "Instagram", icon: "◎", url: "https://www.instagram.com/" },
    { label: "Facebook", icon: "f", url: "https://www.facebook.com/" },
    { label: "YouTube", icon: "▶", url: "https://www.youtube.com/" },
  ];

  return (
    <>
      <style>{`
        .vighnex-footer {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #071426;
          color: #e7edf7;
          font-family: Arial, Helvetica, sans-serif;
        }

        .vighnex-footer *,
        .vighnex-footer *::before,
        .vighnex-footer *::after {
          box-sizing: border-box;
        }

        .vighnex-footer .footer-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .vighnex-footer .footer-wave {
          display: block;
          width: 100%;
          height: 65px;
          margin-bottom: -1px;
        }

        .vighnex-footer .footer-features {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .vighnex-footer .footer-feature {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .vighnex-footer .footer-feature:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.075);
        }

        .vighnex-footer .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(245, 177, 66, 0.12);
          color: #f5b142;
          font-size: 23px;
        }

        .vighnex-footer .feature-title {
          margin: 0 0 7px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
        }

        .vighnex-footer .feature-description {
          margin: 0;
          color: #a7b5c9;
          font-size: 12px;
          line-height: 1.7;
        }

        .vighnex-footer .footer-main {
          display: grid;
          grid-template-columns: 1.25fr 0.8fr 1fr 1.2fr;
          gap: 36px;
          padding-top: 55px;
          padding-bottom: 45px;
        }

        .vighnex-footer .footer-brand {
          min-width: 0;
        }

        .vighnex-footer .footer-logo {
          display: block;
          width: 185px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          object-position: left center;
          margin-bottom: 18px;
        }

        .vighnex-footer .footer-brand-name {
          margin: 0 0 15px;
          color: #fff;
          font-size: 22px;
          font-weight: 800;
          line-height: 1.5;
        }

        .vighnex-footer .footer-brand-name span {
          color: #f5b142;
        }

        .vighnex-footer .footer-description {
          margin: 0;
          color: #a7b5c9;
          font-size: 13px;
          line-height: 1.9;
        }

        .vighnex-footer .footer-heading {
          position: relative;
          margin: 0 0 25px;
          padding-bottom: 13px;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
        }

        .vighnex-footer .footer-heading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 42px;
          height: 3px;
          border-radius: 5px;
          background: linear-gradient(90deg, #f5b142, #2878f5);
        }

        .vighnex-footer .footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .vighnex-footer .footer-links button {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #a7b5c9;
          font-family: inherit;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .vighnex-footer .footer-links button::before {
          content: "›";
          color: #f5b142;
          font-size: 20px;
        }

        .vighnex-footer .footer-links button:hover {
          color: #fff;
          transform: translateX(4px);
        }

        .vighnex-footer .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .vighnex-footer .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #a7b5c9;
          font-size: 12px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .vighnex-footer .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: rgba(245, 177, 66, 0.12);
          color: #f5b142;
          font-size: 16px;
        }

        .vighnex-footer .footer-contact-item a {
          color: #a7b5c9;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .vighnex-footer .footer-contact-item a:hover {
          color: #f5b142;
        }

        .vighnex-footer .newsletter-text {
          margin: 0 0 15px;
          color: #a7b5c9;
          font-size: 12px;
          line-height: 1.8;
        }

        .vighnex-footer .newsletter-form {
          display: flex;
          gap: 7px;
          width: 100%;
          padding: 5px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
        }

        .vighnex-footer .newsletter-input {
          width: 100%;
          min-width: 0;
          padding: 10px 7px;
          border: none;
          outline: none;
          background: transparent;
          color: #fff;
          font-family: inherit;
          font-size: 12px;
        }

        .vighnex-footer .newsletter-input::placeholder {
          color: #8796aa;
        }

        .vighnex-footer .newsletter-button {
          flex-shrink: 0;
          padding: 10px 12px;
          border: none;
          border-radius: 7px;
          background: #f5b142;
          color: #071426;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .vighnex-footer .newsletter-button:hover {
          background: #ffd078;
        }

        .vighnex-footer .newsletter-message {
          min-height: 18px;
          margin: 9px 0 0;
          color: #f5b142;
          font-size: 11px;
          line-height: 1.6;
        }

        .vighnex-footer .social-heading {
          margin: 23px 0 12px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }

        .vighnex-footer .footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .vighnex-footer .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 37px;
          height: 37px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .vighnex-footer .social-link:hover {
          transform: translateY(-3px);
          border-color: #f5b142;
          background: #f5b142;
          color: #071426;
        }

        .vighnex-footer .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.12);
        }

        .vighnex-footer .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 22px;
          padding-bottom: 22px;
        }

        .vighnex-footer .copyright {
          margin: 0;
          color: #91a0b5;
          font-size: 12px;
          line-height: 1.8;
        }

        .vighnex-footer .copyright strong {
          color: #f5b142;
        }

        .vighnex-footer .legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .vighnex-footer .legal-links a {
          color: #91a0b5;
          font-size: 12px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .vighnex-footer .legal-links a:hover {
          color: #f5b142;
        }

        @media (max-width: 1050px) {
          .vighnex-footer .footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 38px;
          }
        }

        @media (max-width: 700px) {
          .vighnex-footer .footer-container {
            padding-right: 20px;
            padding-left: 20px;
          }

          .vighnex-footer .footer-wave {
            height: 40px;
          }

          .vighnex-footer .footer-features {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 25px 0;
          }

          .vighnex-footer .footer-main {
            grid-template-columns: 1fr;
            gap: 35px;
            padding-top: 40px;
            padding-bottom: 35px;
          }

          .vighnex-footer .footer-logo {
            width: 160px;
          }

          .vighnex-footer .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
        }

        @media (max-width: 380px) {
          .vighnex-footer .footer-container {
            padding-right: 15px;
            padding-left: 15px;
          }

          .vighnex-footer .newsletter-button {
            padding: 10px 8px;
            font-size: 11px;
          }
        }
      `}</style>

      <footer className="vighnex-footer">
        <svg
          className="footer-wave"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 65 C180 100 300 10 500 45 C720 85 850 5 1050 35 C1220 65 1340 35 1440 15 L1440 100 L0 100 Z"
            fill="#071426"
          />
        </svg>

        <div className="footer-container">
          <div className="footer-features">
            <div className="footer-feature">
              <div className="feature-icon" aria-hidden="true">◈</div>
              <div>
                <h3 className="feature-title">Innovative Solutions</h3>
                <p className="feature-description">
                  Technology designed around your business goals.
                </p>
              </div>
            </div>

            <div className="footer-feature">
              <div className="feature-icon" aria-hidden="true">✓</div>
              <div>
                <h3 className="feature-title">Quality & Reliability</h3>
                <p className="feature-description">
                  Dependable digital experiences built to scale.
                </p>
              </div>
            </div>

            <div className="footer-feature">
              <div className="feature-icon" aria-hidden="true">↗</div>
              <div>
                <h3 className="feature-title">Growth Focused</h3>
                <p className="feature-description">
                  Digital strategies that support lasting growth.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-main">
            <div className="footer-brand">
              <img
                className="footer-logo"
                src={logo}
                alt="Vighnex Technologies Logo"
              />

              <p className="footer-description">
                Turning Challenges into Solutions. We transform ideas into
                meaningful digital experiences through innovative technology,
                creative design, and reliable development services.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleScroll(link.id)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      type="button"
                      onClick={() => handleScroll("services")}
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Get In Touch</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <span className="contact-icon" aria-hidden="true">⌖</span>
                  <span>
                    Tadipatri, Anantapur District,
                    <br />
                    Andhra Pradesh, India – 515411
                  </span>
                </li>

                <li className="footer-contact-item">
                  <span className="contact-icon" aria-hidden="true">☎</span>
                  <a href="tel:+916309123456">+91 6309 123 456</a>
                </li>

                <li className="footer-contact-item">
                  <span className="contact-icon" aria-hidden="true">✉</span>
                  <a href="mailto:info@vighnextechnologies.com">
                    info@vighnextechnologies.com
                  </a>
                </li>

                <li className="footer-contact-item">
                  <span className="contact-icon" aria-hidden="true">◎</span>
                  <a
                    href="https://www.vighnextechnologies.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.vighnextechnologies.com
                  </a>
                </li>
              </ul>

              <h4 className="social-heading">Follow Us</h4>
              <div className="footer-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    className="social-link"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <h4 className="social-heading">Stay Updated</h4>
              <p className="newsletter-text">
                Enter your email to receive updates from our team.
              </p>

              <form
                className="newsletter-form"
                onSubmit={handleSubscribe}
              >
                <input
                  className="newsletter-input"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  required
                />

                <button className="newsletter-button" type="submit">
                  Subscribe
                </button>
              </form>

              {message && (
                <p className="newsletter-message" role="status">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-container footer-bottom-inner">
            <p className="copyright">
              © {new Date().getFullYear()}{" "}
              <strong>Vighnex Technologies.</strong> All rights reserved.
            </p>

            <div className="legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms & Conditions</a>
              <a href="/contact">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;