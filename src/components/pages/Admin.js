import React from 'react';
import VerticalNavBar from '../VerticalNavBar';

 
function Admin() {
 const user = {
   name: "Rediet Solomon",
  id: 1
 }
  return (
    <div>
      Welcome {user.name}!<br /><br />
      <VerticalNavBar />
      
    </div>
  );
}
 
export default Admin;