import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const handleAddUser = async () => {
    try {
      const response = await axios.post(apiUrl, newUser);
      setSuccessMessage(`User added with ID ${response.data.id}`);
      setNewUser({ name: '', email: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
      {error && <p>Error: {error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default AddUser;
