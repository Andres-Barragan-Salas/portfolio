/* eslint-disable indent */
import { send } from 'emailjs-com';
import React, { useState } from 'react';

import { PFInput, PFSectionDivider } from 'PFComponents';
import {
  emailjsPK, emailjsServiceID,
  emailjsTemplateID
} from 'PFConfig';
import { useAsyncCall, useFormValidation } from 'PFUtil/hooks';

import './Contact.css';

const Contact = (_props, ref) => {
  const [sendAsyncCall, sendLoading, sendError] = useAsyncCall();
  const [submittedBy, setSubmittedBy] = useState(null);
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [errors, validateField, validateForm] = useFormValidation(toSend, {
    from_name: ['text', 'Please enter your name'],
    reply_to: ['email', null],
    message: ['text', 'Please enter your message'],
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmittedBy(null);
    if (!validateForm()) return;

    sendAsyncCall(async () => {
      await send(emailjsServiceID, emailjsTemplateID, toSend, emailjsPK);
      setSubmittedBy(toSend.from_name);
      setToSend({
        from_name: '',
        reply_to: '',
        message: '',
      });
    });
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
            onBlur={validateField}
            disabled={sendLoading}
            error={errors.from_name}
          />
          <PFInput
            name="reply_to"
            type="email"
            label="Where can I reach you? *"
            placeholder="andres@example.com"
            value={toSend.reply_to}
            onChange={handleChange}
            onBlur={validateField}
            disabled={sendLoading}
            error={errors.reply_to}
          />
          <PFInput
            name="message"
            label="What's your message? *"
            placeholder="Hello Andres, let's connect!"
            value={toSend.message}
            onChange={handleChange}
            onBlur={validateField}
            disabled={sendLoading}
            error={errors.message}
            multiline
          />
          <button disabled={sendLoading} type="submit"
            className="pf regular-text margin-vertical-l">
            {sendLoading
              ? 'Loading...'
              : <>Send message <i className="bi bi-arrow-up-right" /></>}
          </button>
          {submittedBy
            ? <label className="pf text-color-success">
              Thank you for reaching out, {submittedBy}.
              I will get back to you asap!
            </label>
            : null}
          {sendError
            ? <label className="pf text-color-failure">
              Oops! Something went wrong :(
            </label>
            : null}
        </form>
        <div className="contact-prompt">
          <p className="pf regular-text">
            Contact me through this form or by direct email at
            andresbarragan0202@gmail.com. Links to my social networks are down
            below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Contact);
