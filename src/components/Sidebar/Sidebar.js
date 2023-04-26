import React from "react";
import Navbar from "../Navbar/Navbar"
import AddUser from "./AddUser"
import Conversations from "../Chatbox/Conversations"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <AddUser/>
      <Conversations/>
    </div>
  );
};

export default Sidebar;