const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const UsersCards = sequelize.define('UsersCards', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Users'
            }
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cardNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        expiration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        secCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate:{

            }
        }

    });
    UsersCards.associate = function (models) {
        UsersCards.belongsTo(models.Users, {foreignKey: 'userId', targetKey: 'id'});
    };
    return UsersCards;
};
