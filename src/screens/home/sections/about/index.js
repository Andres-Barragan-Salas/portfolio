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
          I'm a software engineer from Mexico City, graduating with the highest
          GPA in Computer Science from "Tecnológico de Monterrey" in December
          2022. 'm deeply passionate about software development, always eager to
          learn independently, and stay up-to-date with emerging tech trends.
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
            company="Pefai"
            place="CDMX"
            title="Backend Engineer"
            meta="January 2023 - Present"
            description="Developed Golang-MongoDB backend for no-code
            configurator, orchestrating frontend, backend, and client DB
            architecture. Achieved scalability, modularity, and an 80%
            reduction in loading times, enhancing overall system efficiency."
          />
          <PFTimelineEvent
            company="Meta"
            place="Menlo Park"
            title="SWE Intern @ Sharing Experiences"
            meta="June 2022 - September 2022"
            description="Facebook's iOS development, crafting a rich media
            response feature in Objective-C for the status feature. Elevated
            user engagement with GIFs and stickers, prioritizing scalability.
            Led testing and experiments for validation."
          />
          <PFTimelineEvent
            company="harvestly.co"
            place="San Luis Obispo"
            title="Co-Founder & CTO"
            meta="October 2020 - June 2022 [REMOTE]"
            description="Constructed a hyper-local marketplace for small
            business owners, employing React and Redux for web development.
            Developed customer, vendor, and admin-facing portals, overseeing
            design, engineering, and successful launch of 3 California markets,
            injecting over 250,000 USD into the local economy."
          />
          <PFTimelineEvent
            company="Facebook"
            place="Menlo Park"
            title="SWE Intern @ Gaming Services"
            meta="June 2021 - August 2021 [REMOTE]"
            description="Contributed to SDK tool development enabling haptic
            feedback for in-app games on Facebook. Implemented native
            modifications for iOS and Android versions of the Facebook App,
            enhancing the gaming experience."
          />
          <PFTimelineEvent
            company="Facebook"
            place="Menlo Park"
            title="FBU iOS Intern"
            meta="June 2020 - August 2020 [REMOTE]"
            description="Objective-C iOS development for a hyper-local business
            networking app, leveraging document-oriented databases. Designed
            and implemented an API to support small business growth and
            networking, promoting community engagement."
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
              <i className="bx bxl-go-lang" />
              <i className="bx bxl-mongodb" />
              <i className="bx bxl-javascript" />
              <i className="bx bxl-react" />
              <i className="bx bxl-nodejs" />
              <i className="bx bxl-html5" />
              <i className="bx bxl-css3" />
              <i className="bx bxl-github" />
              <i className="bx bxl-c-plus-plus" />
              <i className="bx bxs-data" />
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
            description="Bachelor of Engineering · GPA: 98/100 · President
            of the Computer Science Student Council (SATI) · Top GPA"
          />
        </PFTimeline>
      </div>
    </section>
  );
};

export default React.forwardRef(About);
