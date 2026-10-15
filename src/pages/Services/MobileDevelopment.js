import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileDevelopment = () => {
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
    { title: 'Android Application Development', desc: 'Native-like performance applications tailored for the Android ecosystem.' },
    { title: 'iOS Application Development', desc: 'Premium, smooth mobile experiences designed for Apple devices.' },
    { title: 'Cross-Platform Applications', desc: 'Write once, deploy everywhere using modern cross-platform frameworks.' },
    { title: 'UI Implementation', desc: 'Pixel-perfect translation of designs into functional mobile interfaces.' },
    { title: 'API & Backend Integration', desc: 'Connecting your app to robust databases and third-party services securely.' },
    { title: 'Authentication & Payments', desc: 'Secure user login flows and reliable payment gateway integrations.' }
  ];

  const process = [
    { title: '1. Requirement Analysis', desc: 'Defining the app architecture, user stories, and core features.' },
    { title: '2. Prototyping', desc: 'Mapping out the user journey and interface before coding begins.' },
    { title: '3. Core Development', desc: 'Implementing the frontend UI and backend logic.' },
    { title: '4. Testing', desc: 'Conducting unit, integration, and user acceptance testing across devices.' },
    { title: '5. Deployment & Maintenance', desc: 'Publishing to App Stores and providing post-launch support.' }
  ];

  const faqs = [
    { q: 'Should I build a native or cross-platform app?', a: 'Cross-platform is excellent for cost-efficiency and faster time-to-market. Native is recommended if your app requires heavy hardware access or complex animations.' },
    { q: 'Can you integrate payment gateways?', a: 'Yes, we securely integrate standard payment providers like Stripe, Razorpay, or PayPal directly into your application.' },
    { q: 'Do you handle App Store submission?', a: 'Yes, we manage the entire deployment process to both the Google Play Store and Apple App Store.' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Mobile App Development</h1>
        <p style={styles.subtitle}>Empower your audience with high-performance, engaging mobile experiences.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>The Problem We Solve</h2>
        <p style={styles.text}>
          In a mobile-first world, lacking a dedicated app or having a buggy mobile experience means losing direct engagement with your customers. We solve this by engineering reliable, intuitive mobile applications that keep your users connected to your brand anytime, anywhere.
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
        <h2 style={styles.sectionTitle}>Technologies We Use</h2>
        <div style={styles.techContainer}>
          {['React Native', 'Expo', 'JavaScript', 'REST APIs', 'Firebase', 'Redux'].map((tech, i) => (
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
        <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Ready to launch your mobile app?</h2>
        <Link to="/contact" style={styles.ctaBtn}>Get a Quote</Link>
        <div style={styles.relatedLinks}>
          <span style={{color: '#E2E8F0'}}>Related Services:</span>
          <Link to="/services/ui-ux-design" style={styles.relatedLink}>UI/UX Design</Link>
          <Link to="/services/web-development" style={styles.relatedLink}>Web Development</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;