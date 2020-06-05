const path = require('path')


module.exports = {
	
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		//alias: 别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				//exclude:排除
				//include:包含
			      exclude: /(node_modules|bower_components)/,
			      use: {
			        loader: 'babel-loader',
			        options: {
			          presets: ['es2015']
			        }
			      }
			    },
					{
						test: /\.vue$/,
						use: ['vue-loader']
					},
					{
					        test: /\.css$/,
					        use: [ 'style-loader', 'css-loader' ]
					      }
		]
	}

}