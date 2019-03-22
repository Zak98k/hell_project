const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const ProjectCreative = sequelize.define('ProjectCreative', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        creativeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'User'
            }
        },
        creativeIdea:{
            type:DataTypes.STRING,
            allowNull:false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        }

    });
    ProjectCreative.associate = function (models) {
        ProjectCreative.belongsTo(models.User, {foreignKey: 'creativeId', targetKey: 'id'});
    };
    return Project;
};
