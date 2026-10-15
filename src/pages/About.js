
import React from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites built to grow your business.",
    icon: "〈/〉",
    color: "blue",
    tags: ["React.js", "Node.js", "Web Apps"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Powerful Android and iOS applications with seamless user experiences.",
    icon: "▣",
    color: "pink",
    tags: ["Android", "iOS", "React Native"],
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Reach more customers with SEO, social media and performance marketing.",
    icon: "↗",
    color: "orange",
    tags: ["SEO", "Social Media", "Ads"],
  },
  {
    number: "04",
    title: "Logo & Branding",
    description:
      "Create a memorable identity with distinctive logos and brand visuals.",
    icon: "✎",
    color: "green",
    tags: ["Logo Design", "Branding", "Creative"],
  },
  {
    number: "05",
    title: "UI/UX Design",
    description:
      "Beautiful interfaces and intuitive user journeys designed for people.",
    icon: "▦",
    color: "purple",
    tags: ["UI Design", "UX Research", "Prototypes"],
  },
];

const stats = [
  { number: "100+", label: "Happy Clients", icon: "♧", color: "blue" },
  { number: "200+", label: "Projects Delivered", icon: "▤", color: "teal" },
  { number: "4.8/5", label: "Client Satisfaction", icon: "☆", color: "gold" },
  { number: "5+", label: "Years of Experience", icon: "♜", color: "green" },
];

const values = [
  { icon: "♧", label: "Integrity" },
  { icon: "✧", label: "Innovation" },
  { icon: "⇄", label: "Client Focus" },
  { icon: "▥", label: "Excellence" },
  { icon: "♡", label: "Growth Together" },
];

export default function About() {
  return (
    <main className="vighnex-about">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        .vighnex-about {
          --teal: #008b88;
          --green: #08c998;
          --navy: #101b3b;
          --text: #505768;
          --muted: #737b89;
          font-family: 'DM Sans', sans-serif;
          color: var(--navy);
          background: #fff;
          width: 100%;
          overflow: hidden;
        }

        .vighnex-about *,
        .vighnex-about *::before,
        .vighnex-about *::after {
          box-sizing: border-box;
        }

        .vighnex-about a {
          text-decoration: none;
        }

        .va-container {
          width: min(1420px, calc(100% - 64px));
          margin: 0 auto;
        }

        .va-hero {
          position: relative;
          padding: 45px 0 0;
          isolation: isolate;
        }

        .va-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 470px;
          height: 470px;
          top: -180px;
          right: -160px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(8,201,152,.15),
            transparent 70%
          );
        }

        .va-hero-grid {
          display: grid;
          grid-template-columns: .88fr 1.12fr;
          align-items: center;
          gap: 30px;
        }

        .va-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 17px;
          color: #007e7c;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .va-eyebrow::before {
          content: "";
          height: 3px;
          width: 11px;
          border-radius: 4px;
          background: var(--green);
        }

        .va-hero h1 {
          margin: 0 0 20px;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(43px, 5vw, 68px);
          line-height: 1.04;
          letter-spacing: -2.8px;
          font-weight: 800;
        }

        .va-gradient {
          color: transparent;
          background: linear-gradient(100deg, #008986, #08bd9b);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .va-hero-copy > p {
          max-width: 530px;
          margin: 0 0 24px;
          color: var(--text);
          font-size: 15px;
          line-height: 1.85;
        }

        .va-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .va-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 22px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .va-btn:hover {
          transform: translateY(-3px);
        }

        .va-btn-primary {
          color: #fff;
          background: linear-gradient(110deg, #008987, #08c998);
          box-shadow: 0 9px 22px rgba(0,153,139,.18);
        }

        .va-btn-outline {
          color: var(--teal);
          border: 1px solid var(--teal);
          background: white;
        }

        .va-arrow {
          font-size: 19px;
          line-height: 1;
        }

        /* HERO IMAGE */

        .va-visual {
          height: 365px;
          min-width: 0;
          position: relative;
        }

        .va-visual::before {
          content: "";
          position: absolute;
          inset: -12px 18px 12px -12px;
          background: linear-gradient(140deg, #09d2a4, #007d88);
          border-radius: 44% 12% 37% 12%;
          transform: rotate(-3deg);
        }

        .va-hero-image {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 5px solid #fff;
          border-radius: 45% 12% 36% 12%;
          box-shadow: 0 20px 55px rgba(8,60,75,.15);
        }

        .va-image-note {
          position: absolute;
          z-index: 2;
          bottom: 15px;
          right: -12px;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 270px;
          padding: 15px 18px;
          border: 1px solid #e6f6f2;
          border-radius: 17px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 12px 35px rgba(16,27,59,.12);
        }

        .va-note-icon {
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ddfaf1;
          color: #008b88;
          font-size: 27px;
        }

        .va-image-note strong {
          font-size: 12px;
          line-height: 1.6;
        }

        .va-floating {
          position: absolute;
          z-index: 3;
          top: 15px;
          left: -18px;
          padding: 12px 15px;
          border-radius: 12px;
          background: white;
          color: #008b88;
          box-shadow: 0 8px 25px #10203012;
          font-size: 12px;
          font-weight: 700;
        }

        /* STATS */

        .va-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-top: 34px;
          padding: 24px 15px;
          border: 1px solid #eaf3f6;
          border-radius: 24px;
          background: linear-gradient(110deg, #f0f8fc, #effbf8);
        }

        .va-stat {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          min-width: 0;
          border-right: 1px solid #dce9eb;
        }

        .va-stat:last-child {
          border-right: 0;
        }

        .va-stat-icon {
          font-size: 36px;
          line-height: 1;
        }

        .va-stat-icon.blue { color: #1685ef; }
        .va-stat-icon.teal { color: #00a89b; }
        .va-stat-icon.gold { color: #f5a300; }
        .va-stat-icon.green { color: #10b96b; }

        .va-stat strong {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 25px;
          font-weight: 800;
        }

        .va-stat span {
          display: block;
          margin-top: 4px;
          color: var(--text);
          font-size: 12px;
        }

        /* ABOUT SECTION */

        .va-about-grid {
          display: grid;
          grid-template-columns: .92fr 1.08fr 1.08fr;
          align-items: center;
          gap: 30px;
          padding: 65px 0 55px;
        }

        .va-heading {
          margin: 0 0 15px;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(29px, 3vw, 40px);
          font-weight: 800;
          line-height: 1.17;
          letter-spacing: -1.3px;
        }

        .va-underline {
          width: 40px;
          height: 3px;
          margin-bottom: 18px;
          border-radius: 4px;
          background: var(--green);
        }

        .va-about-copy p {
          margin: 0 0 22px;
          color: var(--text);
          font-size: 13px;
          line-height: 1.9;
        }

        .va-team {
          position: relative;
          padding: 12px;
          min-width: 0;
        }

        .va-team::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 44% 30% 42% 30%;
          background: #e6f9f5;
          transform: rotate(-4deg);
        }

        .va-team img {
          position: relative;
          width: 100%;
          height: 280px;
          object-fit: cover;
          border: 5px solid white;
          border-radius: 43% 27% 38% 30%;
        }

        .va-team-badge {
          position: absolute;
          bottom: 3px;
          left: -10px;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 100px;
          height: 100px;
          padding: 12px;
          border: 4px solid white;
          border-radius: 50%;
          background: linear-gradient(140deg, #00bda2, #007b7b);
          color: white;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.55;
          text-align: center;
          transform: rotate(-8deg);
        }

        .va-right h3 {
          margin: 0 0 14px;
          font-family: 'Manrope', sans-serif;
          font-size: 22px;
          font-weight: 800;
        }

        .va-vision-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 10px;
        }

        .va-vision-card {
          padding: 15px 12px;
          border: 1px solid #e3f2f2;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 5px 22px rgba(0,120,110,.035);
        }

        .va-vision-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          margin-bottom: 12px;
          border-radius: 50%;
          background: linear-gradient(140deg, #45baff, #087ff3);
          color: white;
          font-size: 24px;
        }

        .va-vision-icon.mission {
          background: linear-gradient(140deg, #18e2a4, #00a878);
        }

        .va-vision-card h4 {
          margin: 0 0 7px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          font-weight: 800;
        }

        .va-vision-card p {
          margin: 0;
          color: var(--text);
          font-size: 11px;
          line-height: 1.7;
        }

        .va-values-heading {
          margin: 20px 0 13px;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          font-weight: 800;
        }

        .va-values {
          display: grid;
          grid-template-columns: repeat(5, minmax(0,1fr));
          gap: 7px;
        }

        .va-value {
          min-width: 0;
          text-align: center;
        }

        .va-value b {
          display: block;
          margin-bottom: 5px;
          color: #00a99a;
          font-size: 25px;
        }

        .va-value span {
          display: block;
          color: var(--text);
          font-size: 10px;
          line-height: 1.4;
        }

        /* SERVICES */

        .va-services {
          padding: 28px 23px 24px;
          margin-bottom: 65px;
          border-radius: 25px;
          background:
            radial-gradient(ellipse at 5% 0%, rgba(4,201,158,.09), transparent 35%),
            linear-gradient(135deg,#f0fbfa,#f7fcfd);
        }

        .va-services-head {
          margin: 0 0 20px 4px;
        }

        .va-services-head .va-heading {
          margin-bottom: 9px;
        }

        .va-services-head p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
        }

        .va-service-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0,1fr));
          gap: 12px;
        }

        .va-service {
          position: relative;
          min-width: 0;
          padding: 20px 16px;
          overflow: hidden;
          border: 1px solid #e8f2f1;
          border-radius: 18px;
          background: rgba(255,255,255,.96);
          transition: transform .25s, box-shadow .25s;
        }

        .va-service:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(10,83,92,.09);
        }

        .va-service-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .va-service-icon {
          display: grid;
          place-items: center;
          width: 53px;
          height: 53px;
          flex-shrink: 0;
          border-radius: 50%;
          color: white;
          font-size: 24px;
          font-weight: 700;
          box-shadow: 0 7px 17px #00000012;
        }

        .va-service-icon.blue { background: linear-gradient(140deg,#2eb9ff,#0067f5); }
        .va-service-icon.pink { background: linear-gradient(140deg,#ff38b7,#df00a2); }
        .va-service-icon.orange { background: linear-gradient(140deg,#ff9a2c,#f14a00); }
        .va-service-icon.green { background: linear-gradient(140deg,#53df5c,#09ad42); }
        .va-service-icon.purple { background: linear-gradient(140deg,#bb53ff,#7100ef); }

        .va-number {
          align-self: flex-start;
          margin-left: auto;
          color: #c4d3d7;
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          font-weight: 800;
        }

        .va-service h3 {
          margin: 0 0 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 800;
        }

        .va-service p {
          min-height: 63px;
          margin: 0 0 15px;
          color: var(--text);
          font-size: 12px;
          line-height: 1.75;
        }

        .va-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 16px;
        }

        .va-tags span {
          padding: 4px 6px;
          border-radius: 5px;
          background: #eff8f7;
          color: #287d79;
          font-size: 9px;
          font-weight: 600;
        }

        .va-service a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--teal);
          font-size: 12px;
          font-weight: 800;
        }

        /* CTA */

        .va-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          padding: 38px 42px;
          margin-bottom: 45px;
          border-radius: 25px;
          background: linear-gradient(115deg, #073d4c, #007f80 60%, #06b78c);
          color: white;
        }

        .va-cta .va-eyebrow {
          color: #a9ffeb;
          margin-bottom: 12px;
        }

        .va-cta h2 {
          max-width: 700px;
          margin: 0 0 12px;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(25px, 3vw, 37px);
          line-height: 1.25;
          letter-spacing: -1px;
        }

        .va-cta p {
          max-width: 650px;
          margin: 0;
          color: #e0f5f1;
          font-size: 13px;
          line-height: 1.8;
        }

        .va-cta .va-btn {
          flex-shrink: 0;
          color: #007d78;
          background: white;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .va-container {
            width: calc(100% - 44px);
          }

          .va-hero-grid {
            grid-template-columns: .9fr 1.1fr;
            gap: 20px;
          }

          .va-hero h1 {
            font-size: clamp(40px, 5vw, 55px);
          }

          .va-about-grid {
            grid-template-columns: .9fr 1fr;
            gap: 25px;
          }

          .va-about-copy {
            grid-column: 1 / -1;
          }

          .va-right {
            align-self: center;
          }

          .va-service-grid {
            grid-template-columns: repeat(3, minmax(0,1fr));
          }
        }

        @media (max-width: 760px) {
          .va-container {
            width: calc(100% - 34px);
          }

          .va-hero {
            padding-top: 35px;
          }

          .va-hero-grid {
            grid-template-columns: 1fr;
            gap: 27px;
          }

          .va-hero h1 {
            font-size: clamp(42px, 9vw, 62px);
          }

          .va-visual {
            height: clamp(250px, 52vw, 350px);
          }

          .va-stats {
            grid-template-columns: repeat(2, minmax(0,1fr));
            gap: 20px 0;
          }

          .va-stat {
            justify-content: flex-start;
            padding: 5px 12px;
          }

          .va-stat:nth-child(2) {
            border-right: 0;
          }

          .va-stat:nth-child(3) {
            border-right: 1px solid #dce9eb;
          }

          .va-about-grid {
            grid-template-columns: 1fr 1fr;
            padding: 45px 0;
          }

          .va-about-copy {
            grid-column: 1 / -1;
          }

          .va-team img {
            height: 260px;
          }

          .va-vision-grid {
            grid-template-columns: 1fr;
          }

          .va-service-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .va-cta {
            align-items: flex-start;
            flex-direction: column;
            padding: 30px;
          }
        }

        @media (max-width: 480px) {
          .va-container {
            width: calc(100% - 28px);
          }

          .va-hero {
            padding-top: 28px;
          }

          .va-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .va-hero-copy > p {
            font-size: 13px;
          }

          .va-btn {
            padding: 12px 15px;
            font-size: 12px;
          }

          .va-visual {
            height: 245px;
          }

          .va-image-note {
            right: 0;
            bottom: 7px;
            padding: 10px;
            max-width: 210px;
          }

          .va-note-icon {
            width: 36px;
            height: 36px;
            font-size: 22px;
          }

          .va-image-note strong {
            font-size: 10px;
          }

          .va-floating {
            left: 0;
            top: 8px;
            font-size: 10px;
          }

          .va-stats {
            padding: 17px 7px;
            gap: 17px 0;
            border-radius: 17px;
          }

          .va-stat {
            gap: 8px;
            padding: 4px 7px;
          }

          .va-stat-icon {
            font-size: 27px;
          }

          .va-stat strong {
            font-size: 20px;
          }

          .va-stat span {
            font-size: 10px;
          }

          .va-about-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .va-about-copy {
            grid-column: auto;
          }

          .va-heading {
            font-size: 31px;
          }

          .va-team {
            margin: 0 5px;
          }

          .va-team img {
            height: 250px;
          }

          .va-team-badge {
            width: 83px;
            height: 83px;
            font-size: 9px;
          }

          .va-vision-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .va-vision-card {
            padding: 12px 9px;
          }

          .va-vision-icon {
            width: 36px;
            height: 36px;
          }

          .va-vision-card p {
            font-size: 10px;
          }

          .va-values {
            gap: 4px;
          }

          .va-value b {
            font-size: 21px;
          }

          .va-value span {
            font-size: 9px;
          }

          .va-services {
            padding: 21px 12px;
            border-radius: 20px;
            margin-bottom: 40px;
          }

          .va-service-grid {
            grid-template-columns: 1fr;
          }

          .va-service {
            padding: 18px;
          }

          .va-service p {
            min-height: auto;
          }

          .va-cta {
            padding: 26px 21px;
            margin-bottom: 30px;
          }

          .va-cta h2 {
            font-size: 26px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="va-hero" id="about-home">
        <div className="va-container va-hero-grid">
          <div className="va-hero-copy">
            <div className="va-eyebrow">About Us</div>

            <h1>
              Turning
              <br />
              Challenges
              <br />
              <span className="va-gradient">into Solutions.</span>
            </h1>

            <p>
              Vighnex Technologies is a full-service IT solutions company
              committed to delivering innovative, reliable, and result-driven
              digital solutions for businesses, startups and individuals.
            </p>

            <div className="va-actions">
              <a href="#va-services" className="va-btn va-btn-primary">
                Our Services <span className="va-arrow">→</span>
              </a>

              <a href="#va-contact" className="va-btn va-btn-outline">
                Contact Us <span className="va-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="va-visual">
            <div className="va-floating">✧ Ideas · Innovation · Growth</div>

            <img
              className="va-hero-image"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Modern technology company workspace"
            />

            <div className="va-image-note">
              <div className="va-note-icon">♧</div>
              <strong>
                Creating Digital Experiences
                <br />
                That Make a Difference.
              </strong>
            </div>
          </div>
        </div>

        {/* COMPANY STATISTICS */}
        <div className="va-container">
          <div className="va-stats">
            {stats.map((stat) => (
              <div className="va-stat" key={stat.label}>
                <div className={`va-stat-icon ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="va-container va-about-grid" id="va-about">
        <div className="va-about-copy">
          <div className="va-eyebrow">Who We Are</div>

          <h2 className="va-heading">
            Who <span className="va-gradient">We Are</span>
          </h2>

          <div className="va-underline" />

          <p>
            Vighnex Technologies is a team of passionate creators, developers
            and strategists who believe in the power of technology to solve
            real-world problems. We work closely with our clients to
            understand their goals and deliver customized solutions that
            drive growth and success.
          </p>

          <a href="#va-values" className="va-btn va-btn-primary">
            Learn More About Us <span className="va-arrow">→</span>
          </a>
        </div>

        <div className="va-team">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
            alt="Technology team collaborating on a project"
            loading="lazy"
          />

          <div className="va-team-badge">
            People
            <br />
            Ideas
            <br />
            Technology
            <br />
            Success
          </div>
        </div>

        <div className="va-right">
          <h3>
            Our <span className="va-gradient">Vision &amp; Mission</span>
          </h3>

          <div className="va-underline" />

          <div className="va-vision-grid">
            <article className="va-vision-card">
              <div className="va-vision-icon">◎</div>
              <h4>Our Vision</h4>
              <p>
                To be a trusted technology partner, empowering businesses
                with innovative and reliable digital solutions.
              </p>
            </article>

            <article className="va-vision-card">
              <div className="va-vision-icon mission">◉</div>
              <h4>Our Mission</h4>
              <p>
                To deliver high-quality, result-driven IT services that
                create value and help our clients achieve their goals.
              </p>
            </article>
          </div>

          <h4 className="va-values-heading" id="va-values">
            Our Core Values
          </h4>

          <div className="va-values">
            {values.map((value) => (
              <div className="va-value" key={value.label}>
                <b>{value.icon}</b>
                <span>{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="va-container va-services" id="va-services">
        <div className="va-services-head">
          <h2 className="va-heading">
            What <span className="va-gradient">We Do</span>
          </h2>

          <div className="va-underline" />

          <p>
            Complete digital solutions designed to move your business forward.
          </p>
        </div>

        <div className="va-service-grid">
          {services.map((service) => (
            <article className="va-service" key={service.number}>
              <div className="va-service-top">
                <div className={`va-service-icon ${service.color}`}>
                  {service.icon}
                </div>

                <span className="va-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="va-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href="#va-contact">
                Enquire Now <span className="va-arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT CALL TO ACTION - NO FOOTER */}
      <section className="va-container" id="va-contact">
        <div className="va-cta">
          <div>
            <div className="va-eyebrow">Let's Build Something Great</div>

            <h2>Your Vision. Our Technology. One Great Result.</h2>

            <p>
              Have a project in mind? Let's discuss your ideas and turn them
              into a digital experience that makes a difference.
            </p>
          </div>

          <a
            className="va-btn"
            href="mailto:info@vighnextechnologies.com?subject=Project%20Enquiry"
          >
            Start Your Project <span className="va-arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
