const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const path = require('path')
const app = express()

const config = require('./webpack.config')
const compiler = webpack(config);



app.use(webpackDevMiddleware(compiler,{
	publicPath: config.output.publicPath,
    index:"index.html"
}))

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(8080, () => {
  console.log(`App listening at port 8080`)
})