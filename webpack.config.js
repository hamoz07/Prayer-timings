const path = require('path');

module.exports = {
  entry: './js/prayer_timing.js', // Update with the path to your script file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // Output directory for the bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
