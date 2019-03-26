
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'UsersCards', [{
                userId:1,
                balance: 1000,
                cardNumber: 1111111111111111,
                expiration: 1122,
                secCode: 123
            }, {
                userId:2,
                balance: 1000,
                cardNumber: 2222222222222222,
                expiration: 1122,
                secCode: 123
            }],
            {});
    },
    down: (queryInterface, Sequelize) => {
    },
};
