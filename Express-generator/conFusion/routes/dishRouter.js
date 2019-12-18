const express = require('express'),
    bodyParser = require('body-parser'),
    dishRouter = express.Router(),
    mongoose = require('mongoose'),
    Dishes = require('../models/dishes');

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })
    .get((req, res, next) => {
        // res.end('Will send all the dishes to you!');
        Dishes.find({})
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json(dish);
            }, (err) => next(err))
    })
    .post((req, res, next) => {
        // res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
        Dishes.create(req.body)
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json(dish);
            }, (err) => next(err))

    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        // res.end('Deleting all dishes');
        Dishes.remove({})
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json(dish);
            }, (err) => next(err))
    });


dishRouter.route("/:dishId")
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     next();
    // })
    .get((req, res, next) => {
        // res.send('Will send all details of ' + req.params.dishId + ' to you!');
        Dishes.findById(req.params.dishId)
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json(dish);
            }, (err) => next(err))
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('This method is not supported');
    })
    .put((req, res, next) => {
        // res.write(` Updating ${req.params.dishId} \n`);
        // res.end('\n updated ' + req.params.dishId + ' with name ' + req.body.name + ' and description ' + req.body.description);
        Dishes.findByIdAndUpdate(req.params.dishId, {
                $set: req.body
            }, {
                new: true
            })
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json(dish);
            }, (err) => next(err))
    })
    .delete((req, res, next) => {
        // res.end('Deleting all dishes');
        Dishes.findByIdAndRemove(req.params.body)
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json(dish);
            }, (err) => next(err))
    })
module.exports = dishRouter;