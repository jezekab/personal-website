(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var React     = require('react');
var Router = require('react-router'); 
var History = Router.HistoryLocation;
var RouteHandler = Router.RouteHandler; 

var Routes = require('./routes.jsx');

Router.run(Routes, History, function(Handler){
  React.render(React.createElement(Handler, null), document.getElementById('grandeur'));
});


},{"./routes.jsx":14,"react":"react","react-router":"react-router"}],2:[function(require,module,exports){
/* jslint node: true */
'use strict';
var Reflux = require('reflux');

var MenuActions = Reflux.createActions({
	"loadPages": {asyncResult: true}
});

module.exports = MenuActions;


},{"reflux":"reflux"}],3:[function(require,module,exports){
/* jslint node: true */
'use strict';
var Reflux = require('reflux');

var PageActions = Reflux.createActions({
	"loadPage": {asyncResult: true}
});

module.exports = PageActions;


},{"reflux":"reflux"}],4:[function(require,module,exports){
'use strict';
var React     = require('react');
var RouteHandler = require('react-router').RouteHandler; 

var Menu   = require('./Menu/Menu.jsx');

var App = React.createClass({displayName: "App",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Menu, null), 
        React.createElement(RouteHandler, null)
      )
      )
  }
});

module.exports = App;


},{"./Menu/Menu.jsx":6,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';
var React = require('react');

var Blackout = React.createClass({displayName: "Blackout",
	render: function() {
		return (
			React.createElement("div", {className: "pjt-blackout visible-xs"})
		);
	}
});

module.exports = Blackout;


},{"react":"react"}],6:[function(require,module,exports){
'use strict';
var React = require('react');
var MenuBar   = require('./MenuBar.jsx');
var Blackout	= require('./Blackout.jsx');
var SideMenu  = require('./SideMenu.jsx');

var Menu = React.createClass({displayName: "Menu",
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
			React.createElement("div", {className: menuClass}, 
	        	React.createElement(MenuBar, {onClick: this.handleMenuToggle}), 
	        	React.createElement(Blackout, null), 
	    		React.createElement(SideMenu, {onClick: this.handleMenuToggle, menuHeight: menuHeight})
			)
		);
	}
});

module.exports = Menu;


},{"./Blackout.jsx":5,"./MenuBar.jsx":7,"./SideMenu.jsx":10,"react":"react"}],7:[function(require,module,exports){
'use strict';
var React = require('react');

var MenuBar = React.createClass({displayName: "MenuBar",
	render: function() {
		return (
			React.createElement("div", {className: "pjt-menu-bar visible-xs"}, 
			    React.createElement("a", {className: "menu-toggle menu-left", onClick: this.props.onClick}, 
			        React.createElement("div", {className: "patty"}
			        )
			    ), 
		    	React.createElement("a", {href: "", className: "pjt-logo-xs"}, 
		    		React.createElement("img", {src: "", alt: "", title: ""})
	    		), 
	    		React.createElement("a", {href: "", className: "menu-right"}, "Right")
    		) 
		);
	}
});

module.exports = MenuBar;

},{"react":"react"}],8:[function(require,module,exports){
'use strict';
var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var MenuEntry =  React.createClass({displayName: "MenuEntry",
    render: function() {
	  	switch(this.props.menu.type) {
			case 'post':
				var link = React.createElement(Link, {to: "post", params: {slug: this.props.menu.slug}}, this.props.menu.title);
				break;
			case 'page':
				var link = React.createElement(Link, {to: "page", params: {slug: this.props.menu.slug}}, this.props.menu.title);
				break;
	  		default:
	  			var link = React.createElement(Link, {to: "page", params: {slug: this.props.menu.slug}}, this.props.menu.title);
	  			break;
	  	} 
        return (
			React.createElement("li", null, link)
        );
    }
});

module.exports = MenuEntry;


},{"react-router":"react-router","react/addons":"react/addons"}],9:[function(require,module,exports){
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

var MenuList = React.createClass({displayName: "MenuList",
    propTypes: {
        menuItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },
    createEntry: function(page) {
        return (
            React.createElement(MenuEntry, {key: page.ID, menu: page})
        );
    },
    render: function() {     
        return (
            React.createElement("div", null,  this.props.menuItems.map(this.createEntry) )
        );
    }
});

module.exports = MenuList;


},{"./MenuEntry.jsx":8,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';
var React = require('react');
var Reflux    = require('reflux');

var MenuList  = require('./MenuList.jsx');
var MenuStore = require('../../stores/MenuStore.js');
var MenuActions      = require('../../actions/MenuActions.js');

var SideMenu = React.createClass({displayName: "SideMenu",
	mixins: [Reflux.connect(MenuStore,"menuItems")],
	render: function() {
		return (
			React.createElement("nav", {className: "pjt-menu"}, 
			    React.createElement("div", {className: "primary-menu"}, 
			        React.createElement("a", {href: "", className: "pjt-logo"}, 
			        	React.createElement("img", {src: "", alt: "", title: ""})
			        ), 
			        React.createElement("ul", {className: "list-unstyled", style: this.props.menuHeight}, 
			        	React.createElement(MenuList, {menuItems: this.state.menuItems})
			        ), 
			        React.createElement("div", {className: "menu-pull visible-sm", onClick: this.props.onClick}, 
			            React.createElement("div", {className: "patty"})
			        )
			    )
			)
		);
	}
});

MenuActions.loadPages();

module.exports = SideMenu;


},{"../../actions/MenuActions.js":2,"../../stores/MenuStore.js":15,"./MenuList.jsx":9,"react":"react","reflux":"reflux"}],11:[function(require,module,exports){
'use strict';
var React = require('react');
var Reflux      = require('reflux');

var SinglePage  = require('./SinglePage.jsx');
var PageStore = require('../../stores/PageStore.js');
var PageActions      = require('../../actions/PageActions.js');

var Page = React.createClass({displayName: "Page",
	mixins: [
			Reflux.connect(PageStore,"page")
		],
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
		// window.localStorage.setItem(this.constructor.displayName, JSON.stringify(data));

		// Store in Component State
		this.setState(data);
	},


	render: function () {
		return (
			React.createElement("div", null
			)
		);
	}
});

module.exports = Page;


},{"../../actions/PageActions.js":3,"../../stores/PageStore.js":16,"./SinglePage.jsx":12,"react":"react","reflux":"reflux"}],12:[function(require,module,exports){
'use strict';
var React = require('react');

var SinglePage = React.createClass({displayName: "SinglePage",
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
			React.createElement("div", null
				
			)
		);
	}
});

module.exports = SinglePage;


},{"react":"react"}],13:[function(require,module,exports){
'use strict';
var React = require('react');

var SinglePost = React.createClass({displayName: "SinglePost",
	// mixins: [Reflux.connect(MenuStore,"menuItems")],
	getInitialState: function() {
		// Check our localstorage cache, we may as well load from there if we have it
		if(window.localStorage.getItem(this.constructor.displayName)) {
			return JSON.parse(window.localStorage.getItem(this.constructor.displayName));
		}

		// Nothing in the cache, return empty strings for now
		return {
			posts: []
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
			React.createElement("div", null
			)
		);
	}
});

module.exports = SinglePost;


},{"react":"react"}],14:[function(require,module,exports){
'use strict';
var React     = require('react');

// // Router
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Route = Router.Route;
// var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
// var NotFoundRoute = Router.NotFoundRoute;
// var RouteHandler = Router.RouteHandler;

// // Components

// var NotFound404 = require('./components/NotFound404.jsx');

// var Posts = require('./components/Posts/Posts.jsx');


// var App = require('./components/App.jsx');
// var Home = require('./components/Home.jsx');

var App = require('./components/App.jsx');

var Page = require('./components/Pages/Page.jsx');

var SinglePost = require('./components/Posts/SinglePost.jsx');

// var App = React.createClass({
//   render: function(){
//     return (
//       <div>
//       	<Menu />
//         <RouteHandler />
//       </div>
//       )
//   }
// });

var Routes = (
  React.createElement(Route, {path: "/", handler: App}, 
    React.createElement(DefaultRoute, {handler: App}), 
    React.createElement(Route, {name: "page", path: ":slug", handler: Page}), 
    React.createElement(Route, {name: "post", path: ":slug", handler: SinglePost})
  )
);

module.exports = Routes;

	// <Route name="grandeur" path="/" handler={App}>
	// 	<DefaultRoute handler={Home} />
	// </Route>
// var el = document.getElementById("grandeur");
// Router.run(routes, function (Handler) {
//     React.render(<Handler/>, el)
// });

		// <Route name="posts">

		// 	<Route handler={Posts} />

		// 	<Route name="post" path="/posts/:slug" handler={SinglePost} />

		// </Route>

		// 

	 //  	<Route name="404" handler={NotFound404} />

	 //  	<NotFoundRoute handler={NotFound404} />

// var el = document.getElementById("grandeur");
// // // var el = document.body;
// Router.run(routes, function (Handler) {
//   ReactDOM.render(<Handler />, el);
// });


},{"./components/App.jsx":4,"./components/Pages/Page.jsx":11,"./components/Posts/SinglePost.jsx":13,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
/* jslint node: true */
/* global WP_API_Settings */
'use strict';
var Reflux      = require('reflux');
var WP          = require( 'wordpress-rest-api' );
var wp          = new WP({endpoint: WP_API_Settings.root});

var MenuActions = require('../actions/MenuActions.js');

var localStorageKey = 'menu-items';

var MenuStore = Reflux.createStore({
    listenables: [MenuActions],
    pages: [],
    onLoadPages: function() {
    	wp.pages()
    		.then(function(data) {
    			MenuActions.loadPages.completed(data);
    		})
    		.catch(function(err) {
    			MenuActions.loadPages.failed(err);
    		});
    },
    onLoadPagesCompleted: function(data) {
       // nested sorting utility function
       var sort = function (prop, arr) {
            prop = prop.split('.');
            var len = prop.length;

            arr.sort(function (a, b) {
                var i = 0;
                while( i < len ) { a = a[prop[i]]; b = b[prop[i]]; i++; }
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return arr;
        };
        // sort pages by menu order
        var pages = sort('menu_order', data);
        localStorage.setItem(localStorageKey, JSON.stringify(pages));
		this.trigger(this.pages = pages);
    },
    onLoadPagesFailed: function(err) {
    	this.trigger(this.pages = []);
    },
    getInitialState: function() {
    	return this.pages;
    }
});

module.exports = MenuStore;


},{"../actions/MenuActions.js":2,"reflux":"reflux","wordpress-rest-api":"wordpress-rest-api"}],16:[function(require,module,exports){
/* jslint node: true */
/* global WP_API_Settings */
'use strict';
var Reflux      = require('reflux');
var Router = require('react-router');
var WP          = require( 'wordpress-rest-api' );
var wp          = new WP({endpoint: WP_API_Settings.root});

var PageActions = require('../actions/PageActions.js');

var localStorageKey = 'page';

var PageStore = Reflux.createStore({
    mixins: [
            Router.State,
            Router.Navigation
        ],
    listenables: [PageActions],
    page: [],
    onLoadPages: function() {
        console.log(this.getParams().slug);
    	// wp.page()
    	// 	.then(function(data) {
    	// 		PageActions.loadPages.completed(data);
    	// 	})
    	// 	.catch(function(err) {
    	// 		PageActions.loadPages.failed(err);
    	// 	});
    },
    onLoadPageCompleted: function(data) {
        var page = data;
        // localStorage.setItem(localStorageKey, JSON.stringify(page));
		this.trigger(this.page = page);
    },
    onLoadPageFailed: function(err) {
    	this.trigger(this.page = []);
    },
    getInitialState: function() {
    	return this.page;
    }
});

module.exports = PageStore;


},{"../actions/PageActions.js":3,"react-router":"react-router","reflux":"reflux","wordpress-rest-api":"wordpress-rest-api"}]},{},[1]);

//# sourceMappingURL=main.js.map