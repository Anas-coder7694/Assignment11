import React, { useState } from 'react';
import axios from 'axios';

function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`${apiUrl}/${userId}`);
      setSuccessMessage(`User with ID ${userId} deleted`);
      setUserId('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDeleteUser}>Delete User</button>
      {error && <p>Error: {error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default DeleteUser;
