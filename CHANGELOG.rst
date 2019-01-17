=========
Changelog
=========

Latest
======

Initial dependencies
--------------------

* Node.js: >= 6.0.0
* Bootstrap: 4.2

Initial features
----------------

* Code style checks with **stylelint** that follow Boostrap's own configuration.
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
