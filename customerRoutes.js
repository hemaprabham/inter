// customerRoutes.js
const express = require('express');
const router = express.Router();

// Import the customer controller
const customerController = require('../controllers/customerController');

// Import the authentication middleware
const { authenticateToken } = require('../middleware/authMiddleware');

// Define the routes and apply authentication middleware to protect them
router.get('/', authenticateToken, customerController.getAllCustomers);
router.post('/', authenticateToken, customerController.createCustomer);
router.get('/:id', authenticateToken, customerController.getCustomerById);
router.put('/:id', authenticateToken, customerController.updateCustomer);
router.delete('/:id', authenticateToken, customerController.deleteCustomer);

module.exports = router;
