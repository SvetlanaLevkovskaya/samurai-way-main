import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
  profilePage: ProfilePageType
}

const Profile = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} />
    </div>
  );
};

export default Profile;
