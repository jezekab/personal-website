'use strict';
var React     = require('react');
var MenuEntry  = require('./MenuEntry.jsx');

// Router
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

// Components
// var Menu   = require('./Menu/Menu.jsx');
// var MenuStore = require('../stores/MenuStore.js');

var MenuList = React.createClass({
    propTypes: {
        menuItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },
    createEntry: function(page) {
        return (
            <MenuEntry key={page.ID} menu={page} />
        );
    },
    render: function() {     
        return (
            <div>{ this.props.menuItems.map(this.createEntry) }</div>
        );
    }
});

module.exports = MenuList;
