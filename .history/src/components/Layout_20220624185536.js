import React from 'react'
import styled from "styled-components"
import { useState } from 'react';
import VerticalNavBar from './VerticalNavBar';
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
import VerticalNavBarStudent from './components/VerticalNavBarStudent';
import VerticalNavBar from './components/VerticalNavBar';
import Test from './components/pages/Test';
import Layout from './components/Layout';




 


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
