import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/pages/Admin';
import DisciplineTips from './components/pages/DisciplineTips';
import IncidentRegForm from './components/pages/IncidentRegForm';
import LoginForm from './components/pages/LoginForm';
import Student from './components/pages/Student';
import Employee from './components/pages/Employee';


 
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginForm/>}>
     

        </Route>
        <Route path='/Admin' element={<Admin/>}>
      

        </Route>
        <Route path='/Student' element={<Student/>}></Route>

        <Route path='/DisciplineTips' element={<DisciplineTips/>}></Route>
        <Route path='/IncidentRegForm' element={<IncidentRegForm/>}></Route>
        <Route path='/Employee' element={<Employee/>}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}
 
export default App;
