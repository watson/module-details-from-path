'use strict'

var path = require('path')

module.exports = function (file) {
  var segments = file.split(path.sep)
  var index = segments.lastIndexOf('node_modules')
  if (index === -1) return
  var name = segments[index + 1]
  if (!name) return
  return {
    name: name,
    basedir: segments.slice(0, index + 2).join(path.sep),
    path: segments.slice(index + 2).join(path.sep)
  }
}
