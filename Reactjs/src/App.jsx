import { useState } from 'react'
import GoalList from './components/GoalList/GoalList.jsx'
import NewGoal from './components/GoalList/NewGoal/NewGoal.jsx'
import './App.css'

const App = () => {
  const [courseGoals, setCourseGoal] = useState ([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course main topic' },
    { id: 'cg3', text: 'Help other students in the Course q & a section' },
  ]);

  const addNewGoalHandler = (newGoal) => { 
    setCourseGoal(courseGoals.concat(newGoal))
    console.log(courseGoals);
  } 

  return (
    <div>
      <div className='course-goals'>
        <h1>Course goals</h1>
      </div>
      <NewGoal onAddGoal={addNewGoalHandler} /> 
      <GoalList goals={ courseGoals } />
    </div>
  ) 
    
}

export default App
