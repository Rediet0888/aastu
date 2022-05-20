import React from "react";


const options=[
    {
        label: "Employee",
        value: "employee",
    },
    {
        label: "Student",
        value: "student",
    },
]


class RegStudEmpSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        News: "Student",
        
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      console.log("Someone Selected!!");
      this.setState({ News: e.target.value });
    }
  
    render() {
      return (
        <div id="selectstudemplo">
          <div className="select-container">
            <select value={this.state.fruit} onChange={this.handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }
  }
  
  export default RegStudEmpSelect;