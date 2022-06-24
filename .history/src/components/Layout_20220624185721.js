import React from 'react'
import styled from "styled-components"
import { useState } from 'react';
import VerticalNavBar from './VerticalNavBar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AdminStudent from './pages/AdminStudent';
import AdminEmployee from './pages/AdminEmployee';
import DisciplineTips from './pages/DisciplineTips';
import IncidentRegForm from './pages/IncidentRegForm';
import ScheduleHearing from './pages/ScheduleHearing';
import LoginForm from '. /pages/LoginForm';
import Student from './pages/Student';

import Profile from './pages/Profile';
import NotificationOfStudents from './pages/NotificationOfStudents';
import NotificationOfEmployees from './pages/NotificationOfEmployees';
import NotificationOfStudentAdmin from './pages/NotificationOfStudentAdmin';
import NotificationOfEmployeeAdmin from './pages/NotificationOfEmployeeAdmin';

import Employee from './pages/Employee';

import AddPrefermentNews from './pages/AddPrefermentNews';
import AddScholarshipNews from './pages/AddScholarshipNews';
import RegisterStudent from './pages/RegisterStudent';
import RegisterEmployee from './pages/RegisterEmployee';

import StudentDashboard from './pages/StudentDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import StudentAdminDashboard from './pages/StudentAdminDashboard';
import EmployeeAdminDashboard from './pages/EmployeeAdminDashboard';
import Complain from './pages/Complain';
import VerticalNavBarStudent from './VerticalNavBarStudent';
// import VerticalNavBar from './VerticalNavBar';
// import Test from './pages/Test';
// import Layout from './Layout';




 


const Grid = styled.div`

display: grid;
grid:
  "nav header" min-content
  "nav main" 1fr / min-content 1fr;
min-height: 100vh;

`;

const GridNav = styled.nav`
grid-area: nav;
`;

const GridHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
`;

const GridMain = styled.main`
  grid-area: main;  
`;

export default function Layout({children, ...rest}) {
  
  return (
    <Grid {...rest}>
        <GridNav><VerticalNavBar/></GridNav>
        <GridHeader><h1>sumeya</h1></GridHeader>
        <GridMain>
        <BrowserRouter>

      
  

      
<Routes>
        <Route path='/AdminStudent' element={<AdminStudent/>}></Route>
        <Route path='/AdminStudent/Dashboard' element={<StudentAdminDashboard/> }></Route>
        <Route path='/AdminStudent/Profile' element={<Profile/> }></Route>
        <Route path='/AdminStudent/Notification' element={<NotificationOfStudentAdmin/> }></Route>
        <Route path='/AdminEmployee/ScheduleHearing' element={<ScheduleHearing/> }></Route>
        <Route path='/AdminStudent/AddScholarshipNews' element={<AddScholarshipNews/> }></Route>
        <Route path='/AdminStudent/RulesandRegulation' element={<Profile/> }></Route>
        </Routes>
        </BrowserRouter>
       
        </GridMain>
    </Grid>
  )
}
