const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-plugin-transpile-modules');

module.exports = withTypescript(
  withTM({
    transpileModules: ['react-native-web'],
    webpack: config => {
      config.resolve.alias = {
        'react-native$': 'react-native-web'
      };

      return config;
    }
  })
);
