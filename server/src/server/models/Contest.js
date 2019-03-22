const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Contest = sequelize.define('Contest', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key:'id'
            }
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Project',
                key:'id'
            }
        },
        contestName: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        contestType: {
            type: DataTypes.ENUM('Company', 'Product', 'Project'),
            allowNull: false
        },
        contestStyle: {
            type: DataTypes.ENUM('Classic', 'Fun', 'Professional',
                'Descriptive', 'Youthful', 'Any'),
            default: 'Any'
        },
        contestIndustry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contestProduct: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contestTargetClient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerContextFilePath: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        createAt: {
            type: DataTypes.DATE
        }
    });
    Contest.associate = function (models) {
        Contest.belongsTo(models.Project, {foreignKey: 'projectId', targetKey: 'id'});
    };
    Contest.associate = function (models) {
        Contest.hasMany(models.Bid, {foreignKey: 'contestId', targetKey: 'id'});
    };


    return Contest;
};
