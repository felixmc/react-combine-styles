'use strict';

// looks like importing this on the backend isn't this easy :(
//var StyleSheet = require('react-native').StyleSheet;
var assert = require('assert');
var combineStyles = require('../');

describe('react-combine-styles', function() {
	it('keeps style keys with truthy values', function() {
    // lame replacement for the real thing, but should do
    var styles = {
      a: { aStyle: 'value' },
      b: { bStyle: 'value' },
      c: { cStyle: 'value' },
      d: { dStyle: 'value' },
      e: { eStyle: 'value' },
      f: { fStyle: 'value' },
    };

    var results = combineStyles({
			a: true,
			b: false,
			c: 0,
			d: null,
			e: undefined,
			f: 1
		}, styles);

    assert.equal(results.length, 2);
    assert.deepEqual(results[0], styles.a);
    assert.deepEqual(results[1], styles.f);
	});
});
