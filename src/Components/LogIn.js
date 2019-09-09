import React, { Component } from "react";

export default class LogIn extends Component {
  render() {
    return (
      <div className="logIn">
        <form>
          <h4 className="text-center">Log In To Your Account</h4>
          <input type="text" class="form-control" placeholder="Enter Name" />
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
          />

          <button className="btn btn-info">LogIn</button>
        </form>
      </div>
    );
  }
}
