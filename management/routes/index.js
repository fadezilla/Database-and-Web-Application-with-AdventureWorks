var express = require('express');
var db = require('../models/index');
var ManagementService = require('../services/managementService');
var managementService = new ManagementService(db);
var router = express.Router();

/* GET home page. */
router.get('/querya', async (req, res, next) => {
	let queryA = await managementService.queryA();
	res.render('querya', { query: queryA });
});

router.get('/queryb', async (req, res, next) => {
	let query = await managementService.queryB();
	res.render('queryb', { query: query });
});

router.get('/queryc', async (req, res, next) => {
	let query = await managementService.queryC();;
	res.render('queryc', { query: query });
});

router.get('/queryd', async (req, res, next) => {
	const results = await managementService.queryD();
	let total = results[0].Total
	let query = [{Total:total}];
	res.render('queryd', { query: query[0] });
});

router.get('/querye', async (req, res, next) => {
	let query = await managementService.queryE();
	res.render('querye', { query: query });
});

router.get('/queryf', async (req, res, next) => {
	let query = await managementService.queryF();
	res.render('queryf', { query: query });
});

router.get('/queryg', async (req, res, next) => {
	let query = await managementService.queryG();
	res.render('queryg', { query: query });
});

router.get('/queryh', async (req, res, next) => {
	let query = await managementService.queryH();
	res.render('queryh', { query: query });
});

router.get('/', async (req, res, next) => {
	let options = [
		{
			name: 'Query A',
			link: 'management/querya',
			description: 'Display the table results for Query A',
		},
		{
			name: 'Query B',
			link: 'management/queryb',
			description: 'Display the table results for Query B',
		},
		{
			name: 'Query C',
			link: 'management/queryc',
			description: 'Display the table results for Query C',
		},
		{
			name: 'Query D',
			link: 'management/queryd',
			description: 'Display the table results for Query D',
		},
		{
			name: 'Query E',
			link: 'management/querye',
			description: 'Display the table results for Query E',
		},
		{
			name: 'Query F',
			link: 'management/queryf',
			description: 'Query result for PowerBI visualization',
		},
		{
			name: 'Query G',
			link: 'management/queryg',
			description: 'Query result for PowerBI visualization',
		},
		{
			name: 'Query H',
			link: 'management/queryh',
			description: 'Query result for PowerBI visualization',
		},
	];

	res.render('index', { options: options });
});

module.exports = router;

