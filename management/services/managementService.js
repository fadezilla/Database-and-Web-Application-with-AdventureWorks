const db = require('../models/index');
class ManagementService {
    constructor(db) {
        this.client = db.sequelize;
    }
    async queryA() {
          const query = `
            SELECT DISTINCT pc.Name
            FROM SalesLT.ProductCategory pc
            LEFT JOIN SalesLT.ProductCategory pc_child
            ON pc.ProductCategoryID = pc_child.ParentProductCategoryID
            WHERE pc_child.ProductCategoryID IS NULL
            ORDER BY pc.Name ASC;
          `;
          
          const [results] = await db.sequelize.query(query);
          return results;
    }

    async queryB() {
      const query = `
      SELECT pc.Name AS Name, AVG(p.ListPrice) AS Price
      FROM SalesLT.ProductCategory pc
      JOIN SalesLT.Product p ON pc.ProductCategoryID = p.ProductCategoryID
      GROUP BY pc.Name
      ORDER BY Price DESC;
      `;

      const [results] = await db.sequelize.query(query);
      return results;
    }

    async queryC() {
      const query = `
      SELECT 
      ParentCategory.Name AS Name, AVG(P.ListPrice) AS Price
      FROM SalesLT.Product P
      JOIN SalesLT.ProductCategory PC ON P.ProductCategoryID = PC.ProductCategoryID
      JOIN SalesLT.ProductCategory ParentCategory ON PC.ParentProductCategoryID = ParentCategory.ProductCategoryID
      GROUP BY ParentCategory.Name
      ORDER BY Price ASC;
      `;

        const [results] = await db.sequelize.query(query);
        return results;
    }

    async queryD() {
      const query = `
      SELECT COUNT(DISTINCT SOH.CustomerID) AS Total
      FROM SalesLT.SalesOrderHeader SOH
      JOIN SalesLT.Customer C ON SOH.CustomerID = C.CustomerID
      WHERE SOH.OrderDate >= '2008-06-01' AND SOH.OrderDate <= '2008-06-15';
      `

      const [results] = await db.sequelize.query(query);
      return results
    }

    async queryE() {
      const query = `
      SELECT CustomerID, FirstName, LastName
      FROM SalesLT.Customer
      WHERE FirstName Like 'a%'
      INTERSECT
      SELECT CustomerID, FirstName, LastName
      FROM SalesLT.Customer
      WHERE LastName like '%e';
      `;

      const [results] = await db.sequelize.query(query);
      return results;
    }

    async queryF() {
      const query = `
      SELECT C.Title, C.FirstName, C.MiddleName, C.LastName, C.CompanyName,
      A.City, A.CountryRegion, A.StateProvince
      FROM SalesLT.Customer AS C
      JOIN SalesLT.CustomerAddress AS CA ON C.CustomerID = CA.CustomerID
      JOIN SalesLT.Address AS A ON CA.AddressID = A.AddressID;
      `

      const [results] = await db.sequelize.query(query);
      return results;
    }

    async queryG() {
      const query = `
      SELECT P.ProductNumber, P.Color, PM.Name
      FROM SalesLT.Product AS P
      JOIN SalesLT.ProductModel AS PM ON P.ProductModelID = PM.ProductModelID;
      `

      const [results] = await db.sequelize.query(query);
      return results;
    }

    async queryH() {
      const query = `
      SELECT P.Name, SOD.UnitPrice, SOD.OrderQty, SOD.LineTotal
      FROM SalesLt.Product AS P
      JOIN SalesLT.SalesOrderDetail AS SOD ON P.ProductID = SOD.ProductID;
      `

      const [results] = await db.sequelize.query(query);
      return results;
    }
}

module.exports = ManagementService;