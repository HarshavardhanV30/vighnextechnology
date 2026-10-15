import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogoBranding = () => {
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
    { title: 'Professional Logo Design', desc: 'Unique, memorable logos that capture the essence of your business.' },
    { title: 'Brand Identity Development', desc: 'Crafting a cohesive visual language across all your digital and physical assets.' },
    { title: 'Brand Color Palettes & Typography', desc: 'Selecting colors and fonts that evoke the right emotions and maintain readability.' },
    { title: 'Business Card Design', desc: 'Professional and striking business cards that leave a lasting impression.' },
    { title: 'Social Media Branding', desc: 'Custom profile pictures, banners, and post templates for a unified social presence.' },
    { title: 'Brand Guidelines & Creatives', desc: 'Comprehensive rulebooks and marketing creatives to keep your brand consistent.' }
  ];

  const process = [
    { title: '1. Discovery & Research', desc: 'Learning about your company values, target audience, and market competitors.' },
    { title: '2. Conceptualization', desc: 'Brainstorming and sketching initial concepts that align with your vision.' },
    { title: '3. Digital Drafting', desc: 'Translating the best concepts into vector designs and applying color theories.' },
    { title: '4. Review & Refinement', desc: 'Presenting drafts and iterating based on your valuable feedback.' },
    { title: '5. Final Delivery', desc: 'Providing all necessary file formats and the comprehensive brand guideline document.' }
  ];

  const faqs = [
    { q: 'What file formats will I receive?', a: 'We deliver all standard professional formats, including scalable vector files (AI, EPS, SVG) and raster files (PNG, JPG, PDF) for web and print use.' },
    { q: 'How many revisions do you offer?', a: 'We typically offer a set number of revision rounds depending on the selected package to ensure you are completely satisfied with the final design.' },
    { q: 'What is a brand guideline?', a: 'A brand guideline is a document detailing how to properly use your logo, typography, and colors to ensure consistency across all future marketing materials.' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Logo Design & Branding</h1>
        <p style={styles.subtitle}>Build a memorable, cohesive identity that resonates with your target audience.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>The Problem We Solve</h2>
        <p style={styles.text}>
          An inconsistent or unpolished brand identity confuses customers and diminishes trust. We solve this by establishing a strong, unified visual presence that communicates your core values clearly, helping you stand out in a crowded market.
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
        <h2 style={styles.sectionTitle}>Tools We Use</h2>
        <div style={styles.techContainer}>
          {['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'CorelDRAW', 'Typography Systems'].map((tech, i) => (
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
        <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Ready to define your brand?</h2>
        <Link to="/contact" style={styles.ctaBtn}>Get a Quote</Link>
        <div style={styles.relatedLinks}>
          <span style={{color: '#E2E8F0'}}>Related Services:</span>
          <Link to="/services/ui-ux-design" style={styles.relatedLink}>UI/UX Design</Link>
          <Link to="/services/digital-marketing" style={styles.relatedLink}>Digital Marketing</Link>
        </div>
      </div>
    </div>
  );
};

export default LogoBranding;