import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminStudent from './components/pages/AdminStudent';
import AdminEmployee from './components/pages/AdminEmployee';
import DisciplineTips from './components/pages/DisciplineTips';
import IncidentRegForm from './components/pages/IncidentRegForm';
import ScheduleHearing from './components/pages/ScheduleHearing';
import LoginForm from './components/pages/LoginForm';
import Student from './components/pages/Student';

import Profile from './components/pages/Profile';
import NotificationOfStudents from './components/pages/NotificationOfStudents';
import NotificationOfEmployees from './components/pages/NotificationOfEmployees';
import NotificationOfStudentAdmin from './components/pages/NotificationOfStudentAdmin';
import NotificationOfEmployeeAdmin from './components/pages/NotificationOfEmployeeAdmin';

import Employee from './components/pages/Employee';

import AddPrefermentNews from './components/pages/AddPrefermentNews';
import AddScholarshipNews from './components/pages/AddScholarshipNews';
import RegisterStudent from './components/pages/RegisterStudent';
import RegisterEmployee from './components/pages/RegisterEmployee';

import StudentDashboard from './components/pages/StudentDashboard';
import EmployeeDashboard from './components/pages/EmployeeDashboard';
import StudentAdminDashboard from './components/pages/StudentAdminDashboard';
import EmployeeAdminDashboard from './components/pages/EmployeeAdminDashboard';




 
function App() {

  return (
    <div className="App">
      {/* <p>sdfj</p> 
    <Root role='Student'/>
    <Router>
    <Route path='/' component={ <LoginForm/>}></Route>
        <Route path='/AdminStudent' component={<AdminStudent/>}></Route>
        <VerticalNavBarEmployee role="Student" />
    </Router>*/}
    <BrowserRouter>
  
      <Routes>
        <Route path='/' element={ <LoginForm/>}></Route>
        <Route path='/AdminStudent' element={<AdminStudent/>}></Route>
        <Route path='/AdminStudent/Dashboard' element={<StudentAdminDashboard/> }></Route>
        <Route path='/AdminStudent/Profile' element={<Profile/> }></Route>
        <Route path='/AdminStudent/Notification' element={<NotificationOfStudentAdmin/> }></Route>
        <Route path='/AdminStudent/Add Scholarship News' element={<AddScholarshipNews/> }></Route>
        <Route path='/AdminStudent/Rules and Regulation' element={<RulesAndRegulation/> }></Route>
        <Route path='/AdminEmployee' element={<AdminEmployee/>}></Route>
        <Route path='/AdminEmployee/Dashboard' element={<EmployeeAdminDashboard/>}></Route>
        <Route path='/AdminEmployee/Profile' element={<Profile/>}></Route>
        <Route path='/AdminEmployee/Notification' element={<NotificationOfEmployeeAdmin/> }></Route>
        <Route path='/AdminEmployee/Add Preferment News' element={<AddPrefermentNews/> }></Route>
        <Route path='/AdminEmployee/Rules and Regulation' element={<Profile/> }></Route>
        <Route path='/Student' element={<Student/>}></Route>
        <Route path='/Student/Dashboard' element={<StudentDashboard/> }></Route>
        <Route path='/Student/Profile' element={<Profile/> }></Route>
        <Route path='/Student/NotificationOfStudents' element={<NotificationOfStudents/> }></Route>
        <Route path='/Student/DisciplineTips' element={<DisciplineTips/> }></Route>
        <Route path='/DisciplineTips' element={<DisciplineTips/>}></Route>
        <Route path='/IncidentRegForm' element={<IncidentRegForm/>}></Route>
        <Route path='/ScheduleHearing' element={<ScheduleHearing/>}></Route>
        <Route path='/AddPrefermentNews' element={<AddPrefermentNews/>}></Route>
        <Route path='/AddScholarshipNews' element={<AddScholarshipNews/>}></Route>
        <Route path='/RegisterStudent' element={<RegisterStudent/>}></Route>
        <Route path='/RegisterEmployee' element={<RegisterEmployee/>}></Route>
        <Route path='/Employee' element={<Employee/>}></Route>
        <Route path='/Employee/Dashboard' element={<EmployeeDashboard/>}></Route>
        <Route path='/Employee/Profile' element={<Profile/>}></Route>
        <Route path='/Employee/CreateAccusation' element={<IncidentRegForm/>}></Route>
        <Route path='/Employee/Notification' element={<NotificationOfEmployees/>}></Route>
        <Route path='/Employee/DisciplineTips' element={<DisciplineTips/>}></Route>
           </Routes>
      
      </BrowserRouter>
         
    </div>
  );
}
 
export default App;
