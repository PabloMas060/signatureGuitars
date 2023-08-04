var express = require('express');
var router = express.Router();

const {detail} = require('../controllers/productsController')


/* /products */
router
.get('/detail/:id', detail)





module.exports = router;
