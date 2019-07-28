=========
Changelog
=========

Latest
======

* Added **jQuery** and **Popper.js** to the dependencies.
* Upgraded the following development dependencies:

  - **autoprefixer** to 9.6.1
  - **clean-css-cli* to 4.3.0
  - **node-sass** to 4.12.0
  - **nodemon** to 1.19.1
  - **postcss-cli** to 6.1.3
  - **stylelint** to 10.1.0
  - **stylelint-config-twbs-bootstrap** to 0.4.0

----

Version 1.1
===========

2019-02-17

* Upgraded Bootstrap to version 4.3.1.
* Upgraded the following development dependencies:

  - **autoprefixer** to 9.4.7
  - **nodemon** to 1.18.10
  - **stylelint** to 9.10.1
  - **stylelint-config-twbs-bootstrap** to 0.3.0

* Moved PostCSS config file from the ``build/`` directory to the repository
  root.
* Added new rules in the config of **stylelint** in order to blacklist some
  ``border-radius`` properties (use Bootstrap's mixin instead, see
  `Bootstrap issue #27900 <https://github.com/twbs/bootstrap/pull/27900>`_).

----

Version 1.0
===========

2019-01-19

Initial dependencies
--------------------

* Node.js >= 6
* Bootstrap 4.2

Initial features
----------------

* Code style checks with **stylelint** that follow Boostrap's own
  configuration.
* SCSS compilation with **node-sass**.
* Source map outputs.
* CSS post-processing with **postcss** and **autoprefixer** in order to insure
  the same browser compatibility as Bootstrap's default theme.
* Minification of CSS and map files with **cleancss**.
* SCSS files monitoring with **nodemon** so as to automatically regenerate the
  theme if changes happen.

Initial scripts
---------------

* ``npm run css`` - Check code style, compile, prefix and minify.
* ``npm run css-compile`` - Compile SCSS files.
* ``npm run css-lint`` - Check code style of all SCSS files.
* ``npm run css-minify`` - Minify CSS files.
* ``npm run css-prefix`` - Post-process CSS files.
* ``npm run css-watch`` - Watch changes in SCSS files and automatically run the
  ``css`` script if needed.
