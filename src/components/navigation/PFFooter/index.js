import './PFFooter.css';

const PFFooter = () => {
  return (
    <footer
      id="site-footer"
      className="pf margin-vertical-xl">
      <div className="link-container">
        <a href="https://github.com/abarragan02" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/abarragan02/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/abarragan02/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <label className="pf support-text text-color-secondary">
        © Andres Barragan
      </label>
    </footer>
  );
};

export default PFFooter;
