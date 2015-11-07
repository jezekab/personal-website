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
  <Route path='/' handler={App}>
    <DefaultRoute handler={App} />
    <Route name="page" path=":slug" handler={Page} />
    <Route name="post" path=":slug" handler={SinglePost} />
  </Route>
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
