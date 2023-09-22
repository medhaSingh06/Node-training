const express = require('express');
// const asyncRouteHandler = require('../util/asyncRouteHandler');
const {addFriend, getFriend} = require('../controller/friend')
const router = express.Router()

router.post('/add', addFriend)
router.get('/:id', getFriend)


module.exports = router