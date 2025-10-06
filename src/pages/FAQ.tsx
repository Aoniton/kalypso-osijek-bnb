import React from 'react';
import Header from '../components/Header';
import FAQHero from '../components/FAQ/FAQHero';
import FAQSection from '../components/FAQ/FAQSection';
import FAQContact from '../components/FAQ/FAQContact';
import Footer from '../components/Footer';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <FAQHero />
      <FAQSection />
      <FAQContact />
      <Footer />
    </div>
  );
}