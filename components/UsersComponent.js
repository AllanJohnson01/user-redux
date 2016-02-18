/**
 * Created by adjohnso on 2/17/2016.
 */
import React, { PropTypes } from 'react'

const User = ({onUserClick, active, userName}) => {
  "use strict";
  return (
    <li onClick={onUserClick}
        style={{
      textDecoration: active ? 'line-through' : 'none'
    }}
    >
      {userName}
    </li>
  )
};

User.PropTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  onUserClick: PropTypes.func.isRequired
};

const UsersComponent = ({users, onUserClick }) => {
  "use strict";
  return (
    <ul>
      {users.map(user =>
      <User
      key={user.id}
        {...user}
      onClick={() => onUserClick(user.id)}
        />
      )}
    </ul>
  )
};

UsersComponent.PropTypes = {
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired
};


export default UsersComponent