
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const services = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Logo & Branding",
    "UI/UX Design",
    "Cloud Deployment",
    "Other",
  ];

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation only. Connect your backend or email API
    // here to deliver messages to your business.
    setStatus(
      "Your form is ready! Connect a backend or email service to deliver your message."
    );
  };

  const contactItems = [
    {
      icon: "☎",
      color: "#087cff",
      title: "Call Us",
      value: "+91 9390642779",
      note: "Mon - Sat, 9:00 AM - 6:00 PM",
    },
    {
      icon: "✉",
      color: "#ff4268",
      title: "Email Us",
      value: "vighnextechnologies@gmail.com",
      note: "We will respond as soon as possible",
    },
    {
  icon: "⌖",
  color: "#08bd76",
  title: "Our Office",
  value: "Addis Ababa, Ethiopia | Bengaluru, India",
  note: "Addis Ababa Head office is located in Ethiopia. Our new office in Bengaluru, India, is opening soon.",
  locations: [
    {
      name: "Addis Ababa, Ethiopia",
      url: "https://maps.google.com/?q=Addis+Ababa+Ethiopia",
    },
    {
      name: "Bengaluru, India",
      url: "https://maps.google.com/?q=Bengaluru+India",
      status: "New Office Opening Soon",
    },
  ],
}
  ];

  const advantages = [
    {
      icon: "◎",
      color: "#087cff",
      title: "Understand Your Needs",
      text: "We listen to your goals",
    },
    {
      icon: "♧",
      color: "#8045f8",
      title: "Provide Best Solutions",
      text: "Customized for your business",
    },
    {
      icon: "⚙",
      color: "#08bd76",
      title: "Deliver With Quality",
      text: "On time, every time",
    },
    {
      icon: "▥",
      color: "#ff9800",
      title: "Long-Term Support",
      text: "We grow with you",
    },
  ];

  return (
    <div className="vc-page">
      <style>{`
        .vc-page {
          --vc-navy: #031329;
          --vc-blue: #087cff;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          color: #111c30;
          background: #f4f8ff;
          width: 100%;
          overflow: hidden;
        }

        .vc-page * {
          box-sizing: border-box;
        }

        .vc-hero {
          position: relative;
          padding: 45px 5% 100px;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(2, 15, 35, .98), rgba(3, 25, 51, .88)),
            url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85")
            center 43% / cover no-repeat;
        }

        .vc-hero::after {
          content: "";
          position: absolute;
          inset: auto -100px -150px -100px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(0, 151, 255, .25),
            transparent 70%
          );
          pointer-events: none;
        }

        .vc-hero-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 35px;
          align-items: center;
          max-width: 1350px;
          margin: auto;
        }

        .vc-eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 15px;
          color: #00e0ee;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .vc-eyebrow::before {
          content: "";
          width: 35px;
          height: 2px;
          background: #00e0ee;
        }

        .vc-hero h1 {
          margin: 0 0 8px;
          font-size: clamp(45px, 6vw, 76px);
          line-height: 1.05;
          letter-spacing: -2px;
          font-weight: 850;
        }

        .vc-gradient {
          background: linear-gradient(90deg, #00d4ed, #3988ff, #9d52ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .vc-hero h2 {
          margin: 12px 0;
          font-size: clamp(19px, 2vw, 27px);
          line-height: 1.35;
          color: #e5edf9;
        }

        .vc-hero-description {
          max-width: 620px;
          color: #c3d0e3;
          font-size: 15px;
          line-height: 1.85;
        }

        .vc-hero-features {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 30px;
        }

        .vc-hero-feature {
          text-align: center;
          padding: 12px 5px;
          border-right: 1px solid rgba(255,255,255,.12);
        }

        .vc-hero-feature:last-child {
          border-right: 0;
        }

        .vc-feature-icon {
          display: grid;
          place-items: center;
          width: 53px;
          height: 53px;
          margin: 0 auto 10px;
          border-radius: 50%;
          color: white;
          background: linear-gradient(135deg, #00c8e9, #6044f9);
          font-size: 25px;
          box-shadow: 0 6px 20px rgba(0, 165, 255, .2);
        }

        .vc-hero-feature h3 {
          margin: 0 0 6px;
          font-size: 12px;
          color: #fff;
        }

        .vc-hero-feature p {
          margin: 0;
          font-size: 10px;
          line-height: 1.5;
          color: #c0cce0;
        }

        .vc-main {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: .9fr 1.2fr;
          gap: 15px;
          max-width: 1450px;
          margin: -75px auto 0;
          padding: 0 4%;
        }

        .vc-contact-panel,
        .vc-form-panel {
          min-width: 0;
          padding: 20px;
          border: 1px solid #dfebfa;
          border-radius: 20px;
          background: rgba(255,255,255,.97);
          box-shadow: 0 10px 35px rgba(18, 50, 95, .06);
        }

        .vc-contact-list {
          display: grid;
          gap: 9px;
        }

        .vc-contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          padding: 13px;
          border: 1px solid #edf3fc;
          border-radius: 15px;
          background: linear-gradient(110deg, #edf5ff, #f9fbff);
        }

        .vc-contact-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 49px;
          height: 49px;
          border-radius: 50%;
          color: #fff;
          font-size: 23px;
        }

        .vc-contact-item h3 {
          margin: 0 0 5px;
          font-size: 15px;
          font-weight: 800;
        }

        .vc-contact-item p {
          overflow-wrap: anywhere;
          margin: 0 0 4px;
          font-size: 13px;
          font-weight: 650;
          color: #19283d;
        }

        .vc-contact-item small {
          display: block;
          font-size: 11px;
          line-height: 1.5;
          color: #718099;
        }

        .vc-socials {
          display: flex;
          gap: 10px;
          margin-top: 9px;
        }

        .vc-socials a {
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border-radius: 10px;
          color: #fff;
          background: #087cff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          transition: transform .2s;
        }

        .vc-socials a:hover {
          transform: translateY(-3px);
        }

        .vc-socials a:nth-child(2) {
          background: #d946a5;
        }

        .vc-socials a:nth-child(3) {
          background: #1769d2;
        }

        .vc-socials a:nth-child(4) {
          background: #f22e3b;
        }

        .vc-map {
          position: relative;
          height: 195px;
          margin-top: 12px;
          overflow: hidden;
          border-radius: 15px;
          background: #e5edf6;
        }

        .vc-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .vc-map-label {
          position: absolute;
          bottom: 12px;
          left: 12px;
          max-width: calc(100% - 24px);
          padding: 10px 14px;
          border: 1px solid #e4ecf6;
          border-radius: 10px;
          background: rgba(255,255,255,.96);
          color: #17263d;
          font-size: 12px;
          font-weight: 750;
          pointer-events: none;
        }

        .vc-form-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(180px, .8fr);
          gap: 18px;
          overflow: hidden;
        }

        .vc-form-content {
          min-width: 0;
        }

        .vc-form-eyebrow {
          margin: 14px 0 8px;
          color: #039ae8;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .vc-form-content h2 {
          margin: 0 0 9px;
          font-size: clamp(30px, 3.3vw, 47px);
          line-height: 1.1;
          letter-spacing: -1.4px;
        }

        .vc-form-description {
          margin: 0 0 20px;
          color: #6c7b94;
          font-size: 13px;
          line-height: 1.7;
        }

        .vc-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
        }

        .vc-field {
          width: 100%;
          min-width: 0;
          height: 46px;
          padding: 0 13px;
          border: 1px solid #d9e5f5;
          border-radius: 11px;
          outline: none;
          background: #fbfdff;
          color: #15233a;
          font: inherit;
          font-size: 12px;
          transition: border-color .2s, box-shadow .2s;
        }

        .vc-field:focus {
          border-color: #238dff;
          box-shadow: 0 0 0 3px rgba(35,141,255,.10);
        }

        .vc-field::placeholder {
          color: #8290a8;
        }

        .vc-field option {
          color: #17263d;
        }

        .vc-full {
          grid-column: 1 / -1;
        }

        textarea.vc-field {
          height: 112px;
          padding-top: 13px;
          resize: vertical;
        }

        .vc-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          min-height: 49px;
          border: 0;
          border-radius: 12px;
          color: #fff;
          background: linear-gradient(100deg, #00bce9, #5260ff, #943cff);
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: transform .2s, box-shadow .2s;
        }

        .vc-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 90, 255, .2);
        }

        .vc-status {
          margin: 12px 0 0;
          color: #175ca6;
          font-size: 12px;
          line-height: 1.6;
        }

        .vc-office-visual {
          position: relative;
          align-self: stretch;
          min-height: 450px;
          overflow: hidden;
          border-radius: 15px;
          background: #07182c;
        }

        .vc-office-visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .vc-office-visual::after {
          content: "";
          position: absolute;
          inset: 35% 0 0;
          background: linear-gradient(transparent, rgba(1, 14, 31, .95));
        }

        .vc-quote {
          position: absolute;
          z-index: 1;
          right: 12px;
          bottom: 12px;
          left: 12px;
          padding: 16px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 14px;
          color: #fff;
          background: rgba(2, 20, 40, .86);
          backdrop-filter: blur(10px);
        }

        .vc-quote-icon {
          display: grid;
          place-items: center;
          width: 37px;
          height: 37px;
          margin-bottom: 11px;
          border-radius: 50%;
          color: white;
          background: linear-gradient(135deg, #00c9ee, #6a49ff);
          font-size: 19px;
        }

        .vc-quote p {
          margin: 0 0 10px;
          font-size: 13px;
          line-height: 1.75;
        }

        .vc-quote small {
          color: #b8c7db;
          font-size: 10px;
        }

        .vc-advantages {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          max-width: 1370px;
          margin: 15px auto 30px;
          padding: 18px 4%;
          border: 1px solid #dce8f7;
          border-radius: 17px;
          background: linear-gradient(100deg, #fff, #f0f6ff);
        }

        .vc-advantage {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 0;
          padding: 8px;
        }

        .vc-advantage + .vc-advantage {
          border-left: 1px solid #d4e0f0;
        }

        .vc-advantage-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          color: white;
          background: var(--vc-color);
          font-size: 26px;
        }

        .vc-advantage h3 {
          margin: 0 0 5px;
          font-size: 12px;
          font-weight: 800;
        }

        .vc-advantage p {
          margin: 0;
          color: #75839a;
          font-size: 11px;
          line-height: 1.5;
        }

        @media (min-width: 1450px) {
          .vc-main {
            gap: 18px;
          }

          .vc-contact-panel,
          .vc-form-panel {
            padding: 24px;
          }
        }

        @media (max-width: 1050px) {
          .vc-hero-content {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .vc-hero-description {
            max-width: 750px;
          }

          .vc-main {
            grid-template-columns: 1fr;
          }

          .vc-form-panel {
            grid-template-columns: minmax(0, 1fr) minmax(200px, .75fr);
          }

          .vc-office-visual {
            min-height: 420px;
          }
        }

        @media (max-width: 650px) {
          .vc-hero {
            padding: 36px 20px 95px;
          }

          .vc-hero h1 {
            font-size: 47px;
          }

          .vc-hero h2 {
            font-size: 20px;
          }

          .vc-hero-description {
            font-size: 13px;
          }

          .vc-hero-features {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .vc-hero-feature:nth-child(2) {
            border-right: 0;
          }

          .vc-main {
            margin-top: -70px;
            padding: 0 13px;
            gap: 13px;
          }

          .vc-contact-panel,
          .vc-form-panel {
            padding: 15px;
            border-radius: 17px;
          }

          .vc-contact-item {
            padding: 11px;
          }

          .vc-form-panel {
            grid-template-columns: 1fr;
          }

          .vc-form-eyebrow {
            font-size: 10px;
            letter-spacing: 2px;
          }

          .vc-form-content h2 {
            font-size: 35px;
          }

          .vc-form-grid {
            gap: 9px;
          }

          .vc-field {
            height: 45px;
            padding: 0 10px;
            font-size: 11px;
          }

          textarea.vc-field {
            height: 110px;
            padding-top: 12px;
          }

          .vc-office-visual {
            min-height: 320px;
          }

          .vc-advantages {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin: 13px;
            padding: 12px 6px;
            gap: 10px 3px;
          }

          .vc-advantage {
            justify-content: flex-start;
            gap: 8px;
            padding: 7px 4px;
          }

          .vc-advantage + .vc-advantage {
            border-left: 0;
          }

          .vc-advantage:nth-child(even) {
            border-left: 1px solid #d4e0f0;
            padding-left: 8px;
          }

          .vc-advantage-icon {
            width: 36px;
            height: 36px;
            font-size: 20px;
          }

          .vc-advantage h3 {
            font-size: 10px;
          }

          .vc-advantage p {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vc-page *,
          .vc-page *::before,
          .vc-page *::after {
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="vc-hero">
        <div className="vc-hero-content">
          <div>
            <div className="vc-eyebrow">Get In Touch</div>

            <h1>
              Contact <span className="vc-gradient">Us</span>
            </h1>

            <h2>Let's Build Something Amazing Together</h2>

            <p className="vc-hero-description">
              Have a project in mind or need expert consultation?
              We're here to help. Reach out to Vighnex Technologies
              and let's turn your ideas into reality.
            </p>
          </div>

          <div className="vc-hero-features">
            {[
              ["♧", "Quick Response", "We're here to help"],
              ["♙", "Expert Team", "Professional support"],
              ["✓", "Secure Communication", "Your privacy matters"],
              ["↗", "Growth Partnership", "Let's grow together"],
            ].map((item) => (
              <div className="vc-hero-feature" key={item[1]}>
                <div className="vc-feature-icon">{item[0]}</div>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="vc-main">
        <div className="vc-contact-panel">
          <div className="vc-contact-list">
            {contactItems.map((item) => (
              <div className="vc-contact-item" key={item.title}>
                <div
                  className="vc-contact-icon"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                  <small>{item.note}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="vc-contact-item" style={{ marginTop: 9 }}>
            <div
              className="vc-contact-icon"
              style={{
                background: "linear-gradient(135deg,#7040ff,#a044ff)",
              }}
            >
              ◎
            </div>

            <div>
              <h3>Follow Us</h3>

              <div className="vc-socials">
                <a href="https://www.linkedin.com/" target="_blank"
                  rel="noreferrer" aria-label="LinkedIn">in</a>
                <a href="https://www.instagram.com/" target="_blank"
                  rel="noreferrer" aria-label="Instagram">◎</a>
                <a href="https://www.facebook.com/" target="_blank"
                  rel="noreferrer" aria-label="Facebook">f</a>
                <a href="https://www.youtube.com/" target="_blank"
                  rel="noreferrer" aria-label="YouTube">▶</a>
              </div>
            </div>
          </div>

          <div className="vc-map">
            <iframe
              title="Explore Hyderabad on Google Maps"
              src="https://maps.google.com/maps?q=Hyderabad%2C%20Telangana%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="vc-map-label">
              Explore our location
            </div>
          </div>
        </div>

        <div className="vc-form-panel">
          <div className="vc-form-content">
            <div className="vc-form-eyebrow">
              Send Us a Message
            </div>

            <h2>
              Get In <span className="vc-gradient">Touch</span>
            </h2>

            <p className="vc-form-description">
              Tell us about your project. Share your requirements and
              our team can help you explore the right solution.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="vc-form-grid">
                <input
                  className="vc-field"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={updateField}
                  autoComplete="name"
                  required
                />

                <input
                  className="vc-field"
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={updateField}
                  autoComplete="email"
                  required
                />

                <input
                  className="vc-field"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={form.phone}
                  onChange={updateField}
                  autoComplete="tel"
                  required
                />

                <input
                  className="vc-field"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={updateField}
                  autoComplete="organization"
                />

                <select
                  className="vc-field vc-full"
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  required
                >
                  <option value="">Select a Service *</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <textarea
                  className="vc-field vc-full"
                  name="message"
                  placeholder="Tell us about your project *"
                  value={form.message}
                  onChange={updateField}
                  required
                />

                <button className="vc-submit vc-full" type="submit">
                  Send Message <span>→</span>
                </button>
              </div>

              {status && (
                <p className="vc-status" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="vc-office-visual">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
              alt="Modern professional office workspace"
              loading="lazy"
            />

            <div className="vc-quote">
              <div className="vc-quote-icon">✦</div>
              <p>
                "We're not just a service provider; we're your
                technology partner for long-term success."
              </p>
              <small>— Vighnex Technologies</small>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="vc-advantages">
        {advantages.map((item) => (
          <div className="vc-advantage" key={item.title}>
            <div
              className="vc-advantage-icon"
              style={{ "--vc-color": item.color }}
            >
              {item.icon}
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Contact;
