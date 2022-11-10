/* eslint-disable indent */
import { send } from 'emailjs-com';
import React, { useState } from 'react';

import { PFInput, PFSectionDivider } from 'PFComponents';
import {
  emailjsPK, emailjsServiceID,
  emailjsTemplateID
} from 'PFConfig';

import './Contact.css';

const Contact = (_props, ref) => {
  const [submitError, setSubmitError] = useState(false);
  const [submittedBy, setSubmittedBy] = useState(null);
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(false);
    try {
      await send(emailjsServiceID, emailjsTemplateID, toSend, emailjsPK);
      setSubmittedBy(toSend.from_name);
      setToSend({
        from_name: '',
        message: '',
        reply_to: '',
      });
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div ref={ref} id="contact">
      <PFSectionDivider title="Contact" />
      <div className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit}>
          <PFInput
            name="from_name"
            label="What's your name? *"
            placeholder="Andres Barragan"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <PFInput
            name="reply_to"
            label="Where can I reach you? *"
            placeholder="andres@example.com"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <PFInput
            name="message"
            label="What's your message? *"
            placeholder="Hello Andres, let's connect!"
            value={toSend.message}
            onChange={handleChange}
            multiline
          />
          <button className="pf regular-text margin-vertical-l" type="submit">
            Send message <i className="bi bi-arrow-up-right" />
          </button>
          {submittedBy
            ? <label className="pf text-color-success">
              Thank you for reaching out, {submittedBy}.
              I will get back to you asap!
            </label>
            : null}
          {submitError
            ? <label className="pf text-color-failure">
              Oops! Something went wrong :(
            </label>
            : null}
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
