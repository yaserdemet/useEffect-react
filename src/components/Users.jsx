import { useState } from "react";
import { useEffect } from "react";
const Users = () => {
  const [users, setUsers] = useState();

  const getUsers = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
   .then((data) => setUsers(data));

  }

useEffect(() => {
    getUsers();
  
  }, [])
console.log(users);

  return (
    <div>
      <h1>User List</h1>
      {/* <button onClick={getUsers}>GET USER</button> */}
      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h6></h6>
        </div>
      </div>
    </div>
  );
};

export default Users;
