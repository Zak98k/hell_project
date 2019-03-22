const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        /*customerEmail: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
            }
        },*/
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            }
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        role: {
            type: DataTypes.ENUM('customer', 'creative'),
            allowNull: false
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
            type: DataTypes.STRING,
            allowNull: true
        },
        secCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate:{

            }
        }

    });
    Users.associate = function (models) {
        Users.hasMany(models.Project, {foreignKey: 'customerId', targetKey: 'id'});
        Users.hasMany(models.Contest, {foreignKey: 'customerId', targetKey: 'id'});
        Users.hasMany(models.Bid, {foreignKey: 'creativeId', targetKey: 'id'});
    };
    return Users;
};
