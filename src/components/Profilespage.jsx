import { Link, NavLink, Outlet } from "react-router-dom";

const Profilespage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Profile Page</h1>
      {profiles.map((profile) => {
        return (
          <NavLink
            to={`/profile/${profile}`}
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            Profile {profile}
          </NavLink>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Profilespage;
