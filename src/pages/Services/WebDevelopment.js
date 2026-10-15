import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const styles = {
    container: {
      padding: '0',
      color: '#FFFFFF'
    },
    hero: {
      padding: '120px 8% 80px 8%',
      background: 'linear-gradient(135deg, #0B1020 0%, #1e3a8a 100%)',
      textAlign: 'center'
    },
    title: {
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: '800',
      marginBottom: '20px'
    },
    subtitle: {
      fontSize: '20px',
      color: '#94A3B8',
      maxWidth: '800px',
      margin: '0 auto'
    },
    section: {
      padding: '80px 8%',
      backgroundColor: '#0B1020'
    },
    altSection: {
      padding: '80px 8%',
      backgroundColor: 'rgba(255, 255, 255, 0.02)'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#3B82F6',
      textAlign: 'center'
    },
    text: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#E2E8F0',
      marginBottom: '20px',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto 40px auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px'
    },
    card: {
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      padding: '30px',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.05)'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#60A5FA'
    },
    cardText: {
      color: '#94A3B8',
      lineHeight: '1.6'
    },
    techTag: {
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#3B82F6',
      borderRadius: '20px',
      margin: '5px',
      fontSize: '14px',
      border: '1px solid rgba(59, 130, 246, 0.2)'
    },
    techContainer: {
      textAlign: 'center',
      marginTop: '40px'
    },
    faqContainer: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    faqItem: {
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      padding: '20px 0'
    },
    faqQuestion: {
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      color: '#E2E8F0'
    },
    faqAnswer: {
      marginTop: '15px',
      color: '#94A3B8',
      lineHeight: '1.6',
      display: 'block'
    },
    cta: {
      textAlign: 'center',
      padding: '80px 8%',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3B82F6 100%)'
    },
    ctaBtn: {
      backgroundColor: '#FFFFFF',
      color: '#1e3a8a',
      padding: '16px 32px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: '16px',
      display: 'inline-block',
      marginTop: '20px'
    },
    relatedLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '40px',
      flexWrap: 'wrap'
    },
    relatedLink: {
      color: '#60A5FA',
      textDecoration: 'none',
      fontWeight: '600'
    }
  };

  const deliverables = [
    { title: 'Business & Corporate Websites', desc: 'Professional, high-performance websites that establish your brand credibility.' },
    { title: 'E-commerce Platforms', desc: 'Secure, scalable online stores optimized for sales and seamless user experience.' },
    { title: 'Full-Stack Web Applications', desc: 'Complex, data-driven applications tailored to your specific business logic.' },
    { title: 'Landing Pages', desc: 'High-converting landing pages designed specifically for marketing campaigns.' },
    { title: 'API Integration', desc: 'Seamlessly connect your website with third-party tools and services.' },
    { title: 'Maintenance & Optimization', desc: 'Ongoing support to ensure performance, accessibility, and security standards.' }
  ];

  const process = [
    { title: '1. Discovery', desc: 'Understanding your business goals, target audience, and technical requirements.' },
    { title: '2. Planning', desc: 'Creating architecture diagrams, selecting the tech stack, and planning milestones.' },
    { title: '3. Development', desc: 'Writing clean, scalable code following modern web standards.' },
    { title: '4. Testing', desc: 'Rigorous testing for functionality, responsiveness, and security vulnerabilities.' },
    { title: '5. Deployment', desc: 'Smooth launch of your website to production environments.' }
  ];

  const faqs = [
    { q: 'How long does it take to build a website?', a: 'Timelines vary based on complexity. A standard corporate site takes 3-4 weeks, while complex full-stack applications can take several months.' },
    { q: 'Will my website be mobile-friendly?', a: 'Yes. We strictly adhere to responsive design principles ensuring your site looks and works perfectly on all devices.' },
    { q: 'Do you provide maintenance after launch?', a: 'Yes, we offer ongoing maintenance and optimization packages to keep your website secure and updated.' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Web Development</h1>
        <p style={styles.subtitle}>We build modern, responsive, secure, and scalable websites for growing businesses.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>The Problem We Solve</h2>
        <p style={styles.text}>
          An outdated, slow, or poorly structured website drives potential customers away. We solve this by architecting digital experiences that are fast, intuitive, and aligned with your business objectives, ensuring you capture and retain user attention.
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
          {['React.js', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'HTML5/CSS3', 'REST APIs'].map((tech, i) => (
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
        <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Ready to build your web presence?</h2>
        <Link to="/contact" style={styles.ctaBtn}>Request a Free Consultation</Link>
        <div style={styles.relatedLinks}>
          <span style={{color: '#E2E8F0'}}>Related Services:</span>
          <Link to="/services/ui-ux-design" style={styles.relatedLink}>UI/UX Design</Link>
          <Link to="/services/cloud-deployment" style={styles.relatedLink}>Cloud Deployment</Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;