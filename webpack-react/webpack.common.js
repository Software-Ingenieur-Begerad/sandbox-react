//generate an HTML5 file including all webpack bundles in the body using script tags
const HtmlWebpackPlugin = require('html-webpack-plugin');
//path is used to resolve properly across the OS
const path = require('path');
module.exports = {
    //bundle *.js from this entry point
    entry: path.resolve(__dirname, 'src/index.js'),
    //create output file to be linked to index.html
    output: {
        filename: '[name].bundle.js',
	path: path.resolve(__dirname, './dist'),
	clean: true,
    },
    module: {
	rules: [
	    {
		//test all *.js using babel-loader
		//test all *.jsx (e.g. React.js) using babel-loader
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		include: path.resolve(__dirname, 'src'),
		use: ['babel-loader'],
	    }
	]
    },
    resolve: {
	extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
    // create an plugin instance so that you can use it several times anywhere
	new HtmlWebpackPlugin({
	    title: 'Production',
	    template: path.resolve(__dirname, "public/index.html")
	}),
    ],
};
