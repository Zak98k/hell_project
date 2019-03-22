const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Users'
            }
        },
        projectName: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });
    Project.associate = function (models) {
        Project.belongsTo(models.Users, {foreignKey: 'customerId', targetKey: 'id'});
    };
    Project.associate = function (models) {
        Project.hasMany(models.Contest, {foreignKey: 'projectId', targetKey: 'id'});
    };
    return Project;
};
