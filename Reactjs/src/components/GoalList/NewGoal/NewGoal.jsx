import PropTypes from 'prop-types';
import './NewGoal.css';

const NewGoal = ({ onAddGoal }) => {
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: 'My new goal!'
    };
    onAddGoal(newGoal);
  };

    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
          <input type="text" />  
          <button type="submit">Add Goal</button>
        </form>
    );
}

// PropTypes validieren die Props, die an das Komponenten-Element übergeben werden.
NewGoal.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

export default NewGoal;