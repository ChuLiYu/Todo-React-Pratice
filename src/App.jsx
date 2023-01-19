import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from './pages/TodoApp'
import CompletedTodo from './components/Done';
import Navbar from './components/Navbar';
import DragTester from './components/DragTester';
function App() {
  // theme
  // const [mode, setMode] = useState("dark")
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: mode,
  //         background: {
  //           dark: "hsl(230, 17%, 14%)",
  //           light: "hsl(0, 0%, 100%)"
  //         }
  //       }
  //     }),
  //   [mode]
  // );

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/done' element={<CompletedTodo />} />
          <Route path='/DragTester' element={<DragTester />} />
        </Routes>
      </Router>
    </>

  )
}
export default App
