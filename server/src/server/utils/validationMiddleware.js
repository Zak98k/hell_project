const yup = require('yup');
import {Users} from '../models';

const AppError = require('./AppError');


const SchemaBody = yup.object().shape({
    email: yup.string().email('Not valid email'),
    password: yup.string()
        .required()
});

module.exports.body = (req, res, next) => {
    SchemaBody.validate(req.body)
        .then(b => {
            if (b)
                next();
            else
                next(new AppError.lackOfUserParameters('Fill in all fields, from validationMiddleware!'));
        }).catch(
        (err) => {
            res.status(403);
            res.send(err.error)
        }
    );
};


module.exports.existEmail = (req, res, next) => {
    Users.count({where: {email: req.body.email}})
        .then(c => {
            if (isNaN(c)) {
                res.status(500);
                res.json({
                    success: false,
                    message: 'The email you specified is already existing, from validationMiddleware',
                });
            } else {
                next();
            }
        }).catch(
        () => next(new AppError.userFoundError("Wrong email, from validationMiddleware"))
    );
};

module.exports.getUserByEmail = (req, res, next) => {
    Users.findOne({where: {email: req.params.email}})
        .then(user => {
            if (user) {
                next();
            } else {
                res.status(403);
                next("User not found, from validationMiddleware");
            }
        })
        .catch(
            () => next(new AppError.userFoundError("Some problems with the user id., from validationMiddleware"))
        );
};



