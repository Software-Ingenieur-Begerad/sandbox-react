//path is used to resolve properly across the OS
const path = require('path');

module.exports = {
    //bundle *.js from this entry point
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
	rules: [
	    {
		//test all *.js using babel-loader
		//test all *.jsx (e.g. React.js) using babel-loader
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: ['babel-loader'],
	    }
	]
    },
    resolve: {
	extensions: ['*', '.js', '.jsx'],
    },
    //create output file to be linked to index.html
    output: {
	path: path.resolve(__dirname, './public'),
	filename: 'bundle.js',
    },
};
