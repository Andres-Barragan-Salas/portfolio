import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

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
      <div className="pf flex-row">
        <h2 className="pf header-text text-color-secondary">a</h2>
        <h2
          className="pf header-text"
          style={{ marginLeft: '-5px' }}
        >
          b
        </h2>
      </div>
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
