import PropTypes from 'prop-types';

import './PFSectionDivider.css';

const PFSectionDivider = ({ title }) => {
  return (
    <div className="pf section-divider flex-row align-items-center">
      <h3 className="pf support-text text-color-secondary">{title}</h3>
      <div className="line"></div>
    </div>
  );
};

PFSectionDivider.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PFSectionDivider;
