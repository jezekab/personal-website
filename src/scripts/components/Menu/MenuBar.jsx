'use strict';
var React = require('react');

var MenuBar = React.createClass({
	render: function() {
		return (
			<div className="pjt-menu-bar visible-xs">
			    <a className="menu-toggle menu-left" onClick={this.props.onClick}>
			        <div className="patty">
			        </div>
			    </a>
		    	<a href="" className="pjt-logo-xs">
		    		<img src="" alt="" title=""></img>
	    		</a>
	    		<a href="" className="menu-right">Right</a>
    		</div> 
		);
	}
});

module.exports = MenuBar;