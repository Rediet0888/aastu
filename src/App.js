import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminStudent from './components/pages/AdminStudent';
import AdminEmployee from './components/pages/AdminEmployee';
import DisciplineTips from './components/pages/DisciplineTips';
import IncidentRegForm from './components/pages/IncidentRegForm';
import ScheduleHearing from './components/pages/ScheduleHearing';
import LoginForm from './components/pages/LoginForm';
import Student from './components/pages/Student';
import Employee from './components/pages/Employee';
import AddSchPreNews from './components/pages/AddSchPreNews';
import RegisterStudEmplo from './components/pages/RegisterStudEmplo';
import RegisterRulesRegu from './components/pages/RegisterRulesRegu';


 
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginForm/>}></Route>
        <Route path='/AdminStudent' element={<AdminStudent/>}></Route>
        <Route path='/AdminEmployee' element={<AdminEmployee/>}></Route>
        <Route path='/Student' element={<Student/>}></Route>

        <Route path='/DisciplineTips' element={<DisciplineTips/>}></Route>
        <Route path='/IncidentRegForm' element={<IncidentRegForm/>}></Route>
        <Route path='/ScheduleHearing' element={<ScheduleHearing/>}></Route>
        <Route path='/AddSchPreNews' element={<AddSchPreNews/>}></Route>
        <Route path='/RegisterStudEmplo' element={<RegisterStudEmplo/>}></Route>
        <Route path='/RegisterRulesRegu' element={<RegisterRulesRegu/>}></Route>
        <Route path='/Employee' element={<Employee/>}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}
 
export default App;
