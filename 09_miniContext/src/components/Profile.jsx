import React from "react";
import userContexts from "../Context/UserContexts";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(userContexts);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome!&nbsp; {user.username}</div>;
}

export default Profile;
