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
* Minification of CSS and map files with **cleancss**

Installation
============

1. `Install Node.js <https://nodejs.org/en/download/package-manager/>`_
2. Fork this repository.
3. Get the source code::

    git clone https://gitlab.com/<your_username>/bootstrap-project-template.git

4. Install the dependencies::

    npm install -D


Scripts
=======

The following scripts are available:

* ``npm run css`` - Check code style, compile, prefix and minify all themes.
* ``npm run css-main`` - Check code style, compile, prefix and minify the main theme.
* ``npm run css-compile`` - Compile SCSS files of all themes.
* ``npm run css-compile-main`` - Compile SCSS files of the main theme.
* ``npm run css-lint`` - Check code style of all SCSS files.
* ``npm run css-minify`` - Minify CSS files of all themes.
* ``npm run css-minify-main`` - Minify CSS files of the main theme.
* ``npm run css-prefix`` - Run PostCSS for all CSS files.

License
=======

This project is licensed under the
`MIT License <https://gitlab.com/pascalpepe/bootstrap-project-template/blob/master/LICENSE>`_.
