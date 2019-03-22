'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			login:{
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			/*customerEmail: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},*/
				password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			profilePicture: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			role:{
				type:Sequelize.ENUM('customer','creative'),
				allowNull: false
			},
			balance:{
				type:Sequelize.INTEGER,
				allowNull:true
			},
			cardNumber:{
				type: Sequelize.STRING,
				allowNull: true
			},
			expiration:{
				type: Sequelize.STRING,
				allowNull: true
			},
			secCode:{
				type: Sequelize.INTEGER,
				allowNull: true
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};
