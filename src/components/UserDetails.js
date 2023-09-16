import React, { useState } from 'react';
import axios from 'axios';

function UserDetails() {
  const [userId, setUserId] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const handleGetById = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${userId}`);
      setUserDetails(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Get User by ID</h2>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleGetById}>Get User</button>
      {error && <p>Error: {error}</p>}
      {userDetails && (
        <div>
          <h3>User Details</h3>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          {/* Display other user details as needed */}
        </div>
      )}
    </div>
  );
}

export default UserDetails;
