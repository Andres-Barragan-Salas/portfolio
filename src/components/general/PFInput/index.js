import PropTypes from 'prop-types';

import './PFInput.css';

const PFInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  multiline,
  error
}) => {
  return (
    <div className={`pf-input-component ${error ? 'error' : ''}`}>
      {label
        ? <label className="pf label regular-text">{label}</label>
        : null
      }
      {multiline
        ? <textarea
          className="pf regular-text text-color-secondary"
          rows={3}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        : <input
          className="pf regular-text text-color-secondary"
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      }
      {error
        ? <label className="pf error accessibility-text">{error}</label>
        : null
      }
    </div>
  );
};

PFInput.defaultProps = {
  label: null,
  type: 'text',
  placeholder: '',
  multiline: false,
  error: null,
};

PFInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  multiline: PropTypes.bool,
  error: PropTypes.string,
};

export default PFInput;
