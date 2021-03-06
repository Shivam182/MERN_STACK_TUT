import "./ChatHeader.css";
import React from "react";
import {
  EditLocationRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
  HelpRounded,
} from "@mui/icons-material";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_hash">#</span>Test Channel Name
        </h3>
      </div>

      <div className="chatHeader_right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatHeader_search">
          <input placeholder="Search" />
          <SearchRounded />
        </div>

        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
}

export default ChatHeader;
