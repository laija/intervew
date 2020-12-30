const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req, response) => {
    response.json({ message: "Hello from the other side!!!"});
});
/*
getASum(x, y): take two integers from the client, add them together, store the result in a database, and return the result to the client.
*/
router.post('/getaSum',(req, response) => {
    sumResult = req.body.integer1 + req.body.integer2;
    const post = new Post({
        integer1: req.body.integer1,
        integer2: req.body.integer2,
        operation: 'sum',
        result: sumResult
    });
    post.save().then(() => {
        response.json({ 'result': sumResult });
    }).catch(err => {
        response.json({ message: err });
    })
});

/*
getAProduct(a): take an integer a from the client, multiply it by 2, store the result in a database, and return the result to the client.
*/
router.post('/getaProduct',(req, response) => {
    productResult = req.body.integer1 * 2;
    const post = new Post({
        integer1: req.body.integer1,
        integer2: 2,
        operation: 'product',
        result: productResult
    });
    post.save().then(() => {
        response.json({ 'result': productResult });
    }).catch(err => {
        response.json({ message: err });
    })
});

/*
getAPower(s): take an integer s from the client, take s to the 2nd power (s^2), store the result in a database, and return the result to the client.
*/
router.post('/getaPower',(req, response) => {
    powertResult = req.body.integer1 * req.body.integer1;
    const post = new Post({
        integer1: req.body.integer1,
        integer2: req.body.integer1,
        operation: 'power',
        result: powertResult
    });
    post.save().then(() => {
        response.json({ 'result': powertResult });
    }).catch(err => {
        response.json({ message: err });
    })
});

module.exports = router;