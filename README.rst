==========================
Quick Start with Bootstrap
==========================

.. image:: https://img.shields.io/badge/bootstrap-4.4-blue.svg
   :alt: Bootstrap 4.4
   :target: https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/package.json

.. image:: https://img.shields.io/badge/license-MIT-green.svg
   :alt: MIT License
   :target: https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/LICENSE

Project template for a quick start with Bootstrap framework.

:Source code: https://gitlab.com/pascalpepe/bootstrap-quickstart
:Issue tracker: https://gitlab.com/pascalpepe/bootstrap-quickstart/issues


Features
========

This repository provides a development environment for creating Bootstrap_
themes.

* Generate CSS files with the same coding style and post-processing as the
  default pre-compiled distribution. This includes:

  - Code style checks with stylelint_ that follow Bootstrap's own
    configuration.
  - SCSS compilation with node-sass_.
  - CSS vendor prefixing with PostCSS_ and Autoprefixer_.
  - CSS optimization with clean-css_.
  - Source map outputs.
  - SCSS files monitoring with nodemon_ so as to automatically regenerate the
    theme when file changes are detected.


Quick usage guide
=================

1. `Install Node.js <https://nodejs.org/en/download/package-manager/>`_.
2. Get the source code by cloning this repository or your own fork::

    git clone https://gitlab.com/<your_username>/bootstrap-quickstart.git

3. Install the dependencies::

    npm install


Scripts
=======

The following scripts are available:

* ``watch:dev`` -
* ``watch`` -
* ``build:dev`` -
* ``build`` -


Changelog
=========

All changes in this repository are logged in the file `CHANGELOG.rst <https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/CHANGELOG.rst>`_.


License
=======

This project is licensed under the `MIT License <https://gitlab.com/pascalpepe/bootstrap-quickstart/blob/master/LICENSE>`_.

This project is built with Bootstrap, which is licensed under the `MIT License <https://github.com/twbs/bootstrap/blob/master/LICENSE>`_.

.. _Autoprefixer: https://github.com/postcss/autoprefixer
.. _Bootstrap: https://getbootstrap.com
.. _clean-css: https://github.com/jakubpawlowicz/clean-css
.. _jQuery: https://jquery.com
.. _node-sass: https://github.com/sass/node-sass
.. _nodemon: https://nodemon.io/
.. _Popper.js: https://popper.js.org
.. _PostCSS: https://postcss.org
.. _stylelint: https://stylelint.io
