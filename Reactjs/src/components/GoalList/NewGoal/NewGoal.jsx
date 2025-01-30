import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewGoal.css';

const NewGoal = ({ onAddGoal }) => {
  const [inputText, setInputText] = useState('');
  const addGoalHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) return;
    
    onAddGoal(inputText);
    setInputText('');

    // const newGoal = {
    //   id: Math.random().toString(),
    //   text: 'My new goal!'
    // };
  };

    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text"
          placeholder="Add a Goal"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />  
          <button type="submit">Add Goal</button>
        </form>
    );
}

// PropTypes validieren die Props, die an das Komponenten-Element übergeben werden.
NewGoal.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

export default NewGoal;