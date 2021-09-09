const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //tell Webpack to generate src maps
    devtool: 'inline-source-map',
    //entry point of app
    entry: './src/index.js',
    //put the output of the bundling process at this place
    output: {
	path: path.resolve(__dirname, 'build'),
	publicPath: '/',
	filename: 'bundle.js'
    },

    devServer: {
	static: {
	    //tell server to serve from this place
	    directory: path.join(__dirname, '/build'),
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
	    },
	    {
		test: /\.less$/,
		use: [
		    'style-loader',
		    'css-loader',
		    'less-loader',
		],
	    },
	]
    },
    plugins: [
	new HtmlWebpackPlugin({
	    template: path.resolve('./index.html'),
	}),
    ]
};
