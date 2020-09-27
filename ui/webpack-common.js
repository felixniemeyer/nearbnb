const path = require('path') 
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'main.js', 
		path: path.resolve(__dirname, 'dist') 
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader' 
					},
					{
						loader: 'css-loader' 
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader' 
					},
					{
						loader: 'css-loader' 
					},
					{
						loader: 'sass-loader' 
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	], 
	context: __dirname
}
