import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
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
    { title: 'Search Engine Optimization (SEO)', desc: 'Improving your website visibility and organic reach on major search engines.' },
    { title: 'Social Media Marketing', desc: 'Building brand awareness and engaging with your audience on relevant social platforms.' },
    { title: 'Google Ads & Paid Campaigns', desc: 'Targeted pay-per-click campaigns designed to maximize ROI and visibility.' },
    { title: 'Content Marketing', desc: 'Creating valuable, relevant content to attract and retain a clearly defined audience.' },
    { title: 'Website Traffic Analysis', desc: 'Monitoring and interpreting user behavior to make data-driven marketing decisions.' },
    { title: 'Conversion Optimization', desc: 'Refining landing pages and user journeys to improve the rate of successful user actions.' }
  ];

  const process = [
    { title: '1. Audit & Analysis', desc: 'Reviewing current digital presence, competitor landscapes, and target market.' },
    { title: '2. Strategy Development', desc: 'Formulating a tailored marketing plan aligned with your business objectives.' },
    { title: '3. Campaign Execution', desc: 'Deploying SEO optimizations, content, and paid campaigns.' },
    { title: '4. Monitoring', desc: 'Tracking KPIs, analytics, and campaign performance in real-time.' },
    { title: '5. Reporting & Refinement', desc: 'Providing marketing performance reporting and adjusting strategies based on data.' }
  ];

  const faqs = [
    { q: 'Can you guarantee the #1 spot on Google?', a: 'No ethical agency can guarantee specific search engine rankings due to the dynamic and proprietary nature of search algorithms. We utilize proven best practices to steadily improve your organic visibility.' },
    { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. While technical fixes can yield quick improvements, significant organic growth typically takes 3 to 6 months.' },
    { q: 'Will you provide analytics reports?', a: 'Yes, we provide regular, transparent marketing performance reporting so you can track the progress and ROI of your campaigns.' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Digital Marketing</h1>
        <p style={styles.subtitle}>Data-driven strategies to expand your digital footprint and reach the right audience.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>The Problem We Solve</h2>
        <p style={styles.text}>
          Having a great product or website means nothing if your target audience can't find it. We solve the problem of digital obscurity by implementing strategic marketing techniques that increase visibility, drive qualified traffic, and foster meaningful engagement with your brand.
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
        <h2 style={styles.sectionTitle}>Tools & Platforms We Use</h2>
        <div style={styles.techContainer}>
          {['Google Analytics', 'Google Ads', 'Meta Ads', 'SEO Tools', 'Content Strategy'].map((tech, i) => (
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
        <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Ready to grow your online presence?</h2>
        <Link to="/contact" style={styles.ctaBtn}>Request a Free Consultation</Link>
        <div style={styles.relatedLinks}>
          <span style={{color: '#E2E8F0'}}>Related Services:</span>
          <Link to="/services/logo-branding" style={styles.relatedLink}>Logo Design & Branding</Link>
          <Link to="/services/web-development" style={styles.relatedLink}>Web Development</Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;