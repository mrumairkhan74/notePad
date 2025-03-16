const express = require('express');
const { createNode,deleteNode,editNode } = require('../controller/noteController');
const routes = express.Router();

routes.post('/create',createNode);
routes.get('/delete/:id',deleteNode);
routes.post('/edit/:id',editNode);



module.exports = routes;