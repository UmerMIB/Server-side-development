// const express = require('express');
// const bodyParser = require('body-parser');

// const leaderRouter = express.Router();

// leaderRouter.use(bodyParser.json());

// leaderRouter.route("/")
//     .all((req, res, next) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         next();
//     })
//     .get((req, res, next) => {
//         res.send('Will send all details of  to you!');
//     })
//     .post((req, res, next) => {
//         res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
//     })
//     .put((req, res, next) => {
//         res.end('PUT operation not supported');
//     })
//     .delete((req, res, next) => {
//         res.end('Deleting all leaders');
//     });

// leaderRouter.route("/:leaderId")
//     .all((req, res, next) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         next();
//     })
//     .get((req, res, next) => {
//         res.send('Will send all details of ' + req.params.leaderId + ' to you!');
//     })
//     .post((req, res, next) => {
//         res.end('This method is not supported');
//     })
//     .put((req, res, next) => {
//         res.write(` Updating  ${req.params.leaderId}  \n`);
//         res.end('\n updated ' + req.params.leaderId + '  with name  ' + req.body.name + ' and description  ' + req.body.description);
//     })
//     .delete((req, res, next) => {
//         res.end('Deleting all leaderId');
//     });



// module.exports = leaderRouter;

































const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("Leader :: this is GET method of leader url.");
    })
    .post((req, res, next) => {
        res.end(`Leader :: this is POST method of leader url. Body data is ${req.body}`);
    })
    .put((req, res, next) => {
        res.end("Leader :: this is PUT method of leader url.");
    })
    .delete((req, res, next) => {
        res.end("Leader :: this is DELETE method of leader url.");
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("Leader ID :: this is GET method of leader url.Leader ID is " + req.params.leaderId);
    })
    .post((req, res, next) => {
        res.end(`Leader ID :: this is POST method of leader url. Body data is ${req.body}.Leader ID is ${req.params.leaderId}`);
    })
    .put((req, res, next) => {
        res.end("Leader ID :: this is PUT method of leader url.Leader ID is " + req.params.leaderId);
    })
    .delete((req, res, next) => {
        res.end("Leader ID :: this is DELETE method of leader url.Leader ID is " + req.params.leaderId);
    });

module.exports = leaderRouter;