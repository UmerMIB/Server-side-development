const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all details of ' + req.params.dishId + 'to you');
    })
    .post((req, res, next) => {
        res.end('This method is not supported');
    })
    .put((req, res, next) => {
        // res.statusCode = 403;
        res.write(` Updating ${req.params.dishId}`);
        res.end('updted ' + req.params.dishId + 'with name' + req.body.name + ' and description' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });

module.exports = dishRouter;