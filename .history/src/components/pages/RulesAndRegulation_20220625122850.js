import React, { Component } from 'react';
// import Pdf from '../Documents/Document.pdf';
import Rules from "../../files/Rules and Regulation for students.pdf";
class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Rules} target = "_blank">Download Pdf</a>
        </div>
    );

  }
}

export default Download;