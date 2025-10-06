import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/About/AboutHero';
import ServiceSection from '../components/About/ServiceSection';
import WhyChooseUs from '../components/About/WhyChooseUs';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <AboutHero />
      <ServiceSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}