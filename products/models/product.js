module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        ProductID: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        Color: Sequelize.DataTypes.STRING,
        Size: Sequelize.DataTypes.STRING,
        Weight: Sequelize.DataTypes.DECIMAL,
        ListPrice: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false,
        },
        SellStartDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'Product',
        schema: 'SalesLT',
        timestamps: false,
    });
    return Product;
}