# Changelog

## Latest

* Renamed project from "bootstrap-quickstart" to "bootstrap-webpack-template".
* Updated dependencies:
  * Bootstrap: 5.0.1
  * @popperjs/core: 2.9.2
* Removed dependencies:
  * jQuery
* Updated development dependencies:
  * css-loader: 5.2.4
  * css-minimizer-webpack-plugin: 3.0.0
  * mini-css-extract-plugin: 1.6.0
  * node-sass: 6.0.0
  * sass-loader: 11.1.1
  * stylelint: 13.13.1
  * stylelint-config-twbs-bootstrap: 2.2.0
  * terser-webpack-plugin: 5.1.2
  * webpack: 5.37.0
  * webpack-cli: 4.7.0
* Updated the list of external dependencies in `webpack.config.js`:
  * Removed jQuery (not required for Bootstrap 5).
  * Renamed `popper.js` as `@popperjs/core` in accordance with the new naming
    for Popper v2.

## 2.2 (2021-03-14)

* Renamed the default branch as `main`.
* Updated dependencies:
  * Bootstrap: 4.6.0
  * jQuery: 3.6.0
* Updated development dependencies:
  * autoprefixer: 10.2.5
  * css-loader: 5.1.2
  * mini-css-extract-plugin: 1.3.9
  * node-sass: 5.0.0
  * postcss-loader: 5.2.0
  * sass-loader: 11.0.1
  * stylelint: 13.12.0
  * stylelint-config-twbs-bootstrap: 2.1.0
  * stylelint-webpack-plugin: 2.1.1
  * terser-webpack-plugin: 5.1.1
  * webpack: 5.25.0
  * webpack-cli: 4.5.0
* Removed development dependencies:
  * optimize-css-assets-webpack-plugin
* Added development dependenCustomcies:
  * css-minimizer-webpack-plugin: 1.2.0
* Renamed npm scripts:
  * `build` as `build:prod`
  * `build:dev` as `build`
  * `watch` as `watch:prod`
  * `watch:dev` as `watch`
* Added `.stylelintignore`.
* Moved entry point: from `src/js/index.js` to `src/index.js`.
* Moved styles entry point: from `src/scss/main.scss` to `src/styles.scss`.
* Moved styles: from `src/scss/` to `src/styles/`.
* Updated npm scripts `build:prod` and `watch:prod` to explicitly set mode to
  `production`.
* Refactored `webpack.config.js` to rely more on webpack default configuration.
* Updated `index.html` to import `dist/main.css` and `dist/main.js`, in
  accordance with the previous changes.
* Updated `README`, `NOTICE` and `LICENSE` files.

## 2.1 (2020-06-18)

* Updated dependencies:
  * Bootstrap: 4.5.0
  * jQuery: 3.5.1
* Updated development dependencies:
  * autoprefixer: 9.8.0
  * css-loader: 3.6.0
  * node-sass: 4.14.1
  * stylelint: 13.6.1
  * stylelint-config-twbs-bootstrap: 2.0.3
  * stylelint-webpack-plugin: 2.1.0
  * terser-webpack-plugin: 3.0.5
  * webpack: 4.43.0
* Removed and ignored distribution files.
* Updated `README`, `NOTICE` and `LICENSE` files.

## 2.0 (2020-04-06)

* Updated dependencies:
  * Bootstrap: 4.4.1
  * Popper: 1.16.1
* Updated development dependencies:
  * autoprefixer: 9.7.5
  * node-sass: 4.13.1
  * stylelint: 13.3.0
  * stylelint-config-twbs-bootstrap: 2.0.1
* Removed development dependencies:
  * clean-css-cli
  * nodemon
  * npm-run-all
  * postcss-cli
* Added development dependencies:
  * webpack: 4.42.1
  * webpack-cli: 3.3.11
  * css-loader: 3.4.2
  * postcss-loader: 3.0.0
  * sass-loader: 8.0.2
  * mini-css-extract-plugin: 0.9.0
  * optimize-css-assets-webpack-plugin: 5.0.3
  * stylelint-webpack-plugin: 1.2.3
  * terser-webpack-plugin: 2.3.5
* Removed npm scripts:
  * `css`
  * `css-compile`
  * `css-lint`
  * `css-minify`
  * `css-prefix`
  * `css-watch`
* Added npm scripts:
  * `build` - Build the project in production mode.
  * `build:dev` - Build the project in development mode.
  * `watch` - Watch all files for changes and automatically run the
    development build when needed.
  * `watch:dev` - Same as `watch`, but in development mode.
* Added webpack configuration: `webpack.config.js`
* Added style source directory `src/scss/` and moved SCSS files into it.
* Added a file for custom SCSS variables: `src/scss/_variables.scss`
* Added script source directory: `src/js/`
* Added entry point: `src/js/index.js`
* Added a starter template: `index.html`
* Updated `README`.
* Updated the copyright date in the `LICENSE` file.
* Added the `NOTICE` file that lists copyright and header notices of all
  third-party software used in this project.

## 1.2 (2019-07-28)

* Added dependencies:
  * jquery
  * popper.js
* Updated development dependencies:
  * autoprefixer: 9.6.1
  * clean-css-cli: 4.3.0
  * node-sass: 4.12.0
  * nodemon: 1.19.1
  * postcss-cli: 6.1.3
  * stylelint: 10.1.0
  * stylelint-config-twbs-bootstrap: 0.4.0
* Changed SCSS entry file name from `theme.scss` to `main.scss`.
* Added `include-path node_modules/` option to node-sass command line. This
  allows more concise imports of Bootstrap sources in our SCSS files.
* Cleaned up the PostCSS config file.

## 1.1 (2019-02-17)

* Updated dependencies:
  * Bootstrap: 4.3.1
* Updated development dependencies:
  * autoprefixer: 9.4.7
  * nodemon: 1.18.10
  * stylelint: 9.10.1
  * stylelint-config-twbs-bootstrap: 0.3.0
* Moved PostCSS config file from the `build/` directory to the repository
  root.
* Added new rules in the config of stylelint in order to blacklist some
  `border-radius` properties (use Bootstrap's mixin instead, see
  [Bootstrap issue #27900](https://github.com/twbs/bootstrap/pull/27900).

## 1.0 (2019-01-19)

### Initial dependencies

* Bootstrap 4.2

### Initial features

* Generate CSS files with the same coding style and post-processing as the
  default pre-compiled distribution. This includes:
  * Code style checks with stylelint that follow Bootstrap's default
    configuration.
  * SCSS compilation with node-sass.
  * CSS vendor prefixing with PostCSS and Autoprefixer.
  * CSS optimization with clean-css.
  * Source map outputs.
  * SCSS files monitoring with nodemon so as to automatically rebuild
    the theme when file changes are detected.

### Initial npm scripts

* `css` - Check code style, compile, prefix and minify.
* `css-compile` - Compile SCSS files.
* `css-lint` - Check code style of all SCSS files.
* `css-minify` - Minify CSS files.
* `css-prefix` - Post-process CSS files.
* `css-watch` - Automatically run the `css` script when SCSS file
  changes are detected.
