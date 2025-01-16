import React from "react";
import { AuthService } from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";

function LogouBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    AuthService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <button
        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default LogouBtn;
