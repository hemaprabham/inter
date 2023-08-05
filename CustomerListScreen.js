// CustomerListScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

const CustomerListScreen = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch the list of customers and update the state
    const fetchCustomerList = async () => {
      try {
        const response = await fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer YOUR_TOKEN_HERE'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        } else {
          alert('Failed to fetch customer list.');
        }
      } catch (error) {
        alert('An error occurred while fetching customer list.');
        console.error(error);
      }
    };

    fetchCustomerList();
  }, []);

  const handleDeleteCustomer = async (uuid) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        const response = await fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer YOUR_TOKEN_HERE',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ cmd: 'delete', uuid: uuid })
        });

        if (response.ok) {
          alert('Customer deleted successfully.');
          // Fetch the updated customer list after deletion
          // You can call the fetchCustomerList() function again here or use a state management library
        } else {
          alert('Failed to delete customer.');
        }
      } catch (error) {
        alert('An error occurred while deleting the customer.');
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>Customer List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.uuid}>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.street}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>{customer.state}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button onClick={() => handleDeleteCustomer(customer.uuid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-customer">Add New Customer</Link>
    </div>
  );
};

export default CustomerListScreen;
