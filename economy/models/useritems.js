module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_item', {
        user_id: {
            type: DataTypes.STRING,
            type: DataTypes.INTEGER,
            unique: true,
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            'default': 0,
        },
    }, {
        timestamps: false,
    });
};