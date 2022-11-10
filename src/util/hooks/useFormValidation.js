import { useEffect, useState } from 'react';

import { emailValidate, textValidate } from '../validators';

const validatorFuncs = {
  text: textValidate,
  email: emailValidate,
};

const useFormValidation = (form, config) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errorsDefault = {};
    Object.keys(config).forEach(((key) => errorsDefault[key] = null));
    setErrors(errorsDefault);
  }, []);

  const validateField = (e) => {
    const fieldName = e.target.name;
    if (config.hasOwnProperty(fieldName)) {
      const [type, message] = config[fieldName];
      const validatorFunc = validatorFuncs[type];
      const fieldError = validatorFunc(form[fieldName], message);

      setErrors({
        ...errors,
        [fieldName]: fieldError
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let foundError = false;

    for (const fieldName in config) {
      const [type, message] = config[fieldName];
      const validatorFunc = validatorFuncs[type];
      const fieldError = validatorFunc(form[fieldName], message);
      newErrors[fieldName] = fieldError;

      if (!!fieldError) foundError = true;
    }

    setErrors(newErrors);

    return !foundError;
  };

  return [errors, validateField, validateForm];
};

export default useFormValidation;
