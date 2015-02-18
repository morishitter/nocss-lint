var fs = require('fs')
var nocssLint = require('./')
var postcss = require('postcss')
var test = require('tape')

var css = fs.readFileSync('fixtures.css', 'utf-8').trim()

test('test-1', function (t) {
    var actual = postcss().use(nocssLint()).process(css).css.trim()
    var expected = '.class:hover {\n    font-size: 12px;\n}'
    t.same(actual, expected)
    t.end()
})
