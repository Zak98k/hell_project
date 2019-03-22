'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('projectCreative', {
			progectId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'project',
					key: 'id'
				}
			},
			creativeId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'user',
					key: 'id'
				}
			},
			creativeIdea:{
				type:Sequelize.STRING,
				allowNull:false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('projectCreative');
	}
};
