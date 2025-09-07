'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceProjects from './components/ExperienceProjects';
import PersonalLife from './components/PersonalLife';
import PublicationsAwards from './components/PublicationsAwards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceProjects />
        <PersonalLife />
        <PublicationsAwards />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
