'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UsersCards', {
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    key: 'id',
                    model: 'Users'
                }
            },
            balance: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            cardNumber: {
                type: Sequelize.STRING,
                allowNull: true
            },
            expiration: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            secCode: {
                type: Sequelize.INTEGER,
                allowNull: true,
                validate: {}
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UsersCards');
    }
};
