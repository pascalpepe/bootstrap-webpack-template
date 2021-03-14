==========================
Quick Start with Bootstrap
==========================

.. image:: https://img.shields.io/badge/bootstrap-4.5-563d7c.svg
   :alt: Bootstrap 4.5
   :target: https://github.com/pascalpepe/bootstrap-quickstart/blob/main/package.json

.. image:: https://img.shields.io/badge/license-MIT-green.svg
   :alt: MIT License
   :target: https://github.com/pascalpepe/bootstrap-quickstart/blob/main/LICENSE

Project template for a quick start with Bootstrap_ 4.5.

:Source code: https://github.com/pascalpepe/bootstrap-quickstart
:Issue tracker: https://github.com/pascalpepe/bootstrap-quickstart/issues


Overview
========

This repository provides a development environment for creating Bootstrap_
projects. It relies on webpack_ and lets you select plugins individually in
``src/js/index.js`` and ``src/scss/main.scss``. The minimal template
``index.html`` is provided to quickly start experimenting with your build.


Quick usage guide
=================

1. `Install Node.js <https://nodejs.org/en/download/package-manager/>`_.
2. Get the source code by cloning this repository or your own fork::

    git clone https://github.com/pascalpepe/bootstrap-quickstart.git

3. Install the dependencies::

    npm install

4. Build your project::

    npm run build


Scripts
=======

The following npm scripts are available:

* ``build`` - Build the project in production mode.
* ``build:dev`` - Build the project in development mode.
* ``watch`` - Watch all files for changes and automatically run the
  production build when needed.
* ``watch:dev`` - Same as ``watch``, but in development mode.


Configuration
=============

The entry points are ``src/js/index.js`` for scripts and ``src/scss/main.scss``
for styles. You can select plugins individually in both files.

The output will be saved in ``dist/js/`` and ``dist/css/``.

CSS files are post-processed with PostCSS_ and Autoprefixer_, and linted
with stylelint_.

Modes
-----

The build can be run in two modes_ for different optimizations: development or
production. You can refer to webpack's documentation for a detailed comparison.
A quick summary:

* In development mode:

  - The output is not minimized.
  - Source maps are generated to help with debugging.

* In production mode:

  - The output is optimized, either with terser_ for scripts or with cssnano_
    for styles.
  - Source maps are not generated.

jQuery and Popper
-----------------

All Bootstrap's JavaScript plugins depend on jQuery_. Dropdowns, popovers and
tooltips also depend on Popper_.

By default, jQuery and Popper are not included in the bundle. If you want to
bundle one or both, remove the appropriate lines in ``webpack.config.js``::

    externals: {
      jquery: 'jQuery',
      'popper.js': 'Popper'
    },


Changelog
=========

All changes in this repository are logged in the file `CHANGELOG.rst`_.


License
=======

This project is licensed under the `MIT License`_.

This project redistributes open source software. See the `NOTICE`_ file for
more information.


.. _Autoprefixer: https://github.com/postcss/autoprefixer
.. _Bootstrap: https://getbootstrap.com
.. _cssnano: https://cssnano.co/
.. _jQuery: https://jquery.com
.. _Popper: https://popper.js.org
.. _PostCSS: https://postcss.org
.. _stylelint: https://stylelint.io
.. _terser: https://terser.org/
.. _webpack: https://webpack.js.org/
.. _modes: https://webpack.js.org/configuration/mode/
.. _CHANGELOG.rst: https://github.com/pascalpepe/bootstrap-quickstart/blob/main/CHANGELOG.rst
.. _`MIT License`: https://github.com/pascalpepe/bootstrap-quickstart/blob/main/LICENSE
.. _NOTICE: https://github.com/pascalpepe/bootstrap-quickstart/blob/main/NOTICE
