const path = require('path')


module.exports = {
	
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		//将所有打包的url加上dist前缀
		publicPath: 'dist/'
	},
	module: {
		rules: [
					//css-loader只负责加载，不负责解析,style-loader负责将样式添加到DOM中
					//且使用多个loader时，是从右到左的顺序执行
		      {
		              test: /\.css$/,
		              use: [ 'style-loader', 'css-loader' ]
		            },
					{
					        test: /\.(png|jpg|gif|jpeg)$/,
					        use: [
					          {
					            loader: 'url-loader',
					            options: {
												//当加载的图片小于limit大小时，会将图片编译成base64字符串形式
												//当加载的图片大于limit大小时，需要使用file-loader模块进行加载
					              limit: 13000,
											//设置存储位置与命名规范
											name: 'img/[name].[hash:8].[ext]'
					            }
					          }
					        ]
							},
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
							    }
								]
				
	}

}