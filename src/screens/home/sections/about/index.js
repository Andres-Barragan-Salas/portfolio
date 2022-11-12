import React from 'react';

import andresCV from 'PFAssets/files/CV_AndresBarragan.pdf';
import andresPic from 'PFAssets/personal/andres-pic.jpeg';
import { PFSectionDivider, PFTimeline, PFTimelineEvent } from 'PFComponents';

import './About.css';

const About = (_props, ref) => {
  return (
    <section ref={ref} id="about">
      <PFSectionDivider title="About" />
      <div className="about-grid">
        <p className="pf bio regular-text
          text-color-secondary margin-vertical-l">
          I'm a Computer Science Engineering student from Mexico City, and I'll
          be graduating in December 2022. I like to learn a lot on my own and
          I'm passionate about frontend development and UX design. In recent
          years I have had experience as a Software Engineering Intern at
          Meta/Facebook (thrice), and co-founded harvestly.co, a hyper-local
          marketplace startup, where I led the development of their product as
          the company's CTO.
        </p>
        <div className="pf download-container flex-column
          justify-content-flex-end align-items-flex-end">
          <a className="pf button regular-text" target="_blank" rel="noreferrer"
            href={andresCV} download="CV_AndresBarragan.pdf">
            <i className="bx bx-cloud-download" /> Download PDF
          </a>
        </div>
        <h2 className="pf about-title title-text">
          Professional experience <i className="bi bi-arrow-down" />
        </h2>
        <PFTimeline>
          <PFTimelineEvent
            company="Meta"
            place="Menlo Park"
            title="SWE Intern @ Sharing Experiences"
            meta="June 2022 - September 2022"
            description="Mobile (iOS) development with Objective-C on the
            Facebook App. Built a feature for rich media (GIFs, stickers, etc.)
            replies to improve user engagement for the status feature. Focused
            on the scalability of the feature (for more media types to be
            supported with ease). Implemented tests, arranged QA, and configured
            group experiments for said feature."
          />
          <PFTimelineEvent
            company="harvestly.co"
            place="San Luis Obispo"
            title="Co-Founder & CTO"
            meta="October 2020 - June 2022 [REMOTE]"
            description="Built a hyper-local marketplace for small business
            owners. Web development using React and Redux. Built customer,
            vendor, and admin-facing portals. Included data visualization and
            analytics for vendors and admins. Designed the system’s requirements
            and UI. Led the engineering team (see https://harvestly.co/)."
          />
          <PFTimelineEvent
            company="Facebook"
            place="Menlo Park"
            title="SWE Intern @ Gaming Services"
            meta="June 2021 - August 2021 [REMOTE]"
            description="Development of SDK tools for game developers to trigger
            haptic feedback on games playable through the Facebook App. Made
            native changes to the iOS and Android versions of the FB app."
          />
          <PFTimelineEvent
            company="Facebook"
            place="Menlo Park"
            title="FBU iOS Intern"
            meta="June 2020 - August 2020 [REMOTE]"
            description="iOS development using Objective-C. Built an app to
            support small businesses' growth and networking in a hyper-local
            market. Made use of document-oriented DBs and built an API for
            the project."
          />
        </PFTimeline>
        <div className="personal-container">
          <img className="about-img" loading="lazy"
            src={andresPic} alt="Andres Barragan" />
          <div className="pf margin-vertical-l">
            <h2 className="pf title-text">
              Tech knowledge <i className="bi bi-arrow-down" />
            </h2>
            <div className="pf tech-stack margin-vertical-m">
              <i className="bx bxl-react" />
              <i className="bx bxl-javascript" />
              <i className="bx bxl-nodejs" />
              <i className="bx bxl-html5" />
              <i className="bx bxl-css3" />
              <i className="bx bxl-github" />
              <i className="bx bxl-c-plus-plus" />
              <i className="bx bxs-data" />
              <i className="bx bxl-mongodb" />
              <i className="bx bxl-firebase" />
              <i className="bx bxl-python" />
              <i className="bx bxl-java" />
              <i className="bx bxl-google-cloud" />
              <i className="bx bxl-unity" />
            </div>
          </div>
        </div>
        <h2 className="pf about-title title-text">
          Education <i className="bi bi-arrow-down" />
        </h2>
        <PFTimeline>
          <PFTimelineEvent
            company="Tecnológico de Monterrey"
            place="Mexico City"
            title="Computer Science"
            meta="August 2018 - December 2022"
            description="Bachelor of Engineering · GPA: 98/100 · Former
            president of the Computer Science Student Council (SATI)"
          />
        </PFTimeline>
      </div>
    </section>
  );
};

export default React.forwardRef(About);
