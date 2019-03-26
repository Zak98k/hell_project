const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            }
        },
        token:{
            type:DataTypes.STRING,
            allowNull: false,
        }

    });
    Users.associate = function (models) {
        Users.hasOne(models.UsersData, {foreignKey: 'UserId', targetKey: 'id'});
        Users.hasMany(models.UsersCards, {foreignKey: 'UserId', targetKey: 'id'});
        Users.hasMany(models.Project, {foreignKey: 'customerId', targetKey: 'id'});
        Users.hasMany(models.Contest, {foreignKey: 'customerId', targetKey: 'id'});
        Users.hasMany(models.Bid, {foreignKey: 'creativeId', targetKey: 'id'});
    };
    return Users;
};
