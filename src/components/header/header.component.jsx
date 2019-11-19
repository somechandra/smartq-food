import React from "react";

import Logo from "../logo/logo.component";
import SearchInput from "../search-input/search-input.component";
import UserProfile from "../user-profile/user-profile.component";

import "./header.styles.css";

const HeaderComponent = ({ handleChange, ...props }) => (
  <div className="HeaderContainer">
    <Logo />
    <SearchInput handleChange={handleChange} />
    <UserProfile />
  </div>
);

export default HeaderComponent;
