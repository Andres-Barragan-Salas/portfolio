const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    O8Components: './src/components',
    O8Config: './src/config',
    O8Screens: './src/screens',
    O8Store: './src/store',
    O8Utils: './src/utils',
  })(config);

  return config;
};
