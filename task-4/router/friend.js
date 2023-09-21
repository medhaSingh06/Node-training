const express = require('express');
const asyncRouteHandler = require('../util/asyncRouteHandler');
const {addFriend, getFriend} = require('../controller/friend')
const router = express.Router()

router.post('/add', asyncRouteHandler(addFriend))
router.get('/:id', asyncRouteHandler(getFriend))


module.exports = router