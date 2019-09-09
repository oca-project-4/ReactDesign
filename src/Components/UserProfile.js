import React, { Component } from "react";
import PostSingle from "./PostSingle";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="User_profile text-center">
        <div className="User_prof_img">
          <img src="./images/user.png" />
        </div>
        <h2 class="UserName">Ahmad ALaarg</h2>
        <div className="My_posts">
          <div className="pos_anser">My Posts</div>
          {/* ..........postitem.......... */}
          <div>
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
              <div className="pos_anser">
                <div className="anser_count">30 Commints</div>
                <button className="btn btn-info">Anser</button>
              </div>
            </div>

            {/* <PostSingle /> */}
          </div>
        </div>
      </div>
    );
  }
}
