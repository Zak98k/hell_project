const bcrypt = require('bcrypt');
const outsalt = require('../services/salt/salt');
const salt = outsalt;
const jwt = require('jsonwebtoken');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users', [{
                email: 'vasya@gmail.com',
                password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(salt.bcryptSalt)),
                token:jwt.sign({id:1,email:'vasya@gmail.com'},salt.tokenSalt,{expiresIn:'12h'} )
            },
                {
                    email: 'petrov@gmail.com',
                    password: bcrypt.hashSync('23456789', bcrypt.genSaltSync(salt.bcryptSalt)),
                    token:jwt.sign({id:2,email:'petrov@gmail.com'},salt.tokenSalt,{expiresIn:'12h'} )
                }],
            {});
    },
    down: (queryInterface, Sequelize) => {
    },
};
