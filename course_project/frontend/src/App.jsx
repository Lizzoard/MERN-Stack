import { Routes, Route, Navigate } from 'react-router';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Users />} />
      <Route path="/places/new" element={<NewPlace />} />
      <Route path='*' element={<Navigate to='/'replace/>} />
    </Routes>
  )
}

export default App;