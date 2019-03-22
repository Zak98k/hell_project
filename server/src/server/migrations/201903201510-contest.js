'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Contest', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            projectId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'Project',
                    key: 'id'
                }
            },
            contestName: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            contestType:{
                type:Sequelize.ENUM('Company','Product','Project'),
                allowNull: false
            },
            contestStyle:{
                type:Sequelize.ENUM('Classic','Fun','Professional',
                    'Descriptive','Youthful','Any'),
                default:'Any'
            },
            contestIndustry:{
                type: Sequelize.STRING,
                allowNull: false
            },
            contestProduct:{
                type: Sequelize.STRING,
                allowNull: false
            },
            contestTargetClient:{
                type: Sequelize.STRING,
                allowNull: false
            },
            consumerContextFilePath:{
                type: Sequelize.STRING,
                allowNull: false
            },
            creativeContextFilePath:{
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Contest');
    }
};
