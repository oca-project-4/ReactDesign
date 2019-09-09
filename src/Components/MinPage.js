import React, { Component } from "react";
import PostItem from "./PostItem";
import AddNewPost from "./AddNewPost";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";




export default class MinPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              {/* <AddNewPost/> */}
              <PostItem />
             
              {/* <LogIn /> */}
              {/* <SignUp /> */}
              {/* <UserProfile/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
