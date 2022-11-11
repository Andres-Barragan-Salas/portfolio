import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import portfolioLogo from 'PFAssets/website/portfolio-logo.png';

import './PFHeader.css';

const PFHeader = () => {
  const { pathname } = useLocation();
  const { activeSection } = useSelector((state) => state.navigation);

  const sectionClassName = (sectionName) => {
    const sectionIsActive
      = pathname === '/'
      && activeSection === sectionName;
    return sectionIsActive ? 'pf active' : 'pf';
  };

  return (
    <header
      id="site-header"
      className="pf margin-vertical-l
      flex-row justify-content-space-between"
    >
      <Link to="/#intro">
        <img src={portfolioLogo} alt="Andres Barragan" loading="lazy" />
      </Link>
      <div className="pf flex-row align-items-center link-container">
        <Link className={sectionClassName('intro')} to="/#intro">
          Introduction
        </Link>
        <Link className={sectionClassName('projects')} to="/#projects">
          Projects
        </Link>
        <Link className={sectionClassName('about')} to="/#about">
          About
        </Link>
        <Link className={sectionClassName('contact')} to="/#contact">
          Contact
        </Link>
      </div>
    </header >
  );
};

export default PFHeader;
