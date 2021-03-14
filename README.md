# Quick Start with Bootstrap

[![Bootstrap 4.5](https://img.shields.io/badge/bootstrap-4.5-563d7c.svg)](https://github.com/pascalpepe/bootstrap-quickstart/blob/main/package.json)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/pascalpepe/bootstrap-quickstart/blob/main/LICENSE)

Project template for a quick start with [Bootstrap](https://getbootstrap.com) 4.5.

* Source code: https://github.com/pascalpepe/bootstrap-quickstart
* Issue tracker: https://github.com/pascalpepe/bootstrap-quickstart/issues

## Overview

This repository provides a development environment for creating [Bootstrap](https://getbootstrap.com)
projects. It relies on [webpack](https://webpack.js.org/) and lets you select
plugins individually in `src/js/index.js` and `src/scss/main.scss`. The minimal
template `index.html` is provided to quickly start experimenting with your
build.

## Quick usage guide

1. [Install Node.js](https://nodejs.org/en/download/package-manager/).
2. Get the source code by cloning this repository or your own fork:

   ```text
   git clone https://github.com/pascalpepe/bootstrap-quickstart.git
   ```

3. Install the dependencies:

   ```text
   npm install
   ```

4. Build your project:

   ```text
   npm run build
   ```

## Scripts

The following npm scripts are available:

* `build` - Build the project in production mode.
* `build:dev` - Build the project in development mode.
* `watch` - Watch all files for changes and automatically run the production
  build when needed.
* `watch:dev` - Same as `watch`, but in development mode.

## Configuration

The entry points are `src/js/index.js` for scripts and `src/scss/main.scss`
for styles. You can select plugins individually in both files.

The output will be saved in `dist/js/` and `dist/css/`.

CSS files are post-processed with [PostCSS](https://postcss.org) and [Autoprefixer](https://github.com/postcss/autoprefixer),
and linted with [stylelint](https://stylelint.io).

### Modes

The build can be run in two modes for different optimizations: development or
production. You can refer to [webpack's documentation](https://webpack.js.org/configuration/mode/)
for a detailed comparison. A quick summary:

* In development mode:
  * The output is not minimized.
  * Source maps are generated to help with debugging.
* In production mode:
  * The output is optimized, either with [terser](https://terser.org/) for
    scripts or with [cssnano](https://cssnano.co/) for styles.
  * Source maps are not generated.

### jQuery and Popper

All Bootstrap's JavaScript plugins depend on [jQuery](https://jquery.com).
Dropdowns, popovers and tooltips also depend on [Popper](https://popper.js.org).

By default, jQuery and Popper are not included in the bundle. If you want to
bundle one or both, remove the appropriate lines in `webpack.config.js`:

```js
externals: {
  jquery: 'jQuery',
  'popper.js': 'Popper'
},
```

## Changelog

All changes in this repository are logged in the file [CHANGELOG.md](https://github.com/pascalpepe/bootstrap-quickstart/blob/main/CHANGELOG.md).

## License

This project is licensed under the [MIT License](https://github.com/pascalpepe/bootstrap-quickstart/blob/main/LICENSE).

This project redistributes open source software. See the [NOTICE](https://github.com/pascalpepe/bootstrap-quickstart/blob/main/NOTICE)
file for more information.
