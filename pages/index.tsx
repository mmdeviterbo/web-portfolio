import React, { ReactElement } from 'react';
import HomeTitle from '../components/HomeTitle';
import Information from '../components/information';
import Projects from '../components/projects';

export default function Home() : ReactElement {
  return (
    <div className="main-container">
      <HomeTitle />
      <Information />
      <Projects />
    </div>
  )
}
