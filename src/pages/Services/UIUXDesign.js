import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UIUXDesign = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const styles = {
    container: { padding: '0', color: '#FFFFFF' },
    hero: { padding: '120px 8% 80px 8%', background: 'linear-gradient(135deg, #0B1020 0%, #1e3a8a 100%)', textAlign: 'center' },
    title: { fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', marginBottom: '20px' },
    subtitle: { fontSize: '20px', color: '#94A3B8', maxWidth: '800px', margin: '0 auto' },
    section: { padding: '80px 8%', backgroundColor: '#0B1020' },
    altSection: { padding: '80px 8%', backgroundColor: 'rgba(255, 255, 255, 0.02)' },
    sectionTitle: { fontSize: '32px', fontWeight: '700', marginBottom: '30px', color: '#3B82F6', textAlign: 'center' },
    text: { fontSize: '16px', lineHeight: '1.8', color: '#E2E8F0', marginBottom: '20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px auto' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' },
    card: { backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' },
    cardTitle: { fontSize: '20px', fontWeight: '600', marginBottom: '15px', color: '#60A5FA' },
    cardText: { color: '#94A3B8', lineHeight: '1.6' },
    techTag: { display: 'inline-block', padding: '8px 16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6', borderRadius: '20px', margin: '5px', fontSize: '14px', border: '1px solid rgba(59, 130, 246, 0.2)' },
    techContainer: { textAlign: 'center', marginTop: '40px' },
    faqContainer: { maxWidth: '800px', margin: '0 auto' },
    faqItem: { borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '20px 0' },
    faqQuestion: { fontSize: '18px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', color: '#E2E8F0' },
    faqAnswer: { marginTop: '15px', color: '#94A3B8', lineHeight: '1.6', display: 'block' },
    cta: { textAlign: 'center', padding: '80px 8%', background: 'linear-gradient(135deg, #1e3a8a 0%, #3B82F6 100%)' },
    ctaBtn: { backgroundColor: '#FFFFFF', color: '#1e3a8a', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', display: 'inline-block', marginTop: '20px' },
    relatedLinks: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' },
    relatedLink: { color: '#60A5FA', textDecoration: 'none', fontWeight: '600' }
  };

  const deliverables = [
    { title: 'User Research & Personas', desc: 'In-depth analysis of your target audience to guide the design process effectively.' },
    { title: 'Wireframes & User Journeys', desc: 'Structural blueprints and navigational pathways mapping out the entire experience.' },
    { title: 'Website & Mobile App UI Design', desc: 'High-fidelity, visually striking interfaces tailored for web and mobile screens.' },
    { title: 'Interactive Prototypes', desc: 'Clickable models that simulate the final product before development begins.' },
    { title: 'Design Systems', desc: 'Comprehensive component libraries ensuring consistency across all digital touchpoints.' },
    { title: 'Usability Improvements', desc: 'Evaluating and optimizing existing platforms to boost conversion and user retention.' }
  ];

  const process = [
    { title: '1. Discover & Empathize', desc: 'Understanding the problem space, business goals, and user frustrations.' },
    { title: '2. Define & Ideate', desc: 'Creating user personas, information architecture, and low-fidelity sketches.' },
    { title: '3. Design', desc: 'Developing high-fidelity UI layouts, establishing typography, and color schemes.' },
    { title: '4. Prototype', desc: 'Connecting screens to demonstrate flow, animations, and interactions.' },
    { title: '5. Hand-off', desc: 'Delivering pixel-perfect, developer-ready assets via modern Figma-based workflows.' }
  ];

  const faqs = [
    { q: 'What is the difference between UI and UX?', a: 'UX (User Experience) focuses on the logic, structure, and feel of the experience. UI (User Interface) focuses on the visual design, colors, typography, and interactive elements.' },
    { q: 'Do you use Figma?', a: 'Yes, our primary design workflow is Figma-based. It allows for seamless collaboration, prototyping, and developer hand-off.' },
    { q: 'Do you design for all screen sizes?', a: 'Absolutely. We practice responsive design, ensuring our interfaces adapt flawlessly to desktop, tablet, and mobile screens.' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>UI/UX Design</h1>
        <p style={styles.subtitle}>Intuitive, engaging, and conversion-focused digital experiences.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>The Problem We Solve</h2>
        <p style={styles.text}>
          High bounce rates and low conversions often stem from confusing navigation and poor visual hierarchy. We solve this by combining data-driven user research with aesthetic design principles, creating interfaces that users naturally understand and enjoy interacting with.
        </p>

        <h2 style={styles.sectionTitle} style={{...styles.sectionTitle, marginTop: '60px'}}>Our Services & Deliverables</h2>
        <div style={styles.grid}>
          {deliverables.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.altSection}>
        <h2 style={styles.sectionTitle}>Tools & Workflows</h2>
        <div style={styles.techContainer}>
          {['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research'].map((tech, i) => (
            <span key={i} style={styles.techTag}>{tech}</span>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Work Process</h2>
        <div style={styles.grid}>
          {process.map((step, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{step.title}</h3>
              <p style={styles.cardText}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.altSection}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div style={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                <span>{faq.q}</span>
                <span>{openFaq === index ? '−' : '+'}</span>
              </div>
              {openFaq === index && <div style={styles.faqAnswer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.cta}>
        <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Ready to improve your user experience?</h2>
        <Link to="/contact" style={styles.ctaBtn}>Request a Free Consultation</Link>
        <div style={styles.relatedLinks}>
          <span style={{color: '#E2E8F0'}}>Related Services:</span>
          <Link to="/services/web-development" style={styles.relatedLink}>Web Development</Link>
          <Link to="/services/mobile-development" style={styles.relatedLink}>Mobile Development</Link>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;