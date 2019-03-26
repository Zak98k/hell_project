
module.exports = (sequelize, DataTypes) => {
    const UsersData = sequelize.define('UsersData', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Users'
            }
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
        }

    });
    UsersData.associate = function (models) {
        UsersData.belongsTo(models.Users, {foreignKey: 'userId', targetKey: 'id'});
    };
    return UsersData;
};
