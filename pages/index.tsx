import React, { ReactElement } from 'react';
import HomeTitle from '../components/Home';
import Information from '../components/Information';
import Projects from '../components/Projects';

export default function Home() : ReactElement {
  return (
    <div className="main-container">
      <HomeTitle />
      <Information />
      <Projects />
    </div>
  )
}
