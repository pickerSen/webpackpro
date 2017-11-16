// 一个常见的webpack配置文件
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
	output: {
		path: __dirname + "/public",
		// filename: "bundle-[hash].js"
		filename: "bundle.js"
	},
	devtool: 'source-map',
	devServer: {
		port: 8080,
		contentBase: "./public", //本地服务器所加载的页面所在目录
		historyApiFallback: true, //不跳转	
		// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
		inline: true //实时刷新
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"es2015", "react"
						]
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					}, {
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				]
			}
		]
	}
	// devServer: {
	// 	contentBase: "./public", //本地服务器所加载的页面所在的目录
	// 	historyApiFallback: true, //不跳转
	// 	inline: true,
	// 	hot: true
	// },
	// module: {
	// 	rules: [{
	// 		test: /(\.jsx|\.js)/,
	// 		use: {
	// 			loader: "babel-loader"
	// 		},
	// 		exclude: /node_modules/
	// 	}, {
	// 		test: /\.css$/,
	// 		use: ExtractTextPlugin.extract({
	// 			fallback: "style-loader",
	// 			use: [{
	// 				loader: "css-loader",
	// 				options: {
	// 					modules: true
	// 				}
	// 			}, {
	// 				loader: "postcss-loader"
	// 			}],
	// 		})		
	// 	}]
	// },
	// plugins: [
	// 	new webpack.BannerPlugin('版权所有，翻版必究'),
	// 	new HtmlWebpackPlugin({
	// 		template: __dirname + "/app/index.tmpl.html" //new一个这个插件的实例，并传入相关的参数
	// 	}),
	// 	new webpack.optimize.OccurrenceOrderPlugin(),
	// 	new webpack.optimize.UglifyJsPlugin(),
	// 	new ExtrctTextPlugin("style.css")

	// ],
};