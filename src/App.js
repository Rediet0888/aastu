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
import AddPrefermentNews from './components/pages/AddPrefermentNews';
import AddScholarshipNews from './components/pages/AddScholarshipNews';
import RegisterStudent from './components/pages/RegisterStudent';
import RegisterEmployee from './components/pages/RegisterEmployee';

import VerticalNavBarAdminEmployee from './components/VerticalNavBarAdminEmployee';

 
function App() {
const role = "sdtu"
  return (
    <div className="App">
      <VerticalNavBarAdminEmployee/>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginForm/>}></Route>
        <Route path='/AdminStudent' element={<AdminStudent/>}></Route>
        <Route path='/AdminEmployee' element={<AdminEmployee/>}></Route>
        <Route path='Student' element={<Student/>}/>
        <Route path='Student/profile' element={<DisciplineTips/>}/>
        <Route path='/DisciplineTips' element={<DisciplineTips/>}></Route>
        <Route path='/IncidentRegForm' element={<IncidentRegForm/>}></Route>
        <Route path='/ScheduleHearing' element={<ScheduleHearing/>}></Route>
        <Route path='/AddPrefermentNews' element={<AddPrefermentNews/>}></Route>
        <Route path='/AddScholarshipNews' element={<AddScholarshipNews/>}></Route>
        <Route path='/RegisterStudent' element={<RegisterStudent/>}></Route>
        <Route path='/RegisterEmployee' element={<RegisterEmployee/>}></Route>
        <Route path='/Employee' element={<Employee/>}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}
 
export default App;
