// LoginScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [loginData, setLoginData] = useState({
    login_id: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // Store the token in localStorage or state to use it in subsequent API calls
        console.log('Login successful. Token:', token);
        // Redirect to the CustomerListScreen after successful login
        // You can use React Router for navigation
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      alert('An error occurred during login. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="login_id">Email:</label>
        <input type="text" id="login_id" name="login_id" value={loginData.login_id} onChange={handleChange} required /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required /><br />
        <button type="submit">Login</button>
      </form>
      <Link to="/customer-list">View Customer List</Link>
    </div>
  );
};

export default LoginScreen;
