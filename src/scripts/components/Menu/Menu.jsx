'use strict';
var React = require('react');
var MenuBar   = require('./MenuBar.jsx');
var Blackout	= require('./Blackout.jsx');
var SideMenu  = require('./SideMenu.jsx');

var Menu = React.createClass({
	getInitialState: function() {
		return {
			menuState: 'closed',
			menuHeight: {height: 0},
			menuClass: ''
		};
	},
	openMenu: function() {
	    this.setState({
	    	menuHeight: {height: 380}, 
	    	menuState: 'open', 
	    	menuClass: 'pjt-view menu-open'
	    });
	},
	closeMenu: function() {
	    this.setState({
	    	menuHeight: {height: 0}, 
	    	menuState: 'closed', 
	    	menuClass: 'pjt-view'
	    });
	},
	resetMenu: function() {
// 		$('body').removeClass('menu-open');
// 		$container.removeClass('menu-open');
	},
	handleMenuToggle: function(event) {
		if(this.state.menuState == 'closed'){
			this.openMenu();
			setTimeout(this.handleMenuToggle, 1750);
		} else {
			this.closeMenu();
		}
	},
	render: function() {
		var menuHeight = this.state.menuHeight;
		var menuClass = this.state.menuClass;
		return (
			<div className={menuClass}>
	        	<MenuBar onClick={this.handleMenuToggle} />
	        	<Blackout />
	    		<SideMenu onClick={this.handleMenuToggle} menuHeight={menuHeight} />
			</div>
		);
	}
});

module.exports = Menu;
