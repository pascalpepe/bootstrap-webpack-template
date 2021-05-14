# Bootstrap webpack template

[![Bootstrap 5](https://img.shields.io/badge/bootstrap-5-563d7c.svg)](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/package.json)
[![Webpack 5](https://img.shields.io/badge/webpack-5-8dd6f9.svg)](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/package.json)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/LICENSE)

This repository provides a development environment for quickly creating
projects with [Bootstrap 5](https://getbootstrap.com). It relies on [webpack](https://webpack.js.org/)
and lets you select components individually so as to customize and optimize
your build with just what you need.

## Quick usage guide

1. Get the source code, either [by using this project as a GitHub template](https://github.com/pascalpepe/bootstrap-webpack-template/generate),
   or by cloning this repository.

2. Install dependencies (make sure to [install Node.js](https://nodejs.org/en/download/package-manager/)
   first):

   ```text
   npm install
   ```

3. Build your project:

   ```text
   npm run build
   ```

4. Open `index.html` in your favorite browser to view a minimal page.
5. Start customizing and optimizing your build in `src/`.

## Scripts

The following npm scripts are available:

| Script | Description |
| ------ | ----------- |
| `build` | Build the project in development mode.
| `build:prod` | Build the project in production mode.
| `watch` | Watch all files for changes and automatically rebuild when needed.
| `watch:prod` | Same as `watch`, but in production mode.

## Project configuration

The entry points are `src/index.js` for scripts and `src/styles.scss` for
styles. You can select components individually in both files.

The output will be saved in `dist/`.

CSS files are post-processed with [PostCSS](https://postcss.org) and [Autoprefixer](https://github.com/postcss/autoprefixer),
and linted with [stylelint](https://stylelint.io).

### Development and production modes

The build can be run in two modes for different optimizations. For instance:

* In development mode: the output is not minimized.
* In production mode: the output is optimized, either with [terser](https://terser.org/)
  for scripts or with [cssnano](https://cssnano.co/) for styles.

Please refer to [webpack's documentation](https://webpack.js.org/configuration/mode/)
for a detailed comparison.

### External dependencies

Bootstrap 5 does not require [jQuery](https://jquery.com) anymore, but it will
detect and use it automatically if you need it.
See [Bootstrap's documentation](https://getbootstrap.com/docs/5.0/getting-started/javascript/#still-want-to-use-jquery-its-possible)
for more information.

Dropdowns, popovers and tooltips components depend on [Popper](https://popper.js.org).
Popper is listed as an external dependency, thus it is not included in the
bundle. If you want to bundle it, remove the appropriate lines in
`webpack.config.js`:

```js
externals: {
  '@popperjs/core': 'Popper'
},
```

## Changelog

All changes in this repository are logged in the file [CHANGELOG.md](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/CHANGELOG.md).

Overview of the major versions of this project:

* 1.0 (2019-01-19): Initial release with Bootstrap 4, under the name
  "bootstrap-quickstart". It did not use webpack at this point.
* 2.0 (2020-04-06): Webpack integration.
* 3.0 (2021-05-14): Bootstrap 5 migration. Project name changed to
  "bootstrap-webpack-template".

## License

This project is licensed under the [MIT License](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/LICENSE).

This project redistributes open source software. See the [NOTICE](https://github.com/pascalpepe/bootstrap-webpack-template/blob/main/NOTICE)
file for more information.
