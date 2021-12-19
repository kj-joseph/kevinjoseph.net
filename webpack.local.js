const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// TODO: Figure out why watch isn't working

module.exports = merge.merge(common, {
    devServer: {
		historyApiFallback: true,
		host: "0.0.0.0",
		open: false,
		port: 8767,
        watchFiles: ["/src/**"],
	},
    watchOptions: {
        ignored: /node_modules/,
    },
});
