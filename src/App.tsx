import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import ProblemSolution from './components/ProblemSolution/ProblemSolution';
import ServicesOverview from './components/Services/ServicesOverview';
import ProofResults from './components/ProofResults/ProofResults';
import Stats from './components/Stats';
import Process from './components/Process/Process';
import TrustSection from './components/Trust/TrustSection';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <ProblemSolution />
      <Stats />
      <ServicesOverview />
      <ProofResults />
      <Process />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;