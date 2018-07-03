const path = require("path");

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
         test: /.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['react', 'es2015']
         }
       },
       {
         test: /.scss$/,
         loaders: ["style", "css", "sass"],
         exclude: /node_modules/
       }
      ]
    }
};
