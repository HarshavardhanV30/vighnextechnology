import React, { useEffect, useState } from "react";
import Header, { Icon } from "../Components/header";
import Footer from "../Components/footer";
import logo from "../assests/vighnexlogo.png";
import poster from "../assests/image.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const services = [
    {
      icon: "code",
      title: "Web Development",
      text: "High-performance websites and web platforms engineered for speed, accessibility, scalability and measurable business growth.",
      tags: ["React", "Next.js", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85",
    },
    {
      icon: "design",
      title: "UI/UX Design",
      text: "Human-centered digital experiences combining research, visual systems, interaction design and conversion-focused interfaces.",
      tags: ["Figma", "Design Systems", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    },
    {
      icon: "marketing",
      title: "Digital Marketing",
      text: "Data-led marketing strategies that increase visibility, attract qualified audiences and turn attention into sustainable growth.",
      tags: ["SEO", "Social Media", "Analytics"],
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=85",
    },
    {
      icon: "mobile",
      title: "Mobile Development",
      text: "Modern Android and iOS applications with intuitive interfaces, secure architecture and reliable performance.",
      tags: ["Android", "iOS", "Cross Platform"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85",
    },
    {
      icon: "cloud",
      title: "Cloud Development",
      text: "Secure cloud-native solutions designed for resilience, automation, cost efficiency and effortless scaling.",
      tags: ["AWS", "Azure", "DevOps"],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const technologies = [
    ["React", "Frontend"],
    ["Next.js", "Frontend"],
    ["Node.js", "Backend"],
    ["Python", "Backend"],
    ["Java", "Backend"],
    ["Flutter", "Mobile"],
    ["MongoDB", "Database"],
    ["PostgreSQL", "Database"],
    ["AWS", "Cloud"],
    ["Docker", "DevOps"],
    ["Figma", "Design"],
    ["GitHub", "Development"],
  ];

  const process = [
    ["01", "Discover", "We understand your goals, audience, challenges and opportunities before writing a single line of code.", "target"],
    ["02", "Strategize", "We convert business requirements into a clear digital roadmap with measurable priorities.", "layers"],
    ["03", "Design", "We create intuitive interfaces and experiences that feel natural, premium and purposeful.", "design"],
    ["04", "Build", "Our engineers transform the approved experience into secure, scalable and high-quality products.", "code"],
    ["05", "Launch", "We test, optimize, deploy and monitor your solution for a confident launch.", "rocket"],
    ["06", "Grow", "We continue improving your product using data, feedback, experiments and technology.", "spark"],
  ];

  const projects = [
    {
      title: "FinEdge",
      category: "FinTech Platform",
      text: "A modern financial management experience designed around clarity, trust and frictionless digital journeys.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Medivista",
      category: "Healthcare Experience",
      text: "A patient-focused digital ecosystem that makes appointments, information and communication easier.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "UrbanCart",
      category: "E-Commerce",
      text: "A conversion-focused shopping experience built for speed, discovery and effortless checkout.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Rao",
      role: "Founder, Nova Ventures",
      text: "The Vighnex team understood our vision quickly and turned it into a digital experience that feels far more premium than we imagined.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Rahul Mehta",
      role: "Director, Crest Solutions",
      text: "What impressed us most was the combination of design thinking and technical discipline. Communication was clear from start to finish.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Entrepreneur",
      text: "They did not simply build a website. They helped us think through our entire digital presence and created something our customers love.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const faqs = [
    [
      "What services does Vighnex Technologies provide?",
      "We provide web development, UI/UX design, digital marketing, mobile application development and cloud development. We can also combine multiple services into one complete digital transformation engagement.",
    ],
    [
      "Can you build a website from an idea only?",
      "Yes. We can start from a concept, business requirement, rough sketch or existing website. We help define the structure, user journey, visual direction, technology and launch plan.",
    ],
    [
      "Do you develop mobile applications for both Android and iOS?",
      "Yes. Depending on project requirements, we can build native or cross-platform applications with a strong focus on performance, security and user experience.",
    ],
    [
      "Do you provide maintenance after launch?",
      "Yes. We can provide ongoing technical support, security updates, performance improvements, content changes, analytics and feature development.",
    ],
    [
      "How do you handle project communication?",
      "We maintain a structured communication process with requirement discussions, progress updates, reviews, testing and final deployment so clients always understand the current project status.",
    ],
    [
      "How can I start a project with Vighnex?",
      "Simply contact us with your idea, requirements or business challenge. We will understand your objectives and discuss the most practical next steps.",
    ],
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = new FormData(form);

    body.append("access_key", "5fad69d61e5e48949197e16863e40e92");

    setFormStatus("sending");

    try {
      const response = await fetch("https://splitforms.com/api/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  const page = {
    background: "#faf7f0",
    color: "#11243a",
    minHeight: "100vh",
    fontFamily: "Inter,Arial,sans-serif",
  };

  const container = {
    width: "min(1180px,92%)",
    margin: "0 auto",
  };

  const section = {
    padding: "90px 0",
  };

  const title = {
    textAlign: "center",
    maxWidth: 720,
    margin: "0 auto 55px",
  };

  const eyebrow = {
    color: "#c89032",
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: 14,
  };

  const button = {
    border: 0,
    borderRadius: 50,
    padding: "14px 23px",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    textDecoration: "none",
  };

  const dark = {
    background: "linear-gradient(135deg,#071f32,#0d354c)",
    color: "#fff",
  };

  return (
    <div style={page}>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />

      <section
        id="home"
        style={{
          minHeight: 720,
          padding: "150px 0 80px",
          background:
            "radial-gradient(circle at 80% 35%,rgba(214,169,78,.22),transparent 32%),linear-gradient(110deg,#faf7f0 40%,#f0e5ce)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 55,
            alignItems: "center",
          }}
        >
          <div>
            <div style={eyebrow}>Traditional Values · Digital Future</div>

            <h1
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(48px,7vw,78px)",
                lineHeight: 0.98,
                color: "#092338",
                letterSpacing: -2,
                margin: 0,
              }}
            >
              Build Digital
              <br />
              <span style={{ color: "#c89032" }}>Possibilities.</span>
            </h1>

            <p
              style={{
                maxWidth: 600,
                fontSize: 18,
                lineHeight: 1.75,
                color: "#566575",
                margin: "27px 0 32px",
              }}
            >
              We transform ambitious ideas into meaningful digital experiences
              through technology, thoughtful design and strategies built for
              long-term growth.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  ...button,
                  background: "#092338",
                  color: "#fff",
                  boxShadow: "0 12px 28px rgba(9,35,56,.18)",
                }}
              >
                Start Your Journey <Icon type="arrow" size={17} />
              </button>

              <button
                onClick={() => scrollTo("services")}
                style={{
                  ...button,
                  border: "1px solid #d7c9ae",
                  color: "#092338",
                  background: "transparent",
                }}
              >
                Explore Services
              </button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 28,
                color: "#526274",
                fontSize: 13,
              }}
            >
              <Icon type="shield" size={19} />
              <span>
                <strong style={{ color: "#092338" }}>Design-led.</strong>{" "}
                Engineering-driven. Growth-focused.
              </span>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 440,
                height: 500,
                maxWidth: "90%",
                borderRadius: "220px 220px 30px 30px",
                background:
                  "linear-gradient(145deg,rgba(200,144,50,.15),rgba(9,35,56,.1))",
                position: "absolute",
                transform: "rotate(5deg)",
              }}
            />

            <img
              src={poster}
              alt="Vighnex Technologies"
              style={{
                width: "min(430px,85%)",
                height: 260,
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
                filter: "drop-shadow(0 25px 35px rgba(9,35,56,.16))",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 0,
                top: 75,
                background: "#fff",
                padding: "17px 20px",
                borderRadius: 18,
                boxShadow: "0 15px 40px rgba(20,40,55,.13)",
                display: "flex",
                gap: 12,
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  width: 43,
                  height: 43,
                  borderRadius: 13,
                  background: "#fff2d4",
                  color: "#c89032",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon type="spark" size={21} />
              </div>
              <div>
                <strong style={{ display: "block", color: "#092338" }}>
                  Smart Solutions
                </strong>
                <span style={{ fontSize: 11, color: "#7a8792" }}>
                  Built around your goals
                </span>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 55,
                background: "#fff",
                padding: "17px 20px",
                borderRadius: 18,
                boxShadow: "0 15px 40px rgba(20,40,55,.13)",
                display: "flex",
                gap: 12,
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  width: 43,
                  height: 43,
                  borderRadius: 13,
                  background: "#fff2d4",
                  color: "#c89032",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon type="rocket" size={21} />
              </div>
              <div>
                <strong style={{ display: "block", color: "#092338" }}>
                  Digital Growth
                </strong>
                <span style={{ fontSize: 11, color: "#7a8792" }}>
                  From idea to impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={section}>
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 70,
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Vighnex Technologies team"
              loading="lazy"
              style={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                borderRadius: 25,
                display: "block",
                boxShadow: "20px 25px 60px rgba(17,36,58,.13)",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: -20,
                bottom: 25,
                background: "#092338",
                color: "#fff",
                padding: 24,
                borderRadius: 20,
                width: 190,
                textAlign: "center",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontFamily: "Georgia,serif",
                  fontSize: 38,
                  color: "#e6b85c",
                }}
              >
                360°
              </strong>
              <span style={{ fontSize: 12 }}>
                Digital thinking from strategy to scale
              </span>
            </div>
          </div>

          <div>
            <div style={eyebrow}>About Vighnex</div>

            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(38px,5vw,56px)",
                lineHeight: 1.05,
                color: "#092338",
                marginBottom: 22,
              }}
            >
              Rooted in values. Driven by innovation.
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "#637181",
                marginBottom: 17,
              }}
            >
              Vighnex Technologies is a digital solutions company focused on
              creating technology that feels useful, intuitive and genuinely
              valuable.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "#637181",
              }}
            >
              Our approach brings strategy, design, engineering and growth
              together so businesses do not have to manage disconnected digital
              partners.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {[
                ["Human First", "We design around real people and real problems."],
                ["Quality Always", "Every detail matters from concept to deployment."],
                ["Think Long Term", "We build foundations that can evolve with you."],
                ["Move With Purpose", "Clear priorities create meaningful progress."],
              ].map(([a, b]) => (
                <div
                  key={a}
                  style={{
                    padding: 17,
                    border: "1px solid #e8decb",
                    borderRadius: 15,
                    background: "#fff",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      color: "#092338",
                      marginBottom: 5,
                    }}
                  >
                    {a}
                  </strong>
                  <span style={{ fontSize: 12, color: "#637181" }}>{b}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              style={{
                ...button,
                background: "#092338",
                color: "#fff",
              }}
            >
              Work With Us <Icon type="arrow" size={17} />
            </button>
          </div>
        </div>
      </section>

      <section id="services" style={{ ...section, ...dark }}>
        <div style={container}>
          <div style={title}>
            <div style={eyebrow}>What We Do</div>
            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(36px,5vw,58px)",
                lineHeight: 1.05,
                marginBottom: 18,
                color: "#fff",
              }}
            >
              Complete digital solutions under one roof.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#cbd8e0" }}>
              From your first sketch to your next million users, our
              capabilities are designed to work together.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
              gap: 17,
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  background: "#fff",
                  color: "#11243a",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(0,0,0,.16)",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 145,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div style={{ padding: 22 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 15,
                      display: "grid",
                      placeItems: "center",
                      background: "#fff1cf",
                      color: "#c89032",
                      marginBottom: 18,
                    }}
                  >
                    <Icon type={service.icon} size={26} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Georgia,serif",
                      fontSize: 21,
                      marginBottom: 12,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#637181",
                      fontSize: 13,
                      lineHeight: 1.7,
                      marginBottom: 18,
                    }}
                  >
                    {service.text}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 10,
                          border: "1px solid #d9e2e8",
                          borderRadius: 20,
                          padding: "6px 8px",
                          color: "#60717f",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" style={{ ...section, ...dark }}>
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 65,
            alignItems: "center",
          }}
        >
          <div>
            <div style={eyebrow}>Why Choose Us</div>

            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(38px,5vw,56px)",
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              Technology with a human touch.
            </h2>

            <p
              style={{
                lineHeight: 1.8,
                color: "#b9cad4",
                marginBottom: 25,
              }}
            >
              Good technology should simplify complexity, not add to it. We
              combine strategic thinking, modern engineering and thoughtful
              communication to make digital projects easier to build and better
              to experience.
            </p>

            <div style={{ display: "grid", gap: 17 }}>
              {[
                ["Business Understanding", "We start with your objectives instead of jumping directly into technology.", "target"],
                ["Transparent Collaboration", "Clear milestones, regular reviews and straightforward communication.", "users"],
                ["Modern Engineering", "Scalable architecture, clean development practices and performance-focused delivery.", "code"],
                ["Security & Reliability", "Security-conscious implementation and dependable digital foundations.", "shield"],
                ["Growth Mindset", "We design products that can improve continuously after launch.", "spark"],
              ].map(([a, b, c]) => (
                <div
                  key={a}
                  style={{
                    display: "flex",
                    gap: 15,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 35,
                      height: 35,
                      minWidth: 35,
                      borderRadius: "50%",
                      background: "rgba(230,184,92,.15)",
                      color: "#e6b85c",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Icon type={c} size={18} />
                  </div>

                  <div>
                    <strong style={{ display: "block", marginBottom: 4 }}>
                      {a}
                    </strong>
                    <span
                      style={{
                        fontSize: 13,
                        lineHeight: 1.5,
                        color: "#a9bdc9",
                      }}
                    >
                      {b}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85"
            alt="Vighnex Technologies business team"
            loading="lazy"
            style={{
              width: "100%",
              height: 560,
              objectFit: "cover",
              borderRadius: 30,
              display: "block",
              boxShadow: "0 25px 60px rgba(0,0,0,.2)",
            }}
          />
        </div>
      </section>

      <section id="technology" style={section}>
        <div style={container}>
          <div style={title}>
            <div style={eyebrow}>Technology Stack</div>
            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(36px,5vw,58px)",
                lineHeight: 1.05,
                color: "#092338",
                marginBottom: 18,
              }}
            >
              Built with technology that moves forward.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#637181" }}>
              We choose tools based on the problem, not trends. Our stack
              supports fast development today and sustainable growth tomorrow.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              maxWidth: 900,
              margin: "auto",
            }}
          >
            {technologies.map(([a, b]) => (
              <div
                key={a}
                style={{
                  background: "#fff",
                  border: "1px solid #e9e0d0",
                  padding: "16px 21px",
                  borderRadius: 15,
                  display: "flex",
                  gap: 9,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: "#c89032",
                  }}
                />
                <strong>{a}</strong>
                <small style={{ color: "#85909b" }}>{b}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        style={{
          ...section,
          background: "#f3ecdf",
        }}
      >
        <div style={container}>
          <div style={title}>
            <div style={eyebrow}>Our Process</div>
            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(36px,5vw,58px)",
                lineHeight: 1.05,
                color: "#092338",
                marginBottom: 18,
              }}
            >
              From first conversation to lasting impact.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#637181" }}>
              A structured process keeps creativity focused, development
              predictable and every decision connected to your goals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
              gap: 25,
            }}
          >
            {process.map(([num, name, text, icon]) => (
              <div
                key={name}
                style={{
                  textAlign: "center",
                  padding: 10,
                }}
              >
                <div
                  style={{
                    color: "#c89032",
                    fontFamily: "Georgia,serif",
                    fontSize: 13,
                    marginBottom: 10,
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    border: "1px solid #e1c78d",
                    background: "#fff",
                    margin: "0 auto 17px",
                    display: "grid",
                    placeItems: "center",
                    color: "#c89032",
                  }}
                >
                  <Icon type={icon} size={28} />
                </div>

                <h3
                  style={{
                    fontFamily: "Georgia,serif",
                    marginBottom: 8,
                  }}
                >
                  {name}
                </h3>

                <p
                  style={{
                    fontSize: 12,
                    lineHeight: 1.6,
                    color: "#637181",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#092338",
          color: "#fff",
          padding: "65px 0",
        }}
      >
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            textAlign: "center",
          }}
        >
          {[
            ["50+", "Digital Ideas Transformed"],
            ["100+", "Projects & Deliverables"],
            ["24/7", "Digital Possibilities"],
            ["100%", "Commitment to Quality"],
          ].map(([a, b]) => (
            <div key={b} style={{ padding: 20 }}>
              <strong
                style={{
                  fontFamily: "Georgia,serif",
                  fontSize: 48,
                  color: "#e6b85c",
                  display: "block",
                }}
              >
                {a}
              </strong>
              <span style={{ fontSize: 13, color: "#bdcdd6" }}>{b}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={section}>
        <div style={container}>
          <div style={title}>
            <div style={eyebrow}>Selected Work</div>
            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(36px,5vw,58px)",
                color: "#092338",
                marginBottom: 18,
              }}
            >
              Ideas become experiences.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#637181" }}>
              A glimpse into the kind of digital experiences we love creating.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 22,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                style={{
                  background: "#fff",
                  borderRadius: 22,
                  overflow: "hidden",
                  boxShadow: "0 10px 35px rgba(25,43,60,.08)",
                }}
              >
                <img
                  src={poster}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div style={{ padding: 25 }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#c89032",
                      fontWeight: 800,
                      letterSpacing: 2,
                    }}
                  >
                    {project.category}
                  </div>

                  <h3
                    style={{
                      fontFamily: "Georgia,serif",
                      fontSize: 27,
                      margin: "8px 0",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#637181",
                      marginBottom: 17,
                    }}
                  >
                    {project.text}
                  </p>

                  <button
                    onClick={() => scrollTo("contact")}
                    style={{
                      border: 0,
                      background: "transparent",
                      color: "#092338",
                      fontWeight: 800,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    Discuss a Similar Project <Icon type="arrow" size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        style={{
          ...section,
          background: "#f3ecdf",
        }}
      >
        <div style={container}>
          <div style={title}>
            <div style={eyebrow}>Client Voices</div>
            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(36px,5vw,58px)",
                color: "#092338",
                marginBottom: 18,
              }}
            >
              Built on trust. Remembered for results.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#637181" }}>
              Strong partnerships are at the center of everything we build.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 22,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#fff",
                  border: "1px solid #eee5d7",
                  borderRadius: 22,
                  padding: 30,
                }}
              >
                <div
                  style={{
                    color: "#c89032",
                    display: "flex",
                    gap: 2,
                    marginBottom: 20,
                  }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} type="star" size={15} />
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: "Georgia,serif",
                    fontSize: 18,
                    lineHeight: 1.65,
                    color: "#33495b",
                    marginBottom: 25,
                  }}
                >
                  “{item.text}”
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 13,
                  }}
                >
                  <img
                    src={logo}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <strong style={{ display: "block", color: "#092338" }}>
                      {item.name}
                    </strong>
                    <span style={{ fontSize: 11, color: "#637181" }}>
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={section}>
        <div style={container}>
          <div style={title}>
            <div style={eyebrow}>FAQ</div>
            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(36px,5vw,58px)",
                color: "#092338",
                marginBottom: 18,
              }}
            >
              Questions before we begin?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#637181" }}>
              Here are answers to some of the things clients ask us most often.
            </p>
          </div>

          <div style={{ maxWidth: 850, margin: "auto" }}>
            {faqs.map(([question, answer], index) => (
              <div
                key={question}
                style={{
                  borderBottom: "1px solid #e1d8ca",
                }}
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? -1 : index)
                  }
                  aria-expanded={activeFaq === index}
                  style={{
                    width: "100%",
                    padding: "23px 0",
                    background: "transparent",
                    border: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#092338",
                    fontSize: 16,
                    fontWeight: 800,
                    gap: 20,
                  }}
                >
                  <span>{question}</span>
                  <span
                    style={{
                      fontSize: 24,
                      color: "#c89032",
                      minWidth: 25,
                      textAlign: "center",
                    }}
                  >
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>

                {activeFaq === index && (
                  <div
                    style={{
                      padding: "0 40px 22px 0",
                      color: "#637181",
                      lineHeight: 1.8,
                      fontSize: 14,
                    }}
                  >
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          ...section,
          background: "linear-gradient(135deg,#071f32,#123b52)",
          color: "#fff",
        }}
      >
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 60,
            alignItems: "start",
          }}
        >
          <div>
            <div style={eyebrow}>Let's Connect</div>

            <h2
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "clamp(40px,5vw,60px)",
                lineHeight: 1.05,
                marginBottom: 20,
              }}
            >
              Have an idea? Let's make it real.
            </h2>

            <p
              style={{
                color: "#b8cad5",
                lineHeight: 1.8,
                marginBottom: 30,
              }}
            >
              Tell us what you are building, what you want to improve or simply
              where you want to go next. We would love to hear the story behind
              your idea.
            </p>

            <div style={{ display: "grid", gap: 18 }}>
              {[
                ["phone", "Call Us", "+91 9390642779"],
                ["mail", "Email Us", "vighnex@gmail.com"],
                ["location", "Location", "Banglore, India"],
              ].map(([icon, label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 43,
                      height: 43,
                      borderRadius: 13,
                      background: "rgba(230,184,92,.13)",
                      color: "#e6b85c",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Icon type={icon} size={19} />
                  </div>

                  <div>
                    <strong style={{ display: "block", fontSize: 13 }}>
                      {label}
                    </strong>
                    <span style={{ fontSize: 12, color: "#adc0cb" }}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85"
              alt="Digital collaboration"
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: 480,
                height: 210,
                objectFit: "cover",
                borderRadius: 20,
                marginTop: 35,
                opacity: 0.85,
              }}
            />
          </div>

          {formStatus === "success" ? (
            <div
              style={{
                background: "#fff",
                color: "#092338",
                borderRadius: 25,
                padding: 45,
                textAlign: "center",
                boxShadow: "0 25px 60px rgba(0,0,0,.2)",
              }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "#fff1cf",
                  color: "#c89032",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 20px",
                }}
              >
                <Icon type="check" size={35} />
              </div>

              <h3
                style={{
                  fontFamily: "Georgia,serif",
                  fontSize: 30,
                  marginBottom: 12,
                }}
              >
                Thank You!
              </h3>

              <p style={{ color: "#637181", lineHeight: 1.7 }}>
                Your message has been sent successfully. Our team will get back
                to you soon.
              </p>

              <button
                onClick={() => setFormStatus("idle")}
                style={{
                  ...button,
                  marginTop: 25,
                  background: "#092338",
                  color: "#fff",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#fff",
                color: "#092338",
                borderRadius: 25,
                padding: 32,
                boxShadow: "0 25px 60px rgba(0,0,0,.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia,serif",
                  fontSize: 30,
                  marginBottom: 22,
                }}
              >
                Start a conversation
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
                  gap: 15,
                }}
              >
                {[
                  ["name", "YOUR NAME", "Enter your name", "text", true],
                  ["email", "EMAIL ADDRESS", "you@example.com", "email", true],
                  ["phone", "PHONE NUMBER", "+91 XXXXX XXXXX", "tel", false],
                ].map(([name, label, placeholder, type, required]) => (
                  <label
                    key={name}
                    style={{
                      display: "block",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: 11,
                        fontWeight: 800,
                        marginBottom: 7,
                        color: "#556575",
                      }}
                    >
                      {label}
                    </span>

                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                      style={{
                        width: "100%",
                        border: "1px solid #e1e5e8",
                        borderRadius: 12,
                        padding: 14,
                        fontFamily: "inherit",
                        outline: "none",
                        background: "#fbfcfd",
                      }}
                    />
                  </label>
                ))}

                <label style={{ display: "block" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 800,
                      marginBottom: 7,
                      color: "#556575",
                    }}
                  >
                    SERVICE
                  </span>

                  <select
                    name="choice"
                    defaultValue=""
                    required
                    style={{
                      width: "100%",
                      border: "1px solid #e1e5e8",
                      borderRadius: 12,
                      padding: 14,
                      fontFamily: "inherit",
                      outline: "none",
                      background: "#fbfcfd",
                    }}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Mobile Development</option>
                    <option>Cloud Development</option>
                    <option>Complete Digital Solution</option>
                  </select>
                </label>

                <label
                  style={{
                    display: "block",
                    gridColumn: "1/-1",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 800,
                      marginBottom: 7,
                      color: "#556575",
                    }}
                  >
                    PROJECT DETAILS
                  </span>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about your idea, goals or requirements..."
                    required
                    style={{
                      width: "100%",
                      border: "1px solid #e1e5e8",
                      borderRadius: 12,
                      padding: 14,
                      fontFamily: "inherit",
                      outline: "none",
                      background: "#fbfcfd",
                      resize: "vertical",
                    }}
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                style={{
                  ...button,
                  width: "100%",
                  marginTop: 8,
                  background:
                    formStatus === "sending"
                      ? "#c7a35f"
                      : "linear-gradient(135deg,#e6b85c,#c89032)",
                  color: "#152536",
                  opacity: formStatus === "sending" ? 0.8 : 1,
                }}
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : "Send Enquiry"}{" "}
                <Icon type="arrow" size={17} />
              </button>

              {formStatus === "error" && (
                <p
                  style={{
                    marginTop: 14,
                    color: "#c0392b",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Something went wrong — please try again.
                </p>
              )}

              <p
                style={{
                  marginTop: 12,
                  fontSize: 11,
                  color: "#888",
                  textAlign: "right",
                }}
              >
                Powered by{" "}
                <a
                  href="https://splitforms.com"
                  target="_blank"
                  rel="sponsored noopener"
                  style={{
                    color: "#888",
                    textDecoration: "none",
                  }}
                >
                  splitforms
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer scrollTo={scrollTo} />


    </div>
  );
}