/*
*Name: Maiara Almeida
*Student id: 301145511
*/

let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

let Information = require('../models/informations');
let informationController = require('../controllers/information');


//GET Route for the information page: read Operation
router.get('/', informationController.displayInformationList);

//GET Route for add page: Create Operation
router.get('/add',informationController.displayAddPage);

//POST Route for add page: Create Operation
router.post('/add', informationController.processAddPage);

//GET Route for edit page: Update Operation
router.get('/edit/:id',informationController.displayEditPage);
router.post('/edit/:id', informationController.processEditPage);

//GET Route for delete: Delete Operation
router.get('/delete/:id', informationController.processDelete);

module.exports = router;
