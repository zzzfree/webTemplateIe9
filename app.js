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

app.get('/api/*', function (req, rsp) {
    rsp.status( req.query.status || 200 );
    if( req.query.delay ){
        setTimeout( function(){
            rsp.send( req.query.rsp || ( req.method + ' success.' ) );
        }, req.query.delay );
    }else{
        rsp.send( req.query.rsp || ( req.method + ' success.' ) ); 
    }
})

var server = app.listen(8080, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
})