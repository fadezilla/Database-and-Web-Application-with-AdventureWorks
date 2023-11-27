var express = require('express');
var db = require('../models/index');
var ProductService = require('../services/ProductService');
var productService = new ProductService(db);
var router = express.Router();

router.get('/:id', async function (req, res, next) {
	const { id } = req.params;
    try {
        const product = await productService.getById(id);
        if(!product){
            res.status(404).render('productNotFound');
            return;
        }
        res.render('product', { product })
    } catch (err) {
    next(err);
    }
});


module.exports = router;

