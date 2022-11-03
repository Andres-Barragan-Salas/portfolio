import React from 'react';

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
            title="harvesty.co"
            description="e-commerce website" />
          <PFProjectCard
            title="Facebook status replies"
            description="Rich media content sharing" />
          <PFProjectCard
            title="Facebook Gaming SDK"
            description="Haptic feedback capabilities" />
          <PFProjectCard
            title="Bloom"
            description="e-commerce app" />
          <PFProjectCard
            title="Hobbi"
            description="e-commerce app" />
        </div>
        <h2 className="pf projects-title side-projects-title title-text">
          School and personal projects <i className="bi bi-arrow-down" />
        </h2>
        <div className="pf side-projects">
          <PFProjectCard
            title="Flixer"
            description="Movies website & app" />
          <PFProjectCard
            title="Face recognition system"
            description="C++ & OpenCV" />
          <PFProjectCard
            title="Flight Simulator"
            description="VR Game on Unity" />
        </div>
      </div>
    </section>
  );
};

export default React.forwardRef(Projects);
