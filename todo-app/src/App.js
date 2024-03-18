import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './Form';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
 
  return (
    <div className="App">
      <AddTodo/>
      <Todo />
   </div>
  );
}

export default App;