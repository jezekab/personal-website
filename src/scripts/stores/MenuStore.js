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
