const express = require('express');
const router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get('/users', function(req, res, next) {
    User.findAll()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.post('/user', function(req, res, next) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment,
    })
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.delete('/user/:id', function(req, res, next) {
    User.destroy({ where: { id: req.params.id }})
        .then(() => res.status(201))
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.put('/user/:id', function(req, res, next){
    User.update({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
        }, { where: { id: req.params.id }})
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

module.exports = router;
