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
	//tell the server to serve from this place
	contentBase: './dist',
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
