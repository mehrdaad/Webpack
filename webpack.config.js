// In order to submit absolute path to webpack output.path property we require this node module, it's installed by default
const path = require('path');
const webpack = require('webpack');
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
	module: {
		//In webpack we have a concept where a file takes a source as input and does a type transformation to it and returns a new version of that source. Webpack leverages this concept by allowing any type of asset to be treated as a module. But In the end, it's converted back to javascript so webpack can add it to dependency graph

		rules: [
			// For all cases each rule is going to be an object, it's gonna take 2 important properties that are required, the first one is test: tells webpack if a file matches the pattern, before adding to dependency graph, and perform a certain transform of it.  and that transformation is told by use property.
			{
				test: /\.js$/,
				use: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				] // Just as a function styleLoader(cssLoader(source))
			},
			{
				test:/\.jpg$/,
				use:[
					{
						loader: "url-loader",
						// when webpack comes across let's say css file, css loader will invoke any reference to background url or another image url as a dependency. so images like jpg could be captured with url loader and base64 inlined inside css.
						//	So url loader will embed any url reference into the file. so It would be nice to specify if it is over a certain limit then emit it to output directory
						options: {
							limit: 10000 //10KB will use this loader if size of the url is more that 10kB
						}
					},
				]
			}
		]
	},
	//The difference between plugins and loaders is that plugins do whatever loaders can't. So, if loaders do a bit of transoformation on a file before adding to dependency graph, plugins can do somoething like minifying your code, apply changes to multiple files, create bundles of css
	plugins: [
	// plugins are class so you always create a new instance of it.
		new webpack.optimize.UglifyJsPlugin();
	]

};

/*    This command will watch every file from entry point to the files that are referenced use --watch arg to watch a file for change
	Watching in webpack has the benefit that it wont quit on errors
	It also updates only the files that are changed, so it's really quick

*/
