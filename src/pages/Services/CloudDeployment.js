import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CloudDeployment = () => {
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
    { title: 'Cloud Hosting & AWS Deployment', desc: 'Secure, robust infrastructure setup on major platforms like Amazon Web Services.' },
    { title: 'Render, Railway & VPS Configuration', desc: 'Cost-effective deployment configurations utilizing modern PaaS and VPS environments.' },
    { title: 'Frontend & Backend Deployment', desc: 'Seamless orchestration of separate frontend assets and backend server environments.' },
    { title: 'Database & Docker Deployment', desc: 'Containerized applications and resilient database provisioning for scalable growth.' },
    { title: 'CI/CD Pipelines', desc: 'Automated continuous integration and deployment workflows to speed up release cycles.' },
    { title: 'Domain, DNS & SSL Setup', desc: 'Comprehensive domain configuration, DNS management, and strict HTTPS security enforcement.' }
  ];

  const process = [
    { title: '1. Infrastructure Assessment', desc: 'Analyzing your application requirements to determine the optimal hosting environment.' },
    { title: '2. Architecture Planning', desc: 'Designing a secure, scalable topology including load balancers, databases, and servers.' },
    { title: '3. Environment Configuration', desc: 'Provisioning the servers, installing dependencies, and configuring network rules.' },
    { title: '4. Deployment & Migration', desc: 'Migrating data securely and deploying your application codebase with minimal downtime.' },
    { title: '5. Monitoring & Maintenance', desc: 'Implementing backup schedules and monitoring tools for proactive troubleshooting.' }
  ];

  const faqs = [
    { q: 'Which cloud provider should I choose?', a: 'It depends on your scale and budget. We commonly use AWS for complex, highly scalable enterprise applications, and Render or Railway for rapid, cost-effective deployment.' },
    { q: 'Can you guarantee zero downtime during deployment?', a: 'By utilizing modern CI/CD pipelines, containerization, and staging environments, we strive for zero to near-zero downtime deployments.' },
    { q: 'Do you set up automated backups?', a: 'Yes, database and critical file backups are a fundamental part of our deployment strategy to prevent data loss.' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Cloud Deployment</h1>
        <p style={styles.subtitle}>Secure, scalable, and resilient hosting architectures for your applications.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>The Problem We Solve</h2>
        <p style={styles.text}>
          Improperly configured servers lead to slow load times, security vulnerabilities, and catastrophic downtime during traffic spikes. We solve this by engineering robust cloud environments, automating deployments, and securing your infrastructure so your applications run smoothly 24/7.
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
        <h2 style={styles.sectionTitle}>Technologies & Platforms We Use</h2>
        <div style={styles.techContainer}>
          {['AWS', 'Docker', 'Render', 'Railway', 'CI/CD', 'Linux/VPS', 'Nginx'].map((tech, i) => (
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
        <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Ready to deploy securely?</h2>
        <Link to="/contact" style={styles.ctaBtn}>Get a Quote</Link>
        <div style={styles.relatedLinks}>
          <span style={{color: '#E2E8F0'}}>Related Services:</span>
          <Link to="/services/web-development" style={styles.relatedLink}>Web Development</Link>
          <Link to="/services/mobile-development" style={styles.relatedLink}>Mobile Development</Link>
        </div>
      </div>
    </div>
  );
};

export default CloudDeployment;