import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login';
import Department from './components/Department';
import Employees from "./components/Employees";
import Employeeslist from './components/Employeeslist'

function App() {


  return (
    <>
    <Router>

        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/department' element={<Department/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path="/employeeid" element={<Employeeslist />}></Route>

        </Routes>
 

    </Router>
    </>
  )
}

export default App
