const express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    hostname = 'localhost',
    port = 3000;

const dishRouter = require('./routes/dishRouter');
const dishRouter1 = require('./routes/dishRouter1');
const promoRouter = require('./routes/promoRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(dishRouter1);
app.use(promoRouter);
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});