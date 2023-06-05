import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { RxCross2 } from "react-icons/rx";
import "./Sidebarmenu.css";
import { useAuth } from "../context/authprovider";
function Sidebarmenu() {
  const auth = useAuth();
  return (
    <Menu width={240} customCrossIcon={<RxCross2 />}>
      <NavLink to={`/`}> Home </NavLink>
      <NavLink to={`/about`}> 關於 </NavLink>
      <NavLink to={`/channels`}> 頻道列表 </NavLink>
      {auth.user && <NavLink to={`/dashboard`}> 儀表板 </NavLink>}
      {!auth.user && <NavLink to={`/login`}> 登入/註冊 </NavLink>}
    </Menu>
  );
}
export default Sidebarmenu;
