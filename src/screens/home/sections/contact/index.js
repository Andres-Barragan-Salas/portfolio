import './Contact.css';

import { PFInput, PFSectionDivider } from 'PFComponents';

const Contact = () => {
  return (
    <div id="contact">
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
