import PropTypes from 'prop-types';

import './PFProjectCard.css';

const PFProjectCard = ({ imgSrc, title, description }) => {
  return (
    <div className="project-card">
      <img className="project-img" loading="lazy"
        src={imgSrc} alt={title} />
      <p className="pf support-text
        text-color-secondary margin-vertical-m">
        {description}
      </p>
      <h3 className="pf title-text margin-vertical-m">
        {title}
      </h3>
    </div>
  );
};

PFProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PFProjectCard;
