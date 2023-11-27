const db = require('../models/index');
const {Op } = require('sequelize');
class CustomerService {
    constructor(db) {
        this.client = db.sequelize;
        this.Customer = db.Customer;
    }

    async getAll(){
        return this.Customer.findAll({
            where: {}
        })
    }

    async getByPrefix(prefix){
        return this.Customer.findAll({
            where: {
                LastName: {
                    [Op.like]: `${prefix}%`,
                },
            },
        });
    }
}

module.exports = CustomerService;