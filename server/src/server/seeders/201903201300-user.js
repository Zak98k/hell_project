const bcrypt = require('bcrypt');
const outsalt =require('../router/controllers/salt/salt');
const salt=outsalt.bcryptSalt;

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            firstName: 'Vasya',
            lastName: 'Vasyn',
            login: 'Vas',
            email: 'vasya@gmail.com',
            password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(salt)),
            profilePicture: 'https://cgmag.net/wp-content/uploads/2015/04/0yj1W7i.jpg',
            role: 'customer',
            balance: 1000,
            cardNumber: 1111111111111111,
            expiration: 1122,
            secCode: 123,
        },
            {
                firstName: 'Petya',
                lastName: 'Petrov',
                login: 'Petr',
                email: 'petrov@gmail.com',
                password: bcrypt.hashSync('23456789', bcrypt.genSaltSync(salt)),
                profilePicture: 'http://b.vimeocdn.com/ts/173/794/173794976_640.jpg',
                role: 'creative',
                balance: 1000,
                cardNumber: 2222222222222222,
                expiration: 1122,
                secCode: 123,
            }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
