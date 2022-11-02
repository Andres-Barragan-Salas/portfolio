import { PFWireframeAnimation } from 'PFComponents';

import './Introduction.css';

const Introduction = () => {
  return (
    <section id="intro">
      <div
        className="
        pf section-container
        flex-column justify-content-center">
        <div className="
        pf flex-row align-items-center
        justify-content-space-between">
          <div>
            <h2 className="pf main-text">¡Hola! 👋</h2>
            <h1 className="pf main-text">I'm Andrés Barragán.</h1>
            <p className="
              pf margin-vertical-m
              regular-text text-color-secondary">
              I'm a Software Engineer,
              very passionate about frontend development and UX design.
            </p>
          </div>
          <div>
            <PFWireframeAnimation />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Introduction;
