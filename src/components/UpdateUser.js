import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const [userId, setUserId] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(`${apiUrl}/${userId}`, {
        name: updatedName,
      });
      setSuccessMessage(`User updated with ID ${userId}`);
      setUserId('');
      setUpdatedName('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Name"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
      <button onClick={handleUpdateUser}>Update User</button>
      {error && <p>Error: {error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default UpdateUser;
