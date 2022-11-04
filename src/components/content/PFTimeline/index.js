import PropTypes from 'prop-types';

import './PFTimeline.css';

const PFTimeline = ({ children }) => {
  return (
    <ul className="timeline-component">
      {children}
    </ul>
  );
};

PFTimeline.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PFTimeline;
