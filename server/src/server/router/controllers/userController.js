import {Users} from "../../models";


const bcrypt = require('bcrypt');
const salt = require('../../services/salt/salt');
const jwtToken = require('jsonwebtoken');
const bc = require('bcrypt');
const tokenSalt = salt.tokenSalt;

module.exports.sendToken = (req, res, next) => {

};


module.exports.authentication = (req, res, next) => {
    Users.findOne({where: {email: req.body.email}})
        .then(user => {
            if (user) {
                bc.compare(req.body.password, user.password)
                    .then(result => {
                        if (result) {
                            const token = jwtToken.sign({id:user.id, email: user.email}, tokenSalt, {expiresIn: '12h'});
                            console.log("bc.compare(req.body.password, user.password - " + JSON.stringify(bc.compare(req.body.password, user.password)));
                            res.status(202)
                                .json({
                                    success: true,
                                    message: 'Authorization was successful',
                                    token: token
                                });
                        } else {
                            console.log("Error response");
                            res.status(403)
                                .json({
                                    success: false,
                                    message: 'Incorrect email or password'
                                })
                        }
                    })
                    .catch(err => next(err));

            } else {
                console.log("Error response");
                res.status(403)
                    .json({
                        success: false,
                        message: 'Incorrect email or password'
                    })
            }
        })
        .catch(err => {
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
        .catch(err => {
            next(err)
        });
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

    Users.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(salt.bcryptSalt))
    })
        .then((user) => {
            //console.log("USER - " + JSON.stringify(user));
            //if (user) {
                const token = jwtToken.sign({email: user.email,id:user.id}, tokenSalt, {expiresIn: '12h'});
                res.status(200);
                res.json({
                    success: true,
                    message: 'User created',
                    token: token
                });
            //}
        })
        .catch(() => {
            res.status(406);
            res.json({
                success: false,
                message: 'Something wrong, user not created, From User controller'
            });

        })
};

