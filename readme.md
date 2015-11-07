# Attempt at a ReactJS based them for Wordpress

## Implementation

* ReactJS
* RefluxJS
* WP-API (server plugin and node.js client)
* Gulp + Browserify

## Running

Install dependencies with npm.

```
npm install
```

## Building

This project comes with a gulp task to compile less and JS files (using browserify), as well as a watch task to rebundle and update via browser-sync. There is no default task yet, I recommend just demo-ing with 'gulp watch'. 

**You will need to change (or remove) to the proxy definition for browser-sync in gulp/config.js**

To bundle JS and compile LESS:
```
gulp build
```

For watch & browser-sync:
```
gulp watch
```

## TODO

- [ ] Default gulp task
- [ ] Uglify/minify in build task

## Credit

Much of the Gulp task workflow was created by [Dan Tello](https://github.com/greypants/gulp-starter).

[ReactJS Project](http://facebook.github.io/react/)

RefluxJS and it's creator [Mikael Brassman](https://github.com/spoike/refluxjs)

[WP-API](http://wp-api.org/) and [K.Adam White](https://github.com/kadamwhite/wordpress-rest-api) for the node.js client