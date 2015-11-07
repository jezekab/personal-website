'use strict';
var React = require('react');
var Reflux    = require('reflux');

var MenuList  = require('./MenuList.jsx');
var MenuStore = require('../../stores/MenuStore.js');
var MenuActions      = require('../../actions/MenuActions.js');

var SideMenu = React.createClass({
	mixins: [Reflux.connect(MenuStore,"menuItems")],
	render: function() {
		return (
			<nav className="pjt-menu">
			    <div className="primary-menu">
			        <a href="" className="pjt-logo">
			        	<img src="" alt="" title=""></img>
			        </a>
			        <ul className="list-unstyled" style={this.props.menuHeight}>
			        	<MenuList menuItems={this.state.menuItems} />
			        </ul>
			        <div className="menu-pull visible-sm" onClick={this.props.onClick}>
			            <div className="patty"></div>
			        </div>
			    </div>
			</nav>
		);
	}
});

MenuActions.loadPages();

module.exports = SideMenu;
