import { PropTypes } from 'prop-types';

const UserItem = ({ user }) => {
  return (
    <li>
      {user.name} ({user.age} years old)
    </li>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.required,
    age: PropTypes.number,
  }),
};

export default UserItem;