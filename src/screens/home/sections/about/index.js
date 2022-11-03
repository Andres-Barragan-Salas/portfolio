import React from 'react';

import { PFSectionDivider } from 'PFComponents';

import './About.css';

const About = (_props, ref) => {
  return (
    <section ref={ref} id="about">
      <PFSectionDivider title="About" />
      <div className="about-grid">
        <p className="pf bio regular-text
          text-color-secondary margin-vertical-l">
          I'm a Computer Science Engineering student, currently in my 9th
          semester. I like to learn a lot on my own and I'm very passionate
          about frontend development and UX design. In recent years I have had
          experience as a Software Engineering Intern at Meta/Facebook (thrice),
          and co-founded harvestly.co, a hyper-local marketplace startup, where
          I led the development of their product as the company's CTO.
        </p>
      </div>
    </section>
  );
};

export default React.forwardRef(About);
