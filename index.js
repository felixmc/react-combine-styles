(function () {
	'use strict';

  function combineStyles(conditions, styles) {
    var results = [];

    Object.keys(conditions).map(function(key) {
      if (conditions[key])
        results.push(styles[key]);
    });

    return results;
  };

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = combineStyles;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'react-combine-styles', consistent with npm package name
		define('react-combine-styles', [], function () {
			return combineStyles;
		});
	} else {
		window.combineStyles = combineStyles;
	}
}());
