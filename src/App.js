import React from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
    <div>
      <h1>API CRUD Operations in React</h1>
      <UserList />
      <UserDetails />
      <AddUser />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default App;
