import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileDevelopment from './pages/Services/MobileDevelopment';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import LogoBranding from './pages/Services/LogoBranding';
import UIUXDesign from './pages/Services/UIUXDesign';
import CloudDeployment from './pages/Services/CloudDeployment';

const App = () => {
  const styles = {
    appContainer: {
      backgroundColor: '#0B1020',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#FFFFFF',
      overflowX: 'hidden'
    },
    mainContent: {
      flex: 1,
      marginTop: '80px'
    }
  };

  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/logo-branding" element={<LogoBranding />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/cloud-deployment" element={<CloudDeployment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;