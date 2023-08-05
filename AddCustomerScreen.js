import React from 'react';
import { Link } from 'react-router-dom';
const AddCustomerScreen = () => {
  const [customerData, setCustomerData] = useState({
    first_name: '',
    last_name: '',
    street: '',
    address: '',
    city: '',
    state: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN_HERE', // Replace 'YOUR_TOKEN_HERE' with your actual token
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cmd: 'create', ...customerData })
      });

      if (response.ok) {
        alert('Customer created successfully.');
        // Reset the form after successful customer creation
        setCustomerData({
          first_name: '',
          last_name: '',
          street: '',
          address: '',
          city: '',
          state: '',
          email: '',
          phone: ''
        });
      } else {
        alert('Failed to create customer.');
      }
    } catch (error) {
      alert('An error occurred while creating the customer. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Add Customer</h1>
      <form onSubmit={handleAddCustomer}>
        <input type="text" name="first_name" value={customerData.first_name} onChange={handleChange} placeholder="First Name" />
        <input type="text" name="last_name" value={customerData.last_name} onChange={handleChange} placeholder="Last Name" />
        <input type="text" name="street" value={customerData.street} onChange={handleChange} placeholder="Street" />
        <input type="text" name="address" value={customerData.address} onChange={handleChange} placeholder="Address" />
        <input type="text" name="city" value={customerData.city} onChange={handleChange} placeholder="City" />
        <input type="text" name="state" value={customerData.state} onChange={handleChange} placeholder="State" />
        <input type="text" name="email" value={customerData.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="phone" value={customerData.phone} onChange={handleChange} placeholder="Phone" />
        <button type="submit">Add Customer</button>
      </form>
      <Link to="/customer-list">Back to Customer List</Link>
    </div>
  );
};

export default AddCustomerScreen;
