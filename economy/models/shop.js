module.exports = (sequelize, DataTypes) => {
    return sequelize.define('currency_shop', {
        user_id: {
            type: DataTypes.STRING,
            unique: true,
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};