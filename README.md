# Bootstrap webpack template

[![Bootstrap 5.0](https://img.shields.io/badge/bootstrap-5.0-563d7c.svg)](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/package.json)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/LICENSE)

This repository provides a development environment for quickly creating website
mockups with [Bootstrap 5](https://getbootstrap.com). It relies on [webpack](https://webpack.js.org/)
and lets you select components individually in order to customize your build.

## Quick usage guide

1. [Install Node.js](https://nodejs.org/en/download/package-manager/).
2. Get the source code by cloning this repository (or your own fork):

   ```text
   git clone https://github.com/pascalpepe/bootstrap-webpack-template.git
   ```

3. Install the dependencies:

   ```text
   npm install
   ```

4. Build your project:

   ```text
   npm run build
   ```

5. Open `index.html` in your favorite browser to view a minimal page.
6. Start adding your own scripts and styles in `src/`.

## Scripts

The following npm scripts are available:

* `build` - Build the project in development mode.
* `build:prod` - Build the project in production mode.
* `watch` - Watch all files for changes and automatically rebuild when needed.
* `watch:prod` - Same as `watch`, but in production mode.

## Configuration

The entry points are `src/index.js` for scripts and `src/styles.scss` for
styles. You can select components individually in both files.

The output will be saved in `dist/`.

CSS files are post-processed with [PostCSS](https://postcss.org) and [Autoprefixer](https://github.com/postcss/autoprefixer),
and linted with [stylelint](https://stylelint.io).

### Modes

The build can be run in two modes for different optimizations. A quick summary:

* In development mode: the output is not minimized.
* In production mode: the output is optimized, either with [terser](https://terser.org/)
  for scripts or with [cssnano](https://cssnano.co/) for styles.

Please refer to [webpack's documentation](https://webpack.js.org/configuration/mode/)
for a detailed comparison.

### jQuery and Popper

Bootstrap 5 does not require [jQuery](https://jquery.com) anymore, but it will
detect and use it automatically if you want to.
See [Bootstrap's documentation](https://getbootstrap.com/docs/5.0/getting-started/javascript/#still-want-to-use-jquery-its-possible)
for more information.

Dropdowns, popovers and tooltips components depend on [Popper](https://popper.js.org).

By default, Popper is listed as an external dependency and thus it is not
included in the bundle. If you want to bundle it, remove the appropriate lines
in `webpack.config.js`:

```js
externals: {
  '@popperjs/core': 'Popper'
},
```

## Changelog

All changes in this repository are logged in the file [CHANGELOG.md](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/CHANGELOG.md).

Overview of the major versions of this project:

* 1.0 (2019-01-19): Initial release with Bootstrap 4 under the name
  "bootstrap-quickstart". webpack wasn't used at this point.
* 2.0 (2020-04-06): Integrated webpack.
* 3.0 (2021-05-14): Updated to Bootstrap 5 and changed the project name
  to "bootstrap-webpack-template".

## License

This project is licensed under the [MIT License](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/LICENSE).

This project redistributes open source software. See the [NOTICE](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/NOTICE)
file for more information.
