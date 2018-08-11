const path = require('path');
 

//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src/js/main.js');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry:  [ './src/js/app.js' ],
	output: {
	filename: 'js/bundle.js',
	path: path.resolve(__dirname, 'dist'),
	publicPath: '/'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}, 
	module: {
	    rules: [
	      { test: /\.css$/, use: ['style-loader','css-loader','sass-loader'] }
	    ]
	}
};