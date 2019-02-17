=====================
Bootstrap Quick Start
=====================

Project template for a quick start with Bootstrap framework.

Status
======

.. image:: https://img.shields.io/badge/bootstrap-4.3-blue.svg
    :target: https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/package.json
    :alt: bootstrap versions

.. image:: https://img.shields.io/badge/node-%3E%3D6-blue.svg
    :target: https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/package.json
    :alt: node

.. image:: https://img.shields.io/badge/license-MIT-blue.svg
    :target: https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/LICENSE
    :alt: license

Features
========

This repository provides a development environment for creating Bootstrap
themes and generating CSS files with the same coding style and post-processing
as the default theme. This includes:

* Code style checks with **stylelint** that follow Boostrap's own configuration.
* SCSS compilation with **node-sass**.
* Source map outputs.
* CSS post-processing with **postcss** and **autoprefixer** in order to insure
  the same browser compatibility as Bootstrap's default theme.
* Minification of CSS and map files with **cleancss**.
* SCSS files monitoring with **nodemon** so as to automatically regenerate the
  theme if changes happen.

Installation
============

1. `Install Node.js <https://nodejs.org/en/download/package-manager/>`_.
2. Get the source code by cloning this repository or your own fork::

    git clone https://gitlab.com/<your_username>/bootstrap-quickstart.git

3. Install the dependencies::

    npm install

Scripts
=======

The following scripts are available:

* ``npm run css`` - Check code style, compile, prefix and minify.
* ``npm run css-compile`` - Compile SCSS files.
* ``npm run css-lint`` - Check code style of all SCSS files.
* ``npm run css-minify`` - Minify CSS files.
* ``npm run css-prefix`` - Post-process CSS files.
* ``npm run css-watch`` - Watch changes in SCSS files and automatically run the
  ``css`` script if needed.

Changelog
=========

All changes in this repository are logged in the file `CHANGELOG.rst <https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/CHANGELOG.rst>`_.

License
=======

This project is licensed under the `MIT License <https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/LICENSE>`_.

This project is built with Bootstrap, which is licensed under the `MIT License <https://github.com/twbs/bootstrap/blob/master/LICENSE>`_.
