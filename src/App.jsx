import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from './pages/TodoApp'
import CompletedTodo from './components/Done';
import Navbar from './components/Navbar';
import './App.css';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/done' element={<CompletedTodo />} />
        </Routes>
      </Router>
    </>

  )
}
export default App
