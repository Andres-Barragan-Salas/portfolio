import React from 'react';

import bloomPic from 'PFAssets/projects/bloom-pic.jpeg';
import faceRecognitionPic from 'PFAssets/projects/face-recognition-pic.jpeg';
import fbGamingPic from 'PFAssets/projects/fb-gaming-pic.jpeg';
import fbStatusPic from 'PFAssets/projects/fb-status-pic.jpeg';
import flightSimulatorPic from 'PFAssets/projects/flight-simulator-pic.jpeg';
import flixerPic from 'PFAssets/projects/flixer-pic.jpeg';
import harvestlyPic from 'PFAssets/projects/harvestly-pic.jpeg';
import hobbiPic from 'PFAssets/projects/hobbi-pic.jpeg';
import { PFProjectCard, PFSectionDivider } from 'PFComponents';

import './Projects.css';

const Projects = (_props, ref) => {
  return (
    <section ref={ref} id="projects">
      <PFSectionDivider title="Projects" />
      <div className="projects-grid">
        <p className="pf description regular-text
          text-color-secondary margin-vertical-l">
          These are some of the projects I've worked on, including work, school
          and personal projects.
        </p>
        <h2 className="pf projects-title work-projects-title title-text">
          Work-related projects <i className="bi bi-arrow-down" />
        </h2>
        <div className="pf work-projects">
          <PFProjectCard
            title="harvestly.co"
            description="e-commerce website"
            imgSrc={harvestlyPic} />
          <PFProjectCard
            title="Facebook status replies"
            description="Rich media content sharing"
            imgSrc={fbStatusPic} />
          <PFProjectCard
            title="Facebook Gaming SDK"
            description="Haptic feedback capabilities"
            imgSrc={fbGamingPic} />
          <PFProjectCard
            title="Bloom"
            description="e-commerce app"
            imgSrc={bloomPic} />
          <PFProjectCard
            title="Hobbi"
            description="e-commerce app"
            imgSrc={hobbiPic} />
        </div>
        <h2 className="pf projects-title side-projects-title title-text">
          School and personal projects <i className="bi bi-arrow-down" />
        </h2>
        <div className="pf side-projects">
          <PFProjectCard
            title="Flixer"
            description="Movies website & app"
            imgSrc={flixerPic} />
          <PFProjectCard
            title="Face recognition system"
            description="C++ & OpenCV"
            imgSrc={faceRecognitionPic} />
          <PFProjectCard
            title="Flight Simulator"
            description="VR Game on Unity"
            imgSrc={flightSimulatorPic} />
        </div>
      </div>
    </section>
  );
};

export default React.forwardRef(Projects);
