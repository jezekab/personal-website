'use strict';
var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var MenuEntry =  React.createClass({
    render: function() {
	  	switch(this.props.menu.type) {
			case 'post':
				var link = <Link to="post" params={{slug: this.props.menu.slug}}>{this.props.menu.title}</Link>;
				break;
			case 'page':
				var link = <Link to="page" params={{slug: this.props.menu.slug}}>{this.props.menu.title}</Link>;
				break;
	  		default:
	  			var link = <Link to="page" params={{slug: this.props.menu.slug}}>{this.props.menu.title}</Link>;
	  			break;
	  	} 
        return (
			<li>{link}</li>
        );
    }
});

module.exports = MenuEntry;
