const bcrypt = require('bcrypt');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'UsersData', [{
                userId:1,
                firstName: 'Vasya',
                lastName: 'Vasyn',
                login: 'Vas',
                profilePicture: 'https://cgmag.net/wp-content/uploads/2015/04/0yj1W7i.jpg',
                role: 'customer'
            }, {
                userId:2,
                firstName: 'Petya',
                lastName: 'Petrov',
                login: 'Petr',
                profilePicture: 'http://b.vimeocdn.com/ts/173/794/173794976_640.jpg',
                role: 'creative'
            }],
            {});
    },
    down: (queryInterface, Sequelize) => {
    },
};
