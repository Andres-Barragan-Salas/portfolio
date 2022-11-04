import PropTypes from 'prop-types';

import './PFTimelineEvent.css';

const PFTimelineEvent = ({ company, place, title, meta, description }) => {
  return (
    <li className="timeline-event-component">
      <h3 className="pf title-text">
        <span className="pf highlight-text">{company}, </span>
        {place} — <i>{title}</i>
      </h3>
      <p className="pf accessibility-text text-color-secondary">
        {meta}
      </p>
      <p className="pf support-text margin-vertical-s">
        {description}
      </p>
    </li>
  );
};

PFTimelineEvent.propTypes = {
  company: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PFTimelineEvent;
