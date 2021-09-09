var path = require('path');

module.exports = {
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
	    //use babel-loader to transpile these file types
	    {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: ['babel-loader']
	    }
	]
    },
};
