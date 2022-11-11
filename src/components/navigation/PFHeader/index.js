import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import portfolioLogo from 'PFAssets/website/portfolio-logo.png';

import './PFHeader.css';

const PFHeader = () => {
  const { pathname } = useLocation();
  const { activeSection } = useSelector((state) => state.navigation);
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const sectionClassName = (sectionName) => {
    const sectionIsActive
      = pathname === '/'
      && activeSection === sectionName;
    return sectionIsActive ? 'pf active' : 'pf';
  };

  const displaySideMenu = () => {
    setSideMenuActive(true);
  };

  const hideSideMenu = () => {
    setSideMenuActive(false);
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
      <div className={`side-menu-container ${sideMenuActive ? 'active' : ''}`} >
        <div className="side-menu-background" onClick={hideSideMenu} />
        <button className="side-menu-button"
          onClick={displaySideMenu}>
          <i className="bx bx-menu-alt-right" />
        </button>
        <div className="side-menu">
          <div className="side-menu-links pf margin-horizontal-l">
            <Link
              className={sectionClassName('intro')}
              onClick={hideSideMenu}
              to="/#intro">
              Introduction
            </Link>
            <Link
              className={sectionClassName('projects')}
              onClick={hideSideMenu}
              to="/#projects">
              Projects
            </Link>
            <Link
              className={sectionClassName('about')}
              onClick={hideSideMenu}
              to="/#about">
              About
            </Link>
            <Link
              className={sectionClassName('contact')}
              onClick={hideSideMenu}
              to="/#contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header >
  );
};

export default PFHeader;
