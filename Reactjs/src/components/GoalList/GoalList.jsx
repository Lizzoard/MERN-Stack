import PropTypes from 'prop-types';

const GoalList = (props) => {
    return (
    <ul className='goal-list'>
        {props.goals.map(goal => (
          <li key={goal.id}>{goal.text}</li>
        ))}
      </ul>
  )
}

GoalList.propTypes = {
  goals: PropTypes.array.isRequired
};
 
export default GoalList;