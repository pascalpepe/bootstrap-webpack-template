==========================
Bootstrap project template
==========================

Project template for a quick start with Bootstrap framework.

Status
======

.. image:: https://img.shields.io/node/v/bootstrap.svg
    :target: https://gitlab.com/pascalpepe/bootstrap-project-template/blob/master/package.json
    :alt: node

.. image:: https://img.shields.io/badge/bootstrap%20versions-4.2-563d7c.svg
    :target: https://gitlab.com/pascalpepe/bootstrap-project-template/blob/master/package.json
    :alt: bootstrap versions

.. image:: https://img.shields.io/badge/license-MIT-green.svg
    :target: https://gitlab.com/pascalpepe/bootstrap-project-template/blob/master/LICENSE
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
2. Fork this repository.
3. Get the source code::

    git clone https://gitlab.com/<your_username>/bootstrap-project-template.git

4. Install the dependencies::

    npm install -D

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

All changes in this repository are logged in the file
`CHANGELOG.rst <https://gitlab.com/pascalpepe/bootstrap-project-template/blob/master/CHANGELOG.rst>`_.

License
=======

This project is licensed under the
`MIT License <https://gitlab.com/pascalpepe/bootstrap-project-template/blob/master/LICENSE>`_.

Bootstrap is licensed under the
`MIT License <https://github.com/twbs/bootstrap/blob/master/LICENSE>`_.
