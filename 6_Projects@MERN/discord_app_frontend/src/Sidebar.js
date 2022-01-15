import "./Sidebar.css";
import React from "react";
// import { ExpandMoreIcon } from "@mui/icons-material/ExpandMore";
import {
  ExpandMore,
  Add,
  SignalCellularAlt,
  InfoOutlined,
  Call,
  Mic,
  Settings,
  Headset,
} from "@mui/icons-material";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>SHivam Channel</h3>
        <ExpandMore />
      </div>

      <div className="sidebar_channels">
        <div className="channel_header">
          <div className="sidebar_header">
            <ExpandMore />
            <h4>Text Channel</h4>
          </div>

          <Add className="add_channel" />
        </div>
        <div className="sidebar_channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar_voice">
        <SignalCellularAlt className="sidebar_voiceIcon" fontSize="large" />
        <div className="sidebar_voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>

      <div className="sidebar_profile">
        <Avatar src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__480.jpg" />
        <div className="sidebar_profileInfo">
          <h3>Shivam Yadav</h3>
          <p>#thisIsID</p>
        </div>

        <div className="sidebar_profileIncons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
