const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const build_dir = path.resolve(__dirname, "build");
const src_dir = path.resolve(__dirname, "src");
const node_dir = path.resolve(__dirname, "node_modules");

module.exports = {
	entry: ["core-js/stable", "regenerator-runtime/runtime" , src_dir + "/index.tsx"],

	output: {
		filename: "bundle.js",
		path: build_dir,
		publicPath: "/",
	},

	resolve: {
		modules: [
			node_dir,
			src_dir,
		],
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Kevin Joseph | Web Developer | San Diego, California USA",
			template: "src/static/index.html",
			minify: false,
		})
	],

	module: {
		rules: [
			{
				include: [
					path.resolve(src_dir, "static/resume"),
				],
				test: /\.(pdf|docx|txt)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "/resumeFiles",
					}
				}
			},
			{
				test: /\.htaccess$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name]",
						outputPath: "/",
					}
				}
			},
			{
				test: /robots\.txt$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "/",
					}
				}
			},
			{
				test: /(browserconfig.xml|site.webmanifest)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "/images/",
					}
				}
			},
			{
				test: /\.jsx?/,
				include: src_dir,
				loader: "babel-loader",
			},
			{
				test: /\.tsx?/,
				include: src_dir,
				loader: "babel-loader",
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "fonts/",
					}
				}
			},
			{
				test: /\.(css|scss|sass)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			},
			{
				test: /\.ico$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/",
						}
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/",
						}
					}
				],
			},
		],
	},

};
