module.exports = (sequelize, DataTypes) => {
    // id will be generated automatically by sequelize
    return sequelize.define('user', { 
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false,
    })
}