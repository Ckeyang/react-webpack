let config = require("./webpack.config.js");
let localConfig = require("./config");
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let compiler = webpack(config);
let server = new WebpackDevServer(compiler, {
    contentBase: localConfig.contentBase
});
server.listen(localConfig.port);