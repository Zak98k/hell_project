import 'babel-polyfill';
import express from 'express';

const router = express.Router();
const userController = require("./controllers/userController");
const validationMiddleware = require("../utils/validationMiddleware");
const tokenMiddleware = require("../services/tokenMiddleware");

router.get('/token',
    tokenMiddleware.verification,
    userController.sendToken );


router.get('/user',
    userController.getAllUsers);


router.get('/user/:email',
    userController.getUserByEmail);

router.post('/user',
    validationMiddleware.body,
    validationMiddleware.existEmail,
    userController.createUser);

router.post('/authentication',
    userController.authentication);

router.post('/registration',
    validationMiddleware.body,
    validationMiddleware.existEmail,
    userController.registration);

module.exports = router;



