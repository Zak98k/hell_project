const bcrypt = require('bcrypt');
const outsalt = require('../services/salt/salt');
const salt = outsalt.bcryptSalt;

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users', [{
                email: 'vasya@gmail.com',
                password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(salt)),
            },
                {
                    email: 'petrov@gmail.com',
                    password: bcrypt.hashSync('23456789', bcrypt.genSaltSync(salt)),
                }],
            {});
    },
    down: (queryInterface, Sequelize) => {
    },
};
