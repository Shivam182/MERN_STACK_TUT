import { Avatar } from "@mui/material";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          Jhon Claude{" "}
          <span className="message_timestamp">{new Date().toUTCString()}</span>
        </h4>
      </div>
    
    </div>
  );
}

export default Message;
