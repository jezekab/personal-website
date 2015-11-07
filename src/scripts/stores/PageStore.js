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
