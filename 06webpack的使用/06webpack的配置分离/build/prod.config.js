//生产时依赖

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

const webpackMerge = require('webpack-merge')

const baseConfig = require('./base.config.js')

module.exports = webpackMerge(baseConfig, {
	plugins: [
		new UglifyjsWebpackPlugin();
	]
})

