import React, { Component } from "react";

export default class PostCommints extends Component {
  render() {
    return (
      
        <div className="post_item">
          <div className="User_info">
            <div className="user_img">
              <img src="./images/user.png" />
            </div>
            <div className="user_name">Ahmad Alaarg</div>
            <span className="userinfo_date">
              <b>Date:</b> 12/12/2019
            </span>
            <span className="userinfo_date">
              <b>time:</b> 12:83 PM
            </span>
          </div>
          <div className="post">
            <h4>Hello Everyone i have problome in this code </h4>
            <textarea
              disabled="true"
              value="<!doctype html>
            <html>
                <body>
                       <p>hello ahmad</p>
                </body>
            </html>"
            ></textarea>
          </div>
        </div>
    );
  }
}
