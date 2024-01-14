module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}], 'babel-preset-expo', '@babel/preset-typescript', 'module:metro-react-native-babel-preset'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      ['module-resolver', {
        root: ["./src"],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          store: './src/store',
          '@components': './src/components'
        }
      }]
    ],
  };
};
