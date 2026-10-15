import React, { useState } from "react";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [formStatus, setFormStatus] = useState("idle");

  const colors = {
    navy: "#06152E",
    navyLight: "#0B2850",
    blue: "#1264D8",
    cyan: "#00C8F0",
    gold: "#F7B928",
    orange: "#FF6B21",
    purple: "#8138D8",
    white: "#FFFFFF",
    background: "#F4F8FF",
    text: "#102B4E",
    muted: "#647891",
    border: "#DCE7F5",
  };

  const services = [
    {
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=85",
      color: colors.blue,
    },
    {
      title: "Mobile App Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85",
      color: colors.cyan,
    },
    {
      title: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=85",
      color: colors.purple,
    },
    {
      title: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=85",
      color: colors.orange,
    },
    {
      title: "Logo & Branding",
      image:
        "https://images.unsplash.com/photo-1634942536790-2536f7c1d4a7?auto=format&fit=crop&w=1000&q=85",
      color: colors.gold,
    },
    {
      title: "Cloud Deployment",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
      color: colors.blue,
    },
  ];

  const projects = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Python",
    "Java",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GitHub",
    "Figma",
  ];

  const processSteps = [
    ["01", "Discover", "Understand your goals and business requirements."],
    ["02", "Plan", "Create a practical roadmap for your project."],
    ["03", "Design", "Build an intuitive and engaging experience."],
    ["04", "Develop", "Turn your concept into a working product."],
    ["05", "Launch", "Test, optimize and deploy your solution."],
    ["06", "Grow", "Improve your product as your business evolves."],
  ];

  const faqs = [
    [
      "What services does Vighnex Technologies provide?",
      "We provide web development, mobile app development, UI/UX design, digital marketing, logo and branding, and cloud deployment services.",
    ],
    [
      "Can you build a website for my business?",
      "Yes. We can help plan, design and develop a website based on your business goals, audience and requirements.",
    ],
    [
      "Do you develop mobile applications?",
      "Yes. We can develop mobile applications for Android and iOS according to your project requirements.",
    ],
    [
      "Can I request multiple services?",
      "Yes. You can combine web development, branding, marketing, mobile applications and deployment into one project.",
    ],
    [
      "How can I get a project quotation?",
      "Use the contact form below to share your requirements. Our team can review your project details and discuss the next steps.",
    ],
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");

    try {
      const response = await fetch("https://splitforms.com/api/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

  const styles = `
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 25px;
    }

    body {
      margin: 0;
    }

    .vx-home {
      width: 100%;
      overflow: hidden;
      color: ${colors.text};
      background: ${colors.background};
      font-family: Inter, "Segoe UI", Arial, sans-serif;
    }

    .vx-home img {
      max-width: 100%;
    }

    .vx-container {
      width: min(1180px, 92%);
      margin: 0 auto;
    }

    .vx-section {
      padding: 88px 0;
    }

    .vx-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 17px;
      color: ${colors.blue};
      font-size: 12px;
      font-weight: 850;
      letter-spacing: 2.8px;
      text-transform: uppercase;
    }

    .vx-eyebrow::before {
      content: "";
      width: 25px;
      height: 3px;
      border-radius: 5px;
      background: linear-gradient(
        90deg,
        ${colors.cyan},
        ${colors.blue}
      );
    }

    .vx-title {
      max-width: 760px;
      margin: 0 auto 48px;
      text-align: center;
    }

    .vx-title h2 {
      margin: 0 0 18px;
      color: ${colors.navy};
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(34px, 5vw, 55px);
      line-height: 1.12;
      letter-spacing: -1.2px;
    }

    .vx-title p {
      margin: 0;
      color: ${colors.muted};
      font-size: 16px;
      line-height: 1.8;
    }

    .vx-gradient-text {
      color: ${colors.blue};
      background: linear-gradient(
        100deg,
        ${colors.blue},
        ${colors.cyan},
        ${colors.purple}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .vx-button {
      display: inline-flex;
      min-height: 49px;
      align-items: center;
      justify-content: center;
      gap: 11px;
      padding: 13px 24px;
      border: 0;
      border-radius: 40px;
      color: #fff;
      background: linear-gradient(
        110deg,
        ${colors.blue},
        ${colors.cyan}
      );
      box-shadow: 0 9px 25px rgba(18, 100, 216, 0.22);
      font-family: inherit;
      font-size: 14px;
      font-weight: 800;
      text-decoration: none;
      cursor: pointer;
      transition: transform .25s ease, box-shadow .25s ease;
    }

    .vx-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 30px rgba(18, 100, 216, 0.3);
    }

    .vx-button-outline {
      border: 1px solid #b9d5f6;
      color: ${colors.navy};
      background: rgba(255, 255, 255, .75);
      box-shadow: none;
    }

    .vx-button-outline:hover {
      background: #fff;
    }

    .vx-hero {
      position: relative;
      display: flex;
      min-height: 680px;
      align-items: center;
      padding: 80px 0;
      overflow: hidden;
      background:
        radial-gradient(
          circle at 82% 25%,
          rgba(0, 200, 240, .19),
          transparent 28%
        ),
        radial-gradient(
          circle at 68% 85%,
          rgba(129, 56, 216, .11),
          transparent 27%
        ),
        linear-gradient(120deg, #f8fbff, #e7f2ff);
    }

    .vx-hero::before {
      content: "";
      position: absolute;
      top: -160px;
      right: -100px;
      width: 480px;
      height: 480px;
      border: 1px solid rgba(18, 100, 216, .13);
      border-radius: 50%;
      box-shadow:
        0 0 0 45px rgba(18, 100, 216, .035),
        0 0 0 95px rgba(0, 200, 240, .025);
      pointer-events: none;
    }

    .vx-hero-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      align-items: center;
      gap: 50px;
    }

    .vx-hero h1 {
      max-width: 700px;
      margin: 0;
      color: ${colors.navy};
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(45px, 6vw, 75px);
      line-height: 1.02;
      letter-spacing: -2.4px;
    }

    .vx-hero-description {
      max-width: 590px;
      margin: 25px 0 30px;
      color: #526983;
      font-size: 17px;
      line-height: 1.85;
    }

    .vx-hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 13px;
    }

    .vx-hero-note {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 28px;
      color: #536b86;
      font-size: 13px;
    }

    .vx-hero-note span {
      color: ${colors.blue};
      font-size: 20px;
    }

    .vx-hero-visual {
      position: relative;
      min-width: 0;
    }

    .vx-hero-image {
      display: block;
      width: 100%;
      height: 440px;
      border: 7px solid rgba(255, 255, 255, .8);
      border-radius: 30px 100px 30px 100px;
      object-fit: cover;
      box-shadow: 0 28px 70px rgba(6, 35, 75, .18);
    }

    .vx-floating {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 15px 18px;
      border: 1px solid rgba(220, 235, 255, .8);
      border-radius: 15px;
      background: rgba(255, 255, 255, .96);
      box-shadow: 0 15px 38px rgba(6, 35, 75, .13);
    }

    .vx-floating-icon {
      display: grid;
      width: 43px;
      height: 43px;
      flex-shrink: 0;
      place-items: center;
      border-radius: 12px;
      color: ${colors.blue};
      background: #e7f5ff;
      font-size: 23px;
    }

    .vx-floating strong {
      display: block;
      color: ${colors.navy};
      font-size: 13px;
    }

    .vx-floating small {
      display: block;
      margin-top: 5px;
      color: ${colors.muted};
      font-size: 11px;
    }

    .vx-floating-one {
      top: 35px;
      left: -35px;
    }

    .vx-floating-two {
      right: -25px;
      bottom: 35px;
    }

    .vx-trust-strip {
      position: relative;
      z-index: 2;
      padding: 23px 0;
      color: #fff;
      background: linear-gradient(
        105deg,
        ${colors.navy},
        ${colors.navyLight},
        #104b8b
      );
    }

    .vx-trust-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .vx-trust-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 11px;
      padding: 8px;
      text-align: center;
      font-size: 13px;
      font-weight: 700;
    }

    .vx-trust-item span {
      color: ${colors.cyan};
      font-size: 22px;
    }

    .vx-about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 70px;
    }

    .vx-about-image-wrap {
      position: relative;
      min-width: 0;
    }

    .vx-about-image {
      display: block;
      width: 100%;
      height: 470px;
      border-radius: 24px;
      object-fit: cover;
      box-shadow: 18px 20px 55px rgba(6, 35, 75, .14);
    }

    .vx-about-badge {
      position: absolute;
      right: -18px;
      bottom: 25px;
      width: 180px;
      padding: 22px;
      border: 1px solid rgba(255, 255, 255, .2);
      border-radius: 18px;
      color: #fff;
      background: linear-gradient(
        135deg,
        ${colors.navy},
        ${colors.blue}
      );
      box-shadow: 0 15px 35px rgba(6, 35, 75, .2);
      text-align: center;
    }

    .vx-about-badge strong {
      display: block;
      color: ${colors.gold};
      font-family: Georgia, serif;
      font-size: 35px;
    }

    .vx-about-badge span {
      display: block;
      margin-top: 7px;
      font-size: 11px;
      line-height: 1.6;
    }

    .vx-about-copy h2 {
      margin: 0 0 20px;
      color: ${colors.navy};
      font-family: Georgia, serif;
      font-size: clamp(35px, 4.5vw, 52px);
      line-height: 1.12;
    }

    .vx-about-copy p {
      color: ${colors.muted};
      font-size: 15px;
      line-height: 1.9;
    }

    .vx-value-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      margin: 25px 0;
    }

    .vx-value {
      padding: 17px;
      border: 1px solid ${colors.border};
      border-radius: 13px;
      background: #fff;
    }

    .vx-value strong {
      display: block;
      margin-bottom: 6px;
      color: ${colors.blue};
      font-size: 13px;
    }

    .vx-value span {
      color: ${colors.muted};
      font-size: 12px;
      line-height: 1.6;
    }

    .vx-services-section {
      color: #fff;
      background:
        radial-gradient(
          circle at 100% 0%,
          rgba(0, 200, 240, .13),
          transparent 30%
        ),
        linear-gradient(135deg, ${colors.navy}, #0a2e5e);
    }

    .vx-services-section .vx-title h2 {
      color: #fff;
    }

    .vx-services-section .vx-title p {
      color: #c5d7ec;
    }

    .vx-services-section .vx-eyebrow {
      color: ${colors.cyan};
    }

    .vx-services-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }

    .vx-service-card {
      position: relative;
      display: block;
      min-width: 0;
      height: 260px;
      padding: 0;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, .14);
      border-radius: 18px;
      background: #102e53;
      cursor: pointer;
      text-decoration: none;
      isolation: isolate;
    }

    .vx-service-card::after {
      content: "";
      position: absolute;
      z-index: 1;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(4, 18, 42, .02) 20%,
        rgba(4, 18, 42, .82) 100%
      );
      transition: background .25s ease;
    }

    .vx-service-card img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .45s ease;
    }

    .vx-service-card:hover img {
      transform: scale(1.07);
    }

    .vx-service-card:hover::after {
      background: linear-gradient(
        180deg,
        rgba(4, 18, 42, .03) 10%,
        rgba(4, 18, 42, .94) 100%
      );
    }

    .vx-service-name {
      position: absolute;
      z-index: 2;
      right: 18px;
      bottom: 20px;
      left: 18px;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      text-align: left;
      text-shadow: 0 2px 10px rgba(0, 0, 0, .35);
    }

    .vx-service-name::after {
      content: " ↗";
      color: ${colors.cyan};
    }

    .vx-why-section {
      color: #fff;
      background: ${colors.navy};
    }

    .vx-why-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 65px;
    }

    .vx-why-grid h2 {
      margin: 0 0 20px;
      font-family: Georgia, serif;
      font-size: clamp(36px, 4.5vw, 52px);
      line-height: 1.12;
    }

    .vx-why-grid > div > p {
      color: #c1d1e5;
      line-height: 1.9;
    }

    .vx-why-list {
      display: grid;
      gap: 20px;
      margin-top: 28px;
    }

    .vx-why-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .vx-why-icon {
      display: grid;
      width: 39px;
      height: 39px;
      flex-shrink: 0;
      place-items: center;
      border-radius: 12px;
      color: ${colors.cyan};
      background: rgba(0, 200, 240, .12);
      font-size: 19px;
    }

    .vx-why-item strong {
      display: block;
      margin-bottom: 5px;
      color: #fff;
      font-size: 14px;
    }

    .vx-why-item p {
      margin: 0;
      color: #b9cce2;
      font-size: 13px;
      line-height: 1.7;
    }

    .vx-why-image {
      display: block;
      width: 100%;
      height: 510px;
      border-radius: 24px;
      object-fit: cover;
      box-shadow: 0 25px 60px rgba(0, 0, 0, .2);
    }

    .vx-tech-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      max-width: 920px;
      margin: 0 auto;
    }

    .vx-tech {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 19px;
      border: 1px solid ${colors.border};
      border-radius: 12px;
      color: ${colors.navy};
      background: #fff;
      font-size: 13px;
      font-weight: 750;
      transition: transform .2s, border-color .2s, box-shadow .2s;
    }

    .vx-tech:hover {
      transform: translateY(-3px);
      border-color: ${colors.cyan};
      box-shadow: 0 9px 22px rgba(18, 100, 216, .08);
    }

    .vx-tech span {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: linear-gradient(135deg, ${colors.cyan}, ${colors.blue});
    }

    .vx-process-section {
      background: #eaf3ff;
    }

    .vx-process-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .vx-process-card {
      padding: 25px;
      border: 1px solid #d8e7fa;
      border-radius: 17px;
      background: #fff;
      transition: transform .25s, box-shadow .25s;
    }

    .vx-process-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 14px 32px rgba(6, 35, 75, .09);
    }

    .vx-process-number {
      display: inline-grid;
      width: 45px;
      height: 45px;
      place-items: center;
      border-radius: 13px;
      color: #fff;
      background: linear-gradient(135deg, ${colors.blue}, ${colors.purple});
      font-size: 13px;
      font-weight: 850;
    }

    .vx-process-card h3 {
      margin: 18px 0 8px;
      color: ${colors.navy};
      font-size: 18px;
    }

    .vx-process-card p {
      margin: 0;
      color: ${colors.muted};
      font-size: 13px;
      line-height: 1.8;
    }

    .vx-stats {
      padding: 53px 0;
      color: #fff;
      background: linear-gradient(
        105deg,
        ${colors.navy},
        #0c3e78,
        #10366c
      );
    }

    .vx-stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .vx-stat {
      padding: 15px;
      text-align: center;
    }

    .vx-stat strong {
      display: block;
      margin-bottom: 9px;
      color: ${colors.gold};
      font-family: Georgia, serif;
      font-size: clamp(34px, 4vw, 49px);
    }

    .vx-stat span {
      color: #d0e2f7;
      font-size: 12px;
    }

    .vx-project-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }

    .vx-project-image {
      display: block;
      width: 100%;
      height: 290px;
      border: 1px solid ${colors.border};
      border-radius: 18px;
      object-fit: cover;
      background: #e0ebf9;
      box-shadow: 0 10px 28px rgba(6, 35, 75, .08);
      transition: transform .3s ease, box-shadow .3s ease;
    }

    .vx-project-image:hover {
      transform: translateY(-5px);
      box-shadow: 0 17px 36px rgba(6, 35, 75, .15);
    }

    .vx-testimonials-section {
      background: #eaf3ff;
    }

    .vx-testimonial-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }

    .vx-testimonial {
      padding: 27px;
      border: 1px solid #dce8f7;
      border-radius: 18px;
      background: #fff;
    }

    .vx-stars {
      margin-bottom: 16px;
      color: ${colors.gold};
      letter-spacing: 3px;
    }

    .vx-testimonial blockquote {
      margin: 0 0 22px;
      color: #465f7a;
      font-size: 14px;
      line-height: 1.8;
    }

    .vx-testimonial-person {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .vx-testimonial-person img {
      width: 48px;
      height: 48px;
      border: 2px solid #dceeff;
      border-radius: 50%;
      object-fit: cover;
    }

    .vx-testimonial-person strong {
      display: block;
      color: ${colors.navy};
      font-size: 13px;
    }

    .vx-testimonial-person span {
      display: block;
      margin-top: 5px;
      color: ${colors.muted};
      font-size: 11px;
    }

    .vx-faq-list {
      max-width: 850px;
      margin: 0 auto;
    }

    .vx-faq-item {
      margin-bottom: 10px;
      overflow: hidden;
      border: 1px solid ${colors.border};
      border-radius: 13px;
      background: #fff;
    }

    .vx-faq-question {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      padding: 19px 21px;
      border: 0;
      color: ${colors.navy};
      background: #fff;
      font-family: inherit;
      font-size: 14px;
      font-weight: 800;
      text-align: left;
      cursor: pointer;
    }

    .vx-faq-question span:last-child {
      color: ${colors.blue};
      font-size: 23px;
    }

    .vx-faq-answer {
      padding: 0 21px 21px;
      color: ${colors.muted};
      font-size: 13px;
      line-height: 1.8;
    }

    .vx-contact-section {
      color: #fff;
      background:
        radial-gradient(
          circle at 90% 10%,
          rgba(0, 200, 240, .16),
          transparent 30%
        ),
        linear-gradient(125deg, ${colors.navy}, #0b3970);
    }

    .vx-contact-grid {
      display: grid;
      grid-template-columns: .9fr 1.1fr;
      align-items: start;
      gap: 55px;
    }

    .vx-contact-copy h2 {
      margin: 0 0 20px;
      font-family: Georgia, serif;
      font-size: clamp(37px, 5vw, 57px);
      line-height: 1.1;
    }

    .vx-contact-copy > p {
      color: #c2d5eb;
      font-size: 15px;
      line-height: 1.9;
    }

    .vx-contact-photo {
      display: block;
      width: 100%;
      height: 230px;
      margin-top: 27px;
      border-radius: 18px;
      object-fit: cover;
    }

    .vx-contact-form {
      padding: 30px;
      border: 1px solid rgba(255, 255, 255, .3);
      border-radius: 22px;
      color: ${colors.navy};
      background: #fff;
      box-shadow: 0 25px 60px rgba(0, 0, 0, .18);
    }

    .vx-contact-form h3 {
      margin: 0 0 23px;
      font-family: Georgia, serif;
      font-size: 28px;
    }

    .vx-form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .vx-field {
      display: block;
      min-width: 0;
    }

    .vx-field-full {
      grid-column: 1 / -1;
    }

    .vx-field span {
      display: block;
      margin-bottom: 7px;
      color: #526983;
      font-size: 10px;
      font-weight: 850;
      letter-spacing: 1px;
    }

    .vx-field input,
    .vx-field select,
    .vx-field textarea {
      display: block;
      width: 100%;
      min-width: 0;
      padding: 13px;
      border: 1px solid #d6e2f0;
      border-radius: 10px;
      outline: none;
      color: ${colors.navy};
      background: #f8fbff;
      font-family: inherit;
      font-size: 13px;
      transition: border-color .2s, box-shadow .2s;
    }

    .vx-field input:focus,
    .vx-field select:focus,
    .vx-field textarea:focus {
      border-color: ${colors.blue};
      box-shadow: 0 0 0 3px rgba(18, 100, 216, .1);
    }

    .vx-field textarea {
      resize: vertical;
    }

    .vx-contact-form .vx-button {
      width: 100%;
      margin-top: 18px;
    }

    .vx-form-message {
      margin: 14px 0 0;
      font-size: 13px;
      line-height: 1.7;
      text-align: center;
    }

    .vx-form-success {
      padding: 45px 25px;
      border-radius: 18px;
      color: ${colors.navy};
      background: #fff;
      text-align: center;
    }

    .vx-form-success span {
      display: block;
      margin-bottom: 15px;
      color: ${colors.blue};
      font-size: 45px;
    }

    .vx-form-success h3 {
      margin: 0 0 12px;
    }

    .vx-form-success p {
      color: ${colors.muted};
      line-height: 1.8;
    }

    @media (max-width: 1000px) {
      .vx-hero-grid {
        gap: 35px;
      }

      .vx-hero-image {
        height: 370px;
      }

      .vx-about-grid,
      .vx-why-grid {
        gap: 40px;
      }

      .vx-services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .vx-project-image {
        height: 230px;
      }
    }

    @media (max-width: 760px) {
      .vx-section {
        padding: 65px 0;
      }

      .vx-hero {
        min-height: auto;
        padding: 65px 0 55px;
      }

      .vx-hero-grid,
      .vx-about-grid,
      .vx-why-grid,
      .vx-contact-grid {
        grid-template-columns: 1fr;
        gap: 38px;
      }

      .vx-hero h1 {
        font-size: clamp(43px, 10vw, 65px);
      }

      .vx-hero-image {
        height: 340px;
        border-radius: 23px 70px 23px 70px;
      }

      .vx-floating-one {
        top: 15px;
        left: -5px;
      }

      .vx-floating-two {
        right: -5px;
        bottom: 15px;
      }

      .vx-trust-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .vx-about-image {
        height: 370px;
      }

      .vx-about-badge {
        right: -5px;
        width: 150px;
      }

      .vx-why-image {
        height: 360px;
      }

      .vx-process-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .vx-stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .vx-project-grid,
      .vx-testimonial-grid {
        grid-template-columns: 1fr;
      }

      .vx-project-image {
        height: 290px;
      }

      .vx-contact-copy h2 {
        font-size: 44px;
      }
    }

    @media (max-width: 480px) {
      .vx-container {
        width: 90%;
      }

      .vx-section {
        padding: 52px 0;
      }

      .vx-title {
        margin-bottom: 32px;
      }

      .vx-title h2 {
        font-size: 35px;
      }

      .vx-title p {
        font-size: 14px;
      }

      .vx-hero h1 {
        font-size: 43px;
        letter-spacing: -1.4px;
      }

      .vx-hero-description {
        font-size: 15px;
      }

      .vx-button {
        padding: 12px 18px;
        font-size: 12px;
      }

      .vx-hero-image {
        height: 280px;
      }

      .vx-floating {
        gap: 8px;
        padding: 10px;
      }

      .vx-floating-icon {
        width: 35px;
        height: 35px;
      }

      .vx-floating strong {
        font-size: 11px;
      }

      .vx-floating small {
        font-size: 10px;
      }

      .vx-services-grid {
        grid-template-columns: 1fr;
      }

      .vx-service-card {
        height: 235px;
      }

      .vx-value-grid,
      .vx-process-grid {
        grid-template-columns: 1fr;
      }

      .vx-about-image {
        height: 300px;
      }

      .vx-stats-grid {
        gap: 5px;
      }

      .vx-stat strong {
        font-size: 35px;
      }

      .vx-stat span {
        font-size: 11px;
      }

      .vx-project-image {
        height: 240px;
      }

      .vx-contact-form {
        padding: 21px;
      }

      .vx-contact-form h3 {
        font-size: 25px;
      }

      .vx-form-grid {
        grid-template-columns: 1fr;
      }

      .vx-field-full {
        grid-column: auto;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .vx-home *,
      .vx-home *::before,
      .vx-home *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
      }
    }
  `;

  return (
    <div className="vx-home">
      <style>{styles}</style>

      <main>
        {/* HERO */}
        <section id="home" className="vx-hero">
          <div className="vx-container vx-hero-grid">
            <div>
              <div className="vx-eyebrow">
                Traditional Values · Digital Future
              </div>

              <h1>
                Build Digital
                <br />
                <span className="vx-gradient-text">
                  Possibilities.
                </span>
              </h1>

              <p className="vx-hero-description">
                We transform ambitious ideas into meaningful digital
                experiences through technology, thoughtful design and
                strategies built for long-term growth.
              </p>

              <div className="vx-hero-actions">
                <button
                  className="vx-button"
                  type="button"
                  onClick={() => scrollTo("contact")}
                >
                  Start Your Journey <span>↗</span>
                </button>

                <button
                  className="vx-button vx-button-outline"
                  type="button"
                  onClick={() => scrollTo("services")}
                >
                  Explore Services
                </button>
              </div>

              <div className="vx-hero-note">
                <span>✦</span>
                Design-led. Engineering-driven. Growth-focused.
              </div>
            </div>

            <div className="vx-hero-visual">
              <img
                className="vx-hero-image"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                alt="Modern digital workspace"
                fetchPriority="high"
              />

              <div className="vx-floating vx-floating-one">
                <div className="vx-floating-icon">✧</div>
                <div>
                  <strong>Smart Solutions</strong>
                  <small>Built around your goals</small>
                </div>
              </div>

              <div className="vx-floating vx-floating-two">
                <div className="vx-floating-icon">↗</div>
                <div>
                  <strong>Digital Growth</strong>
                  <small>From idea to impact</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="vx-trust-strip">
          <div className="vx-container vx-trust-grid">
            <div className="vx-trust-item">
              <span>✦</span> Innovative Solutions
            </div>
            <div className="vx-trust-item">
              <span>✓</span> Quality Focused
            </div>
            <div className="vx-trust-item">
              <span>◇</span> Modern Technology
            </div>
            <div className="vx-trust-item">
              <span>↗</span> Growth Mindset
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="vx-section">
          <div className="vx-container vx-about-grid">
            <div className="vx-about-image-wrap">
              <img
                className="vx-about-image"
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
                alt="Team collaborating on digital projects"
                loading="lazy"
              />

              <div className="vx-about-badge">
              
                <span>Digital thinking from strategy to scale</span>
              </div>
            </div>

            <div className="vx-about-copy">
              <div className="vx-eyebrow">About Vighnex</div>

              <h2>
                Rooted in values.
                <br />
                <span className="vx-gradient-text">
                  Driven by innovation.
                </span>
              </h2>

              <p>
                Vighnex Technologies focuses on creating digital solutions
                that are useful, intuitive and valuable to businesses.
              </p>

              <p>
                Our approach brings strategy, design, engineering and
                digital growth together to help turn ideas into practical
                technology experiences.
              </p>

              <div className="vx-value-grid">
                <div className="vx-value">
                  <strong>Human First</strong>
                  <span>We design around real people and real problems.</span>
                </div>

                <div className="vx-value">
                  <strong>Quality Always</strong>
                  <span>Every detail matters from concept to launch.</span>
                </div>

                <div className="vx-value">
                  <strong>Think Long Term</strong>
                  <span>We build solutions that can evolve with you.</span>
                </div>

                <div className="vx-value">
                  <strong>Move With Purpose</strong>
                  <span>Clear priorities create meaningful progress.</span>
                </div>
              </div>

              <button
                className="vx-button"
                type="button"
                onClick={() => scrollTo("contact")}
              >
                Work With Us <span>↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* SERVICES - IMAGE-FOCUSED CARDS */}
        <section
          id="services"
          className="vx-section vx-services-section"
        >
          <div className="vx-container">
            <div className="vx-title">
              <div className="vx-eyebrow">What We Do</div>

              <h2>
                Complete Digital Solutions
                <br />
                Under One Roof
              </h2>

              <p>
                Explore our digital services for building, launching and
                growing your business.
              </p>
            </div>

            <div className="vx-services-grid">
              {services.map((service) => (
                <a
                  key={service.title}
                  href="#contact"
                  className="vx-service-card"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <span className="vx-service-name">
                    {service.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why" className="vx-section vx-why-section">
          <div className="vx-container vx-why-grid">
            <div>
              <div className="vx-eyebrow">Why Choose Us</div>

              <h2>
                Technology with a{" "}
                <span style={{ color: colors.cyan }}>
                  human touch.
                </span>
              </h2>

              <p>
                Good technology should simplify complexity, not add to it.
                We combine strategic thinking, modern engineering and
                thoughtful communication to create better digital
                experiences.
              </p>

              <div className="vx-why-list">
                {[
                  [
                    "◎",
                    "Business Understanding",
                    "We begin with your objectives and business requirements.",
                  ],
                  [
                    "◇",
                    "Transparent Collaboration",
                    "Clear milestones and straightforward communication.",
                  ],
                  [
                    "⌘",
                    "Modern Engineering",
                    "Scalable architecture and performance-focused delivery.",
                  ],
                  [
                    "✓",
                    "Reliable Delivery",
                    "We focus on quality throughout the development process.",
                  ],
                ].map(([icon, heading, description]) => (
                  <div className="vx-why-item" key={heading}>
                    <div className="vx-why-icon">{icon}</div>

                    <div>
                      <strong>{heading}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img
              className="vx-why-image"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85"
              alt="Professionals collaborating on a project"
              loading="lazy"
            />
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="vx-section">
          <div className="vx-container">
            <div className="vx-title">
              <div className="vx-eyebrow">Technology Stack</div>

              <h2>
                Built with technology
                <br />
                that moves forward.
              </h2>

              <p>
                We select tools based on your project's needs, performance
                requirements and long-term goals.
              </p>
            </div>

            <div className="vx-tech-grid">
              {technologies.map((technology) => (
                <div className="vx-tech" key={technology}>
                  <span />
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="vx-section vx-process-section">
          <div className="vx-container">
            <div className="vx-title">
              <div className="vx-eyebrow">Our Process</div>

              <h2>
                From first conversation
                <br />
                to lasting impact.
              </h2>

              <p>
                A structured process keeps creativity focused and
                development connected to your goals.
              </p>
            </div>

            <div className="vx-process-grid">
              {processSteps.map(([number, name, description]) => (
                <div className="vx-process-card" key={number}>
                  <span className="vx-process-number">{number}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="vx-stats">
          <div className="vx-container vx-stats-grid">
            {[
              ["20+","Projects"],
              ["6+", "Core Service Areas"],
              ["24/7", "Digital Possibilities"],
              ["100%", "Commitment to Quality"],
            ].map(([number, label]) => (
              <div className="vx-stat" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT GALLERY - IMAGE ONLY */}
        <section id="projects" className="vx-section">
          <div className="vx-container">
            <div className="vx-title">
              <div className="vx-eyebrow">Selected Work</div>

              <h2>
                Ideas become
                <br />
                <span className="vx-gradient-text">
                  experiences.
                </span>
              </h2>

              <p>
                A visual look at digital products, interfaces and
                experiences.
              </p>
            </div>

            <div className="vx-project-grid">
              {projects.map((image, index) => (
                <img
                  className="vx-project-image"
                  key={image}
                  src={image}
                  alt={`Digital project example ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="vx-section vx-testimonials-section"
        >
          <div className="vx-container">
            <div className="vx-title">
              <div className="vx-eyebrow">Client Voices</div>

              <h2>Built on trust. Remembered for results.</h2>

              <p>
                Clear communication and thoughtful collaboration matter
                throughout every project.
              </p>
            </div>

            <div className="vx-testimonial-grid">
              {[
                {
                  name: "Client Feedback",
                  role: "Digital Project",
                  text: "A great digital experience begins with understanding the client's goals and turning them into a practical solution.",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
                },
                {
                  name: "Project Collaboration",
                  role: "Design & Development",
                  text: "Thoughtful design and a structured development process help create products that are clear, useful and engaging.",
                  image:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
                },
                {
                  name: "Business Growth",
                  role: "Digital Solutions",
                  text: "A strong digital presence brings design, technology and business strategy together in one connected experience.",
                  image:
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
                },
              ].map((item) => (
                <article className="vx-testimonial" key={item.name}>
                  <div className="vx-stars" aria-label="Five stars">
                    ★★★★★
                  </div>

                  <blockquote>{item.text}</blockquote>

                  <div className="vx-testimonial-person">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />

                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="vx-section">
          <div className="vx-container">
            <div className="vx-title">
              <div className="vx-eyebrow">Frequently Asked Questions</div>

              <h2>Questions before we begin?</h2>

              <p>
                Learn more about our services and how to get started.
              </p>
            </div>

            <div className="vx-faq-list">
              {faqs.map(([question, answer], index) => (
                <div className="vx-faq-item" key={question}>
                  <button
                    className="vx-faq-question"
                    type="button"
                    aria-expanded={activeFaq === index}
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                  >
                    <span>{question}</span>
                    <span>{activeFaq === index ? "−" : "+"}</span>
                  </button>

                  {activeFaq === index && (
                    <div className="vx-faq-answer">{answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="vx-section vx-contact-section">
          <div className="vx-container vx-contact-grid">
            <div className="vx-contact-copy">
              <div className="vx-eyebrow">Let's Connect</div>

              <h2>
                Have an idea?
                <br />
                <span style={{ color: colors.cyan }}>
                  Let's make it real.
                </span>
              </h2>

              <p>
                Tell us what you are building, what you want to improve or
                where you want to go next. Share your requirements and
                start a conversation with Vighnex Technologies.
              </p>

              <img
                className="vx-contact-photo"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                alt="Team working together"
                loading="lazy"
              />
            </div>

            <div>
              {formStatus === "success" ? (
                <div className="vx-form-success">
                  <span>✓</span>
                  <h3>Thank You!</h3>
                  <p>
                    Your message was submitted successfully. Our team
                    will get back to you.
                  </p>

                  <button
                    type="button"
                    className="vx-button"
                    onClick={() => setFormStatus("idle")}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="vx-contact-form"
                  onSubmit={handleSubmit}
                >
                  <h3>Start a Conversation</h3>

                  <div className="vx-form-grid">
                    <label className="vx-field">
                      <span>YOUR NAME</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                      />
                    </label>

                    <label className="vx-field">
                      <span>EMAIL ADDRESS</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label className="vx-field">
                      <span>PHONE NUMBER</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                      />
                    </label>

                    <label className="vx-field">
                      <span>SERVICE</span>
                      <select name="choice" defaultValue="" required>
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>UI/UX Design</option>
                        <option>Digital Marketing</option>
                        <option>Logo & Branding</option>
                        <option>Cloud Deployment</option>
                        <option>Complete Digital Solution</option>
                      </select>
                    </label>

                    <label className="vx-field vx-field-full">
                      <span>PROJECT DETAILS</span>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your idea or requirements..."
                        required
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="vx-button"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending"
                      ? "Sending..."
                      : "Send Enquiry"}
                    <span>↗</span>
                  </button>

                  {formStatus === "error" && (
                    <p
                      className="vx-form-message"
                      style={{ color: "#c62828" }}
                      role="alert"
                    >
                      Unable to submit your enquiry. Please try again.
                    </p>
                  )}

                  <p
                    style={{
                      color: "#73859a",
                      fontSize: 11,
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}
                  >
                    Please check that your form submission service is
                    configured before publishing the website.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;