import React, { ReactElement } from 'react';
import HomeTitle from '../components/Home';
import ContactSection from '../components/Home/contactSection';
import Information from '../components/Information';
import Projects from '../components/Projects';
import BackgroundDesign from '../components/BackgroundDesign';

export default function Home() : ReactElement {
  return (
    <div className="main-container">
      <HomeTitle />
      <ContactSection />
      <Projects />
      <Information />
      <BackgroundDesign/>
    </div>
  )
}
