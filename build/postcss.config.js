// Copyright 2011-2019 The Bootstrap Authors
// Copyright 2011-2019 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

'use strict'

module.exports = (ctx) => ({
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {
      cascade: false
    }
  }
})
