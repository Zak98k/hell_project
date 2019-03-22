const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define('Bid', {
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
                model: 'Users'
            }
        },
        contestId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Contest'
            }
        },
        creativeIdea: {
            type: DataTypes.STRING,
            allowNull: true
        },
        creativeContextFilePath: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            default: true
        },
        isWinner: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });
    Bid.associate = function (models) {
        Bid.belongsTo(models.Users, {foreignKey: 'creativeId', targetKey: 'id'});
    };
    Bid.associate = function (models) {
        Bid.belongsTo(models.Contest, {foreignKey: 'contestId', targetKey: 'id'});
    };

    return Bid;
};
