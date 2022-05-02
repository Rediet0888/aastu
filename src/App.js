import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import LoginForm from './components/LoginForm';
import Student from './components/Student';

 
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
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}
 
export default App;
