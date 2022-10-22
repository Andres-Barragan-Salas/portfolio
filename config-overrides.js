const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    PFComponents: './src/components',
    PFConfig: './src/config',
    PFScreens: './src/screens',
    PFStore: './src/store',
    PFUtils: './src/utils',
  })(config);

  return config;
};
