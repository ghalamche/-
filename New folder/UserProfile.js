import React from "react";
import UserProfile from "./components/UserProfile";

const userData = {
  username: "arsam",
  profilePicture: "https://example.com/profile.jpg",
  posts: 10,
  followers: 200,
  following: 150,
  bio: "This is my bio",
  isCurrentUser: false, // مقدار true اگر صفحه پروفایل خود کاربر باشد
};

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <UserProfile user={userData} />
    </div>
  );
};

export default ProfilePage;
