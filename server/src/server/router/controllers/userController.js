import {Users} from "../../models";

const salt = require('./salt/salt');
const jwtToken = require('jsonwebtoken');
const bc = require('bcrypt');
const tokenSalt = salt.tokenSalt;

module.exports.sendToken=(req, res, next)=> {

}

module.exports.authentication = (req, res, next) => {
    Users.findOne({where: {email: req.body.email}})
        .then(user => {
            if (user)
                return bc.compare(req.body.password, user.password);
            else {
                res.status(403).json({
                    success: false,
                    message: 'Incorrect email or password'
                });
            }
        })
        .then(isValid => {
            console.log("isValid" + isValid);
            if (isValid) {
                const token = jwtToken.sign({email: req.body.email}, tokenSalt, {expiresIn: '12h'});
                console.log("token - " + token);

                res.status(202)
                    .json({
                        success: true,
                        message: 'Authorization was successful',
                        token: token
                    });
            } else {
                res.status(401)
                    .json({
                        success: false,
                        message: 'Authorization was not successful'
                    });
            }
        }).catch(err => {
        next(err)
    });

};

module.exports.registration = (req, res, next) => {
    Users.findOne({where: {email: req.body.email}})
        .then(user => {
            if (user)
                res.status(406).json({
                    success: false,
                    message: 'email is already in use'
                });

            else {
                Users.create(user);
                res.status(200).json({
                    success: false,
                    message: 'User created'
                });

            }
        }).catch(err => next(err));
};


module.exports.getAllUsers = (req, res, next) => {
    Users.findAll().then(user => {
        if (user)
            res.send(user);
    })
        .catch(err => next(err));
};

module.exports.getUserByEmail = (req, res, next) => {
    Users.findOne({where: {email: req.params.email}})
        .then(user => {
            if (user) {
                res.send(user)
            } else {
                res.status(403);
                res.json({
                    success: false,
                    message: 'User not found by email'
                });
            }
        });
};
module.exports.createUser = (req, res, next) => {
    Users.create(req.body)
        .then(savedUser => {
            res.send(savedUser);
        }).catch(err => {
        next(err);
    })
};

