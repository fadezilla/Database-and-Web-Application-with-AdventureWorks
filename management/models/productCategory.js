module.exports = (sequelize, Sequelize) => {
    const ProductCategory = sequelize.define('ProductCategory', {
        ProductCategoryID: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ParentProductCategoryID: Sequelize.DataTypes.INTEGER,
        Name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'ProductCategory',
        schema: 'SalesLT',
        timestamps: false,
        sync: false,
    });
    return ProductCategory;
}