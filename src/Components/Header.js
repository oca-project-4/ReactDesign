import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div >
        <div className="min_header">
            <div className="container">
                
          <p>
            We want to connect the people who have knowledge to <br/> the people who
            need it, to bring together people with different<br/> perspectives so
            they can understand each other better, and to empower<br/> everyone to
            share their knowledge.
          </p>

          <button className="btn btn-info">Create ANew Account</button>
            </div>
        </div>
      </div>
    );
  }
}
