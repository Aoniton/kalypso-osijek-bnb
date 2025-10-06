import React from 'react';
import Header from '../components/Header';
import ServicesHero from '../components/Services/ServicesHero';
import ServiceDetails from '../components/Services/ServiceDetails';
import WhyChooseUs from '../components/Services/WhyChooseUs';
import ServicesCTA from '../components/Services/ServicesCTA';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <ServicesHero />
      <ServiceDetails />
      <WhyChooseUs />
      <ServicesCTA />
      <Footer />
    </div>
  );
}