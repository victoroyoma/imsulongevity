import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CallForPapers } from './components/CallForPapers';
import { Speakers } from './components/Speakers';
import { Audience } from './components/Audience';
import { Sponsorship } from './components/Sponsorship';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-charcoal selection:bg-terracotta selection:text-white">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <CallForPapers />
        <Speakers />
        <Audience />
        <Sponsorship />
        <Contact />
      </main>
      <Footer />
    </div>);

}