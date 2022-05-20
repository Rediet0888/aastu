import React from "react";


const options=[
    {
        label: "Preferement",
        value: "preferement",
    },
    {
        label: "Scholarship",
        value: "scholarship",
    },
]


class NewsSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        News: "Scholarship",
        
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      console.log("News Selected!!");
      this.setState({ News: e.target.value });
    }
  
    render() {
      return (
        <div id="selectnews">
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
  
  export default NewsSelect;