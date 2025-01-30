import { PropTypes } from 'prop-types';
import './UserList.css';
import UserItem from './UserItem';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return <p>No users found.</p>;
  } else return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />    
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default UsersList;