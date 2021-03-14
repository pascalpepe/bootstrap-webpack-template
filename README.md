# Quick Start with Bootstrap

[![Bootstrap 4.6](https://img.shields.io/badge/bootstrap-4.6-563d7c.svg)](https://github.com/pascalpepe/bootstrap-quickstart/blob/main/package.json)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/pascalpepe/bootstrap-quickstart/blob/main/LICENSE)

This repository provides a development environment for quickly creating website
mockups with [Bootstrap](https://getbootstrap.com). It relies on [webpack](https://webpack.js.org/)
and lets you select components individually in order to customize your build.

## Quick usage guide

1. [Install Node.js](https://nodejs.org/en/download/package-manager/).
2. Get the source code by cloning this repository (or your own fork):

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
