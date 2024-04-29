import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { signOutUser, user, loading } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const handleSignOut = () => {
    signOutUser();
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="text-pink-600 font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-pink-600 font-bold" to="/all-art-craft">
          All Art & Craft Items
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="text-pink-600 font-bold" to="/add-craft-item">
            Add Craft Item
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink className="text-pink-600 font-bold" to="/my-art-craft-list">
            My Art & Craft List
          </NavLink>
        </li>
      )}
      {!user && (
        <li>
          <NavLink className="text-pink-600 font-bold" to="/register">
            Register
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="w-[calc(100vw-10)] flex justify-center lg:gap-10 gap-2 items-center bg-base-100 z-50 shadow-lg mb-10">
      <div className="">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            <div className="w-10 lg:w-[5%]">
              {user ? (
                <div className="flex gap-2 mb-2 mt-2">
                  <img
                    className="rounded-full cursor-pointer"
                    title={user.displayName}
                    src={user.photoURL}
                    alt=""
                  />
                  <Link className="btn" onClick={handleSignOut}>
                    LogOut
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="btn mb-2 mt-2">
                  Login
                </Link>
              )}
            </div>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-pink-600 font-bold">
          Fabric Fusion
        </Link>
      </div>
      <div className="hidden lg:flex lg:justify-between lg:items-center">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="w-10 lg:w-[5%] hidden lg:inline">
        {user ? (
          <div className="flex gap-2 mb-2 mt-2">
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              className="rounded-full cursor-pointer"
              src={user.photoURL}
              alt=""
            />
            <Tooltip id="my-tooltip" />
            <Link
              className="btn font-bold text-pink-600 mb-2 mt-2"
              onClick={handleSignOut}
            >
              LogOut
            </Link>
          </div>
        ) : (
          <Link to="/login" className="btn font-bold text-pink-600 mb-2 mt-2">
            Login
          </Link>
        )}
      </div>
      <label className="flex w-1/6 justify-end cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          onChange={handleToggle}
          type="checkbox"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
