import React, { Component } from "react";

export default class AddNewPost extends Component {
  render() {
    return (
      <div className="add_Post_form">
        <form>
          <h4 className="text-center">Create New Post</h4>
          <input type="text" class="form-control" placeholder="PostName" />
          <textarea
            className="form-control"
            placeholder="Enter Your Code Here"
          ></textarea>
          <button className="btn btn-info">Publish Your Question</button>
        </form>
      </div>
    );
  }
}
