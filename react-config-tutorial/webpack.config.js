var path = require('path');

module.exports = {
    //tell Webpack to generate src maps
    devtool: 'inline-source-map',
    //entry point of app
    entry: './src/index.js',
    //put the output of the bundling process at this place
    output: {
	path: __dirname + '/dist',
	publicPath: '/',
	filename: 'bundle.js'
    },

    devServer: {
	static: {
	    //tell server to serve from this place
	    directory: path.join(__dirname, 'public'),
	},
    },
    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: [
		    //use babel-loader to transpile these file types
		    'babel-loader',
		    //use esling-loader to hook JavaScript linter ESLint into Webpack
		    'eslint-loader'
		]
	    }
	]
    },
};
