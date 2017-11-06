// In order to submit absolute path to webpack output.path property we require this node module, it's installed by default
const path = require('path');

// Webpack will try to parse this json just as you would do in you cli as an option
module.exports = {
	// The most important property required for webpack
	// This is the first code that is going to kick off the application, in other words the first file in dependency graph
	entry: './src/index.js',
	// Tell webpack what the output filename is and where to locate it
	output: {
		// All the additional code you see in bundle.js is to allow modules to be run in the browser.
		// All of that code is called webpack runtime or the webpack bootstrap
		filename: 'bundle.js',

		//	we also can specify the build dir
		//	it should be absolute path
		path: path.join(__dirname, 'build')
	},

};