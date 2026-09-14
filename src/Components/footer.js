import React from "react";
import logo from "../assests/vighnexlogo.png";

export default function Footer({ scrollTo }) {
  const container = {
    width: "min(1180px,92%)",
    margin: "0 auto",
  };

  const footerLinkStyle = {
    background: "transparent",
    border: 0,
    color: "#aebec8",
    textAlign: "left",
    cursor: "pointer",
    fontSize: 12,
    padding: 0,
    transition: "all .25s ease",
  };

  const companyLinks = [
    ["About Us", "about"],
    ["Why Choose Us", "why"],
    ["Our Work", "projects"],
    ["Contact", "contact"],
  ];

  const serviceLinks = [
    ["Web Development", "services"],
    ["UI/UX Design", "services"],
    ["Digital Marketing", "services"],
    ["Mobile Development", "services"],
    ["Cloud Development", "services"],
  ];

  const connectLinks = [
    ["Start a Project", "contact"],
    ["FAQs", "faq"],
    ["Technology", "technology"],
    ["Our Process", "process"],
  ];

  const socialLinks = [
    ["in", "https://www.linkedin.com"],
    ["◎", "https://www.instagram.com"],
    ["f", "https://www.facebook.com"],
    ["▶", "https://www.youtube.com"],
  ];

  const handleScroll = (id) => {
    if (typeof scrollTo === "function") {
      scrollTo(id);
    }
  };

  return (
    <>
      <footer
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #061b2b 0%, #092338 55%, #061723 100%)",
          color: "#b7c7d0",
          padding: "70px 0 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,.025)",
            top: -170,
            right: -100,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.035)",
            bottom: -120,
            left: -80,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent)",
          }}
        />

        <div
          style={{
            ...container,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="vighnex-footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
              gap: 45,
              paddingBottom: 48,
            }}
          >
            <div>
              <div
                style={{
                  width: "fit-content",
                  minHeight: 70,
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 12,
                  padding: "4px 0",
                }}
              >
                <img
                  src={logo}
                  alt="Vighnex Technologies"
                  style={{
                    width: 205,
                    height: 65,
                    objectFit: "contain",
                    objectPosition: "left center",
                    display: "block",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.85,
                  maxWidth: 340,
                  margin: "0 0 22px",
                  color: "#aebec8",
                }}
              >
                Building meaningful digital experiences where traditional
                values meet modern technology. Create. Build. Deploy. Grow.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {["Create", "Build", "Deploy", "Grow"].map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "7px 11px",
                      borderRadius: 30,
                      border: "1px solid rgba(255,255,255,.10)",
                      background: "rgba(255,255,255,.035)",
                      color: "#c6d3da",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  color: "#fff",
                  margin: "4px 0 19px",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Company
              </h4>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                }}
              >
                {companyLinks.map(([text, id]) => (
                  <button
                    key={text}
                    onClick={() => handleScroll(id)}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#aebec8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  color: "#fff",
                  margin: "4px 0 19px",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Services
              </h4>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                }}
              >
                {serviceLinks.map(([text, id]) => (
                  <button
                    key={text}
                    onClick={() => handleScroll(id)}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#aebec8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  color: "#fff",
                  margin: "4px 0 19px",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Let's Connect
              </h4>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                }}
              >
                {connectLinks.map(([text, id]) => (
                  <button
                    key={text}
                    onClick={() => handleScroll(id)}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#aebec8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
              padding: "20px 22px",
              marginBottom: 35,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.08)",
              background: "rgba(255,255,255,.035)",
            }}
          >
            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 800,
                  marginBottom: 5,
                }}
              >
                Have an idea? Let's build it together.
              </div>

              <div
                style={{
                  color: "#91a8b6",
                  fontSize: 11,
                }}
              >
                Turn your vision into a powerful digital experience.
              </div>
            </div>

            <button
              onClick={() => handleScroll("contact")}
              style={{
                border: 0,
                borderRadius: 50,
                padding: "11px 19px",
                background: "#fff",
                color: "#061b2b",
                fontSize: 12,
                fontWeight: 800,
                cursor: "pointer",
                transition: "all .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start a Project →
            </button>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.10)",
              paddingTop: 22,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
              fontSize: 11,
            }}
          >
            <span
              style={{
                color: "#849aa8",
              }}
            >
              © 2026 Vighnex Technologies. All Rights Reserved.
            </span>

            <div
              style={{
                display: "flex",
                gap: 8,
              }}
            >
              {socialLinks.map(([text, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={href}
                  style={{
                    width: 34,
                    height: 34,
                    border: "1px solid #385263",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "#c4d2d9",
                    textDecoration: "none",
                    background: "rgba(255,255,255,.02)",
                    fontSize: 12,
                    fontWeight: 800,
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#061b2b";
                    e.currentTarget.style.borderColor = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,.02)";
                    e.currentTarget.style.color = "#c4d2d9";
                    e.currentTarget.style.borderColor = "#385263";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .vighnex-footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 600px) {
          .vighnex-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .vighnex-footer-grid img {
            width: 190px !important;
          }
        }
      `}</style>
    </>
  );
}