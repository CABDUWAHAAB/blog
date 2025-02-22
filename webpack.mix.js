const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// Set public path
// als je public helemaal beneden zet wordt er constant wanneer je opslaat public folder en files gemaakt
mix.setPublicPath('public');

// Compile SCSS with TailwindCSS
mix.sass('scss/styles.scss', 'public/css')
   .options({
     postCss: [tailwindcss('./tailwind.config.js')],
   });

// Compile Pug templates
mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  },
  externals: {
    'sharp': 'commonjs sharp'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cleanCssMinify,
      })
    ]
  },
  stats: {
    children: true,
  }
});


mix.disableNotifications();
