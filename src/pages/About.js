import React from "react";
import { Link } from "react-router-dom";

const floatingBadges = [
  { icon: "💻", label: "Modern Tech", top: "15%", left: "-10%" },
  { icon: "🚀", label: "Scalable Solutions", top: "20%", right: "-15%" },
  { icon: "⚙️", label: "Agile Delivery", bottom: "25%", left: "-5%" },
  { icon: "🛡️", label: "Secure Architecture", bottom: "35%", right: "-10%" },
];

const coreInfo = [
  {
    title: "Our Purpose",
    desc: "To empower businesses with cutting-edge digital solutions and help them achieve long-term growth.",
    icon: "🎯",
    color: "blue",
  },
  {
    title: "Our Approach",
    desc: "Collaborative planning, modern engineering, and transparent, agile delivery.",
    icon: "👁️",
    color: "green",
  },
  {
    title: "Our Clients",
    desc: "From ambitious startups to established enterprises, we support businesses globally.",
    icon: "👥",
    color: "orange",
  },
  {
    title: "Our Impact",
    desc: "Creating scalable, high-performance applications that drive true digital transformation.",
    icon: "🏆",
    color: "pink",
  },
];

const missionVisionValues = [
  {
    title: "Our Mission",
    desc: "To deliver high-quality, result-driven IT services that create value and help our clients achieve their business goals.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    desc: "To be a trusted global technology partner known for innovation, reliability, and technical excellence.",
    icon: "👁️",
  },
  {
    title: "Our Values",
    desc: "Integrity, Innovation, Client Focus, Excellence, and Continuous Growth.",
    icon: "💎",
  },
];

const stats = [
  { number: "100+", label: "Happy Clients", icon: "👥" },
  { number: "200+", label: "Projects Delivered", icon: "🚀" },
  { number: "5+", label: "Years Experience", icon: "⏳" },
  { number: "24/7", label: "Dedicated Support", icon: "💼" },
  { number: "4.8/5", label: "Client Satisfaction", icon: "⭐" },
];

const locations = [
  {
    city: "Bangalore",
    country: "India",
    address: "Tech Hub, Electronic City, Bangalore, Karnataka",
    icon: "🇮🇳",
  },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    address: "Bole Sub-City, Addis Ababa, Ethiopia",
    icon: "🇪🇹",
  },
];

export default function About() {
  return (
    <main className="vx-about">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .vx-about {
          --primary-blue: #0b2545;
          --gradient-blue: linear-gradient(135deg, #0b2545 0%, #133c7a 50%, #1e81b0 100%);
          --accent-cyan: #00c8f0;
          --text-main: #334155;
          --text-muted: #64748b;
          --bg-light: #f8fafc;
          
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--text-main);
          background: var(--bg-light);
          width: 100%;
          overflow: hidden;
        }

        .vx-about *, .vx-about *::before, .vx-about *::after {
          box-sizing: border-box;
        }

        h1, h2, h3, h4 {
          font-family: 'Outfit', sans-serif;
          margin: 0;
        }

        .vx-container {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
          padding: 60px 0;
        }

        /* --- HERO SECTION --- */
        .vx-hero-wrapper {
          background: linear-gradient(135deg, rgba(11, 37, 69, 0.9) 0%, rgba(19, 60, 122, 0.85) 50%, rgba(30, 129, 176, 0.8) 100%), 
                      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat fixed;
          color: white;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .vx-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .vx-hero-content h1 {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .vx-hero-subtitle {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--accent-cyan);
        }

        .vx-hero-content p {
          font-size: 16px;
          line-height: 1.6;
          color: #e2e8f0;
          margin-bottom: 32px;
          max-width: 540px;
        }

        .vx-btn-cyan {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent-cyan);
          color: #000;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .vx-btn-cyan:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 200, 240, 0.3);
        }

        .vx-hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .vx-hero-blob {
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(0, 200, 240, 0.2);
          border: 2px solid var(--accent-cyan);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          z-index: 0;
          animation: morph 8s ease-in-out infinite;
        }

        @keyframes morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }

        .vx-hero-image {
          position: relative;
          z-index: 1;
          max-height: 450px;
          object-fit: contain;
          border-radius: 24px;
        }

        .vx-floating-badge {
          position: absolute;
          z-index: 3;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .vx-floating-badge span {
          background: rgba(255,255,255,0.2);
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 8px;
        }

        /* --- CORE INFO CARDS --- */
        .vx-core-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: -40px;
          position: relative;
          z-index: 10;
          padding: 0 24px;
        }

        .vx-core-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s;
        }
        
        .vx-core-card:hover {
          transform: translateY(-5px);
        }

        .vx-core-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 24px;
          margin-bottom: 16px;
        }

        .vx-core-card h3 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #0f172a;
        }

        .vx-core-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* --- MISSION & VISION --- */
        .vx-mission-wrapper {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          align-items: center;
        }

        .vx-mission-intro h2 {
          font-size: 32px;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .vx-mission-intro h2 span {
          color: #1e81b0;
        }

        .vx-mission-intro p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .vx-mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .vx-mvv-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .vx-mvv-card .icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .vx-mvv-card h4 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .vx-mvv-card p {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* --- STATS BANNER --- */
        .vx-stats-banner {
          background: var(--primary-blue);
          border-radius: 16px;
          padding: 30px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          color: white;
          margin: 40px auto;
        }

        .vx-stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
          border-right: 1px solid rgba(255,255,255,0.1);
        }

        .vx-stat-item:last-child {
          border-right: none;
        }

        .vx-stat-item .icon {
          background: rgba(255,255,255,0.1);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 20px;
        }

        .vx-stat-item .icon.cyan {
          background: var(--accent-cyan);
          color: #000;
        }

        .vx-stat-info strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 700;
        }

        .vx-stat-info span {
          font-size: 12px;
          color: #cbd5e1;
        }

        /* --- FULL WIDTH CTA --- */
        .vx-cta-banner {
          background: #e0f2fe;
          padding: 40px 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
        }

        .vx-cta-content h3 {
          font-size: 28px;
          margin-bottom: 12px;
          color: #0c4a6e;
        }

        .vx-cta-content p {
          font-size: 15px;
          color: #0369a1;
          margin: 0;
          line-height: 1.6;
          max-width: 600px;
        }

        .vx-btn-blue {
          background: #0284c7;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .vx-btn-blue:hover {
          background: #0369a1;
        }

        /* --- LOCATIONS --- */
        .vx-locations {
          margin-top: 60px;
          text-align: center;
        }
        
        .vx-locations h2 {
          font-size: 28px;
          margin-bottom: 30px;
        }

        .vx-loc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .vx-loc-card {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
          transition: box-shadow 0.2s;
        }

        .vx-loc-card:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .vx-loc-card span {
          font-size: 32px;
        }

        .vx-loc-card h4 {
          font-size: 18px;
          margin-bottom: 4px;
        }

        .vx-loc-card p {
          font-size: 13px;
          color: var(--text-muted);
          margin: 0;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
          .vx-core-grid { grid-template-columns: repeat(2, 1fr); margin-top: 30px; padding: 0; }
          .vx-mission-wrapper { grid-template-columns: 1fr; }
          .vx-stats-banner { grid-template-columns: repeat(3, 1fr); gap: 24px 16px; }
          .vx-stat-item:nth-child(3) { border-right: none; }
          .vx-cta-banner { flex-direction: column; text-align: center; gap: 24px; padding: 40px 24px; }
        }

        @media (max-width: 768px) {
          .vx-hero-grid { grid-template-columns: 1fr; text-align: center; }
          .vx-hero-content p { margin: 0 auto 32px; }
          .vx-hero-visual { margin-top: 40px; }
          .vx-floating-badge { display: none; }
          .vx-mission-grid { grid-template-columns: 1fr; }
          .vx-stats-banner { grid-template-columns: repeat(2, 1fr); }
          .vx-stat-item:nth-child(even) { border-right: none; }
          .vx-loc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="vx-hero-wrapper">
        <div className="vx-container vx-hero-grid">
          <div className="vx-hero-content">
            <h1>About Us</h1>
            <div className="vx-hero-subtitle">Turning Challenges into Solutions.</div>
            <p>
              Vighnex Technologies is a full-service IT solutions company committed to delivering innovative, reliable, and result-driven digital solutions for businesses, startups, and individuals worldwide.
            </p>
            {/* Replaced <a> with React Router <Link> */}
            <Link to="/services" className="vx-btn-cyan">
              Our Services &rarr;
            </Link>
          </div>

          <div className="vx-hero-visual">
            <div className="vx-hero-blob"></div>
            <img
              className="vx-hero-image"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Technology team collaborating"
            />
            {floatingBadges.map((badge, idx) => (
              <div
                key={idx}
                className="vx-floating-badge"
                style={{
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                }}
              >
                <span>{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="vx-container">
        {/* 2. CORE INFO STRIP */}
        <div className="vx-core-grid">
          {coreInfo.map((info, idx) => (
            <div className="vx-core-card" key={idx}>
              <div
                className="vx-core-icon"
                style={{
                  background: info.color === "blue" ? "#e0f2fe" : 
                              info.color === "green" ? "#dcfce7" : 
                              info.color === "orange" ? "#ffedd5" : "#fce7f3"
                }}
              >
                {info.icon}
              </div>
              <h3>{info.title}</h3>
              <p>{info.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. MISSION, VISION & VALUES */}
        <section className="vx-mission-wrapper" style={{ marginTop: "80px" }}>
          <div className="vx-mission-intro">
            <h2>
              Our <span>Mission</span>, Vision & Values
            </h2>
            <p>
              We are committed to building long-term partnerships by providing transparent, high-quality, and scalable technology solutions tailored to your unique requirements.
            </p>
          </div>

          <div className="vx-mission-grid">
            {missionVisionValues.map((item, idx) => (
              <div className="vx-mvv-card" key={idx}>
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. STATS BANNER */}
        <section className="vx-stats-banner">
          {stats.map((stat, idx) => (
            <div className="vx-stat-item" key={idx}>
              <div className={`icon ${stat.icon === "⭐" ? "cyan" : ""}`}>
                {stat.icon}
              </div>
              <div className="vx-stat-info">
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </section>

        {/* 5. FULL WIDTH CTA BANNER */}
        <section className="vx-cta-banner">
          <div className="vx-cta-content">
            <h3>Ready to scale your business?</h3>
            <p>
              Partner with Vighnex Technologies to transform your ideas into powerful digital experiences. Let's build the future together.
            </p>
          </div>
          {/* Replaced <a> with React Router <Link> */}
          <Link to="/contact" className="vx-btn-blue">
            Start Your Project &rarr;
          </Link>
        </section>

        {/* 6. OUR LOCATIONS */}
        <section className="vx-locations">
          <h2>Our Locations</h2>
          <div className="vx-loc-grid">
            {locations.map((loc, idx) => (
              <div className="vx-loc-card" key={idx}>
                <span>{loc.icon}</span>
                <div>
                  <h4>{loc.city}, {loc.country}</h4>
                  <p>{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}