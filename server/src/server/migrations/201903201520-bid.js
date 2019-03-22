'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Bid', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            creativeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            contestId:{
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'Contest',
                    key: 'id'
                }
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                default: true
            },
            isWinner:{
                type: Sequelize.BOOLEAN,
                default: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }


        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Bid');
    }
};
