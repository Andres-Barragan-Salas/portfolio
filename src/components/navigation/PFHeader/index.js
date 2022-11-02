import './PFHeader.css';

const PFHeader = () => {
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
        <a className="pf" href="/#intro">Introduction</a>
        <a className="pf" href="/#projects">Projects</a>
        <a className="pf" href="/#about">About</a>
        <a className="pf" href="/#contact">Contact</a>
      </div>
    </header >
  );
};

export default PFHeader;
