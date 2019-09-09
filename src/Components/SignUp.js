import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className="Sign_up">
        <form>
          <h4 className="text-center">Create New Account</h4>
          <input type="text" class="form-control" placeholder="Enter Name" />
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
          />
          <input
          type="password"
          class="form-control"
          placeholder="Enter password Agane"
        />

          <button className="btn btn-info">SignUp</button>
        </form>
      </div>
        )
    }
}
