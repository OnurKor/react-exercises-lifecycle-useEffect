import React, {useState} from 'react'
import axios from 'axios'

const Users = () => {

  const [users, setUsers] = useState([])
  const getUsers = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err))
  }
  return (
    <div className="users">
      <h2>Users</h2>
      <button onClick={getUsers}>Get Users</button>
      <div className="users-cards">
        {users.map((user) => (
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}
      </div>
  
    </div>
  )
}

export default Users
