import React from 'react'
import VerticalNavBarAdminEmployee from './VerticalNavBarAdminEmployee'
import VerticalNavBar from './VerticalNavBar'
import VerticalNavBarEmployee from './VerticalNavBarEmployee'
import VerticalNavBarStudent from './VerticalNavBarStudent'

const Root = (role) => {

  {
    console.log(role)
    switch (role.role) {
      case 'Student':
        return <VerticalNavBarStudent />
      case 'Student Admin':
        return <VerticalNavBar />
      case 'Employee Admin':
        return <VerticalNavBarAdminEmployee />
      case 'Employee':
        return <VerticalNavBarEmployee />
        default:
          return<p>sdfs</p>
    }
  }
  
}

export default Root;