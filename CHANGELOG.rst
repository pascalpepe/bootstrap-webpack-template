=========
Changelog
=========

Latest
======

* Added jQuery_ and Popper.js_ to the dependencies.
* Upgraded the following development dependencies:

  - autoprefixer_ to 9.6.1
  - clean-css-cli_ to 4.3.0
  - node-sass_ to 4.12.0
  - nodemon_ to 1.19.1
  - postcss-cli_ to 6.1.3
  - stylelint_ to 10.1.0
  - stylelint-config-twbs-bootstrap_ to 0.4.0

* Changed SCSS entry file name from ``theme.scss`` to ``main.scss``.


Version 1.1
===========

2019-02-17

* Upgraded Bootstrap_ to version 4.3.1.
* Upgraded the following development dependencies:

  - autoprefixer_ to 9.4.7
  - nodemon_ to 1.18.10
  - stylelint_ to 9.10.1
  - stylelint-config-twbs-bootstrap_ to 0.3.0

* Moved PostCSS_ config file from the ``build/`` directory to the repository
  root.
* Added new rules in the config of stylelint_ in order to blacklist some
  ``border-radius`` properties (use Bootstrap's mixin instead, see
  `Bootstrap issue #27900 <https://github.com/twbs/bootstrap/pull/27900>`_).


Version 1.0
===========

2019-01-19

Initial dependencies
--------------------

* Node.js_ >= 6
* Bootstrap_ 4.2

Initial features
----------------

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

Initial scripts
---------------

* ``npm run css`` - Check code style, compile, prefix and minify.
* ``npm run css-compile`` - Compile SCSS files.
* ``npm run css-lint`` - Check code style of all SCSS files.
* ``npm run css-minify`` - Minify CSS files.
* ``npm run css-prefix`` - Post-process CSS files.
* ``npm run css-watch`` - Automatically run the ``css`` script when SCSS file
  changes are detected.


.. _Autoprefixer: https://www.npmjs.com/package/autoprefixer
.. _Bootstrap: https://www.npmjs.com/package/bootstrap
.. _clean-css: https://www.npmjs.com/package/clean-css
.. _clean-css-cli: https://www.npmjs.com/package/clean-css-cli
.. _jQuery: https://www.npmjs.com/package/jquery
.. _Node.js: https://nodejs.org
.. _node-sass: https://www.npmjs.com/package/node-sass
.. _nodemon: https://www.npmjs.com/package/nodemon
.. _npm-run-all: https://www.npmjs.com/package/npm-run-all
.. _Popper.js: https://www.npmjs.com/package/popper.js
.. _PostCSS: https://www.npmjs.com/package/postcss
.. _postcss-cli: https://www.npmjs.com/package/postcss-cli
.. _stylelint: https://www.npmjs.com/package/stylelint
.. _stylelint-config-twbs-bootstrap: https://www.npmjs.com/package/stylelint-config-twbs-bootstrap
