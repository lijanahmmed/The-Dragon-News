import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.info("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:block">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-10 rounded-full object-cover"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-5 md:px-10 ">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
