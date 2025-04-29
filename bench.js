'use strict'

const { Suite } = require('bench-node')
const parse = require('./')

const paths = {
  '/path/to/node_modules/@scope/name/index.js': { name: '@scope/name', basedir: '/path/to/node_modules/@scope/name', path: 'index.js' },
  '/path/to/node_modules/name/index.js': { name: 'name', basedir: '/path/to/node_modules/name', path: 'index.js' },
  '/path/to/node_modules/name/sub/index.js': { name: 'name', basedir: '/path/to/node_modules/name', path: 'sub/index.js' },
  '/path/to/node_modules/invalid/node_modules/name/index.js': { name: 'name', basedir: '/path/to/node_modules/invalid/node_modules/name', path: 'index.js' },
  '/path/to/node_modules': undefined,
  '/path/to/no/module': undefined,
  '': undefined
}

const suite = new Suite()

for (const path in paths) {
  suite.add(`parse ${path}`, () => {
    parse(path)
  })
}

suite.run()
