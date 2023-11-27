module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('Customer', {
        CustomerID: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        FirstName:{
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        LastName:{
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        EmailAddress: Sequelize.DataTypes.STRING,
        Phone: Sequelize.DataTypes.INTEGER,
        CompanyName: Sequelize.DataTypes.STRING,
        MiddleName: Sequelize.DataTypes.STRING,
        ModifiedDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'Customer',
        schema: 'SalesLT',
        timestamps: false,
    });
    return Customer;
}