const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@core': join(__dirname, '/src/core/'),
      '@': join(__dirname, '/src/'),
      '@common': join(__dirname, '/src/common/'),
      '@config' : join(__dirname, '/src/config'),
      '@generated' : join(__dirname, '/src/generated'),
      '@global' : join(__dirname, '/src/global'),
      '@jobs' : join(__dirname, '/src/jobs'),
      '@modules' : join(__dirname, '/src/modules'),
    }
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    })
  ],
};
