/* jslint node: true */
'use strict';
var Reflux = require('reflux');

var PageActions = Reflux.createActions({
	"loadPage": {asyncResult: true}
});

module.exports = PageActions;
