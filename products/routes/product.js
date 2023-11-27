var express = require('express');
var db = require('../models');
var ProductService = require('../services/ProductService');
var productService = new ProductService(db);
var router = express.Router();

/* GET home page. */
router.get('/:id', async function (req, res, next) {
	const { id } = req.params;
    const product = await productService.getById(id);
    res.render('product', { product })
});


module.exports = router;

