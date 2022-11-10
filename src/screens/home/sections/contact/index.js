import React from 'react';

import { PFInput, PFSectionDivider } from 'PFComponents';

import './Contact.css';

const Contact = (_props, ref) => {
  return (
    <div ref={ref} id="contact">
      <PFSectionDivider title="Contact" />
      <div className="contact-grid">
        <form className="contact-form">
          <PFInput
            label="What's your name? *"
            placeholder="Andres Barragan"
          />
          <PFInput
            label="Where can I reach you? *"
            placeholder="andres@example.com"
            error="Invalid email"
          />
          <PFInput
            label="What's your message? *"
            placeholder="Hello Andres, let's connect!"
            multiline
          />
          <button className="pf regular-text margin-vertical-l">
            Send message <i className="bi bi-arrow-up-right" />
          </button>
        </form>
        <div>
          <p className="pf regular-text">
            Contact me through the form on the left or by direct email on
            andresbarragan0202@gmail.com. Links to my social networks are down
            below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Contact);
