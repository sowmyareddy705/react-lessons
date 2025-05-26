import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch API</h2>
      <p>
        <input
          type="text"
          placeholder="Search name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </p>
      {filteredUsers.length > 0 ? (
        <ol>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Username:</strong> {user.username} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Phone:</strong> {user.phone} <br />
              <strong>Website:</strong> {user.website} <br />
              <strong>Company:</strong> {user.company.name} <br />
              <strong>Address:</strong>{" "}
              {`${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode}`}
            </li>
          ))}
        </ol>
      ) : (
        <p>No matching user found.</p>
      )}
    </div>
  );
}
