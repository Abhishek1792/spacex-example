/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig();

//   defaultConfig.resolver.sourceExts.push('graphql');

//   return defaultConfig;
// })();
