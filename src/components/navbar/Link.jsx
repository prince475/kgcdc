/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Link = ({ link, onClick }) => {
  const { path, name } = link;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "font-montserrat bg-[#7030A0] p-2 px- text-white"
          : "font-montserrat text-[#393939] p-2 px-"
      }
      onClick={onClick}
    >
      {name}
    </NavLink>
  );
};

export default Link;
