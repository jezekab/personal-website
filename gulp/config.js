var src 	= "./src";
var dest 	= "./dist";

module.exports = {
	less: {
	    src: src + "/styles/**/*.less",
	    dest: dest + '/styles',
	    settings: {
	    	paths: []
	    }
  	},
  	scripts: {
  		src: [src + "/scripts/**/*.jsx", src + "/scripts/*.jsx"],
  	},
	browserify: {
	    // A separate bundle will be generated for each
	    // bundle config in the list below
	    bundleConfigs: [{
	      entries: src + '/scripts/libs.js',
	      dest: dest + '/scripts',
	      outputName: 'libs.js',
	      // list of modules to make require-able externally
	      require: ['underscore', 'react', 'react/addons', 'reflux', 'react-router', 'wordpress-rest-api'],
	      loadMaps: false,
		  cache: {},
		  packageCache: {},
		  fullPaths: true
	    }, {
	      entries: src + '/scripts/main.jsx',
	      dest: dest + '/scripts',
	      outputName: 'main.js',
	      // list of externally available modules to exclude from the bundle
	      external: ['underscore', 'react', 'react/addons', 'reflux', 'react-router', 'wordpress-rest-api'],
	      loadMaps: false
	    }]
  }
};