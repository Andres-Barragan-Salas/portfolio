const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    PFAssets: './src/assets',
    PFComponents: './src/components',
    PFConfig: './src/config',
    PFSections: './src/sections',
    PFStore: './src/store',
    PFUtils: './src/utils',
  })(config);

  return config;
};
