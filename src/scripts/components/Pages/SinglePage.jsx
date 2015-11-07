'use strict';
var React = require('react');

var SinglePage = React.createClass({
	getInitialState: function() {
		// Check our localstorage cache, we may as well load from there if we have it
		if(window.localStorage.getItem(this.constructor.displayName)) {
			return JSON.parse(window.localStorage.getItem(this.constructor.displayName));
		}

		// Nothing in the cache, return empty strings for now
		return {
			page: []
		};
	},

	/**
	 * Sets the localstorage state, and continues on to set the state of the React component
	 * 
	 * @param data
	 */
	setLocalState: function(data) {
		// Store in LocalStorage
		window.localStorage.setItem(this.constructor.displayName, JSON.stringify(data));

		// Store in Component State
		this.setState(data);
	},


	render: function () {
		return (
			<div>
				
			</div>
		);
	}
});

module.exports = SinglePage;
