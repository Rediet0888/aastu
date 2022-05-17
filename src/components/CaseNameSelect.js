import React from 'react';
import '../App.css';
import { getType } from './dataService';
import {
  Select,
  MenuItem,
} from '@material-ui/core';
import Typography  from '@material-ui/core/Typography';

export default class SimpleSelect extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      data: getType(),
      selected: 'IN'

     };

     // this.handleChange1 = this.handleChange1.bind(this)
  }

  handleChange = event => {
    this.setState({ selected: event.target.value, name: event.target.name});
  };
renderOptions() {
     return this.state.data.map((dt, i) => {
      //console.log(dt);
       return (
           <MenuItem
             label="Select a country"
             value={dt.country_code}
            key={i} name={dt.country_name}>{dt.country_name}</MenuItem>
         
       );
     });
    }
    render() {
      console.log(this.state.selected);
      return (
         <div className="padd60">
           <Typography>CaseName</Typography>
           <Select className="width50" value={this.state.selected} onChange={this.handleChange}>
             {this.renderOptions()}
           </Select>

         </div>
      );
    }
}