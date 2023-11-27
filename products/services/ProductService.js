class ProductService {
    constructor(db) {
        this.client = db.sequelize;
        this.Product = db.Product;
    }

    async getAll(){
        return this.Product.findAll({
            where: {}
        })
    }

    async getById(productId) {
        return this.Product.findOne({
            where: {ProductID: productId}
        });
    }
}

module.exports = ProductService;