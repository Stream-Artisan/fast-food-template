const express = require("express");
const router = express.Router();
const { getUserProfile, updateUserProfile, getUserOrders } = require('../controllers/userController');

router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
router.get('/orders', getUserOrders);

module.exports = router;
