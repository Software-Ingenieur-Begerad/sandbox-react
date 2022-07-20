import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
    <div>
	<NavLink
	    to="/"
	>
	    Home
	</NavLink>
	<NavLink
	    to="/profile"
	>
	    Profile
	</NavLink>
  </div>
);

export default MainNav;
