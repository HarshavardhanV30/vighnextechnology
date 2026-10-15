
import React from "react";
const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      color: "#087cff",
      light: "#edf7ff",
      icon: "◎",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
      description:
        "Build modern, responsive and high-performance websites tailored to your business needs.",
      features: [
        "Custom Website Development",
        "E-Commerce Solutions",
        "Business & Portfolio Websites",
        "Web Application Development",
      ],
      link: "#contact",
    },
    {
      id: 2,
      title: "Mobile App Development",
      color: "#ff4566",
      light: "#fff0f3",
      icon: "▯",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=85",
      description:
        "Create powerful and user-friendly mobile applications for Android, iOS and cross-platform.",
      features: [
        "Android App Development",
        "iOS App Development",
        "React Native / Flutter Apps",
        "App UI/UX Design",
      ],
      link: "#contact",
    },
    {
      id: 3,
      title: "Digital Marketing",
      color: "#08bd68",
      light: "#edfff4",
      icon: "↗",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
      description:
        "Increase your online presence and reach the right audience with data-driven marketing strategies.",
      features: [
        "SEO (Search Engine Optimization)",
        "Social Media Marketing",
        "Google Ads & PPC",
        "Content Marketing",
      ],
      link: "#contact",
    },
    {
      id: 4,
      title: "Logo & Branding",
      color: "#ff9800",
      light: "#fff7e8",
      icon: "✎",
      image:
        "https://images.unsplash.com/photo-1634942536790-2536a5a4b4a7?auto=format&fit=crop&w=800&q=85",
      description:
        "Create a strong brand identity that makes your business stand out in the market.",
      features: [
        "Logo Design",
        "Brand Identity & Guidelines",
        "Business Cards & Stationery",
        "Brand Strategy & Positioning",
      ],
      link: "#contact",
    },
    {
      id: 5,
      title: "UI/UX Design",
      color: "#8045f8",
      light: "#f6f0ff",
      icon: "✥",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=85",
      description:
        "Design beautiful, intuitive and user-centric interfaces that deliver great user experiences.",
      features: [
        "Website UI/UX Design",
        "Mobile App UI/UX Design",
        "User Research & Wireframes",
        "Prototyping & Interaction Design",
      ],
      link: "#contact",
    },
    {
      id: 6,
      title: "Cloud Deployment",
      color: "#087cff",
      light: "#edf7ff",
      icon: "☁",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=85",
      description:
        "Deploy and manage your applications on secure and scalable cloud infrastructure.",
      features: [
        "AWS / Azure / Google Cloud",
        "Server Setup & Configuration",
        "CI/CD Pipeline Setup",
        "Monitoring & Maintenance",
      ],
      link: "#contact",
    },
  ];

  const advantages = [
    {
      icon: "⚙",
      title: "Custom Solutions",
      description: "Tailored to Your Business Needs",
    },
    {
      icon: "♧",
      title: "On-Time Delivery",
      description: "Committed to Deadlines",
    },
    {
      icon: "♙",
      title: "Quality Assurance",
      description: "Tested & Reliable Solutions",
    },
    {
      icon: "▥",
      title: "Client Satisfaction",
      description: "Long-Term Partnerships",
    },
  ];

  return (
    <>
      <style>{`
        .vx-services {
          --vx-navy: #031126;
          --vx-text: #101a2d;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          color: var(--vx-text);
          background: #f5f9ff;
          width: 100%;
          overflow: hidden;
        }

        .vx-services * {
          box-sizing: border-box;
        }

        .vx-hero {
          position: relative;
          overflow: hidden;
          min-height: 360px;
          padding: 48px 5.5% 30px;
          display: grid;
          grid-template-columns: 0.9fr 1.55fr 0.8fr;
          align-items: center;
          gap: 28px;
          color: #fff;
          background:
            radial-gradient(ellipse at 5% 100%, #123d80 0%, transparent 35%),
            radial-gradient(ellipse at 100% 0%, #1d205b 0%, transparent 38%),
            linear-gradient(115deg, #071a36, #00111e 55%, #071027);
        }

        .vx-hero::before,
        .vx-hero::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(0, 196, 255, 0.16);
          border-radius: 50%;
          pointer-events: none;
        }

        .vx-hero::before {
          top: -180px;
          right: 8%;
        }

        .vx-hero::after {
          bottom: -210px;
          left: 32%;
        }

        .vx-hero-visual,
        .vx-hero-copy,
        .vx-hero-benefits {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .vx-hero-visual img {
          width: 100%;
          height: 255px;
          object-fit: cover;
          border-radius: 20px;
          mix-blend-mode: screen;
          opacity: 0.91;
          -webkit-mask-image: linear-gradient(
            to right,
            black 72%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            black 72%,
            transparent 100%
          );
        }

        .vx-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: #00e1ed;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .vx-eyebrow::before,
        .vx-eyebrow::after {
          content: "";
          width: 30px;
          height: 1px;
          background: #00d9ef;
        }

        .vx-hero-copy {
          text-align: center;
        }

        .vx-hero-copy h1 {
          margin: 0 auto 18px;
          max-width: 720px;
          color: #fff;
          font-size: clamp(30px, 3.1vw, 48px);
          font-weight: 850;
          line-height: 1.13;
          letter-spacing: -1.8px;
        }

        .vx-gradient-text {
          display: block;
          padding-bottom: 3px;
          background: linear-gradient(90deg, #00e1eb, #20aaff, #a16aff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .vx-hero-copy p {
          max-width: 650px;
          margin: 0 auto 22px;
          color: #d4dce9;
          font-size: 15px;
          line-height: 1.8;
        }

        .vx-primary-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding: 14px 26px;
          border-radius: 40px;
          background: linear-gradient(110deg, #00c7ed, #8240ff);
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 750;
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .vx-primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0, 185, 255, 0.25);
        }

        .vx-hero-benefits {
          display: grid;
          gap: 19px;
        }

        .vx-hero-benefit {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .vx-benefit-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(
            140deg,
            rgba(15, 204, 255, 0.2),
            rgba(132, 69, 255, 0.19)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #72eaff;
          font-size: 23px;
        }

        .vx-hero-benefit h3 {
          margin: 0 0 5px;
          color: #fff;
          font-size: 13px;
          font-weight: 750;
        }

        .vx-hero-benefit p {
          margin: 0;
          color: #b8c5da;
          font-size: 11px;
          line-height: 1.5;
        }

        .vx-services-grid {
          padding: 0 4.2% 18px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .vx-service-card {
          --service-color: #087cff;
          --service-light: #edf7ff;
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 280px;
          overflow: hidden;
          padding: 23px 21px 18px;
          border: 1px solid rgba(105, 149, 205, 0.16);
          border-radius: 21px;
          background: var(--service-light);
          box-shadow: 0 5px 18px rgba(21, 49, 91, 0.035);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .vx-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(21, 49, 91, 0.12);
        }

        .vx-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          position: relative;
          z-index: 2;
        }

        .vx-service-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          color: #fff;
          background: var(--service-color);
          font-size: 29px;
          font-weight: 500;
          box-shadow: 0 7px 18px color-mix(
            in srgb,
            var(--service-color) 20%,
            transparent
          );
        }

        .vx-card-intro {
          min-width: 0;
          flex: 1;
        }

        .vx-card-intro h2 {
          margin: 4px 0 7px;
          color: #111a2b;
          font-size: clamp(16px, 1.4vw, 20px);
          line-height: 1.25;
          font-weight: 800;
          letter-spacing: -0.45px;
        }

        .vx-card-intro p {
          margin: 0;
          color: #526071;
          font-size: 12px;
          line-height: 1.55;
        }

        .vx-card-body {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(90px, 0.83fr);
          align-items: center;
          gap: 4px;
          flex: 1;
          margin-top: 13px;
        }

        .vx-feature-list {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 8px;
          padding: 0;
          margin: 0;
          list-style: none;
          min-width: 0;
        }

        .vx-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #354254;
          font-size: 12px;
          line-height: 1.4;
        }

        .vx-check {
          display: inline-grid;
          place-items: center;
          flex-shrink: 0;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: var(--service-color);
          color: white;
          font-size: 11px;
          font-weight: 800;
        }

        .vx-card-image {
          position: relative;
          align-self: end;
          width: 100%;
          height: 142px;
          border-radius: 12px;
          overflow: hidden;
        }

        .vx-card-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 60%,
            rgba(5, 19, 42, 0.15)
          );
          pointer-events: none;
        }

        .vx-card-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .vx-service-card:hover .vx-card-image img {
          transform: scale(1.06);
        }

        .vx-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          width: fit-content;
          margin-top: 15px;
          position: relative;
          z-index: 2;
          color: var(--service-color);
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .vx-learn-more span {
          transition: transform 0.2s;
        }

        .vx-learn-more:hover span {
          transform: translateX(4px);
        }

        .vx-advantages {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: center;
          gap: 10px;
          margin: 0 4.2% 30px;
          padding: 20px 16px;
          border: 1px solid #dce8f7;
          border-radius: 20px;
          background: linear-gradient(110deg, #fff, #f0f6ff);
        }

        .vx-advantage {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-width: 0;
          padding: 3px 8px;
        }

        .vx-advantage + .vx-advantage {
          border-left: 1px solid #d5e0ef;
        }

        .vx-advantage-icon {
          flex-shrink: 0;
          color: #15263d;
          font-size: 31px;
        }

        .vx-advantage h3 {
          margin: 0 0 5px;
          color: #111a2b;
          font-size: 13px;
          font-weight: 800;
        }

        .vx-advantage p {
          margin: 0;
          color: #5b6879;
          font-size: 11px;
          line-height: 1.5;
        }

        @media (min-width: 1500px) {
          .vx-hero {
            padding-left: 5%;
            padding-right: 5%;
            min-height: 390px;
          }

          .vx-service-card {
            min-height: 300px;
            padding: 25px;
          }

          .vx-card-image {
            height: 155px;
          }

          .vx-card-intro p,
          .vx-feature-list li {
            font-size: 13px;
          }
        }

        @media (max-width: 1100px) {
          .vx-hero {
            grid-template-columns: 0.7fr 1.6fr;
            padding: 42px 5%;
          }

          .vx-hero-visual img {
            height: 220px;
          }

          .vx-hero-benefits {
            grid-column: 1 / -1;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
            margin-top: 8px;
          }

          .vx-hero-benefit {
            align-items: center;
          }

          .vx-benefit-icon {
            width: 40px;
            height: 40px;
            font-size: 19px;
          }

          .vx-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .vx-service-card {
            min-height: 285px;
          }

          .vx-card-intro h2 {
            font-size: 18px;
          }
        }

        @media (max-width: 650px) {
          .vx-hero {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 35px 20px 27px;
          }

          .vx-hero-visual {
            display: none;
          }

          .vx-hero-copy h1 {
            font-size: clamp(31px, 8vw, 43px);
            letter-spacing: -1.1px;
          }

          .vx-hero-copy p {
            font-size: 14px;
          }

          .vx-eyebrow {
            font-size: 11px;
            letter-spacing: 3px;
          }

          .vx-hero-benefits {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 17px 10px;
            margin-top: 18px;
          }

          .vx-hero-benefit {
            align-items: flex-start;
          }

          .vx-hero-benefit h3 {
            font-size: 12px;
          }

          .vx-hero-benefit p {
            font-size: 10px;
          }

          .vx-services-grid {
            grid-template-columns: 1fr;
            padding: 18px 15px;
            gap: 14px;
          }

          .vx-service-card {
            min-height: 275px;
            padding: 21px 17px;
          }

          .vx-card-intro h2 {
            font-size: 18px;
          }

          .vx-card-intro p,
          .vx-feature-list li {
            font-size: 12px;
          }

          .vx-card-image {
            height: 125px;
          }

          .vx-advantages {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin: 0 15px 24px;
            padding: 16px 8px;
            gap: 17px 4px;
          }

          .vx-advantage {
            justify-content: flex-start;
            padding: 7px;
            gap: 9px;
          }

          .vx-advantage + .vx-advantage {
            border-left: none;
          }

          .vx-advantage:nth-child(even) {
            border-left: 1px solid #d5e0ef;
          }

          .vx-advantage-icon {
            font-size: 25px;
          }

          .vx-advantage h3 {
            font-size: 11px;
          }

          .vx-advantage p {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vx-services *,
          .vx-services *::before,
          .vx-services *::after {
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <main className="vx-services">
        {/* HERO SECTION */}
        <section className="vx-hero">
          <div className="vx-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85"
              alt="Technology professionals collaborating on digital solutions"
            />
          </div>

          <div className="vx-hero-copy">
            <div className="vx-eyebrow">Our Services</div>

            <h1>
              Innovative Solutions for
              <span className="vx-gradient-text">
                Your Digital Growth
              </span>
            </h1>

            <p>
              At Vighnex Technologies, we provide end-to-end IT
              solutions to help businesses grow, innovate and succeed
              in the digital world.
            </p>

            <a href="#contact" className="vx-primary-button">
              Let's Work Together <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="vx-hero-benefits">
            <div className="vx-hero-benefit">
              <div className="vx-benefit-icon">✦</div>
              <div>
                <h3>Modern Technologies</h3>
                <p>Latest & Scalable Solutions</p>
              </div>
            </div>

            <div className="vx-hero-benefit">
              <div className="vx-benefit-icon">✓</div>
              <div>
                <h3>Reliable & Secure</h3>
                <p>Your Data, Our Priority</p>
              </div>
            </div>

            <div className="vx-hero-benefit">
              <div className="vx-benefit-icon">♧</div>
              <div>
                <h3>Expert Support</h3>
                <p>Dedicated Team Assistance</p>
              </div>
            </div>

            <div className="vx-hero-benefit">
              <div className="vx-benefit-icon">▥</div>
              <div>
                <h3>Business Growth</h3>
                <p>Turning Ideas into Success</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section
          className="vx-services-grid"
          aria-label="Our technology services"
        >
          {services.map((service) => (
            <article
              className="vx-service-card"
              key={service.id}
              style={{
                "--service-color": service.color,
                "--service-light": service.light,
              }}
            >
              <div className="vx-card-top">
                <div className="vx-service-icon" aria-hidden="true">
                  {service.icon}
                </div>

                <div className="vx-card-intro">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>

              <div className="vx-card-body">
                <ul className="vx-feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="vx-check" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="vx-card-image">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    loading="lazy"
                  />
                </div>
              </div>

              <a href={service.link} className="vx-learn-more">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </section>

        {/* WHY CHOOSE US */}
        <section
          className="vx-advantages"
          aria-label="Why choose Vighnex Technologies"
        >
          {advantages.map((item) => (
            <div className="vx-advantage" key={item.title}>
              <div className="vx-advantage-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Replace this target with your actual contact page or section. */}
        <div id="contact" />
      </main>
    </>
  );
};

export default Service;
