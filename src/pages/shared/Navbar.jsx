import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log("Sign out error", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-foods"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : "text-gray-700"
          }
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-food"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : "text-gray-700"
          }
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manage-my-foods"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : "text-gray-700"
          }
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-food-request"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : "text-gray-700"
          }
        >
          My Food Request
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <button className="btn btn-ghost text-xl">
          <img className="w-[30px] lg:w-[50px]" src={logo} alt="" />
          <h3 className="text-base lg:text-3xl rounded-2xl px-1 lg:px-3 text-white bg-orange-400">
            Food Sharing
          </h3>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-12 px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"} // Fallback for users without a photo
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-orange-400"
            />
            <button onClick={handleSignOut} className="btn bg-orange-400 text-white">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="btn bg-orange-400 rounded-2xl text-white">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn border border-orange-400 rounded-2xl text-orange-400">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;