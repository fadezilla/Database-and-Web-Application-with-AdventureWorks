var express = require('express');
var db = require('../models');
var CustomerService = require('../services/customerService');
var customerService = new CustomerService(db);
var router = express.Router();

router.get('/:prefix', async function (req, res, next) {
    const { prefix } = req.params;
    try {
        const customers = await customerService.getByPrefix(prefix);
        if (!customers || customers.length === 0)  {
            res.status(404).render('CustomerNotFound');
            return;
        }
        res.render('customers', { customers });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
