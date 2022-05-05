import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/pages/Admin';
import DisciplineTips from './components/pages/DisciplineTips';
import LoginForm from './components/pages/LoginForm';
import Student from './components/pages/Student';


 
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
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}
 
export default App;
