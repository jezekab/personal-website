/* jslint node: true */
'use strict';
var Reflux = require('reflux');

var MenuActions = Reflux.createActions({
	"loadPages": {asyncResult: true}
});

module.exports = MenuActions;
