// customerController.js
const customers = []; // Replace this with your database implementation

// Get all customers
const getAllCustomers = (req, res) => {
  res.json(customers);
};

// Create a new customer
const createCustomer = (req, res) => {
  const newCustomer = req.body;
  customers.push(newCustomer);
  res.json(newCustomer);
};

// Get customer by ID
const getCustomerById = (req, res) => {
  const id = req.params.id;
  const customer = customers.find((c) => c.id === id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};

// Update a customer
const updateCustomer = (req, res) => {
  const id = req.params.id;
  const updatedCustomer = req.body;
  const index = customers.findIndex((c) => c.id === id);
  if (index !== -1) {
    customers[index] = { ...customers[index], ...updatedCustomer };
    res.json(customers[index]);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};

// Delete a customer
const deleteCustomer = (req, res) => {
  const id = req.params.id;
  const index = customers.findIndex((c) => c.id === id);
  if (index !== -1) {
    const deletedCustomer = customers.splice(index, 1);
    res.json(deletedCustomer[0]);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};

module.exports = {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
