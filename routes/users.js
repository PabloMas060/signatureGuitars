const express = require('express');
const router = express.Router();

const { login, profile, cart, register } = require('../controllers/usersController');


/* GET home page. */
router
.get('/login', login)
.get('/profile', profile)
.get('/cart', cart)
.get('/register', register)





module.exports = router;