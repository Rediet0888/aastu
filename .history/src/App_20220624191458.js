import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import Complain from './components/pages/Complain';
// import VerticalNavBarStudent from './components/VerticalNavBarStudent';
import VerticalNavBar from './components/VerticalNavBar';
import Test from './components/pages/Test';
import Layout from './components/Layout';




 
function App() {

  return (
    <div className="App" >
      {/* <p>sdfj</p> 
    <Root role='Student'/>
    <Router>
    <Route path='/' component={ <LoginForm/>}></Route>
        <Route path='/AdminStudent' component={<AdminStudent/>}></Route>
        <VerticalNavBarEmployee role="Student" />
    </Router>*/}
    {/* <VerticalNavBar / */}

    <BrowserRouter>

      
  
      

      
      <Routes>
        <Route path='/' element={ <LoginForm/>}></Route>
        <Route path='/AdminStudent' element={ <Layout> <AdminStudent/></Layout>}> </Route>
        <Route path='/AdminStudent/Dashboard' element={ <Layout> <StudentAdminDashboard/> </Layout>}> </Route>
        <Route path='/AdminStudent/Profile' element={ <Layout> <Profile/> </Layout>}> </Route>
        <Route path='/AdminStudent/Notification' element={ <Layout> <NotificationOfStudentAdmin/></Layout>}></Route>
        <Route path='/AdminEmployee/ScheduleHearing' element={ <Layout> <ScheduleHearing/> </Layout>}></Route>
        <Route path='/AdminStudent/AddScholarshipNews' element={ <Layout> <AddScholarshipNews/> </Layout>}></Route>
        <Route path='/AdminStudent/RulesandRegulation' element={ <Layout> <Profile/> </Layout>}></Route>
        <Route path='/AdminEmployee' element={ <Layout> <AdminEmployee/></Layout>}></Route>
        <Route path='/AdminEmployee/Dashboard' element={ <Layout> <EmployeeAdminDashboard/></Layout>}></Route>
        <Route path='/AdminEmployee/Profile' element={ <Layout> <Profile/></Layout>}></Route>
        <Route path='/AdminEmployee/Notification' element={ <Layout> <NotificationOfEmployeeAdmin/> </Layout>}></Route>
        <Route path='/AdminEmployee/ScheduleHearing' element={ <Layout> <ScheduleHearing/> </Layout>}></Route>
       <Route path='/AdminEmployee/AddPrefermentNews' element={ <Layout> <AddPrefermentNews/></Layout>}></Route>
        <Route path='/AdminEmployee/RulesandRegulation' element={ <Layout> <Profile/> </Layout>}></Route>
        <Route path='/Student' element={ <Layout> <Student/></Layout>}></Route>
        <Route path='/Student/Dashboard' element={ <Layout> <StudentDashboard/> </Layout>}></Route>
        <Route path='/Student/Profile' element={ <Layout> <Profile/> </Layout>}></Route>
        <Route path='/Student/Notification' element={ <Layout> <NotificationOfStudents/> </Layout>}></Route>
        <Route path='/Student/Complain' element={ <Layout> <Complain/> </Layout>}></Route>
        <Route path='/Student/DisciplineTips' element={ <Layout> <DisciplineTips/> </Layout>}></Route>
        <Route path='/DisciplineTips' element={ <Layout> <DisciplineTips/></Layout>}></Route>
        <Route path='/IncidentRegForm' element={ <Layout> <IncidentRegForm/></Layout>}></Route>
        <Route path='/ScheduleHearing' element={ <Layout> <ScheduleHearing/></Layout>}></Route>
        <Route path='/VerticalNavBar' element={ <Layout> <VerticalNavBar/></Layout>}></Route>
        <Route path='/Profile' element={ <Layout> <Profile/></Layout>}></Route>
        <Route path='/Complain' element={ <Layout> <Complain/></Layout>}></Route>
        
        <Route path='/t' element={ <Layout> <Test/></Layout>}></Route>
        <Route path='/r' element={ <Layout> <Layout/></Layout>}></Route>

        
        <Route path='/StudentAdminDashboard' element={ <Layout> <StudentAdminDashboard/></Layout>}></Route>
        <Route path='/StudentDashboard' element={ <Layout> <StudentDashboard/></Layout>}></Route>
        <Route path='/EmployeeAdminDashboard' element={ <Layout> <EmployeeAdminDashboard/></Layout>}></Route>
        <Route path='/EmployeeDashboard' element={ <Layout> <EmployeeDashboard/></Layout>}></Route>
        <Route path='/NotificationOfStudentAdmin' element={ <Layout> <NotificationOfStudentAdmin/></Layout>}></Route>
        <Route path='/NotificationOfEmployeeAdmin' element={ <Layout> <NotificationOfEmployeeAdmin/></Layout>}></Route>
        <Route path='/NotificationOfStudents' element={ <Layout> <NotificationOfStudents/></Layout>}></Route>
        <Route path='/NotificationOfEmployees' element={ <Layout> <NotificationOfEmployees/></Layout>}></Route>
        <Route path='/AddPrefermentNews' element={ <Layout> <AddPrefermentNews/></Layout>}></Route>
        <Route path='/AddScholarshipNews' element={ <Layout> <AddScholarshipNews/></Layout>}></Route>
        <Route path='/RegisterStudent' element={ <Layout> <RegisterStudent/></Layout>}></Route>
        <Route path='/RegisterEmployee' element={ <Layout> <RegisterEmployee/></Layout>}></Route>
        <Route path='/Employee' element={ <Layout> <Employee/></Layout>}></Route>
        <Route path='/Employee/Dashboard' element={ <Layout> <EmployeeDashboard/></Layout>}></Route>
        <Route path='/Employee/Profile' element={ <Layout> <Profile/></Layout>}></Route>
        <Route path='/Employee/CreateAccusation' element={ <Layout> <IncidentRegForm/></Layout>}></Route>
        <Route path='/Employee/Complain' element={ <Layout> <Complain/> </Layout>}></Route>
        <Route path='/Employee/Notification' element={ <Layout> <NotificationOfEmployees/></Layout>}></Route>
        <Route path='/Employee/DisciplineTips' element={ <Layout> <DisciplineTips/></Layout>}></Route>
         </Routes>
        {/* </Layout> */}
            
      </BrowserRouter>
         
    </div>
  );
}
 
export default App;
