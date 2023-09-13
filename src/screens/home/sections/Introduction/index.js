import React from 'react';

import { PFWireframeAnimation } from 'PFComponents';

import './Introduction.css';

const Introduction = (_props, ref) => {
  return (
    <section ref={ref} id="intro" className="full-height">
      <div
        className="
        pf section-container
        flex-column justify-content-center">
        <div className="
          content-container
          pf flex-row align-items-center
          justify-content-space-between">
          <div className="title-container">
            <h2 className="pf main-text">¡Hola! 👋</h2>
            <h1 className="pf main-text">I'm Andrés Barragán.</h1>
            <p className="
              pf margin-vertical-m
              regular-text text-color-secondary">
              Software engineer with four years of experience,
              specializing in backend development.
            </p>
            <a className="pf title-text" href="/#projects">
              My projects <i className="bi bi-arrow-down-right" />
            </a>
          </div>
          <div>
            <PFWireframeAnimation />
          </div>
        </div>
      </div>
    </section >
  );
};

export default React.forwardRef(Introduction);
