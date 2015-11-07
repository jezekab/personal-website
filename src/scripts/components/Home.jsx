'use strict';
var React     = require('react');

// Renders the full application
	// mixins: [Reflux.connect(MenuStore,"pages")],
var App = React.createClass({
    render: function() {
        return (
        	<div>
        		<h1>Test</h1>
        	</div>
        );
    }
});

module.exports = Home;
